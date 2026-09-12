# Project instructions

## Typography — eyebrow system

Two distinct eyebrow roles. Never style them the same.

**Title eyebrow** — the label directly above a slide title (`.k`)
- Everyday Sans Mono, **8px**, uppercase, letter-spacing `.26em`
- Color: True Blue (`var(--wm-true-blue, #0053e2)`); white on navy/dark slides
- One per slide, sitting above the title

**Module / content header** — labels inside content blocks, e.g. Pressure, Problem, Choice, Outcome (`.cap`)
- Everyday Sans **UI Medium (500)**, **12px**, sentence case, letter-spacing `.01em`
- Color: True Blue `#0053e2`; Sky Blue `#a9ddf7` on navy/dark slides
- Not mono, not uppercase — that distinction still belongs to the title eyebrow. Both
  eyebrow and content header are now True Blue; the difference is mono/uppercase/8px
  vs sentence-case/12px, not color.

These are the defaults for new slides and any new deck in this project.

## Color — reduce navy density

Navy (`#001e60`) is reserved for: dark slide backgrounds, primary body/heading text
color (inherited via the slide's base color), and the *one* deliberately-emphasized
element in a row (paired with a filled `#f5f6f8` background — see below). It is
**not** the default for plain structural dividers — those should be light gray
(`#c3c6cd` for a visible rule, `#dee1e6`/`#eef0f3` for a hairline) so navy stays
meaningful instead of blanket-heavy. When a set of sibling boxes/cards shares a
`border-top`, every sibling must use the *same* color and width unless one is
deliberately singled out — never split a uniform row of boxes across two colors or
weights without a reason.

**Emphasis-card pattern** (the one box in a row that gets called out): accent-blue
border (`#4dbdf5`, 1–2px matching its siblings' width), `background:#f5f6f8`,
`border-radius:12px`. No margin-top offset — its border must align exactly with its
siblings' top edge.

## CSS specificity note

Slide class rules are scoped as `.s .k`, `.s .cap`, etc. because the deck carries a
`.s h1,.s h2,.s p,.s span,.s div{color:inherit}` reset (needed to beat the design system's
explicit heading colors on dark slides). Unscoped `.k` / `.cap` rules lose to that reset
and silently render navy — always keep the `.s ` prefix.

## Layout

- Slide titles (`.t`) and lead paragraphs (`.d`) carry **no max-width** — they span the full
  content measure so they align with the right edge of the content grid below them.
- Slides are full-bleed and square. Never put a `border-radius` on a `<section class="s">`.
- Cards, panels and callouts: 12px radius. Chips, cells, lane blocks, image frames: 8px.
  Chart bars: 4px. Progress/confidence bars: pill.
- Highlighted rows inside hairline-ruled tables and matrix cells stay square.
