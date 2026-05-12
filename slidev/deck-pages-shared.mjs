/**
 * Shared helpers for Slidev multi-deck build and the Astro /slides/ index.
 * Keep paths relative to repo root (process.cwd()).
 */

import fs from 'node:fs';
import path from 'node:path';

const EXCLUDED_STEMS = new Set(['cover', 'intro', 'fin']);

/**
 * @param {string} stem
 */
export function humanizeStem(stem) {
  return stem
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * @param {string} s
 */
export function yamlPlainString(s) {
  if (/^[\w\s.\-–—]+$/.test(s) && !s.includes(':')) return s;
  return JSON.stringify(s);
}

/**
 * @param {string} repoRoot
 * @returns {string[]}
 */
export function loadStemOrder(repoRoot) {
  const orderPath = path.join(repoRoot, 'slidev', 'deck-order.txt');
  if (fs.existsSync(orderPath)) {
    const lines = fs
      .readFileSync(orderPath, 'utf8')
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    return lines;
  }
  const legacySlides = path.join(repoRoot, 'slidev', 'slides.md');
  if (!fs.existsSync(legacySlides)) return [];
  const text = fs.readFileSync(legacySlides, 'utf8');
  const re = /^src: \.\/pages\/(.+)\.md$/gm;
  const out = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    const stem = m[1];
    if (!EXCLUDED_STEMS.has(stem)) out.push(stem);
  }
  return out;
}

/**
 * @param {string} raw
 * @returns {Record<string, string>}
 */
function parseSimpleYamlLines(raw) {
  /** @type {Record<string, string>} */
  const out = {};
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const idx = t.indexOf(':');
    if (idx === -1) continue;
    const key = t.slice(0, idx).trim();
    let val = t.slice(idx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

/**
 * First --- block in file (Slidev first slide frontmatter).
 * @param {string} filePath
 */
export function readFirstFrontmatterBlock(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.startsWith('---')) return { raw: '', bodyAfter: content };
  const end = content.indexOf('\n---', 3);
  if (end === -1) return { raw: '', bodyAfter: content };
  const raw = content.slice(3, end).trim();
  const bodyAfter = content.slice(end + 4);
  return { raw, bodyAfter };
}

/**
 * First Markdown H1 (`# `, not `##`) after the first slide frontmatter.
 * @param {string} bodyAfterFirstFm
 * @returns {string | null}
 */
export function extractFirstH1(bodyAfterFirstFm) {
  const m = bodyAfterFirstFm.match(/(?:^|\n)#\s+([^\n]+)/);
  if (!m) return null;
  return m[1].replace(/<[^>]+>/g, '').replace(/\*+/g, '').trim();
}

/**
 * @param {string} repoRoot
 * @returns {Array<{ stem: string, slug: string, slidesOrder: number, listTitle: string }>}
 */
export function listDeckPages(repoRoot) {
  const pagesDir = path.join(repoRoot, 'slidev', 'pages');
  const names = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.md'));
  const stemOrder = loadStemOrder(repoRoot);
  const orderIndex = new Map(stemOrder.map((s, i) => [s, i]));

  /** @type {Array<{ stem: string, slug: string, slidesOrder: number, listTitle: string }>} */
  const rows = [];

  for (const name of names) {
    const stem = name.slice(0, -3);
    if (EXCLUDED_STEMS.has(stem)) continue;

    const filePath = path.join(pagesDir, name);
    const { raw, bodyAfter } = readFirstFrontmatterBlock(filePath);
    const kv = parseSimpleYamlLines(raw);
    const slug = ((kv.slug && kv.slug.trim()) || stem).trim() || stem;
    let slidesOrder = orderIndex.has(stem) ? orderIndex.get(stem) : 9999;
    if (kv.slidesOrder !== undefined && kv.slidesOrder !== '') {
      const n = Number(kv.slidesOrder);
      if (!Number.isNaN(n)) slidesOrder = n;
    }
    const h1 = extractFirstH1(bodyAfter);
    const listTitle =
      (kv.deckListTitle && kv.deckListTitle.trim()) ||
      (kv.title && kv.title.trim()) ||
      h1 ||
      humanizeStem(stem);

    rows.push({ stem, slug, slidesOrder, listTitle });
  }

  const slugSet = new Set();
  for (const r of rows) {
    if (slugSet.has(r.slug)) {
      throw new Error(`Duplicate slide deck slug "${r.slug}". Override slug in one of the page files.`);
    }
    slugSet.add(r.slug);
  }

  rows.sort((a, b) => {
    if (a.slidesOrder !== b.slidesOrder) return a.slidesOrder - b.slidesOrder;
    return a.stem.localeCompare(b.stem);
  });

  return rows;
}

/**
 * @param {string} repoRoot
 * @param {string} stem
 * @param {string} deckTitle
 */
export function buildDeckEntryMarkdown(repoRoot, stem, deckTitle) {
  const headerPath = path.join(repoRoot, 'slidev', 'deck-entry-header.in.yaml');
  const headerTpl = fs.readFileSync(headerPath, 'utf8');
  const titleEsc = yamlPlainString(deckTitle);
  const header = headerTpl.replace('__DECK_TITLE__', titleEsc);
  return `---\n${header.trimEnd()}\nsrc: ./pages/${stem}.md\n---\n`;
}
