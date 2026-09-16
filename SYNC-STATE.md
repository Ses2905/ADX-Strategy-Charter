# Sync state

Rewritten on every push to `main`, per `SYNC-CONTRACT.md` §5.1. This is the one
thing the design side cannot get for itself — it turns "what changed since" from an
inference into a fact.

```
commit: 12fb5cba922e00a9c86dc3776c74ffcc2c01196f
branch: updated-outline-(sep-11)
pushed: 2026-09-16T13:52:00Z
```

**The sha lags by one commit, and that is structural rather than an oversight.** A file
recording its own commit's sha cannot exist — the sha is not known until the commit that
contains the file is written. So this records the **commit this file's own commit sits
directly on top of**. To get the true head, add one: the commit that carries this file.

**`branch:` is the branch the work was pushed to, not always `main`.** Development
happens on `updated-outline-(sep-11)` and reaches `main` by pull request, so between a
push and a merge the sha above is on the feature branch and not yet on `main`. The
contract's §5.1 template assumed a direct push to `main`; this is the honest version of
the same three lines. If the design side needs a sha that is definitely on `main`, take
the merge commit rather than this one.
