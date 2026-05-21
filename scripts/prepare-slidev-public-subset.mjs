/**
 * For each Slidev deck build, materialize a minimal slides/public tree so Vite
 * does not copy the full multi-deck asset library into every /static/slides/<slug>/.
 *
 * Source of truth stays: one slides/public/ in the repo (unchanged layout).
 */

import fs from 'node:fs';
import path from 'node:path';

const STAGING_NAME = '.deck-public-staging';
const BACKUP_NAME = 'public.__full__';

/** Always ship these paths if they exist (deck entry / global UI). */
const ALWAYS_COPY_REL = ['GAD_Logo.ico'];

/**
 * @param {string} s
 */
function stripHtmlComments(s) {
  return s.replace(/<!--[\s\S]*?-->/g, '\n');
}

/**
 * @param {string} p
 */
function cleanUrlPath(p) {
  const q = p.indexOf('?');
  const h = p.indexOf('#');
  let end = p.length;
  if (q !== -1) end = Math.min(end, q);
  if (h !== -1) end = Math.min(end, h);
  return p.slice(0, end);
}

/**
 * @param {string} text
 * @param {Set<string>} out posix relative paths under public (no leading slash)
 */
function collectAbsolutePublicPaths(text, out) {
  const patterns = [
    /\]\((\/[^)\s]+)\)/g,
    /src\s*=\s*"(\/[^"]+)"/gi,
    /src\s*=\s*'(\/[^']+)'/gi,
    /href\s*=\s*"(\/[^"]+)"/gi,
    /url\(\s*['"]?(\/[^)'"\s]+)/gi,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(text)) !== null) {
      let p = cleanUrlPath(m[1].trim());
      if (!p.startsWith('/') || p.startsWith('//')) continue;
      if (/^\/https?:/i.test(p)) continue;
      const rel = p.slice(1);
      if (!rel || rel.includes('..')) continue;
      out.add(rel);
    }
  }
}

/**
 * @param {string} fmRaw
 * @param {Set<string>} out
 */
function collectFrontmatterAssetPaths(fmRaw, out) {
  const keys = ['image', 'background', 'backgroundimage', 'favicon'];
  for (const line of fmRaw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const idx = t.indexOf(':');
    if (idx === -1) continue;
    const key = t.slice(0, idx).trim().toLowerCase();
    if (!keys.includes(key)) continue;
    let v = t.slice(idx + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    v = cleanUrlPath(v.trim());
    if (!v || /^https?:\/\//i.test(v)) continue;
    if (v.startsWith('/')) out.add(v.slice(1));
    else out.add(v);
  }
}

/**
 * @param {string} text
 * @param {Set<string>} out
 */
function collectAllFrontmatterAssetPaths(text, out) {
  const re = /(?:^|\r?\n)---\r?\n([\s\S]*?)\r?\n---(?=\r?\n|$)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    collectFrontmatterAssetPaths(m[1], out);
  }
}

function rmrf(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

/**
 * Restore a previous full public backup before starting a new subset swap.
 * A leftover backup means a prior build was interrupted during cleanup.
 * @param {string} repoRoot
 */
function restoreBackupIfPresent(repoRoot) {
  const publicDir = path.join(repoRoot, 'slides', 'public');
  const backupDir = path.join(repoRoot, 'slides', BACKUP_NAME);
  if (!fs.existsSync(backupDir)) return;
  if (fs.existsSync(publicDir)) rmrf(publicDir);
  fs.renameSync(backupDir, publicDir);
}

/**
 * @param {string} publicRoot
 * @param {string} relPosix
 * @returns {string | null} absolute source path
 */
function resolveExistingPublicPath(publicRoot, relPosix) {
  if (!relPosix || relPosix.includes('..')) return null;
  const a = path.join(publicRoot, ...relPosix.split('/'));
  if (fs.existsSync(a)) return a;
  try {
    const dec = decodeURIComponent(relPosix);
    if (dec !== relPosix) {
      const b = path.join(publicRoot, ...dec.split('/'));
      if (fs.existsSync(b)) return b;
    }
  } catch {
    /* ignore */
  }
  return null;
}

/**
 * Copy file or directory from public root into staging (posix rel path).
 * @param {string} publicRoot
 * @param {string} stagingRoot
 * @param {string} relPosix
 */
function copyIntoStaging(publicRoot, stagingRoot, relPosix) {
  const src = resolveExistingPublicPath(publicRoot, relPosix);
  if (!src) return;
  const relFromPublic = path.relative(publicRoot, src);
  if (relFromPublic.startsWith('..') || path.isAbsolute(relFromPublic)) return;
  const dest = path.join(stagingRoot, relFromPublic);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const st = fs.statSync(src);
  if (st.isDirectory()) {
    fs.cpSync(src, dest, { recursive: true });
  } else {
    fs.copyFileSync(src, dest);
  }
}

/**
 * Layouts / shared Vue may reference /… assets not mentioned in deck markdown.
 * @param {string} repoRoot
 * @param {Set<string>} out
 */
function collectSharedVuePublicPaths(repoRoot, out) {
  for (const sub of ['layouts', 'components']) {
    const dir = path.join(repoRoot, 'slides', sub);
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith('.vue')) continue;
      const t = fs.readFileSync(path.join(dir, name), 'utf8');
      collectAbsolutePublicPaths(t, out);
    }
  }
}

