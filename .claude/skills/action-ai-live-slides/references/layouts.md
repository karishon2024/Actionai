# Slide kit

Every layout below exists in `examples/week4.deck.html` (slide numbers in brackets). Copy that
slide's markup and change the words. The canvas is 1920×1080; the text limits come from the
Unbounded headline font, which is wide (about 0.72 × font size per character).

## Contents
1. Building blocks (classes, motion, icons)
2. Layouts: cover, agenda, toolbox, tool split, exercise, chapter divider, mockup tool split,
   option cards, versus, checklist with photo
3. Ideas for new layouts

---

## 1. Building blocks

**Slide shell**

```html
<section class="slide dark" data-accent="teal" aria-label="Short name of the slide">
  <div class="inner"> ... </div>
</section>
```

- `dark` or `light` picks the world. Dark slides get stars and glows automatically.
- `data-accent="teal"` or `"orange"`: the chapter color.
- Extra class on the section switches a layout's CSS: `cover`, `agenda`, `tools`, `divider`,
  `invite`, `vs`, `choose`. Content slides with text + visual use `<div class="split">` inside `.inner`.
- `aria-label`: the slide's idea in a few words (screen readers announce it).

**Headline sizes**

| Class | Size | Use | Max characters per line |
|---|---|---|---|
| `h-xl` | 132px | Cover only | ~12 |
| `h-lg` | 112px | Chapter divider | ~13 (left column) |
| `h-md` | 78px | Most slides | ~14 in a split column, ~28 full width |
| `h-sm` | 68px | Longer headline or two-part title | ~16 in a split column, ~32 full width |

Two lines, `<br>` where the line should break, accent words in `<span class="acc">`.

**Other text pieces**: `.eyebrow` (spaced caps with lines, e.g. "Chapter 1 · New tools"),
`.pill` (rounded label, e.g. "Exercise 1 · Napkin"; add `<span class="dot"></span>` for a pulsing dot),
`.lead` (30px sub line, add `muted`), `.takeaway` with `<u>` for the accent underline,
`.chip` (small rounded tag), `.kw` (big caps UI keyword with arrow, e.g. "GENERATE VISUAL →").

**Motion**

| Markup | What happens |
|---|---|
| `class="a" style="--d:.4s"` | Fades up when the slide opens, after the delay |
| `a pop` / `a fade` / `a left` / `a right` / `a ghost` | Pop with bounce / plain fade / from left / from right / slow slide-in for the giant chapter number |
| `data-step="1"`, `"2"`... | Hidden until that click. Clicks reveal steps in order, then go to the next slide |
| `<path class="draw" pathLength="1" style="--d:.5s;--dur:1.5s">` | Line draws itself (doodles, highlight boxes, connectors) |
| `<span class="sel" style="--d:.9s">text</span>` | Highlighter sweep over text, like a selection |
| `<span class="typed" data-type="text" data-type-delay="900"></span>` | Typewriter text with a blinking caret |
| `.hl-pulse` on an element | Soft glow pulse (for the button the student should click) |

Rules that keep it feeling calm: the headline arrives in the first 0.4s; mockups start around
0.35s and play their story over 2–4s; never put a `data-step` and an `a` class on the same element.

**Icons**: `<i class="ic" data-ic="NAME"></i>`. Names: spark, slides, link, check, clock, text,
image, share, zap, chev, palette, cake, mic, party, users, target, wallet, brain, film, shield.
Add more in `engine.js` (`ICONS`, 24×24 viewBox, stroke paths).

**Decoration**: `<div class="horizon"></div>` (glowing planet edge at the bottom of a dark slide,
cover only), `<svg class="doodle">` with a `draw` path (a thin hand-drawn curve on light slides,
one per slide at most).

---

## 2. Layouts

### Cover — dark, centered [1]
Badge circle ("AI"), pill ("Week 4 · Live class"), `h-xl` title with each word in its own
`<span class="w a">` for a word-by-word rise, a lead line with the tools or topics, logo + "WE TEACH
THE FUTURE" at the bottom, and a small hint "Click or press →". Keep the title under ~24 characters.

