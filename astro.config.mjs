// @ts-check
import { defineConfig } from 'astro/config';

// Served from the custom domain arculasoft.com (public/CNAME), so no `base` path.
export default defineConfig({
  site: 'https://arculasoft.com',
  trailingSlash: 'ignore',
  // Old URLs from when the whole site was the Arcula product site.
  redirects: {
    '/release-notes': '/arcula/release-notes/',
  },
});
