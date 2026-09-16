# Advertiser Experience — Strategic Vision & Team Charter

Working repo for the Walmart Global Ads Advertiser Experience strategy deck.

**The deck is `Advertiser Experience Strategy.dc.html`** — 70 slides, presented from
Claude Design. Everything else in here supports it.

## What's in here

```
Advertiser Experience Strategy.dc.html          ← the deck
Advertiser Experience Strategy (Sep 12 …).dc.html  previous 68-slide build, kept for reference
CLAUDE.md                                       the craft rules — read before editing the deck
deck/
  …Sept-15-2026_source.pptx                     the authored source this deck was built from
  outline-v2.md                                 full text + speaker notes, in plain text
  CHANGELOG.md                                  what changed from the source, and why
tools/
  build_v2.py                                   fallback: export a themed .pptx (see below)
  dump_deck.py                                  extract slide text + notes from a .pptx
_ds/                                            Walmart design system tokens and styles
deck-stage.js · deck-nav.js · support.js        the deck runtime and its navigation chrome
*.md (JTBD, PERSONAS, QA-PREP, …)               working analysis, not deck content
```

## Which file is the source of truth

| For | Look at |
|---|---|
| What the deck **looks like** | `Advertiser Experience Strategy.dc.html` |
| What the deck **says** | `deck/outline-v2.md` |
| Why it says it that way | `deck/CHANGELOG.md` and the commit history |
| How it's allowed to look | `CLAUDE.md` |

When a fact or a figure changes, change it in the outline **and** the deck. They are the
two places content lives, and there is no automation keeping them in step.

## `tools/build_v2.py` is a fallback, not a second deck

It rewrites the source `.pptx` at the text-run level, so Walmart's theme, masters, layouts,
typography and media survive byte-identically. It exists for the day someone asks for a
PowerPoint to forward. **It is not maintained slide-for-slide against the `.dc.html`** — if
you run it, diff the output against the deck before sending it anywhere.

```bash
python3 -m pip install python-pptx
python3 tools/build_v2.py deck/…Sept-15-2026_source.pptx out.pptx
```

## The sync is one-way — `main` is the trunk

Claude Design **pulls** from GitHub `main`. There is no push. Each sync snapshots canvas
edits into `Advertiser Experience Strategy (local edits Sep 15).dc.html` — a parking lot,
not a copy of the deck — and then overwrites the main file from upstream. **Visual edits
made in Claude Design do not flow back to the repo on their own, and the next sync
destroys them.**

So: **`main` is the only source of truth.** Every other copy — the design project, a
published artifact, an exported `.pptx` — is a render of it. The moment one of them is
treated as a source, you are merging two histories by hand and guessing which is newer.

**Editing in Claude Design is fine** — it is where the visual work actually gets done, and
nothing here asks you to stop. What is not fine is *leaving* it there. A canvas edit is a
proposal with a deadline: bring it back to `main` before the next sync, which overwrites the
canvas from upstream and takes the edit with it. **An edit that has not come back to `main`
does not exist.**

Bring back the **artifact, not a description of it** — the deck file, or the verbatim
`<section>` markup for the slides you touched. A summary is enough only for a change you
could retype from memory; anything rebuilt needs the bytes, for the reasons in *carry markup,
not prose* below. "Slide 59 rebuilt with a white compounding treatment" is a true sentence
that reconstructs nothing.

Guessing is the part that fails. On 15 Sept a published artifact and `main` were compared
and the artifact was judged "seventeen versions ahead"; a drop-in replacement was prepared
from it. Unpacked and diffed slide by slide, that artifact was the deck as it stood *before*
the Sep 15 markup-decisions pass — no icons on 24, no priced table on 57, no ticket rail on
22, no evidence footnotes on 66/67, Title Case titles, dividers carrying names instead of
arguments, and no slide 70. Committing it would have reverted the entire pass. Both copies
read "updated 15 Sept", which is exactly as much as a modification date can tell you.

**Diff content, never dates.** `tools/checkdeck.py` gives the slide count and structure in
a second; the markers above are greppable. If a copy claims to be ahead, make it prove it.

