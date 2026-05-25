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

function read(relPath: string): string {
  return fs.readFileSync(path.join(repoRoot, relPath), 'utf8');
}

function readPackageJson(): { scripts?: Record<string, string> } {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
}

function readWebsiteTsconfig(): { exclude?: string[] } {
  return JSON.parse(read('website/tsconfig.json'));
}

describe('website repository layout', () => {
  it('keeps the Astro website implementation under website', () => {
    expect(exists('website/src')).toBe(true);
    expect(exists('website/docs')).toBe(true);
    expect(exists('website/docs/draft')).toBe(false);
    expect(exists('website/drafts')).toBe(true);
    expect(exists('website/drafts/legacy')).toBe(true);
    expect(exists('website/static')).toBe(true);
    expect(exists('website/astro.config.mjs')).toBe(true);
    expect(exists('website/vitest.config.ts')).toBe(true);
    expect(exists('website/tsconfig.json')).toBe(true);

    expect(exists('src')).toBe(false);
    expect(exists('docs/superpowers')).toBe(true);
    expect(exists('drafts')).toBe(false);
    expect(exists('static')).toBe(false);
    expect(exists('astro.config.mjs')).toBe(false);
  });

  it('points root Astro commands at the website project root', () => {
    const scripts = readPackageJson().scripts ?? {};

    expect(scripts.dev).toBe('astro dev --root website');
    expect(scripts.start).toBe('astro dev --root website');
    expect(scripts.preview).toBe('astro preview --root website');
    expect(scripts.check).toBe('astro check --root website');
  });

  it('keeps generated public assets out of Astro type checking', () => {
    const tsconfig = readWebsiteTsconfig();

    expect(tsconfig.exclude).toContain('static');
  });

  it('wraps public pages in the shared site shell', () => {
    expect(exists('website/src/components/SiteShell.astro')).toBe(true);

    const baseLayout = read('website/src/layouts/BaseLayout.astro');
    const siteShell = read('website/src/components/SiteShell.astro');
    const homePage = read('website/src/pages/index.astro');

    expect(baseLayout).toContain("import SiteShell from '../components/SiteShell.astro'");
    expect(baseLayout).toContain('<SiteShell path={path}>');
    expect(baseLayout).toContain('</SiteShell>');

    expect(siteShell).toContain("href: '/'");
    expect(siteShell).toContain('游戏音频设计');
    expect(siteShell).toContain('Game Audio Design');
    expect(siteShell).toContain('Articles');
    expect(siteShell).toContain("href: '/slides/'");
    expect(siteShell).toContain('Slides');
    expect(siteShell).not.toContain('SounDoer');
    expect(siteShell).not.toContain('Podcast');
    expect(siteShell).not.toContain('About');

    expect(homePage).not.toContain('class="site-identity"');
    expect(homePage).not.toContain('https://soundoer.com/');
  });

  it('centers main content within the desktop content region', () => {
    const globalCss = read('website/src/styles/global.css');

    expect(globalCss).toContain('.site-shell');
    expect(globalCss).toMatch(/--site-shell-gap:\s*3rem/);
    expect(globalCss).toMatch(/\.site-shell\s*\{[\s\S]*display:\s*grid/);
    expect(globalCss).toMatch(/grid-template-columns:\s*var\(--site-sidebar-width\)\s+minmax\(0,\s*92ch\)/);
    expect(globalCss).toMatch(/max-width:\s*calc\(var\(--site-sidebar-width\)\s*\+\s*var\(--site-shell-gap\)\s*\+\s*92ch\)/);
    expect(globalCss).toMatch(/\.site-sidebar\s*\{[\s\S]*position:\s*sticky/);
    expect(globalCss).toMatch(/\.site-main\s*\{[\s\S]*margin:\s*0 auto/);
    expect(globalCss).not.toContain('inset: 0 auto 0 0');
    expect(globalCss).not.toMatch(/\.site-main\s*\{[\s\S]*margin-left:\s*var\(--site-sidebar-width\)/);
  });

  it('keeps page chrome from shifting when channel content height changes', () => {
    const globalCss = read('website/src/styles/global.css');

    expect(globalCss).toMatch(/html\s*\{[\s\S]*scrollbar-gutter:\s*stable/);
  });
});
