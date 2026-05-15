import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function assertFile(filePath, label) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error(`Missing ${label}: ${path.relative(repoRoot, filePath)}`);
  }
}

function findArticleRoute() {
  const buildRoot = path.join(repoRoot, 'build');
  const excluded = new Set(['slides', '_astro', 'img']);
  for (const dirent of fs.readdirSync(buildRoot, { withFileTypes: true })) {
    if (!dirent.isDirectory() || excluded.has(dirent.name)) continue;
    const indexPath = path.join(buildRoot, dirent.name, 'index.html');
    if (fs.existsSync(indexPath)) return indexPath;
  }
  throw new Error('Missing at least one generated article route');
}

function findSlideDeckRoute() {
  const slidesRoot = path.join(repoRoot, 'build', 'slides');
  for (const dirent of fs.readdirSync(slidesRoot, { withFileTypes: true })) {
    if (!dirent.isDirectory()) continue;
    const indexPath = path.join(slidesRoot, dirent.name, 'index.html');
    if (fs.existsSync(indexPath)) return indexPath;
  }
  throw new Error('Missing at least one generated slide deck route');
}

assertFile(path.join(repoRoot, 'build', 'index.html'), 'home route');
assertFile(findArticleRoute(), 'article route');
assertFile(path.join(repoRoot, 'build', 'rss.xml'), 'RSS route');
assertFile(path.join(repoRoot, 'build', 'slides', 'index.html'), 'slides index route');
assertFile(findSlideDeckRoute(), 'slide deck route');

console.log('Verified build output routes.');
