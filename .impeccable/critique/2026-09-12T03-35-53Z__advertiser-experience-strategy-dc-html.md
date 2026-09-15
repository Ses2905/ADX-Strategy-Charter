---
target: Advertiser Experience Strategy.dc.html
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 3
target_identity: "file:/home/user/ADX-Strategy-Charter/Advertiser Experience Strategy.dc.html"
target_fingerprint: "sha256:197aeb49e8e799e9612a0b34d02643793e442989b7828d8206c408a8bf60bacc"
target_path: /home/user/ADX-Strategy-Charter/Advertiser Experience Strategy.dc.html
timestamp: 2026-09-12T03-35-53Z
slug: advertiser-experience-strategy-dc-html
---
Method: dual-agent (A: design review · B: detector + browser evidence, isolated, run in parallel)

## Design Health Score

Mode note: this deck straddles Persuade (a live leadership ask) and Read (an async reference document) per PRODUCT.md — heuristics #7 and #10 are marked n/a as a static, non-interactive deck genuinely has no axis for "flexibility/efficiency of use" or "help and documentation" beyond its own speaker-notes/labels.

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4/4 | Progress bar, "X/64" counter, jump menu, per-act dot rail — constant orientation |
| 2 | Match System / Real World | 3/4 | "DSP" used from slide 6 onward, never once expanded, unlike "SUS" which is |
| 3 | User Control and Freedom | 4/4 | Prev/next, Reset, keyboard shortcuts, non-modal jump menu |
| 4 | Consistency and Standards | 2/4 | Cover's stage names contradict Roadmap/Sequence's; two undocumented "emphasis" idioms coexist on one slide; Journey Map's raw broken `<img>` contradicts the correct `<image-slot>` pattern used one act later |
| 5 | Error Prevention | 3/4 | Strong misreading-guards in copy, but nothing caught the broken images or the naming drift |
| 6 | Recognition Rather Than Recall | 3/4 | Five-theme taxonomy reinforced verbatim across 3 slides; but Roadmap's gray-cell override has no on-slide legend |
| 7 | Flexibility and Efficiency | n/a | Static deck; not a meaningful axis for this artifact |
| 8 | Aesthetic and Minimalist Design | 4/4 | Consistent type system, restrained palette, generous whitespace |
| 9 | Error Recovery | 3/4 | No way to tell "intentional placeholder" from "failed to load" by look alone on the Journey Map |
| 10 | Help and Documentation | n/a | Not applicable to a slide deck; `data-speaker-notes` on every slide is the closest analog and is well executed |

**Total: 26/32 applicable (81% — Good band).**

## Design Specificity Verdict

**LLM assessment**: Not a generic reskin. The deck states its exact ask on slide 3 before any evidence, cites oddly-specific internal numbers throughout (NPS −27 across 1,350 responses, 46.2% Display setup drop-off, r=0.89 correlations with the correct epistemic caveat), names its own team's headcount constraint bluntly, and pre-empts the specific objection a channel-team stakeholder would raise. A generic strategy deck hides that constraint or buries the ask on slide 20; this one doesn't. That said, coherence cracks exactly where it matters most — see Priority Issues below for the cover/roadmap naming contradiction. The four-column "Pressure/Problem/Choice/Outcome" template recurs ~15 times across the deck; defensible as a deliberate system, but it's the one structural habit doing most of the work.

