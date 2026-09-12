# Project instructions

## Typography — eyebrow system

Two distinct eyebrow roles. Never style them the same.

**Title eyebrow** — the label directly above a slide title (`.k`)
- Everyday Sans Mono, **8px**, uppercase, letter-spacing `.26em`
- Color: True Blue (`var(--wm-true-blue, #0053e2)`); white on navy/dark slides
- One per slide, sitting above the title

**Module / content header** — labels inside content blocks, e.g. Pressure, Problem, Choice, Outcome (`.cap`)
- Everyday Sans **UI Medium (500)**, **12px**, sentence case, letter-spacing `.01em`
- Color: Bentonville Navy `#001e60`; Sky Blue `#a9ddf7` on navy/dark slides
- Not mono, not uppercase, not True Blue — blue belongs to the title eyebrow alone

These are the defaults for new slides and any new deck in this project.

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

## Note on this branch

This branch currently holds only this file. The actual fix — three appendix slides
(Five themes, Terminology audit, Segment coverage) had content clipping against the
fixed 1280x720 canvas or colliding with the footer takeaway bar, found by rendering all
64 slides headlessly and checking bounding boxes — plus a 12-instance dead-CSS cleanup
(duplicate `border-radius` declarations), is committed locally on
`claude/blissful-bardeen-x258he` but blocked from an automatic `git push` by this
session's permission guardrail. The fix is already live in the Claude Design project
itself; only this GitHub mirror is pending the repo owner's go-ahead to push.
