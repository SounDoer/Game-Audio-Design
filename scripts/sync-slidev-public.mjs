/**
 * Syncs Game-Audio-Design-Slidev public/ into slidev/public/ (jsDelivr then raw.githubusercontent.com).
 * Usage:
 *   node scripts/sync-slidev-public.mjs              # all files
 *   node scripts/sync-slidev-public.mjs --skip-mp4   # images / audio except mp4
 *   node scripts/sync-slidev-public.mjs --mp4-only
 *   node scripts/sync-slidev-public.mjs --resume    # skip files that already exist with size > 0
 */
import { execFileSync } from 'node:child_process';
import { mkdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const OWNER = 'SounDoer';
const REPO = 'Game-Audio-Design-Slidev';
const BRANCH = 'main';
const TREE_URL = `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`;
const CDN_BASE = `https://cdn.jsdelivr.net/gh/${OWNER}/${REPO}@${BRANCH}`;
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}`;
const DEST = join(import.meta.dirname, '..', 'slidev', 'public');

const args = new Set(process.argv.slice(2));
const mp4Only = args.has('--mp4-only');
const skipMp4 = args.has('--skip-mp4');
const resume = args.has('--resume');

if (mp4Only && skipMp4) {
  throw new Error('Use only one of --mp4-only or --skip-mp4');
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'Game-Audio-Design-migration-script',
    },
  });
  if (!res.ok) {
    throw new Error(`GET ${url} -> ${res.status}`);
  }
  return res.json();
}

async function downloadFile(cdnPath, outPath) {
  const urls = [`${CDN_BASE}/${cdnPath}`, `${RAW_BASE}/${cdnPath}`];
  let lastErr = '';
  for (const url of urls) {
    try {
      await mkdir(dirname(outPath), { recursive: true });
      execFileSync(
        'curl',
        [
          '-fsSL',
          '--http1.1',
          '--retry',
          '5',
          '--retry-delay',
          '5',
          '--connect-timeout',
          '30',
          '--max-time',
          '0',
          '-o',
          outPath,
          url,
        ],
        { stdio: 'pipe' },
      );
      return;
    } catch (e) {
      lastErr = String(e?.message ?? e);
    }
  }
  throw new Error(`curl failed for ${cdnPath}: ${lastErr}`);
}

const tree = await fetchJson(TREE_URL);
const blobs = tree.tree.filter((e) => e.type === 'blob' && e.path.startsWith('public/'));
const wanted = blobs.filter((e) => {
  const lower = e.path.toLowerCase();
  const isMp4 = lower.endsWith('.mp4');
  if (mp4Only) return isMp4;
  if (skipMp4 && isMp4) return false;
  return true;
});

console.log(`Downloading ${wanted.length} file(s) to ${DEST} ...`);

let ok = 0;
for (const entry of wanted) {
  const rel = entry.path.slice('public/'.length);
  const outPath = join(DEST, rel);
  process.stdout.write(`${rel} ... `);
  try {
    if (resume) {
      try {
        const st = await stat(outPath);
        if (st.size > 0) {
          ok += 1;
          console.log('skip (exists)');
          continue;
        }
      } catch {
        /* download */
      }
    }
    await downloadFile(entry.path, outPath);
    ok += 1;
    console.log('ok');
  } catch (err) {
    console.log('FAIL');
    throw err;
  }
}

console.log(`Done (${ok} files).`);
