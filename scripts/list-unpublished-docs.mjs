import fs from 'fs';
import path from 'path';

function parseDateInFrontmatter(content) {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = m[1];
  const dm = fm.match(/^date:\s*(.+)$/m);
  if (!dm) return null;
  return dm[1].trim().replace(/^["']|["']$/g, '');
}

function isValidDate(s) {
  if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T00:00:00.000Z`);
  return !Number.isNaN(d.getTime());
}

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'draft') continue;
      out.push(...walk(full));
    } else if (ent.isFile() && ent.name.endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

const docsRoot = path.join(process.cwd(), 'docs');

const skipRel = (rel) => {
  const n = rel.replace(/\\/g, '/').toLowerCase();
  if (n === 'home.md' || n === 'log.md') return true;
  if (n.startsWith('resource/')) return true;
  return false;
};

const files = walk(docsRoot);
const unpublished = [];
for (const full of files) {
  const rel = path.relative(docsRoot, full).replace(/\\/g, '/');
  if (skipRel(rel)) continue;
  const raw = fs.readFileSync(full, 'utf8');
  const dateVal = parseDateInFrontmatter(raw);
  if (!isValidDate(dateVal)) unpublished.push(rel);
}

console.log(unpublished.join('\n'));
