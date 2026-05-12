/**
 * Local dev for one deck: node scripts/slidev-dev-deck.mjs <stem>
 * Example: node scripts/slidev-dev-deck.mjs game-audio-debug
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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const stem = process.argv[2];
if (!stem) {
  console.error('Usage: node scripts/slidev-dev-deck.mjs <stem>');
  process.exit(1);
}

const rows = listDeckPages(repoRoot);
const row = rows.find((r) => r.stem === stem);
if (!row) {
  console.error(`Unknown deck stem "${stem}". Is it under slidev/pages/ and not excluded?`);
  process.exit(1);
}

const pagePath = path.join(repoRoot, 'slidev', 'pages', `${stem}.md`);
const { raw, bodyAfter } = readFirstFrontmatterBlock(pagePath);
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
const deckTitle =
  (kv.deckListTitle && kv.deckListTitle.trim()) ||
  (kv.title && kv.title.trim()) ||
  h2 ||
  humanizeStem(stem);

const entryName = `.deck-build-auto-${stem}.md`;
const entryPath = path.join(repoRoot, 'slidev', entryName);
const md = buildDeckEntryMarkdown(repoRoot, stem, deckTitle);
fs.writeFileSync(entryPath, md, 'utf8');

const relEntry = path.join('slidev', entryName).split(path.sep).join('/');
const base = `/slides/${row.slug}/`;

console.log(`Starting Slidev for stem=${stem} slug=${row.slug} base=${base}`);
console.log('Stop the server, then delete the generated entry file if you want a clean tree.');

const r = spawnSync('npx', ['slidev', relEntry, '--base', base], {
  cwd: repoRoot,
  stdio: 'inherit',
  shell: true,
});

process.exit(r.status ?? 0);