### Agenda timeline — light, centered [2]
Eyebrow, `h-md` question headline ("What are we doing **today?**"), 3–5 nodes on a line that draws
from left to right. Each node: icon circle with a number badge, a 1–3 word label, a 2–4 word sub line.
Below: one chip (time, breaks). The numbers are real because the agenda is a sequence.

### Toolbox — dark, centered [3]
Eyebrow, `h-md` headline, 3–4 white tiles with logos that pop in and float, name and 3–5 word line
under each. One `data-step` line at the bottom. For more than 4 tools use two rows of 4 max.

### Tool split — light [4]
Left (880px column): eyebrow with chapter, tagline (logo + name + chip like "Free (ish)"), `h-md`
headline, 3 icon rows that appear on click (bold lead words + one short sentence, ≤ 2 lines each),
takeaway on the last click. Right: an animated mockup window (`.win`) that shows what the tool does.

### Exercise — light [5]
Left: pill "Exercise N · Tool", `h-md` headline ("Make your **first Napkin.**"), a `.kw` keyword
for the main button, 3 numbered step cards on click (each one line, ~45 characters). Right: mockup
with the click target highlighted by a drawn orange box (`svg.hl` inside the same parent as the
button) and a result panel appearing after.

### Chapter divider — dark [6]
Giant outlined chapter number on the right (`<div class="ghost-num a ghost" data-n="2">2</div>`),
pill "Chapter N" with a dot, `h-lg` two-line title, one lead line, 3–5 chips that pop in.

### Mockup tool split — light [7]
Same left column as the tool split (use `h-sm` if the headline is longer). Right: a story mockup.
Week 4's Gamma slide types a prompt, then fans out three cards and builds the front card block
by block, then dashed callout tags label the parts ("1 card = 1 slide"). Back cards use grey bars,
not words, so no text peeks out.

### Option cards — light [8]
Pill, `h-md` headline, lead line, then 3 cards (icon tile, `h3` name, an example prompt in quotes,
~60 characters). A dark navy "Then share it with the class" bar appears on click. Good for
"pick one" exercises.

### Versus — dark [9]
Eyebrow, `h-sm` two-line centered headline, two glass panels sliding in from left and right with a
logo/head and 4 check items each (~38 characters per item), a pulsing VS badge in the middle, and a
takeaway on click. Works for any A-vs-B (free vs paid, ChatGPT vs Claude, before vs after).

### Checklist with photo — light [10]
Left: eyebrow, `h-md` headline, lead, Ran's pointing photo (`%%img:ran-pointing.webp%%`, class
`ran`) at the bottom-left, pointing right at the list. Right: 4–5 question cards that appear on
click (numbered icon, 1–2 word title, a question under 40 characters) and a takeaway line. Keep the
photo at `left:230px` or more so the page counter stays visible.

---

## 3. Ideas for new layouts (from the reference deck, not yet built)

Build these from the same pieces when the content needs them, and add them to the example deck
once they work:

- **Big one-liner** — dark, a single centered two-line `h-lg` statement ("Chat writes. **Agent does.**").
  The cheapest way to reset attention between parts.
- **Three problems / three pillars** — light, headline + 3 columns (line icon, bold label, 2 lines),
  one label in accent color, takeaway below.
- **Metaphor build** — light, short lines appearing one per click ("Knock. / Knock. / Knock.") next to
  a simple drawn object, punchline in accent.
- **Logo grid** — dark, 12–24 app icons in white rounded tiles popping in with a stagger
  ("These already connect to it.").
- **Orbit** — dark, a glowing center logo with app icons circling it, claim on the left.
- **Price** — dark, old price struck through, new price huge in accent, terms line below.
- **Per-audience value** — light, "What is it worth **to you?**" with an icon, audience name and two
  benefit lines with small tags.