/**
 * Build slides/.deck-public-staging with only assets needed for pages/<stem>.md.
 * @param {string} repoRoot
 * @param {string} stem
 * @returns {string} absolute path to staging directory (slides/.deck-public-staging)
 */
export function materializePublicSubsetStaging(repoRoot, stem) {
  const publicRoot = path.join(repoRoot, 'slides', 'public');
  const stagingRoot = path.join(repoRoot, 'slides', STAGING_NAME);

  rmrf(stagingRoot);
  fs.mkdirSync(stagingRoot, { recursive: true });

  const pagePath = path.join(repoRoot, 'slides', 'pages', `${stem}.md`);
  const full = fs.readFileSync(pagePath, 'utf8');
  const fmEnd = full.indexOf('\n---', 3);
  const body = fmEnd === -1 ? full : full.slice(fmEnd + 4);

  /** @type {Set<string>} */
  const rel = new Set();
  for (const a of ALWAYS_COPY_REL) rel.add(a);
  collectAllFrontmatterAssetPaths(full, rel);
  collectAbsolutePublicPaths(stripHtmlComments(body), rel);
  collectSharedVuePublicPaths(repoRoot, rel);

  const stemDir = path.join(publicRoot, stem);
  if (fs.existsSync(stemDir) && fs.statSync(stemDir).isDirectory()) {
    fs.cpSync(stemDir, path.join(stagingRoot, stem), { recursive: true });
  }

  for (const r of rel) {
    copyIntoStaging(publicRoot, stagingRoot, r);
  }

  return stagingRoot;
}

/**
 * Swap slides/public to subset for the duration of sync fn; always restores full public.
 * @param {string} repoRoot
 * @param {string} stem
 * @param {() => void} fn
 */
export function withPublicSubset(repoRoot, stem, fn) {
  const publicDir = path.join(repoRoot, 'slides', 'public');
  const backupDir = path.join(repoRoot, 'slides', BACKUP_NAME);
  const stagingMarker = path.join(repoRoot, 'slides', STAGING_NAME);

  restoreBackupIfPresent(repoRoot);
  materializePublicSubsetStaging(repoRoot, stem);
  if (!fs.existsSync(publicDir)) {
    throw new Error('[prepare-slidev-public-subset] slides/public missing before swap');
  }

  fs.renameSync(publicDir, backupDir);
  fs.renameSync(stagingMarker, publicDir);
  try {
    fn();
  } finally {
    rmrf(publicDir);
    fs.renameSync(backupDir, publicDir);
    rmrf(stagingMarker);
  }
}
