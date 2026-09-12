# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Walmart Ads leadership and decision-makers who approve the FY28 roadmap default, and the broader set of internal stakeholders (product, channel teams, partner-facing teams) who read the deck afterward as the reference record of the strategy. The deck is used both ways: presented live for the decision, then circulated for async reference.

## Product Purpose

Build alignment and genuine buy-in — not just a single approval — around a "foundation-first" default for FY28: sequencing the Walmart Ads advertiser experience roadmap so shared platform foundations (identity/permissions, IA and navigation, shared services, data/events, common apps framework) land before channel-specific feature work, rather than the reverse. The deck's own framing: "This deck asks for one decision... whether foundation-first becomes the default order for FY28." Because channel teams bear the near-term cost (reshaped/delayed committed work, fewer Q1 advertiser-visible features), the deck has to earn buy-in from the people whose roadmaps are affected, not just secure a sign-off from one approver.

## Positioning

The mechanism a competitor pursuing "more commerce media growth" can't copy by spending harder: treating advertiser experience fragmentation as a sequencing problem, not a feature gap. Every stage of delivery is required to leave a reusable foundation behind (shared architecture, terminology, services) so later work — including channel work — compounds instead of re-solving the same problems per surface.

## Operating Context

- A self-contained, navigable HTML slide deck (`Advertiser Experience Strategy.dc.html`), 64 slides across a cover, three narrative acts, and an appendix, with progress bar / prev-next / section-jump navigation and entrance animations (respecting `prefers-reduced-motion`).
- Built and maintained in a Claude Design project and mirrored to this GitHub repo; slides are a fixed 1280×720 canvas.
- Used in at least two modes: walked through live in a leadership review (where the ask is made and the trade-offs are said out loud), and read unattended afterward by people who weren't in the room.

## Capabilities and Constraints

- Static presentation only — no backend, no live data; all figures are as-authored in the HTML.
- Several appendix slides are explicitly known-incomplete placeholders, not finished content: "Sources", "Baselines", "Already shipped", and "The team" (marked "[needs input]" / "[needs names]" in their own `data-label`). Future passes must not treat these as finished, polish over the gap, or fabricate the missing names/numbers/citations — the placeholder markers should stay until real input arrives.
- Everything else in the deck (data points, findings counts, forecasts, claims) is treated as final as presented; no other flagged placeholders exist.
- Visual system is the Walmart Design System (True Blue / Bentonville Navy / Everyday Blue / Sky Blue palette, Everyday Sans typography, 12px/8px/4px radius scale) — see `CLAUDE.md` for the house rules on eyebrows, content headers, and navy density already established for this deck. WCAG contrast (≥4.5:1) has been verified across all `.cap` content-header elements.

## Brand Commitments

Walmart Ads brand voice and the Walmart Design System's color/typography tokens (documented in `_ds/.../tokens/colors.css` and `CLAUDE.md`) are binding for this deck and any new slides added to it.

## Evidence on Hand

Research and figures already cited in the deck: a 125-finding platform audit (2026) collapsing into five recurring problems (unclear, complex, inconsistent, fragmented, time-consuming); US commerce media spend forecast (~70% growth 2026–2030, to ~$142B); a four-priority roadmap portfolio (Simplify / Seller demand / Platform / Intelligence). No case studies, testimonials, or external press exist for this deck — future work must not invent any. The placeholder slides listed under Capabilities and Constraints are explicitly missing evidence, not evidence to fabricate.

## Product Principles

- Sequencing is the strategy: foundations before channel-specific features, every time, even when it costs near-term feature velocity.
- Every delivery stage must leave something reusable behind — no isolated, single-purpose work.
- The deck must earn alignment from the teams who pay the near-term cost, not just secure a single approver's sign-off.
- Placeholder/incomplete sections stay visibly marked incomplete rather than papered over.
- One page, one decision, one evidence base — avoid diffusing the ask across competing claims.

## Accessibility & Inclusion

WCAG contrast (≥4.5:1) verified across all `.cap` content-header elements; `prefers-reduced-motion` is respected for all entrance animations. No further accessibility requirement has been specified beyond these.
