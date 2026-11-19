# ArculaSoft website

Company site for ArculaSoft, served at https://arculasoft.com via GitHub Pages. Products live under their own path; the Arcula app is at `/arcula/`. Built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run sync     # re-copy privacy policy, release notes, tokens and logo from the app repo
```

Pushing to `main` deploys via `.github/workflows/deploy.yml`.
