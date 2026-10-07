#!/usr/bin/env python3
"""Build one self-contained Action AI live deck (.html) from a slides file.

The slides file holds only <section class="slide ..."> blocks (see examples/week4.deck.html).
Its first line may be a title comment:  <!-- title: Action AI Week 5 -->

Placeholders replaced at build time:
  %%logoDark%% / %%logoLight%%   Action AI logos (assets/images)
  %%img:FILE%%                    an image, looked up next to the slides file first,
                                  then in the skill's assets/images folder.
                                  Raster images are resized (max 1400px) and embedded as WebP.

Usage:
  python3 build_deck.py SLIDES.html OUT.html [--title "Action AI Week 5"] [--fragment]

--fragment  writes the page without <html>/<head>/<body> (for publishing as a claude.ai Artifact).
Default     writes a full HTML document (for Vercel or opening in a browser).
"""
import argparse, base64, io, os, re, sys

SKILL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A = os.path.join(SKILL, 'assets')

def b64(path):
    with open(path, 'rb') as f:
        return base64.b64encode(f.read()).decode()

def image_uri(name, search):
    for d in search:
        p = os.path.join(d, name)
        if os.path.isfile(p):
            break
    else:
        sys.exit('Image not found: %s (looked in %s)' % (name, ', '.join(search)))
    ext = name.lower().rsplit('.', 1)[-1]
    if ext == 'svg':
        return 'data:image/svg+xml;base64,' + b64(p)
    if ext == 'webp' and os.path.getsize(p) < 300_000:
        return 'data:image/webp;base64,' + b64(p)
    try:
        from PIL import Image
    except ImportError:
        mime = {'jpg': 'jpeg', 'jpeg': 'jpeg', 'png': 'png', 'gif': 'gif', 'webp': 'webp'}[ext]
        return 'data:image/%s;base64,%s' % (mime, b64(p))
    im = Image.open(p)
    im = im.convert('RGBA') if im.mode in ('P', 'LA', 'RGBA') else im.convert('RGB')
    im.thumbnail((1400, 1400))
    buf = io.BytesIO()
    im.save(buf, 'WEBP', quality=85, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()

def font_faces():
    faces = [('Unbounded', 'unbounded-latin-800-normal.woff2', 800)]
    faces += [('Figtree', 'figtree-latin-%d-normal.woff2' % w, w) for w in (400, 500, 600, 700, 800)]
    return '\n'.join(
        "@font-face{font-family:'%s';font-style:normal;font-weight:%d;font-display:swap;"
        "src:url(data:font/woff2;base64,%s) format('woff2')}" % (fam, w, b64(os.path.join(A, 'fonts', f)))
        for fam, f, w in faces)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('slides'); ap.add_argument('out')
    ap.add_argument('--title'); ap.add_argument('--fragment', action='store_true')
    a = ap.parse_args()

    src = open(a.slides, encoding='utf-8').read()
    m = re.match(r'\s*<!--\s*title:\s*(.*?)\s*-->', src)
    title = a.title or (m.group(1) if m else 'Action AI Slides')
    if m:
        src = src[m.end():]
    n = len(re.findall(r'<section\s[^>]*class="slide\b', src))
    if not n:
        sys.exit('No <section class="slide ..."> found in ' + a.slides)

    css = open(os.path.join(A, 'engine', 'engine.css'), encoding='utf-8').read()
    js = open(os.path.join(A, 'engine', 'engine.js'), encoding='utf-8').read()
    esc = title.replace('&', '&amp;').replace('"', '&quot;').replace('<', '&lt;')
    body = (
        '<title>%s</title>\n<style>\n%s\n%s</style>\n'
        '<div class="viewport">\n<div class="stage" id="stage" role="region" aria-roledescription="slide deck" aria-label="%s">\n'
        '%s\n'
        '<div class="hud" aria-hidden="true"><span class="count" id="count">01 / %02d</span><span>'
        '<img class="logo-dark" src="%%%%logoDark%%%%" alt=""><img class="logo-light" src="%%%%logoLight%%%%" alt=""></span></div>\n'
        '<button class="fs" id="fs" type="button" aria-label="Full screen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" '
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button>\n'
        '</div>\n</div>\n<script>\n%s</script>\n'
    ) % (esc, font_faces(), css, esc, src.strip(), n, js)

    search = [os.path.dirname(os.path.abspath(a.slides)), os.path.join(A, 'images')]
    body = body.replace('%%logoDark%%', image_uri('logo-dark.webp', search))
    body = body.replace('%%logoLight%%', image_uri('logo-light.webp', search))
    body = re.sub(r'%%img:([^%]+)%%', lambda mm: image_uri(mm.group(1).strip(), search), body)
    left = re.findall(r'%%[^%\s]{1,60}%%', body)
    if left:
        sys.exit('Unknown placeholders: %s' % sorted(set(left)))

    if not a.fragment:
        body = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
                '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
                '<meta name="robots" content="noindex">\n</head>\n<body>\n' + body + '</body>\n</html>\n')
    os.makedirs(os.path.dirname(os.path.abspath(a.out)), exist_ok=True)
    open(a.out, 'w', encoding='utf-8').write(body)
    print('Built %s: %d slides, %d KB%s' % (a.out, n, len(body) // 1024, ' (fragment)' if a.fragment else ''))

if __name__ == '__main__':
    main()
