import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

function findRepoRoot(): string {
  let current = path.dirname(fileURLToPath(import.meta.url));
  while (current !== path.dirname(current)) {
    const packagePath = path.join(current, 'package.json');
    if (fs.existsSync(packagePath)) {
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8')) as { name?: string };
      if (pkg.name === 'game-audio-design') return current;
    }
    current = path.dirname(current);
  }
  throw new Error('Unable to locate repository root');
}

const repoRoot = findRepoRoot();

function read(relPath: string): string {
  return fs.readFileSync(path.join(repoRoot, relPath), 'utf8');
}

describe('build output verification command', () => {
  it('provides a root script that checks key generated routes', () => {
    const pkg = JSON.parse(read('package.json')) as { scripts?: Record<string, string> };
    const verifyScript = read('scripts/verify-build-output.mjs');

    expect(pkg.scripts?.['verify:build-output']).toBe('node scripts/verify-build-output.mjs');
    expect(verifyScript).toContain("path.join(repoRoot, 'build', 'index.html')");
    expect(verifyScript).toContain("path.join(repoRoot, 'build', 'rss.xml')");
    expect(verifyScript).toContain("path.join(repoRoot, 'build', 'slides', 'index.html')");
    expect(verifyScript).toContain('findArticleRoute');
    expect(verifyScript).toContain('findSlideDeckRoute');
  });
});
