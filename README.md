# ADX Strategy Charter

Working repo for the **Advertiser Experience — Strategic Vision & Team Charter**
deck (Walmart Global Ads).

## Contents

```
deck/
  Advertiser_Experience_..._Sept-15-2026_source.pptx   the Sept 15 outline (input)
  Advertiser_Experience_..._v2.pptx                    current version (output)
  CHANGELOG.md                                         every change, with rationale
  outline-v2.md                                        full text + speaker notes of v2
tools/
  build_v2.py                                          reproducible build: source -> v2
  dump_deck.py                                          extract slide text + notes to markdown
```

## Rebuilding

```bash
python3 -m pip install python-pptx
python3 tools/build_v2.py \
  deck/Advertiser_Experience_Strategic_Vision_Team_Charter_Sept-15-2026_source.pptx \
  deck/Advertiser_Experience_Strategic_Vision_Team_Charter_v2.pptx
```

The build is deterministic and idempotent. It edits text at the run level, so
theme, masters, layouts, typography, positioning and media are preserved exactly.
It fails loudly if any expected string is missing, and prints any placeholder it
deliberately left alone.

## Why the build is a script

Edits live in `tools/build_v2.py` as data (`SUBHEADS`, `REPLACEMENTS`, `SOURCES`),
not as manual changes to a binary. That means each revision is reviewable as a
diff, re-appliable if the source outline is revised, and the repo — not anyone's
memory — is the record of what changed and why.

## Reading the current state

`deck/outline-v2.md` is the full deck as text, slide by slide, including speaker
notes. Read it to get current without opening PowerPoint.

`deck/CHANGELOG.md` ends with an **Open — needs human input** section. That is the
short list of what is still unresolved in the deck.
