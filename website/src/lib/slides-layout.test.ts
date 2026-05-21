import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
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

function read(relPath: string): string {
  return fs.readFileSync(path.join(repoRoot, relPath), 'utf8');
}

function readPackageJson(): { scripts?: Record<string, string> } {
  return JSON.parse(read('package.json'));
}

describe('slides repository layout', () => {
  it('keeps the course slide source under slides', () => {
    expect(exists('slides/pages')).toBe(true);
    expect(exists('slides/public')).toBe(true);
    expect(exists('slides/layouts')).toBe(true);
    expect(exists('slides/components')).toBe(true);
    expect(exists('slides/styles')).toBe(true);
    expect(exists('slides/deck-pages-shared.mjs')).toBe(true);
    expect(exists('slides/deck-entry-header.in.yaml')).toBe(true);
    expect(exists('slides/deck-order.txt')).toBe(true);

    expect(exists('slidev')).toBe(false);
  });

  it('keeps Slidev command names while scripts read from slides', () => {
    const scripts = readPackageJson().scripts ?? {};
    expect(scripts['slidev:dev']).toBe('node scripts/slidev-dev-deck.mjs');
    expect(scripts['slidev:build']).toBe('node scripts/build-slidev-decks.mjs');
    expect(scripts['slidev:sync-public']).toBe('node scripts/sync-slidev-public.mjs --resume');

    const buildScript = read('scripts/build-slidev-decks.mjs');
    const devScript = read('scripts/slidev-dev-deck.mjs');
    const publicSubsetScript = read('scripts/prepare-slidev-public-subset.mjs');
    const slidesIndexPage = read('website/src/pages/slides/index.astro');

    expect(buildScript).toContain("'slides'");
    expect(devScript).toContain("'slides'");
    expect(publicSubsetScript).toContain("'slides'");
    expect(slidesIndexPage).toContain('../../../../slides/deck-pages-shared.mjs');
    expect(slidesIndexPage).toContain('const repoRoot = process.cwd()');
    expect(slidesIndexPage).not.toContain("path.resolve(__dirname, '../../../..')");

    expect(buildScript).not.toContain('../slidev/deck-pages-shared.mjs');
    expect(devScript).not.toContain('../slidev/deck-pages-shared.mjs');
    expect(buildScript).not.toContain("path.join(repoRoot, 'slidev'");
    expect(devScript).not.toContain("path.join(repoRoot, 'slidev'");
    expect(publicSubsetScript).not.toContain("path.join(repoRoot, 'slidev'");
    expect(publicSubsetScript).toContain('restoreBackupIfPresent(repoRoot)');
    expect(publicSubsetScript).not.toContain('if (fs.existsSync(backupDir)) rmrf(backupDir);');
  });

  it('keeps the slides index as a searchable channel list aligned with articles', () => {
    const slidesIndexPage = read('website/src/pages/slides/index.astro');

    expect(slidesIndexPage).not.toContain('<h1 class="slides-index-title">Slides</h1>');
    expect(slidesIndexPage).not.toContain('Standalone Slidev decks. Open a link below.');
    expect(slidesIndexPage).toContain('id="slides-search"');
    expect(slidesIndexPage).toContain('aria-label="Search title or description"');
    expect(slidesIndexPage).toContain('id="slides-count"');
    expect(slidesIndexPage).toContain('slides / ');
    expect(slidesIndexPage).toContain('matching');
    expect(slidesIndexPage).toContain('data-title=');
    expect(slidesIndexPage).toContain('data-description=');
    expect(slidesIndexPage).not.toContain('data-slug=');
    expect(slidesIndexPage).toContain('class="slides-index-description"');
    expect(slidesIndexPage).not.toContain('class="slides-index-meta"');
    expect(slidesIndexPage).toContain('target="_blank"');
    expect(slidesIndexPage).toContain('rel="noopener noreferrer"');
    expect(slidesIndexPage).toMatch(/\.slides-index-list a\s*\{[\s\S]*color:\s*var\(--fg\)/);
    expect(slidesIndexPage).toMatch(/\.slides-index-list a\s*\{[\s\S]*text-decoration:\s*none/);
    expect(slidesIndexPage).toMatch(/\.slides-index-list a\s*\{[\s\S]*font-size:\s*1\.25rem/);
    expect(slidesIndexPage).toMatch(/\.slides-index-description\s*\{[\s\S]*font-size:\s*0\.94rem/);
  });

  it('requires descriptions for all slide decks listed on the website', async () => {
    const helperUrl = pathToFileURL(path.join(repoRoot, 'slides/deck-pages-shared.mjs')).href;
    const { listDeckPages } = (await import(helperUrl)) as {
      listDeckPages: (root: string) => Array<{ stem: string; description?: unknown }>;
    };
    const decks = listDeckPages(repoRoot);

    expect(decks.length).toBeGreaterThan(0);

    for (const deck of decks) {
      const source = read(`slides/pages/${deck.stem}.md`);
      const firstFrontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);

      expect(deck.description, `${deck.stem} should expose description`).toEqual(
        expect.any(String),
      );
      expect((deck.description as string).trim(), `${deck.stem} should expose non-empty description`).not.toBe('');
      expect(firstFrontmatter, `${deck.stem} should have first-slide frontmatter`).not.toBeNull();
      expect(firstFrontmatter?.[1], `${deck.stem} should define description`).toMatch(
        /^description:\s*\S/m,
      );
    }
  });
});
