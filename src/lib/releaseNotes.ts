// Parses the app's RELEASE_NOTES.md (copied to src/content/release-notes.md).
// Format is enforced by the app repo's scripts/release-notes.mjs:
//   ## <major>.<minor>.<patch> — <YYYY-MM-DD>
//   - New: <text>   |   - Fixed: <text>
// The preamble before the first `##` and the `## Unreleased` section are skipped.
import raw from '../content/release-notes.md?raw';

export type ReleaseNote = { kind: 'New' | 'Fixed'; text: string };
export type Release = { version: string; date: string; notes: ReleaseNote[] };

const HEADING = /^## (\d+\.\d+\.\d+) — (\d{4}-\d{2}-\d{2})\s*$/;
const ENTRY = /^- (New|Fixed): (.+)$/;

export function parseReleaseNotes(source: string = raw): Release[] {
  const releases: Release[] = [];
  let current: Release | null = null;
  for (const line of source.split(/\r?\n/)) {
    if (line.startsWith('## ')) {
      const m = HEADING.exec(line);
      current = m ? { version: m[1]!, date: m[2]!, notes: [] } : null;
      if (current) releases.push(current);
      continue;
    }
    const e = current && ENTRY.exec(line);
    if (current && e) current.notes.push({ kind: e[1] as ReleaseNote['kind'], text: e[2]! });
  }
  const key = (v: string) => v.split('.').map(Number);
  return releases.sort((a, b) => {
    const [x, y] = [key(a.version), key(b.version)];
    return y[0]! - x[0]! || y[1]! - x[1]! || y[2]! - x[2]!;
  });
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}
