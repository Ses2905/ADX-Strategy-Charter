# Patch ledger — Advertiser Experience Strategy

One file, replacing `PATCH-sep-15-markup-pass.md`, `PATCH-slide-05-growth-callout.md` and
`PATCH-slide-09-10-citations.md`. Those three are deleted; nothing in them is lost.

**Everything below is upstream.** There is no outstanding markup. This is the provenance
record and the open-items list, not an apply list.

Built from the ledger the design project wrote on 15 Sept and re-verified against the repo
on 16 Sept. **Four of its claims did not survive that check** — §C, §D3, §E1 and §E2 below
say which and why. That is the point of re-verifying rather than merging: a ledger written
against one copy goes stale the moment the other moves.

---

## Status at a glance

| # | Item | Status |
|---|---|---|
| A | Sep 15 markup-decisions pass (22 slides, titles, icons, slide 70) | **upstream** |
| B | Slide 09/10 source citations + footnotes, and slide 63's bibliography | **upstream** |
| C | Slide 05 growth callout | **obsolete as written — but one real defect, now fixed** |
| D | Stale claims corrected | **recorded** |
| E | Open items | **open — read §E1 before acting on any of it** |

---

## A. Sep 15 markup-decisions pass — upstream, verified

Confirmed present in the deck. Kept as the provenance record; **do not re-apply.**
Spot-checks run against the markup on 16 Sept:

- 70 slides (was 69); slide 70 appendix translation table present.
- 48 titles sentence-cased; the ten accepted rewrites in place.
- Slide 24 carries six inline outline-icon SVGs.
- Slide 43 grouped into four disposition columns.
- Slide 59 arrow colour: **0** uses of Everyday Blue `#4dbdf5` on a light ground. The six
  remaining uses are all navy-ground, where it measures 7.32:1 and is correct.
- Slide 57 row padding: five rows at `12px 0`, **0** at `14px 0`.
- Slide 32 phase 4 reads *Advance* (renamed from Differentiate).

**One spot-check that reads as done and is not.** The 15 Sept ledger records *"Slide 50's
nine 'Role to confirm' placeholders: 0 remaining"*, and a grep agrees — there are zero. But
eight of the nine now read **"Remit in confirmation"**, which is the same state under a
better label. One person on that slide, Sarah Scherer, is marked *Confirmed*. The
placeholders were renamed, not resolved. See §E.

