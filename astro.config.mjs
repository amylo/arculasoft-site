// @ts-check
import { defineConfig } from 'astro/config';

// Served from the custom domain arculasoft.com (public/CNAME), so no `base` path.
export default defineConfig({
  site: 'https://arculasoft.com',
  trailingSlash: 'ignore',
});
