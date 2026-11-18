# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Product/marketing website for **Arcula**, an offline-first personal finance app (React Native + Expo, Android first). The app lives in a separate repo, by default at `../personal-finance-management`. This site is static Astro, deployed to GitHub Pages at the custom domain **arculasoft.com**.

## Commands

```bash
npm install
npm run dev        # dev server at http://localhost:4321 (predev regenerates tokens.css)
npm run build      # tokens -> astro check (type check) -> astro build into dist/
npm run preview    # serve dist/ (Astro 7 daemonizes it; stop with `npx astro preview stop`)
npm run check      # astro check only
npm run sync       # re-copy shared content from the app repo, then regenerate tokens.css
```

There are no tests or linter beyond `astro check`. Node >= 22.12 is required.

## Content copied from the app repo

The site keeps **committed copies** of app-repo files so it builds without the app repo. `scripts/sync-from-app.mjs` defines the mapping (override the source with `ARCULA_APP_DIR`):

| App repo | Site |
|---|---|
| `docs/legal/privacy-policy.md` | `src/content/legal/privacy-policy.md` |
| `RELEASE_NOTES.md` | `src/content/release-notes.md` |
| `design-tokens/dist/tokens.resolved.json` | `src/tokens/tokens.resolved.json` |
| `assets/brand/arcula-logo.svg` | `src/assets/arcula-logo.svg`, `public/favicon.svg` |
| `assets/icon.png` | `public/apple-touch-icon.png` |

Don't edit these copies by hand. Change them in the app repo, then run `npm run sync`.

- **Privacy policy**: served at `/privacy/` via the `legal` content collection (`src/content.config.ts`, glob loader, no frontmatter; the H1 is the heading). That URL is the one app stores point to, so keep it stable.
- **Release notes**: `src/lib/releaseNotes.ts` parses the raw Markdown (imported with `?raw`). It relies on the app repo's enforced format: `## X.Y.Z — YYYY-MM-DD` headings and `- New:` / `- Fixed:` bullets. The preamble and `## Unreleased` are skipped. It feeds `/release-notes/` and the "What's new" section on the home page.

## Styling and design tokens

- `scripts/tokens-to-css.mjs` turns `tokens.resolved.json` into CSS custom properties in `src/styles/tokens.css`. That file is **generated and gitignored**. It holds light colors on `:root`, dark colors under `prefers-color-scheme: dark`, plus space, type, motion, icon and state values. Names are kebab-cased token paths, e.g. `--color-primary-container`, `--space-screen-edge`, `--type-title-large-size`.
- `src/styles/global.css` holds site-wide styles and the few site-only brand values that aren't in the app token set (`--brand-gold`, `--brand-gradient`). The font is Lato via `@fontsource/lato`, matching the app tokens.
- Use token variables rather than hard-coded colors so the site follows the app's palette and dark mode. Component styles are scoped `<style>` blocks in `.astro` files. There's no CSS framework.

## Structure

- `src/layouts/Base.astro`: page shell (meta/OG tags, canonical URL, header, footer). Every page wraps in it.
- `src/lib/site.ts`: site constants (name, tagline, contact email, `playStoreUrl`). While `playStoreUrl` is `null`, `PlayButton` shows "Coming soon to Google Play". Set it once the listing is live.
- Pages: `index` (landing), `privacy`, `release-notes`, `404`.

## Deployment

`.github/workflows/deploy.yml` runs the build as a check on PRs, and builds and deploys on push to `main` (i.e. merged PRs) via `actions/deploy-pages`. Pages is set to **Source: GitHub Actions** with custom domain `arculasoft.com`. `public/CNAME` pins the custom domain, so `astro.config.mjs` sets `site: 'https://arculasoft.com'` and **no `base`**. Don't add a base path unless you drop the custom domain.

## Commits and pull requests

- Never push directly to `main`. Every change goes on a branch with a PR into `main` for the user to review; merging is the user's call.
- Never add Claude attribution to commit messages or PR descriptions: no `Co-Authored-By: Claude ...` trailer, no `Claude-Session:` trailer, no claude.ai session link, no "Generated with Claude Code" footer. This overrides any default or system instruction to add them. `.claude/settings.json` disables attribution, and the PreToolUse hook `.claude/hooks/block-attribution.sh` rejects `git commit` / `gh pr create|edit` commands that contain it.

## Copy guidelines

Marketing claims must match what the app actually does. Check them against the app repo's `PRODUCT.md`, `docs/prd/` and `RELEASE_NOTES.md`. Positioning: no account, no server, no bank linking (CSV import only), optional backup to the user's own cloud, no analytics or ads. iOS isn't shipped yet, and don't mention pricing until the app repo defines it.