**The rule that pass established, still binding:** the sync tool caps a single file read at
256 KiB and the deck exceeds it, so a full-file read truncates mid-slide-57. **Carry markup,
not prose, past slide 56.** Prose descriptions of a rebuild are not recoverable — that pass
lost two real edits (slide 63's *"Internal working appendix · do not present"*, and slides
66–67's *"directional estimates from account-team experience, not surveyed data"* footnote)
to a spec-driven rebuild before byte comparison caught them.

**And the corollary the 16 Sept pass added: never take a published artifact's markup.** The
artifact renderer emits raw UTF-8 where the deck writes entities, rewrites every `src` to a
bundler asset id, and — the one that matters — rewrites **`viewBox` to `sc-camel-view-box`
on 8 of the deck's 9 SVGs**, plus `preserveAspectRatio`. Those are dead attributes. Dropping
such a file in flattens all four charts and the six icons on slide 24, and it passes
`tools/checkdeck.py`, which checks structure, not attribute spelling. Diff the artifact to
find *what* changed; port it from the design project's own markup.

---

## B. Slide 09/10 citations, and slide 63 — upstream

Four statistics gained resolvable source links; two open footnotes were resolved — one
confirmed, one **contradicted**. Applied verbatim from the design project and verified
byte-identical against it.

| Where | Change |
|---|---|
| 09 | Koddi *State of Programmatic Retail Media* source note → linked |
| 10, both Koddi cards | Same source → linked |
| 10, "Spend is consolidating" | Skai *2025 State of Retail Media Report* → linked |
| 10, "Advocacy remains weak" | → Bain via Oliver Banks, linked; population corrected |
| 10, footnote 1 | The 50% is **not supported** — see below |
| 10, footnote 2 | The −20 NPS **is confirmed**, with its vintage stated |

**B1 — the population correction.** The card said "34 major retail media **networks**." The
source says 34 **retailers** rating their networks. Different population, and the kind of
error that survives every layout check.

**B2 — the 50% is contradicted, not merely unverified.** The Skai report is gated. Published
summaries of the **2025** report give **57%** prioritising platform consolidation and
**"nearly 60%"** wanting to consolidate into a single platform. The only 50% on Skai's public
2025 page is an unrelated full-funnel stat (*improved cross-team collaboration between brand
and performance teams*). The **68%** the old footnote cited is from the **2026** report — the
footnote had conflated two survey years.

The card still reads 50%, with footnote 1 saying all of the above. **57%** is the cleanly
attributable 2025 figure, but the body line ("expect to consolidate spend across fewer
networks") sits nearer the "nearly 60%" phrasing. Pick the number and the wording together;
only the gated PDF settles it. **This is the one blocker for external use**, and it resolves
by replacing the number or cutting the card — not by adding more caveat.

**B3 — the NPS figure is confirmed, with a caveat that must travel with it.** Bain, **235
respondents**, **34 major European and US retailers**. "More than 80% below zero" holds. The
underlying data set is **November 2022** — the most recent published RMN NPS benchmark, and
four years old. Banks himself noted the market moved considerably after the survey while
doubting the score had fundamentally shifted. Both slide 10 and slide 63 now say so.

**B4 — the LinkedIn URL is a Pulse article, not a primary Bain publication.** The citation
names Bain as researcher and Banks as the route to it. Do not shorten it to "Bain" alone.

**B5 — slide 63 is half of every citation change, and the 15 Sept ledger only hedged at it**
("*if it carries its own link column, update it there too*"). It does. It had stayed
byte-identical while the deck gained three links, so its lead line claimed "Two are linked"
against five live ones and three rows still read *Needs link* for sources the deck was
already linking. Rows, statuses, lead and takeaway are reconciled. Adding the Bain
methodology subline then pushed the last row 5px onto the takeaway marker — `collide.js`
caught it — so rows went `padding:8px 0` → `6px`, which buys 36px. The bibliography is the
deck's tightest table; any new row or subline needs a collide run, not an eyeball.

---

## C. Slide 05 growth callout — obsolete as written, one real defect underneath

`PATCH-slide-05-growth-callout.md` proposed replacing a floating `+70% growth, 2026 to 2030`
caption with a dashed baseline plus a True Blue measure line at `x=960`.

**The 15 Sept ledger is right that it must not be applied.** Slide 05 was rebuilt
independently in the Sep 15 pass: the plot compressed to 788px and `$142.1B` + `+70% vs 2026`
became a single endpoint object outside the plot area. Applying the patch now would
re-introduce a second, conflicting annotation at coordinates that no longer match.

**But its conclusion — "nothing to do" — was wrong, and the ledger states the defect without
noticing it.** It records the dashed 2026 reference as drawn `in #c3c6cd`. That is the same
value as the axis rule directly beneath it, so the reference line read exactly as heavy as
the structure it is supposed to recede behind. It is **`#dee1e6`** now (gray-200, luminance
0.75 against the axis's 0.56), which is what `CLAUDE.md` has specified all along.

Worth keeping the reason: the original patch specified `#a9b0bd` on the stated reasoning
that it was lighter than `#c3c6cd`. It is not — luminance **0.43** against **0.56**, so it
reads *heavier* — and it is not a design-system token at all. **Two grays that look adjacent
in a spec can sit on opposite sides of the axis weight.** Check luminance; do not eyeball a
hex. The rebuild then swapped one wrong gray for another, and both survived three audits.

---

## D. Stale claims corrected

1. **"The six `assets/icons/*.svg` are not referenced by the deck" — wrong.** A path grep
   returns 0 refs because the deck **inlines** the markup into slide 24 rather than linking
   the files. Keep them: they are the source set for the next icon-bearing slide.
2. **"Slide 43 still stacks a 4-col definition band over a 3-col table" — wrong.** Fixed in
   the Sep 15 pass; four disposition columns with affected areas beneath each.
3. **The 1920×1080 artboard error.** `<deck-stage>` is **1280×720**. Every absolute pixel
   figure in `DECK-REVIEW.md` and the first `CLAUDE-CODE-AUDIT.md` was 1.5× too large.
   Both are corrected *in the design project* — **neither file is in this repo**, so the
   correction cannot be verified here and the claim is recorded, not confirmed. Bring the
   files across if they are meant to be authoritative.

---

## E. Open items

### E1. Do not act on the `space-between` item — it is wrong twice over

The 15 Sept ledger lists, under dead space: *"37 of the wells now use
`justify-content:space-between`, but 11 still use `flex-start` — those are the remaining
candidates."* Both halves fail.

**The fact.** Measured in a browser on 16 Sept: of the deck's **34 top-level `flex:1` column
content wells, exactly zero use `space-between`.** All 34 are `flex-start`. The 37 hits are
nested elements — card internals distributing their own content — which is a different thing
from a content well and should not be counted with them. A source grep cannot tell them
apart; that is why this needed the DOM.

**The recommendation.** `space-between` on a content well was proposed by a Sept 15 audit,
**tested on slide 57, and rejected** — it pushes the *Immediate ask* statement to the
artboard bottom and opens a ~180px void between the cards and the conclusion they support.
The measured dead band shrinks and the slide gets worse, because the void moves from below
everything (where a light slide is allowed to be light) to inside the one relationship on
the slide that has to hold. `CLAUDE.md` records this. Converting the remaining 11 is not
finishing the job; it is undoing a decision.

The dead-space numbers around it are fine and the worst offenders — 37 (228px), 68 (211px),
10 (208px) — are still worth looking at. Use the treatment table in `CLAUDE.md`: the fix
depends on what the content *is*, and a slack metric alone will mislead you.

### E2. Genuinely open

- **Slide 10's 50%** — §B2. The link is in place; the number needs the gated PDF. External
  blocker.
- **Slide 50** — eight of nine remits read "Remit in confirmation," and headshots are not in
  the repo. Not resolved, whatever a `Role to confirm` grep says.
- **Slide 42 dates** — weeks-from-kickoff is a placeholder; real pod dates to come.
- ~~**Slide 05's area fill is not zero-baselined**~~ — **closed in `95318ad`.** The fill is
  deleted. Two corrections to what this bullet used to say: the floor was **$67.5B**, not
  ~$59B, and it was not merely "arguable" — 1.70× of value rendered as **4.60×** of filled
  height, so the shape claimed **2.7× more growth than the data**. Deleting the fill keeps
  the slope and every label; zero-baselining would have been honest but halved the trend the
  chart exists to show. The measure annotation's grey also moved `#a9b0bd` → `#dee1e6`, which
  was a luminance finding (0.43 vs the axis's 0.56 — it read *heavier* than the chrome it was
  meant to sit behind), not an eyeball one.
- **Slide 05's source vintage** — the note reads *EMARKETER, 25 August 2026*; the Sep 15
  source deck cites *eMarketer Forecast, June 2026* for the same series. A citation date is
  not something to change on inference.
- **The unpriced ask.** Slide 57 states what each decision costs, which is real progress, but
  the deck carries no investment phasing, payback logic or risk register. A board asked to
  accept deferred value will ask what the deferral costs. **This is the largest remaining
  gap** and it needs numbers from outside the deck.
- **Motion is under-choreographed, and the display tier is the slow one.** Audited against
  the `motion-system` skill's budget on 16 Sept:

  | Tier | Elements | Stagger | Last settles | |
  |---|---|---|---|---|
  | Display — cover + 10 dividers | 4 | 110ms | **700ms** | **40% over the 500ms budget** |
  | Content — header group only | 3 | 60ms | 490ms | within budget |

  Both staggers also sit above the skill's 30–50ms range. The 110ms was **preserved
  deliberately** in `d3a9007` so the dividers' feel would not change — it turns out the
  inherited value was the ponderous one, which is a good argument for auditing what you
  carry forward rather than only what you add.

  The author's read is that content slides feel unelevated. The diagnosis is not "too little
  motion" — it is that **every slide lands identically** (three lines fade, nothing else
  moves), so the motion stops registering by about slide 3.

  Two moves, neither of which breaks the documented rules:
  1. **The content well arrives as one block.** No stagger, so it encodes no false order
     among peers — the rule bans staggering *siblings*, not animating a single element. This
     makes the slide land instead of the header floating in over static content.
  2. **A sequence tier for genuine chains** — slides 30, 32 and 59, where the content really
     is ordered and the delay *is* the content. This is the exception the motion section
     already names as allowed; it has never been built.

  Not started. Re-run the budget after any change, and note the display tier cannot come
  down to a 30–50ms stagger without changing a feel the author has not asked to change —
  put that to them rather than assuming.

- **Press Tab on a divider slide** and confirm the focus ring renders. Three
  `focus-visible` rules are present, and `:focus-visible` matches only keyboard-initiated
  focus, so programmatic probing cannot settle it. Needs a human.
- **Read slides 30 → 31 → 32 in sequence** and confirm the foundation-first vs. concurrency
  tension reads as intended. Needs a human.

---

## F. How this file stays true

`main` is the only source of truth; the design project pulls from it and cannot push. So a
ledger written there describes the design project's copy, and every claim in it has a
shelf life measured against `main`.

**Re-verify before merging, and say which copy a claim was checked against.** Four claims in
the 15 Sept ledger were stale or wrong by 16 Sept — §C's "nothing to do," §D3's correction
(in files this repo does not have), §A's slide 50 spot-check, and §E1, which would have
degraded the deck if acted on. None of them were careless. They were true somewhere else, or
true of a grep rather than a render.
