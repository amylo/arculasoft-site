---
name: sync-app-release
description: Update arculasoft.com after a new Arcula app release. Pulls the latest app repo main, runs `npm run sync`, checks landing-page copy against the new release notes, builds, and opens a PR. Use when the user says the app had a release, asks to update/sync the site from the app, or invokes /sync-app-release.
argument-hint: "[version, e.g. 0.10.1 — optional, defaults to newest in RELEASE_NOTES.md]"
---

# Sync the site with a new Arcula app release

Goal: one PR into `main` that brings the site's committed copies up to date with the app repo
and keeps marketing copy accurate. Follow CLAUDE.md rules: never push to `main`, no Claude
attribution in commits or PR text.

App repo: `$ARCULA_APP_DIR`, else `../personal-finance-management` (relative to this repo).

## 1. Get the app repo current

```bash
cd <app repo>
git status --porcelain        # must be empty
git branch --show-current     # expect main
git fetch -q origin
git log --oneline main..origin/main
```

- Clean and on `main`: `git merge --ff-only origin/main`.
- Dirty, on another branch, or ff fails: do not touch it. Stop and ask the user (they may be
  mid-work there). Do not stash, reset, or switch branches in the app repo.

## 2. Identify the release

Read the newest `## X.Y.Z — YYYY-MM-DD` section of `RELEASE_NOTES.md` in the app repo (or the
version given as the skill argument). Compare against `src/content/release-notes.md` here to see
which versions are new. If nothing is new and `npm run sync` produces no real diff, tell the user
the site is already current and stop.

## 3. Branch and sync

In this repo, starting from an up-to-date `main` with a clean tree:

```bash
git switch main && git pull --ff-only
git switch -c chore/sync-app-<version>
npm run sync
git status --short
git diff --stat
```

`git status` may list files whose only difference is CRLF vs LF; `git diff --stat` shows the
real changes. Discard the line-ending-only ones with `git checkout -- <file>` so they don't
end up in the commit. Review every real change:

- `src/content/release-notes.md`: expected.
- `src/content/legal/privacy-policy.md`: the `/privacy/` URL is what app stores point at. Read
  the diff and call out the change to the user in the summary.
- tokens / logo / icon: note visual changes; check the dev server or build if they're large.

## 4. Check marketing copy

The "What's new" block and `/release-notes/` update automatically. The hand-written copy in
`src/pages/index.astro` (privacy points, feature cards, hero) does not. For each new entry:

- Does it contradict anything on the site? (e.g. a feature removed or renamed, a different
  screen label.) Fix the copy.
- Is it a headline feature worth a feature card or wording change? Propose it to the user rather
  than adding it unasked; patch releases with small fixes usually need nothing.

Claims must match the app repo (`PRODUCT.md`, `docs/prd/`, `RELEASE_NOTES.md`). Keep the
positioning in CLAUDE.md: no account, no server, no bank linking, optional own-cloud backup, no
analytics/ads, Android only, no pricing.

## 5. Build

```bash
npm run build
grep -o "What’s new in [0-9.]*" dist/index.html   # should show the new version
```

Fix any `astro check` failure before continuing. A parse failure in `src/lib/releaseNotes.ts`
means the app repo changed its release-notes format; report it rather than editing the copy.

## 6. Commit, push, PR

```bash
git add -A src public
git commit -m "Sync site with Arcula <version> release"
git push -u origin HEAD
gh pr create --base main --title "Sync site with Arcula <version>" --body "<summary>"
```

PR body: versions added, the user-facing highlights, any privacy-policy/asset changes, any copy
edits, and that `npm run build` passed. No attribution lines.

## 7. Report

Give the user the PR URL, the version(s) synced, and anything that needs their decision (copy
proposals, privacy-policy changes). Merging is their call.
