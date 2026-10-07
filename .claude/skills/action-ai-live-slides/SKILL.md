---
name: action-ai-live-slides
description: Build Action AI teaching decks in the animated "live" web style (dark night-sky slides + light paper slides, one idea per slide, content that builds on each click), as one self-contained HTML file, then publish it as a claude.ai Artifact and/or host it on Vercel (actionai-slides.vercel.app). Use this skill whenever Ran asks for class slides, a lesson or week deck (e.g. "Week 5"), workshop slides, a webinar deck, or wants to turn a PowerPoint, outline, notes or topic into slides "in the new style", "like the Week 4 deck", "like Saar's", "animated", "HTML slides", or "slides I can host on Vercel" - even if he just says "make slides for lesson X". Prefer this over the PPTX course-slides skill unless Ran explicitly asks for a PowerPoint/.pptx file.
---

# Action AI live slides

Decks in this style feel like a live show: big short headlines, one idea per slide, and content
that appears step by step while Ran talks. It is based on Saar Helek's "לעבוד עם קלוד" workshop
deck, adapted to Action AI colors and English. The Week 4 deck
(https://actionai-slides.vercel.app/week4) is the reference result; its source is
`examples/week4.deck.html`.

Everything lives in this skill folder:

| Path | What it is |
|---|---|
| `assets/engine/engine.css` | All styles: the two worlds, type scale, every layout, all motion |
| `assets/engine/engine.js` | Navigation, click-steps, star sky, icons, typewriter, scaling |
| `assets/fonts/` | Unbounded 800 (stands in for Monument) and Figtree (stands in for Open Sauce), embedded at build |
| `assets/images/` | Action AI logos, Ran's pointing photo, tool logos (Napkin, Gamma, Copilot, Gemini, Google) |
| `assets/site/` | `index.html` start page and `vercel.json` for the hosted slides site |
| `examples/week4.deck.html` | A full 10-slide deck using every main layout. Copy from it. |
| `scripts/build_deck.py` | Slides file → one self-contained `.html` (fonts and images embedded) |
| `scripts/render_check.cjs` | Screenshots every slide with all steps shown, reports errors |
| `scripts/contact_sheet.py` | Joins screenshots two per image for a quick look |
| `references/layouts.md` | The slide kit: every layout, when to use it, text limits, motion |
| `references/style-guide.md` | Colors, type, motion and writing rules in full |
| `references/hosting.md` | Publishing: Artifact and Vercel, step by step, with known errors |

## Workflow

### 1. Get the content

- **From a PowerPoint:** `markitdown deck.pptx` for the text. For images, unzip the .pptx and look at
  `ppt/media/` (map slides to images through `ppt/slides/_rels/slideN.xml.rels`). Make a quick visual
  grid if it helps (the pptx skill has `scripts/thumbnail.py`).
- **From a topic or notes:** write real teaching content. Never invent statistics, prices or quotes.
  If a fact is missing, leave a clear `[placeholder]` and list it in your reply.
- Ran's students are adults learning practical AI tools. Plain words, short sentences, "you".

### 2. Plan the deck before writing HTML

Decide, and tell Ran in two or three lines:

- **Length.** If he gives a number, use it. A long source deck gets cut down to the slides that tell
  one clear story (for Week 4: cover, agenda, toolbox, tool slide, exercise, chapter divider, tool slide,
  exercise, comparison, review checklist).
- **Chapters and accent colors.** Each chapter has one accent: Teal or Orange, alternating. All
  accent words, pills and icons in that chapter use it (`data-accent="teal|orange"`).
- **Rhythm.** Alternate the dark world (cover, chapter dividers, big statements, comparisons) with the
  light world (teaching, steps, exercises). Avoid more than two light slides in a row without a
  dark one.
- **A layout per slide** from `references/layouts.md`. Vary them. Use an exercise slide for every
  hands-on moment; Ran's classes are practical.
- **Which text appears on click** (`data-step`). Lists, steps and the takeaway line build on click;
  headlines and mockups animate in by themselves.

### 3. Write the slides file

Create `deckname.deck.html` containing only the `<section class="slide ...">` blocks, with a title
comment on the first line: `<!-- title: Action AI Week 5 -->`.

- **Start from the closest slide in `examples/week4.deck.html` and change the content.** The markup
  and classes there are tested; inventing new structure is where layouts break.
- Read `references/layouts.md` for the text limits of each layout. Unbounded is a wide font: a
  headline that is too long wraps into three lines and pushes things off the slide.
- Headlines: about 2 to 8 words, two lines, ending with a period, the key words wrapped in
  `<span class="acc">`.
- Images: put files next to the slides file and use `%%img:file.png%%`; shared ones
  (logos, Ran's photo, tool logos) come from `assets/images/` by name, for example
  `%%img:ran-pointing.webp%%`. Remove backgrounds from photos of Ran so they sit on the slide.
- Icons: `<i class="ic" data-ic="spark"></i>`. The available names are listed in layouts.md; add new
  24×24 stroke icons to the `ICONS` object in `engine.js` if you need one.
- Mockups (fake app windows) are the most memorable part of the style. Build them from the `win`
  pieces in the example and animate them so the tool "does its thing" (text gets selected, a diagram
  builds, a prompt types itself, a highlight box draws around the button to click).

### 4. Build

```bash
python3 scripts/build_deck.py deckname.deck.html out/week5.html            # full page: Vercel / browser
python3 scripts/build_deck.py deckname.deck.html out/week5-artifact.html --fragment   # for an Artifact
```

The build embeds fonts and images, so the file works offline and in places where Google Fonts are
blocked. Expect about 300–500 KB.

### 5. Check once

```bash
node scripts/render_check.cjs out/week5.html shots/
python3 scripts/contact_sheet.py shots/
```

Look at every `pair*.jpg` once. The things that went wrong before, so check for them first:

- a headline wrapped to three lines, or text running past its box or the slide edge
- a highlight box not centered on the thing it points at (put the `<svg class="hl">` inside the same
  parent as the button, positioned relative to it)
- text peeking out from behind stacked cards (use grey bars on back cards, not words)
- a photo or picture covering the page counter (bottom-left) or the logo (bottom-right)
- big empty gaps (move a chip or takeaway up with a margin instead of `margin-top:auto`)
- the check also prints `errors` (should be empty) and `phoneScrollWidth` (should be 400)

Fix what you see in one pass, rebuild, and move on. Do not loop on screenshots.

### 6. Publish

Read `references/hosting.md`. In short:

- **Artifact:** publish the `--fragment` build with the Artifact tool (icon `slides`) so Ran gets a
  private link to look at first.
- **Vercel:** copy the full build into the repo's `slides/` folder (for example `slides/week5.html`),
  add a link to `slides/index.html`, commit and push, then deploy with the Vercel connector from the
  Git source **without passing `teamId`** (passing it returns 403). The link is
  `https://actionai-slides.vercel.app/week5`. Each deploy is a one-time copy, so redeploy after changes.

Ask Ran before the first Vercel deploy of a new deck if he hasn't asked for hosting, because the link
is public to anyone who has it.

## Presenting (tell Ran when you hand over a deck)

→ / Space / click: next step or slide. ← : back. **F**: full screen. Home / End: first / last slide.
`#slide-6` at the end of the link opens slide 6. Swipe works on phones and tablets.

## Style in one breath

Night sky (`#0E141C` with twinkling stars and slow teal/navy glows) or paper (`#F4F7F6` with a soft
accent glow). Unbounded 800 headlines, Figtree body. Accent words in Teal `#20AD96` / Orange
`#FF8C00` on dark slides; on light slides use the darker ink versions (`#12806E`, `#C2660A`) so text
stays readable. Eyebrow label with thin lines above the headline. Small takeaway line at the bottom
with an accent underline. Page counter bottom-left, logo bottom-right. Full rules:
`references/style-guide.md`.