**Normalise before you diff, and never copy an artifact's markup wholesale.** On 16 Sept a
second artifact genuinely *was* ahead — and a raw slide-by-slide hash said 57 of 70 slides
differed. Fifty-four of those were the renderer, not the author: it emits raw UTF-8 where
the deck writes entities (`&#8212;`, `&#183;`, `&#8217;`), and it rewrites every `src` to a
bundler asset id. Unescape entities, blank the `src` values and collapse whitespace first
and the count drops to **five**; three of those five are the renderer too. Two slides had
actually changed.

Worse, the renderer mangles SVG attributes: **8 of the deck's 9 `viewBox` become
`sc-camel-view-box`**, and `preserveAspectRatio` becomes `sc-camel-preserve-aspect-ratio`.
Those are dead attributes. Dropping that file in would have silently flattened all four
charts and the six icons on slide 24 — and it would have passed `checkdeck.py`, which
checks structure, not attribute spelling. **Port the content delta by hand; never take the
render.**

When a pass *does* happen in Claude Design, it has to come back by hand, and the bridge is
a patch doc. **There is one, `PATCH-LEDGER.md`**, and it is a ledger rather than a queue:
every item carries a status, and an applied item stays in it as the provenance record. The
three per-change `PATCH-*.md` files it replaced were deleted once their contents landed —
three docs describing one deck is how a repo ends up unsure which is current.

Two rules for writing an entry, both learned the hard way:

- **Carry markup, not prose, for anything past roughly slide 56.** The deck is ~290 KB and
  growing, so a full-file read truncates in the tail — exactly where a prose summary
  becomes unrecoverable. "Slide 59 rebuilt with a white compounding treatment" cannot be
  reconstructed; the `<section>` can. Put the verbatim sections in an appendix, or extract
  them to small side files (see `uploads/tail-57-59-70.html` and
  `uploads/tail-58-60-69.html`, which together carry slides 57–70 verbatim).
- **Prefer copying the deck file wholesale** over replaying described edits. The patch doc
  is a change *record* for review; the `.dc.html` is the artifact. *Wholesale* means the
  design project's own file — never the published artifact's, for the reason above.

**A ledger written in the design project has a shelf life.** It describes that copy, and
`main` moves. Four claims in the 15 Sept ledger were stale or wrong a day later — one of
them ("convert the remaining wells to `space-between`") would have undone a decision that
had already been tested and rejected. Re-verify each claim against `main` before merging
one in, and say which copy a claim was checked against. Two of the four were true of a grep
and false of a render, which is the same trap the checkers section below describes.

## Working on the deck

1. Edit in Claude Design, or ask Claude Code to make the change here. If it was the canvas,
   bring the markup back in the same sitting so it reaches `main` before the next sync — the
   deck file or the verbatim sections, not a summary. See *The sync is one-way* above.
2. Claude Code checks it against `CLAUDE.md` and the verification suite — clipped text,
   collisions with the page number, peer-row alignment, the spacing scale, the track set,
   contrast, and a wider-font stress test — plus `tools/checkdeck.py`, a structural check
   that needs no browser and catches what a renderer forgives.
3. Commit. Small topic branches (`fix/skai-figure`, `slide-50-roles`) or straight to `main`
   — this is a small repo and either is fine.

Fonts fall back to system faces outside Claude Design, so exact line breaks should always
be confirmed there.

## Known open items

- **Three figures carry no citation** — the 60–70% delivery head start (slide 31) and the
  "1/3 manage 9+ networks" / "69% cite complexity" pair (slide 08). Flagged on-slide.
- **Slide 10 attributes 50% on spend consolidation to Skai**; published summaries of that
  report give ~60% and 68%. Resolve before presenting.
- **Slide 05's source vintage conflicts** — the deck says EMARKETER 25 Aug 2026, the source
  deck says June 2026.
- **Slide 50 needs team roles and headshots**; Sarah Scherer is confirmed as Product
  Director, the remaining eight are grouped as "Remit in confirmation". The four domains
  the team covers are settled.
- **Slide 42's Express Pod timing is relative** ("Pod weeks 1–2") pending real dates; the
  stale Aug–Sep 2025 calendar was removed.
- The market chart's area fill is not zero-baselined.

Full list and rationale: `deck/CHANGELOG.md` and the *Evidence guardrails* section of
`CLAUDE.md`.