**Deterministic scan**: The CLI detector (`impeccable detect --json`) found 348 raw hits across 11 rule types. The large majority are **false positives against this project's own documented conventions** in CLAUDE.md: `kicker-above-heading` (61 — this is the intentional `.cap` content-header system, once per content slide, by design), `hero-eyebrow-chip` + `oversized-h1` (the cover's title-eyebrow/h1 pair, at the documented type scale), `all-caps-body` (2 — the title-eyebrow's deliberate uppercase), `border-accent-on-rounded` (7 — this is CLAUDE.md's own "emphasis-card pattern" spec, verified to match it exactly), and most of `undersized-ui-text`'s 8px hits (the title-eyebrow's documented 8px size). **Findings that are not false positives**: `tiny-text` (135, mostly 10.5–11.5px body text concentrated in the dense appendix tables), `low-contrast` (44, one specific gray-on-white pairing — corroborated live, see Priority Issues), `cramped-padding` (8), `tight-leading` (5, line-height 0.91×), and one `marketing-buzzword` hit ("seamless experience across everything") that's a real tonal outlier in an otherwise blunt, specific deck. A separate browser-mode overlay pass surfaced two rule types the static scan didn't (`line-length`: 44 hits up to ~176 chars/line, on the deck's intentionally-unconstrained `.t`/`.d` elements; `ai-color-palette`: 4 hits on Sky-Blue-on-navy text, almost certainly a false positive since that's this deck's documented on-dark palette, not generic AI-cyan).

**Live rendering**: 0 of 64 slides had any element overflowing its slide bounds. But the deck currently renders in a **fallback system font everywhere** — all 10 of the Walmart Design System's custom webfont files (Everyday Sans, Everyday Sans UI ×4 weights, Everyday Sans Mono, Everyday Sans Headline) 404 against the repo; none exist in `_ds/.../assets/fonts/` at all. This means the entire typographic identity CLAUDE.md documents (the eyebrow/content-header type system, tracking, weights) is currently unenforceable — no viewer has ever actually seen this deck in its intended typeface.

## Overall Impression

The strategic and rhetorical construction of this deck is genuinely sophisticated — the ask-first structure, the pre-armored objection handling, and the disciplined placeholder convention are all above the bar for an internal strategy deck. What's holding it back from "ship it" is a cluster of small, concrete, fixable defects sitting at exactly the highest-visibility points: the very first thing viewers see (the cover) contradicts the deck's own model, the one "real proof" slide (Journey Map) shows a broken build instead of evidence, and the entire deck has never been seen in its own typeface. None of this requires rethinking the deck; all of it is fixable without touching the argument.

## What's Working

1. **Exact, verifiable compliance with the CLAUDE.md emphasis-card spec.** On "The strategy in one page" and "Relationship health," the emphasized card uses the documented 2px accent border, `#f5f6f8` fill, 12px radius, and flush top-alignment with its siblings — this is disciplined token adherence that actually holds up under direct inspection, which is rare.
2. **The ask is front-loaded and pre-armored against its own worst objection.** Stating the decision on slide 3, pairing it with an explicit "what this doesn't mean" box, and naming the Q1-optics risk with a mitigation before Q&A can raise it adversarially is sophisticated stakeholder-management design.
3. **Placeholder discipline is genuinely well executed almost everywhere** — which is exactly what exposes the one place it lapsed (the Journey Map's raw broken `<img>` tags, versus the correct `<image-slot>` component used one act later on the Initiative Template slide).

## Priority Issues

**[P0] Two production assets are silently missing — real screenshots and the entire brand typeface.**
The Journey Map slide references `media/image20.png` and `media/image21.png` for its two "homepage" screenshots; neither file nor any `media/` directory exists anywhere in the repo, so it renders as bare alt text with no frame or placeholder styling — unlike the four PRODUCT.md-sanctioned placeholder slides, which all use a consistent, labeled "Placeholder — [instruction]" treatment. Separately, all 10 of the Walmart Design System's custom webfont files (`_ds/.../assets/fonts/*.woff`) are also missing, so the deck has never actually rendered in Everyday Sans/Everyday Sans Mono for anyone — it's falling back to the system sans the whole time.
**Why it matters**: the Journey Map is supposed to deliver the deck's most concrete "observed reality" evidence, and instead it's the one place a skeptical reader sees what looks like a build error. The missing fonts undermine the brand-typography work this project has specifically invested in (the eyebrow/content-header system).
**Fix**: supply the two screenshots (or swap the raw `<img>` tags for the deck's own `<image-slot>` component so the gap reads as intentional); source and commit the 10 webfont files so the design system actually ships what it documents.
**Suggested command**: `/impeccable audit` (confirms scope and severity of both asset gaps as a technical/production-readiness pass), then `/impeccable harden` for the Journey Map's fallback treatment specifically.

**[P0] The cover's four-stage model contradicts the deck's own canonical sequence everywhere else.**
The cover reads "Simplify → Unify → Connect → Differentiate." The Sequence slide and the Roadmap — the two places this exact model structures the entire recommendation — both read "Establish → Simplify → Connect → Differentiate." "Unify" appears nowhere else in the deck as a stage name.
**Why it matters**: this is the first content anyone sees, live or async, and it silently teaches the wrong mental model for the sequence they're about to be asked to approve.
**Fix**: change the cover's second word from "Unify" to "Establish."
**Suggested command**: `/impeccable clarify` (copy/label consistency).

**[P1] A systemic, deck-wide contrast failure sits just outside the deck's own verified-contrast claim.**
PRODUCT.md/CLAUDE.md's WCAG work covers `.cap` content-header elements only, and that claim holds (True Blue on white: 6.30:1; Sky Blue on navy: 10.61:1). But the page-number footer present on nearly every slide, plus scattered connector arrows and secondary captions, use `#97999f` on white or `#f5f6f8` — measured live at 2.63–2.85:1, well below the 4.5:1 AA threshold. This is the same pairing the static detector flagged 44 times and is corroborated by 35 live-measured instances across 18 of 22 sampled slides.
**Why it matters**: it's not a one-off — it's the deck's second-most-common color pairing after body-navy-on-white, and it fails AA everywhere it appears.
**Fix**: darken the footer/secondary-caption gray to a token that clears 4.5:1 on white (e.g. `--wm-gray-600 #5e636e`, which computes well above threshold), or add sufficient weight/size to qualify for the large-text 3:1 threshold instead.
**Suggested command**: `/impeccable audit`.

**[P1] The Roadmap encodes its confidence tier in color alone, with an undocumented override.**
The Roadmap's stated legend is a 4-stop confidence gradient mapped to its 4 columns, but several cells (e.g. "Audit resolution plan," "Dependency mapping") break column position entirely, rendering flat gray with no on-slide key explaining what gray means. This also fails WCAG 1.4.1 (use of color) — the tier has no text/icon redundancy, so it's invisible to a color-vision-deficient reader and unrecoverable for a screen-reader user.
**Why it matters**: for the async "broader stakeholder" reader with no presenter to explain the override verbally, this is a dead end, not a puzzle.
**Fix**: add a one-line "gray = not yet scoped" key to the existing legend, and consider a small text/icon tag per cell.
**Suggested command**: `/impeccable audit`, then `/impeccable layout` for the legend/cell redesign.

**[P1] The actual recommendation is buried as ordinary body text at the bottom of the busiest slide in the deck.**
"The decision" presents three full option-cards (A/B/C) plus a sidebar before the sentence that matters — "Recommendation: Option A..." — appears as plain paragraph text at the very bottom, same visual weight as everything above it.
**Why it matters**: for a time-pressed leadership approver skimming in an F-pattern, the three parallel option cards get read first; the actual recommendation is the last thing on the slide, not the first.
**Fix**: promote "Recommendation: Option A" to headline weight near the top, or duplicate it as a callout in the existing "What approval commits" sidebar.
**Suggested command**: `/impeccable layout`.

## Persona Red Flags

**The time-pressed leadership approver, skimming for the ask** (project-specific, per PRODUCT.md's live-decision audience):
- On "The decision," the recommendation sentence is the *last* thing on the slide — the highest-risk failure for exactly this reader.
- If this persona jumps straight from the cover to the Roadmap to sanity-check the ask, "Unify" vs. "Establish" creates a stumble right before the ask itself.
- Positive: the "What approval commits" sidebar *does* work for this persona — four short bullet fragments, genuinely skimmable.

**Jordan, the confused first-timer** (the async "broader stakeholder" reader per PRODUCT.md, with no presenter in the room):
- The Journey Map's broken images give Jordan no way to tell whether the whole deck is unfinished or just this slide.
- "DSP" is used from slide 6 onward and never expanded anywhere in the deck — the Terminology Audit clarifies DSP's *boundaries* but assumes the reader already knows what it stands for.
- The Roadmap's gray-cell ambiguity hits Jordan hardest of all — with no presenter to explain the override verbally, Jordan is stuck.

**Sam, the accessibility-dependent user** (checking, not assuming, the existing WCAG claim):
- The narrow claim in PRODUCT.md ("`.cap` elements verified ≥4.5:1") does hold up on direct measurement.
- But real gaps sit just outside that claim's scope: the Roadmap's color-only confidence encoding, and the deck-wide low-contrast gray footer/captions (see Priority Issues).
- Ironic silver lining: because the Journey Map's broken images kept their `alt` text, a screen-reader user currently gets *more* information from that slide than a sighted user does.

## Minor Observations

- Four Priorities uses two different, undocumented "emphasis" idioms side by side (blue-border-card for Priority 04, solid-navy-fill for Priority 03) — semantically defensible, but CLAUDE.md only documents the first pattern.
- Buyer Complexity (5 columns), Competitive Benchmark (7 row-dimensions), and the Roadmap (5×4 = 20 cells) break the ≤4-chunk rhythm the deck otherwise keeps everywhere else (Strategy in One Page, Relationship Health, Four Priorities are textbook 4-up) — exactly the slides where a clean chunk size would help most.
- All entrance animation is a single simultaneous fade-up with no staged/click-through reveal, so in a live presentation a 20-cell Roadmap or a 7-row Competitive Benchmark lands on the audience all at once.
- Detector found 5 instances of line-height at 0.91× (below the 1.3× the tool recommends) and 8 instances of children flush against a border/background with no inset padding — both concentrated in the dense appendix tables, consistent with the chunking issue above.
- One `marketing-buzzword` hit ("seamless experience across everything") is a real tonal outlier in an otherwise blunt, specific deck that usually favors exact numbers over marketing language.
- The industry NPS benchmark (−20 across 34 networks) appears only in a footnote on Competitive Benchmark, never as a labeled column in the table itself, so a reader comparing Walmart's −27 to the market has to hold that number in their head.
- 44 `line-length` hits (up to ~176 chars/line) on the deck's intentionally-unconstrained `.t`/`.d` elements — a byproduct of the documented "no max-width" layout rule, worth a look for the widest lead paragraphs specifically, separate from the rule itself being wrong.

## Questions to Consider

- If the cover's four-word teaser and the Roadmap's four-stage header are meant to be the same model stated twice, what process let one drift to "Unify" while the other stayed "Establish" — and what else in a 64-slide, single-file deck has drifted the same way unnoticed?
- The deck's most powerful move (stating the ask on slide 3, before the evidence) is also its most exposed one in async-reader mode — what does a stakeholder who *only* reads slide 3 and then stops actually walk away believing?
- The Roadmap is doing three jobs at once (plan, confidence, effect on current commitments) — what would it cost to split "confidence" onto its own slide with a real legend, instead of compressing it into 20 unlabeled colored boxes?
- PRODUCT.md says the deck must earn buy-in from the teams paying the near-term cost, not just secure one approver's sign-off — where does a channel-team reader get their own version of the slide-3 reassurance, specific to what their Q1 roadmap actually loses? Right now that reassurance is aimed almost entirely at the approver.
