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

## Working on the deck

1. Edit in Claude Design, or ask Claude Code to make the change here.
2. Claude Code checks it against `CLAUDE.md` and the verification suite — clipped text,
   collisions with the page number, peer-row alignment, the spacing scale, the track set,
   contrast, and a wider-font stress test.
3. Commit. Small topic branches (`fix/skai-figure`, `slide-50-roles`) or straight to `main`
   — this is a small repo and either is fine.

Fonts fall back to system faces outside Claude Design, so exact line breaks should always
be confirmed there.

## Three slides are behind the design project

The Sep 15 markup-decisions pass was made in the Claude Design project and pulled back
here through the sync tool, which **caps a single file read at 256 KiB**. The deck is
larger than that, so the read returned slides 01–56 complete and stopped mid-57.

What is here is the recovered pass: slides 01–56 verbatim from the design project, slide
70 rebuilt from the nine-finding table it was moved off, and the specified title, casing
and ladder changes applied to 57–69. **Three items are still only in the design project:**

| Slide | What is missing |
|---|---|
| 57 | The rebuild that prices every decision — three costing nothing, two needing AOP and engineering input. Not reconstructed: which two carry cost is a commitment, not a formatting choice. |
| 59 | The white compounding treatment (words left, Everyday Blue arrows, compounding bars). The *Differentiate → Advance* rename **is** applied; the visual rebuild is not. |
| 19 → 70 | Slide 70 here is a faithful port of slide 19's original nine-finding table, not a copy of the version built in the canvas. Compare before presenting. |

To close the gap, split the deck in the design project into two files under 256 KiB each
(or paste those three sections' markup) and they can be brought over exactly.

## Known open items

- **Three figures carry no citation** — the 60–70% delivery head start (slide 31) and the
  "1/3 manage 9+ networks" / "69% cite complexity" pair (slide 08). Flagged on-slide.
- **Slide 10 attributes 50% on spend consolidation to Skai**; published summaries of that
  report give ~60% and 68%. Resolve before presenting.
- **Slide 05's source vintage conflicts** — the deck says EMARKETER 25 Aug 2026, the source
  deck says June 2026.
- **Slide 50 needs team roles**; the source shipped placeholders.
- The market chart's area fill is not zero-baselined.

Full list and rationale: `deck/CHANGELOG.md` and the *Evidence guardrails* section of
`CLAUDE.md`.
