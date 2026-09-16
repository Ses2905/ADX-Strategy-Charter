# Sync contract — ADX Strategy + Charter

**Two writers, one direction of travel.** Claude Code writes `main`. Claude Design (this
project) pulls from it and cannot push. This file is the agreement that keeps those two
copies from disagreeing silently. Both sides read it; either side may amend it by writing
the amendment into `main`.

Written 16 Sept 2026, after `dividerTone` reverted five times, the hover/print list shipped
broken three times, and three separate prose claims in `CLAUDE.md` were found stale when
measured (`.26em` eyebrow, "466 leading uses", "two navy fills on light slides").

---

## 1. Who owns what

| Artifact | Owner | The other side may |
|---|---|---|
| `Advertiser Experience Strategy.dc.html` | **`main`** | read, measure, and propose |
| `CLAUDE.md`, `PATCH-LEDGER.md`, `DESIGN-SYSTEM-REQUESTS.md` | **`main`** | read, and propose via the ledger |
| `tools/*.py` | **`main`** | read (they do not run in the design sandbox) |
| `github.md` | **Claude Design** | ignore — it is a receipt, not state |
| `DESIGN-DEBT-REGISTER.md`, `Action Items.dc.html` | **Claude Design** | read if useful |
| `_ds/**` | the design-system project | neither side hand-edits |

A file with one owner has one truth. Everything below is a consequence of that.

## 2. The rule that actually stops the drift

**If a claim contains a number, it belongs in a checker — not in prose.**

The evidence for this is the project's own history, and it is one-sided:

| Claim | Where it lived | Outcome |
|---|---|---|
| Hover states carry a print reset | hand-enumerated list | **broke 3×**, incl. its own fix |
| Sequence-tier membership | a list in the ledger | wrong; two slides missing |
| Eyebrow tracking `.26em` | prose in `CLAUDE.md` | forked from the token, unnoticed |
| "466 body-role uses lead 1.4" | prose in `CLAUDE.md` | 20 counter-examples in the delivered file |
| "Two navy fills survive on light slides" | prose in `CLAUDE.md` | measured three |
| Slide count, label order, appendix range | `checkdeck.py` | never recurred |
| Beat count, hover/print coverage, bare hex | `checkdeck.py` | never recurred |

So: **`CLAUDE.md` states the rule and names the check. `tools/checkdeck.py` holds the
number.** "`.bs` leads at `--lh-normal`, asserted by checkdeck" survives a rebuild; "466 uses
lead at 1.4" describes a copy that has already moved.

Corollary, learned twice: **a checker that has never failed may simply be blind.** Every new
assertion ships with an injected defect in `checkdeck_selftest.py`. The hover guard's first
draft counted `transition:none` in the reduced-motion branch as print coverage, and the
beat-count assertion matched only `<div data-sequence` in first position — both found that
way.

## 3. One value, one source

`dividerTone` carried a `data-props` default *and* a `?? "Bentonville navy"` runtime
fallback. Editing either left the other disagreeing, and the visible symptom was a setting
that reverted on every pull.

**Rule:** a default is declared once. A runtime fallback exists only for a prop that may
genuinely be absent, and it must read the same value the declaration gives.

## 4. What Claude Design owes on every sync

1. **Diff before pulling.** Compare the incoming deck against the local copy *before*
   overwriting, and name in the receipt any local edit that is about to be lost. Discovering
   it afterwards is how work disappears.
2. **Measure the delivered copy, never the rulebook.** Numbers in `github.md` say which copy
   they were checked against. The 11:35 leading entry is the worked example: CLAUDE.md said
   466, the file said 466 minus the big-rock template.
3. **Record `tree:`, not `commit:`, unless a real commit sha is in hand.** The design sandbox
   resolves tree hashes, not commits. A tree hash labelled as a commit is a claim nobody can
   verify later.
4. **Write local edits into the ledger in the same turn they are made**, as literal markup —
   not as a description of the change. A described edit cannot be re-applied; a find/replace
   pair can.

## 5. What Claude Code owes back

1. **`SYNC-STATE.md` at the repo root, rewritten on every push** — three lines is enough:

   ```
   commit: <full sha>
   branch: main
   pushed: <ISO 8601 timestamp>
   ```

   This is the one thing the design side cannot get for itself, and it turns "what changed
   since" from an inference into a fact.
2. **Apply the ledger's pending patches, or decline them in writing.** A patch that is
   neither applied nor rejected reads as applied on the next pull and quietly is not.
3. **Prefer a repo-side default over asking the design side to re-apply a setting.** The
   `dividerTone` loop only ended when the default moved into `data-props`.
4. **When a rule is reversed, say so in the rule** — the file already does this well
   ("this reverses what this file argued"), and it is why reversals stopped being re-litigated.

## 6. Handoff format for local → upstream

One block per change in `PATCH-LEDGER.md`, containing: the slide number, the exact `find`
string, the exact `replace` string, the rule it serves or breaks, and what was measured
before shipping it. Past ~slide 56 carry **markup, not prose** — the full-file read cap is
why two verbatim tail extracts had to be written once already.

## 7. Amending this contract

Write the amendment into `main` and note it in `github.md`'s next entry. A contract that only
one side can change is a preference.
