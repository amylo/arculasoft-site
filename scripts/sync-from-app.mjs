// Copies shared content from the Arcula app repo into this site.
// The site keeps its own copies (committed) so it builds without the app repo.
// Usage: npm run sync   (ARCULA_APP_DIR overrides the default sibling path)
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const appDir = resolve(process.env.ARCULA_APP_DIR ?? resolve(root, '../personal-finance-management'));

const files = [
  ['docs/legal/privacy-policy.md', 'src/content/legal/privacy-policy.md'],
  ['RELEASE_NOTES.md', 'src/content/release-notes.md'],
  ['design-tokens/dist/tokens.resolved.json', 'src/tokens/tokens.resolved.json'],
  ['assets/brand/arcula-logo.svg', 'src/assets/arcula-logo.svg'],
  ['assets/brand/arcula-logo.svg', 'public/favicon.svg'],
  ['assets/icon.png', 'public/apple-touch-icon.png'],
];

for (const [from, to] of files) {
  const dest = resolve(root, to);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(resolve(appDir, from), dest);
  console.log(`copied ${from} -> ${to}`);
}
