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

function exists(relPath: string): boolean {
  return fs.existsSync(path.join(repoRoot, relPath));
}

function readPackageJson(): { scripts?: Record<string, string> } {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
}

describe('website repository layout', () => {
  it('keeps the Astro website implementation under website', () => {
    expect(exists('website/src')).toBe(true);
    expect(exists('website/docs')).toBe(true);
    expect(exists('website/drafts')).toBe(true);
    expect(exists('website/static')).toBe(true);
    expect(exists('website/astro.config.mjs')).toBe(true);
    expect(exists('website/vitest.config.ts')).toBe(true);
    expect(exists('website/tsconfig.json')).toBe(true);

    expect(exists('src')).toBe(false);
    expect(exists('docs')).toBe(false);
    expect(exists('drafts')).toBe(false);
    expect(exists('static')).toBe(false);
    expect(exists('astro.config.mjs')).toBe(false);
  });

  it('points root Astro commands at the website project root', () => {
    const scripts = readPackageJson().scripts ?? {};

    expect(scripts.dev).toBe('astro dev website');
    expect(scripts.start).toBe('astro dev website');
    expect(scripts.preview).toBe('astro preview website');
    expect(scripts.check).toBe('astro check --root website');
  });
});
