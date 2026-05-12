/**
 * Build each Slidev deck from slidev/pages/*.md into static/slides/<slug>/
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  buildDeckEntryMarkdown,
  listDeckPages,
  readFirstFrontmatterBlock,
  extractFirstH2,
  humanizeStem,
} from '../slidev/deck-pages-shared.mjs';
import { withPublicSubset } from './prepare-slidev-public-subset.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

function rmrf(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

function deckListTitleForStem(repoRoot, stem) {
  const filePath = path.join(repoRoot, 'slidev', 'pages', `${stem}.md`);
  const { raw, bodyAfter } = readFirstFrontmatterBlock(filePath);
  /** @type {Array<[string, string]>} */
  const pairs = [];
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const idx = t.indexOf(':');
    if (idx === -1) continue;
    const k = t.slice(0, idx).trim();
    let v = t.slice(idx + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    pairs.push([k, v]);
  }
  const kv = Object.fromEntries(pairs);
  const h2 = extractFirstH2(bodyAfter);
  return (
    (kv.deckListTitle && kv.deckListTitle.trim()) ||
    (kv.title && kv.title.trim()) ||
    h2 ||
    humanizeStem(stem)
  );
}

const rows = listDeckPages(repoRoot);
const outRoot = path.join(repoRoot, 'static', 'slides');
rmrf(outRoot);
fs.mkdirSync(outRoot, { recursive: true });

for (const row of rows) {
  const { stem, slug } = row;
  const deckTitle = deckListTitleForStem(repoRoot, stem);
  const entryName = `.deck-build-auto-${stem}.md`;
  const entryPath = path.join(repoRoot, 'slidev', entryName);
  const md = buildDeckEntryMarkdown(repoRoot, stem, deckTitle);
  fs.writeFileSync(entryPath, md, 'utf8');

  const outDir = path.join(outRoot, slug);
  rmrf(outDir);
  const base = `/slides/${slug}/`;
  const relEntry = path.join('slidev', entryName).split(path.sep).join('/');

  let status = 0;
  withPublicSubset(repoRoot, stem, () => {
    const r = spawnSync('npx', ['slidev', 'build', relEntry, '--base', base, '--out', outDir], {
      cwd: repoRoot,
      stdio: 'inherit',
      shell: true,
    });
    status = r.status ?? 1;
  });

  fs.rmSync(entryPath, { force: true });

  if (status !== 0) {
    process.exit(status);
  }
}

console.log(`Built ${rows.length} Slidev decks into static/slides/`);
