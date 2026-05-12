/**
 * After multi-deck Slidev builds, each deck copies the full slidev/public tree into
 * static/slides/<slug>/, multiplying disk usage (~N × public size). GitHub Pages
 * artifacts must stay under ~10GB and must not rely on symlinks/hard links.
 *
 * This pass: for every relative file path (excluding per-deck Vite `assets/`),
 * if all copies under different slugs are byte-identical, keep one copy under
 * static/slides/__shared/<rel> and rewrite text references from /slides/<slug>/...
 * to /slides/__shared/...
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @param {string} dir */
function walkFiles(dir) {
  /** @type {string[]} */
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'assets' || ent.name === '__shared') continue;
      out.push(...walkFiles(p));
    } else if (ent.isFile()) {
      out.push(p);
    }
  }
  return out;
}

/** @param {string} filePath */
function sha256File(filePath) {
  const h = crypto.createHash('sha256');
  h.update(fs.readFileSync(filePath));
  return h.digest('hex');
}

const TEXT_EXT = new Set([
  '.html',
  '.js',
  '.css',
  '.json',
  '.svg',
  '.xml',
  '.txt',
  '.map',
  '.md',
]);

/** @param {string} filePath */
function isProbablyText(filePath) {
  return TEXT_EXT.has(path.extname(filePath).toLowerCase());
}

const SITE_ORIGIN = 'https://gad.soundoer.com';

/**
 * @param {string} repoRoot
 */
export function dedupeSlideDeckPublicCopies(repoRoot) {
  const slidesRoot = path.join(repoRoot, 'static', 'slides');
  if (!fs.existsSync(slidesRoot)) {
    console.warn('[dedupe-slide-decks] static/slides missing, skip');
    return;
  }

  const slugs = fs
    .readdirSync(slidesRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== '__shared')
    .map((d) => d.name)
    .sort();

  if (slugs.length === 0) return;

  /** @type {Map<string, Array<{ slug: string, abs: string }>>} */
  const byRel = new Map();

  for (const slug of slugs) {
    const deckRoot = path.join(slidesRoot, slug);
    for (const abs of walkFiles(deckRoot)) {
      const rel = path.relative(deckRoot, abs).split(path.sep).join('/');
      if (rel.startsWith('..')) continue;
      const arr = byRel.get(rel) ?? [];
      arr.push({ slug, abs });
      byRel.set(rel, arr);
    }
  }

  /** @type {Array<{ from: string, to: string }>} */
  const replacements = [];
  let mergedFiles = 0;
  let mergedBytes = 0;

  for (const [rel, copies] of byRel) {
    if (copies.length < 2) continue;

    const hashes = copies.map((c) => sha256File(c.abs));
    const first = hashes[0];
    if (!hashes.every((h) => h === first)) continue;

    const sharedAbs = path.join(slidesRoot, '__shared', ...rel.split('/'));
    fs.mkdirSync(path.dirname(sharedAbs), { recursive: true });
    fs.copyFileSync(copies[0].abs, sharedAbs);

    for (const c of copies) {
      const st = fs.statSync(c.abs);
      mergedBytes += st.size;
      fs.unlinkSync(c.abs);
      mergedFiles += 1;
      const from = `/slides/${c.slug}/${rel}`;
      const to = `/slides/__shared/${rel}`;
      replacements.push({ from, to });
      replacements.push({
        from: `${SITE_ORIGIN}/slides/${c.slug}/${rel}`,
        to: `${SITE_ORIGIN}/slides/__shared/${rel}`,
      });
    }
  }

  if (replacements.length === 0) {
    console.log('[dedupe-slide-decks] no identical cross-deck files found, skip rewrite');
    return;
  }

  /** @type {Array<{ from: string, to: string }>} */
  const expanded = [];
  for (const r of replacements) {
    expanded.push(r);
    if (r.from.includes(' ')) {
      expanded.push({
        from: r.from.replace(/ /g, '%20'),
        to: r.to.replace(/ /g, '%20'),
      });
    }
  }
  expanded.sort((a, b) => b.from.length - a.from.length);

  /** @type {string[]} */
  const textFiles = [];
  function walkText(dir) {
    if (!fs.existsSync(dir)) return;
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walkText(p);
      } else if (ent.isFile() && isProbablyText(p)) {
        textFiles.push(p);
      }
    }
  }
  walkText(slidesRoot);

  let touched = 0;
  for (const filePath of textFiles) {
    let s = fs.readFileSync(filePath, 'utf8');
    const orig = s;
    for (const { from, to } of expanded) {
      if (s.includes(from)) s = s.split(from).join(to);
    }
    if (s !== orig) {
      fs.writeFileSync(filePath, s, 'utf8');
      touched += 1;
    }
  }

  if (replacements.length > 0 && touched === 0) {
    console.error(
      '[dedupe-slide-decks] deduped files on disk but no text files matched URL patterns; extend scripts/dedupe-slide-decks-public.mjs',
    );
    process.exit(1);
  }

  // Remove empty directories under each slug (best-effort)
  for (const slug of slugs) {
    const deckRoot = path.join(slidesRoot, slug);
    if (!fs.existsSync(deckRoot)) continue;
    try {
      pruneEmptyDirs(deckRoot, deckRoot);
    } catch {
      /* ignore */
    }
  }

  console.log(
    `[dedupe-slide-decks] removed ${mergedFiles} duplicate file copies (${(mergedBytes / 1024 / 1024).toFixed(1)} MB); URL rewrite rules: ${replacements.length}; text files patched: ${touched}`,
  );
}

/**
 * @param {string} dir
 * @param {string} rootStop never delete this directory itself
 */
function pruneEmptyDirs(dir, rootStop) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    const sub = path.join(dir, ent.name);
    pruneEmptyDirs(sub, rootStop);
  }
  if (dir !== rootStop && fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}

// CLI
const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const repoRoot = path.resolve(__dirname, '..');
  dedupeSlideDeckPublicCopies(repoRoot);
}
