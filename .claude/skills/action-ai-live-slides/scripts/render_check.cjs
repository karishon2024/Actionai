// One visual check of a built deck: screenshots every slide with all click-steps shown.
// Usage: node render_check.cjs DECK.html OUTDIR
// Prints page errors and the page width at phone size (should equal 400).
const path = require('path'), fs = require('fs'), { execSync } = require('child_process');
function loadPlaywright() {
  try { return require('playwright'); } catch (e) {}
  const g = execSync('npm root -g').toString().trim();
  return require(path.join(g, 'playwright'));
}
(async () => {
  const [deck, out] = process.argv.slice(2);
  if (!deck || !out) { console.error('Usage: node render_check.cjs DECK.html OUTDIR'); process.exit(1); }
  fs.mkdirSync(out, { recursive: true });
  let file = path.resolve(deck);
  const html = fs.readFileSync(file, 'utf8');
  if (!/^\s*<!doctype/i.test(html)) {           // fragment build: wrap it like the Artifact host does
    file = path.join(out, '_preview.html');
    fs.writeFileSync(file, '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>' + html + '</body></html>');
  }
  const { chromium } = loadPlaywright();

  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1952, height: 1112 } });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto('file://' + file);
  const n = await p.evaluate(() => document.querySelectorAll('.slide').length);
  for (let i = 0; i < n; i++) {
    // wait for the longest entrance delay on this slide, plus the animation itself
    const wait = await p.evaluate(() => {
      const s = document.querySelector('.slide.active'); let m = 0;
      s.querySelectorAll('[style*="--d"]').forEach(e => { const v = parseFloat(getComputedStyle(e).getPropertyValue('--d')) || 0; m = Math.max(m, v); });
      return Math.min(8000, m * 1000 + 1400);
    });
    await p.waitForTimeout(wait);
    for (let k = 0; k < 12; k++) {
      const hidden = await p.evaluate(() => [...document.querySelector('.slide.active').querySelectorAll('[data-step]')].filter(e => !e.classList.contains('shown')).length);
      if (!hidden) break;
      await p.keyboard.press('ArrowRight'); await p.waitForTimeout(120);
    }
    await p.waitForTimeout(800);
    await p.screenshot({ path: path.join(out, 's' + String(i + 1).padStart(2, '0') + '.png'), clip: { x: 16, y: 16, width: 1920, height: 1080 } });
    await p.keyboard.press('ArrowRight');
  }
  await p.setViewportSize({ width: 400, height: 800 }); await p.waitForTimeout(300);
  const w = await p.evaluate(() => document.documentElement.scrollWidth);
  console.log(JSON.stringify({ slides: n, phoneScrollWidth: w, errors: errs }));
  await b.close();
})();
