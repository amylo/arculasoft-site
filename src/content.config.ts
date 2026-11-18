import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// Legal pages copied verbatim from the app repo (`npm run sync`). They carry no
// frontmatter; the H1 inside the Markdown is the page heading.
const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
});

export const collections = { legal };
