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

function readPackageJson(): { scripts?: Record<string, string> } {
  return JSON.parse(read('package.json'));
}

describe('Netlify deployment build contract', () => {
  it('keeps the root build command as the Netlify entry point', () => {
    const scripts = readPackageJson().scripts ?? {};
    const netlifyConfig = read('netlify.toml');

    expect(scripts.build).toBe('npm run slidev:build && astro build --root website');
    expect(netlifyConfig).toContain('command = "npm run build"');
    expect(netlifyConfig).toContain('publish = "build"');
  });

  it('builds generated slide decks into the website static directory', () => {
    const buildScript = read('scripts/build-slidev-decks.mjs');

    expect(buildScript).toContain("path.join(repoRoot, 'website', 'static', 'slides')");
    expect(buildScript).not.toContain("path.join(repoRoot, 'static', 'slides')");
    expect(buildScript).toContain('Built ${rows.length} Slidev decks into website/static/slides/');
  });
});
