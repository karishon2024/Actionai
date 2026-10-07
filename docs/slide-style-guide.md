# Action AI Teaching Slides — Style Guide

Based on the "לעבוד עם קלוד" workshop deck by Saar Helek (YouTube `N_7YexFt-ik`, 6.10.2026),
adapted to Action AI colors and English (left-to-right).

> How this was studied: YouTube is blocked in the build container, so the visuals were read from
> YouTube storyboard frames (one frame every 10 seconds) plus the transcript. Layout, color and
> structure are seen directly. Motion is inferred from frame-to-frame changes and from what the
> presenter says ("I made a cute animation here") — check against the real video when needed.

---

## 1. The big idea

- The deck is an **HTML page in the browser** (not PowerPoint). Arrow keys move slides, a page
  counter sits bottom-left (`05 / 44`).
- **One idea per slide.** Huge headline, very little text, lots of empty space.
- The deck switches between **two "worlds"**:
  - **Dark "space" world** — for the cover, chapter openers, big one-line statements, emotional moments, the offer.
  - **Light "paper" world** — for teaching content: problems, steps, comparisons, tutorials.
- Content **builds step by step** on click. The presenter talks over each new piece.

## 2. Colors (Action AI version)

| Role | Original deck | Action AI |
|---|---|---|
| Dark background | deep navy → black, with purple/red glow | `#141414` → `#1B2330` with soft glow of `#344154` |
| Light background | warm cream paper, soft radial glow | warm off-white `#F8F7F3` with a very faint teal glow |
| Headline text (light) | dark navy | Dark Navy `#344154` |
| Headline text (dark) | cream / white | `#FFFFFF` (or `#F8F7F3`) |
| Accent word | blue / green / gold / pink — **changes per chapter** | Teal `#20AD96` (main), Orange `#FF8C00` (second) |
| Body / small text | soft grey | `#344154` at 60–70% opacity |
| Highlight box on screenshots | yellow outline | Orange `#FF8C00` outline |

**Accent per chapter:** each chapter has its own accent color, used for the accent words, eyebrow,
step pills and icons in that chapter. For Action AI rotate between Teal and Orange
(e.g. odd chapters Teal, even chapters Orange). On dark slides the accent can be a gradient
(teal → light teal, or orange → light orange).

## 3. Typography

- **Headline:** Monument (heavy), very big (~72–110px on 1920 width), tight line height (~1.05),
  usually **2 lines**, **ends with a period**. The second line or the key words are in the accent color.
  Example: "One floor up." / "Chat writes. **Agent does.**"
- **Eyebrow** (above headline): small, spaced, muted text with a thin line on both sides:
  `—— CHAPTER 1 · THE PROBLEM ——`
- **Body:** Open Sauce Regular, small (~22–26px), muted grey, max 2 lines. **Bold** 1–3 key words.
- **Takeaway line** at the bottom of a content slide: one short sentence, the key part
  **bold + underlined in accent color**.
- **Tutorial keyword:** English UI words in heavy caps with an arrow, accent color: `CONNECTORS →`, `ADD CONNECTOR`.

## 4. Slide types (the "kit")

1. **Cover** — dark space bg, small round logo badge, pill tag ("● Live workshop"), giant title, second word in accent.
2. **Poll / levels** — dark. Title + 4 numbered rows (number in accent box, icon, label, one-line description). Icons tell a story (walk → bike → car → rocket). Rows appear one by one.
3. **Agenda** — light. Title "What are we doing **tonight?**" + horizontal timeline: 4 circle icons on a thin line, numbered, label under each.
4. **Statement + mockup** — light. Headline on one side, a clean UI mockup (chat window) on the other. Small accent tag in the corner ("Fun fact").
5. **Three problems / three pillars** — light. Headline, then 3 columns: line icon, bold label, 1–2 lines grey text. One label can be in accent color to stand out. Takeaway line below.
6. **Illustration story** — light. A character + app icons + chat bubble, small loop animation (e.g. a person carrying a heavy sack = "you carry it on your back").
7. **Metaphor build** — light. Short lines appear one after the other ("Knock. / Knock. / Knock.") next to a simple illustration (a door), punchline in accent.
8. **Three dark cards** — light bg with 3 dark navy rounded cards (icon + title + short line) = the solution.
9. **Big one-liner** — dark space, only one 2-line sentence, centered. Used as a "reset" between parts.
10. **Chapter divider** — dark, giant faded chapter number as a watermark on the side, pill "Chapter 2", title with second line in accent.
11. **Logo grid** — dark. Grid of app icons in white rounded tiles (Gmail, Drive, Slack, Notion…). Tiles pop in with stagger.
12. **Tutorial step** — light. Pill "Step 2 of 4" in accent, huge short instruction ("Search Google for **"Claude Desktop"**."), screenshot on the other side with an **accent outline box** around exactly what to click.
13. **Orbit** — dark. Center logo in a glowing circle, app icons orbiting around it, big claim on the other side.
14. **Price** — dark. Old price struck through, new price huge in accent, small terms line under.
15. **"What is it worth to you?"** — light. Icon + audience name ("Teachers") + 2 short benefit lines with small colored tags.

## 5. Background details

- **Dark space:** tiny stars (white dots, 1–2px, low opacity) that slowly twinkle; 2–3 large blurry
  glow circles (teal / navy / a bit of orange) that drift very slowly; sometimes a curved
  glowing horizon at the bottom (like a planet edge).
- **Light paper:** off-white with a soft radial light spot; a thin hand-drawn curved line as decoration; very soft shadows on cards and screenshots.
- Rounded corners everywhere (cards 16–24px, pills fully round).
- Small **slide counter** bottom-left, tiny and muted.

## 6. Animation rules

- **Build on click:** each slide starts with the headline only (or headline + eyebrow); every click reveals the next item.
- **Entrance:** fade + move up 20–30px, 400–600ms, ease-out. Lists use a stagger of ~80–120ms.
- **Accent words:** can appear a moment after the rest of the headline, or get an underline that "draws" from left to right.
- **Transitions between slides:** soft crossfade (~400ms). Dark ↔ light switches feel like a scene change.
- **Ambient motion (dark slides):** star twinkle + slow glow drift, always subtle, never distracting.
- **Highlight boxes** on screenshots: outline draws in, then a soft pulse.
- **Small story loops:** simple character/icon loops (bounce, sway, float) — playful but short.
- Respect `prefers-reduced-motion` (turn motion off).

## 7. Writing rules

- Short. Spoken language. Talk to the student ("you").
- Headline = the idea in ≤ 8 words, ends with a period.
- Body ≤ 2 lines. If it needs more, it needs another slide.
- Use a metaphor per chapter (floors of a building, a sleeping assistant, carrying a sack).
- Mix: problem → metaphor → solution → hands-on step.

## 8. English / LTR adaptation

- Mirror all layouts: text goes **left**, visuals go **right** (original is RTL: text right, visual left).
- Arrows point right (`→`).
- Number circles and timelines run left → right.
