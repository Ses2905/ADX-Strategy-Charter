# Experience map — the advertiser ecosystem

Current state. Working analysis, not deck content.

The deck's structural diagnosis (slide 12) maps one job across **product** boundaries.
This maps the same job across the **whole ecosystem** — including the touchpoints that
are not the product. That turns out to matter, because of where the evidence comes from.

Inference is labelled. No research was conducted; nothing here is a new finding.

---

## The headline

**The deck's diagnosis is drawn almost entirely from the self-serve product surface.**

Every Walmart-specific piece of evidence in the deck comes from in-product
instrumentation or a product audit. That is a sound basis for the self-serve path and a
thin one for the agency-represented and managed-service paths — which, per the deck's
own segment map, are *fundamentally different experiences*, not variations.

Human touchpoints barely appear in 68 slides: "account manager" once, "managed service"
once, "ad ops" once; email, documentation and help centre zero times.

This is not an error. It is a consequence of instrumentation, and it is worth stating
out loud before someone in the room states it for you.

---

## Evidence coverage — what each source can and cannot see

| Source | Sees | Structurally blind to |
|---|---|---|
| Pendo behavioural (slide 10) | Clicks on instrumented in-product surfaces | API traffic, work done by an account team, anything before sign-in |
| Pendo polls / NPS (slide 09) | In-product users who choose to respond | Non-users, agency traders on their own stack, advertisers who already left |
| Platform audit (slide 08) | Product surfaces — Sponsored, Display, Seller Center, reporting | Human handoffs, email, docs, onboarding, support |
| Koddi / Forrester (slide 06) | Buyer-side market opinion | Anything Walmart-specific — the deck says so |
| EMARKETER (slide 05) | Market size | Anything about our advertisers |
| **Support tickets (28,000+)** | Held back deliberately — see below | — |

**On the support corpus.** The appendix sources slide lists support-ticket analysis of
28,000+ tickets. It is used nowhere in the evidence act, and that is *correct*: the
revision brief holds ticket totals back until populations are reconciled, precisely so
that figures from different processing stages are not combined into one dramatic number.

Worth knowing: that hold is the single biggest reason the human side of the experience
is invisible here. It is the largest untapped asset in the corpus and the one source
that sees the touchpoint the product analytics cannot. Reconciling it has more upside
than any new study.

**The internal tension.** Slide 31 lists Support, Sales, Agency conversations and
Account teams as inputs the evidence capability already has. The evidence act uses
none of them. The strategy claims a decision system it has not yet demonstrated — which
is a fair thing to be asked about.

---

## Current state — two service models

The deck treats the journey as one path. The segment map says service model is a primary
dimension. These are the two ends.

### A · Self-serve 3P seller — well evidenced

| Phase | Actions | Touchpoints | Emotion | Pain |
|---|---|---|---|---|
| Aware | Sees an ads prompt while managing listings | Seller Center | Curious, cautious — it is their own P&L | Opportunity framed as a product, not an outcome |
| Evaluate | Wonders if it will pay back | Seller Center, word of mouth | Uncertain | No forecast before commitment (slide 11) |
| Onboard | Routed out to Ad Center | Ad Center | Disorientation | New login, new vocabulary (slide 12) |
| Activate | Builds a first campaign | Sponsored | Effortful | 46.2% do not finish setup (slide 10) |
| Operate | Checks, adjusts | Sponsored, reporting | Powerless | "How can I optimize my campaign?" |
| Prove | Tries to tell if it worked | Reporting | Distrust | "Reports are not accurate" |
| Renew / lapse | Decides to continue | — | — | **No touchpoint owns this moment** |

### B · Agency-represented enterprise — inference, not evidence

Built from the deck's segment and investment maps. The *structure* is stated there; the
experience of it is not evidenced anywhere in the corpus. **Treat as hypothesis.**

| Phase | Actions | Touchpoints | Where value likely leaks |
|---|---|---|---|
| Aware | Sales conversation, JBP cycle | Walmart Ads sales | Human channel, no instrumentation |
| Evaluate | Planning against other networks | Agency's own stack | We are compared where we cannot see |
| Onboard | Access, permissions, account structure | Ad ops, account manager | Handoff from sales to ad ops |
| Activate | Trader executes, some via API | API, DSP, platform UI | API path invisible to Pendo entirely |
| Operate | Weekly optimisation across clients | Agency tooling + our UI | Bulk and multi-account gaps (appendix) |
| Prove | Builds the client-facing story | Exports, spreadsheets | Defensibility, not comprehension — see `JTBD.md` |
| Renew | Allocation decision across networks | Client review, JBP | The decision that matters most, least observed |

---

## Ecosystem relationships

**Handoffs the deck does not map.** Sales → ad ops → self-serve UI; account manager →
advertiser; Seller Center → Ad Center (the only one the deck *does* map, on slide 12).
Each is a place where context is re-established by a person rather than carried by the
platform — the same failure mode as the product boundaries, in a different medium.

**Where data does not flow.** An account manager's knowledge of the advertiser does not
reach the interface the advertiser uses. An agency's own reporting stack is where the
result is actually judged, and nothing we build appears there. Both are outside the
deck's shared-foundations model, which is scoped to product surfaces.

**Automated ↔ human.** The deck's adaptive framework (appendix) names service model as a
dimension the platform should read and adapt to. Nothing in the roadmap builds that
sensing — Priority 03's shared foundations cover identity and account context, which is
the hook it would hang on, but the adaptation itself is unscoped.

---

## What this implies for the deck

Recommendations. None of these change the strategy.

1. **State the evidence's scope on slide 08 or 09.** One clause: this evidence is drawn
   from in-product instrumentation and is strongest for self-serve. It costs a line and
   removes the sharpest available objection.
2. **Reconcile the support corpus.** 28,000+ tickets is the only source that sees the
   human touchpoint. Unblocking it is higher value than any new study, and the brief
   already says what it needs — population reconciliation, not more collection.
3. **Do not extend the journey slide to the managed path on inference.** Slide 12 is
   strong because every marker on it is evidenced. Adding an unevidenced agency lane
   would weaken the deck's best slide.
4. **Name the renewal moment.** Both service models end at a decision no touchpoint owns
   — the same Conclude gap `JTBD.md` found from the motivation side, reached independently
   from the ecosystem side.
