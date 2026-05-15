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

describe('repository documentation contract', () => {
  it('separates the root repository README from the website README', () => {
    const rootReadme = read('README.md');
    const websiteReadme = read('website/README.md');

    expect(rootReadme).toContain('website/');
    expect(rootReadme).toContain('slides/');
    expect(rootReadme).toContain('npm run build');
    expect(rootReadme).not.toContain('本站由希辰');

    expect(websiteReadme).toContain('在线阅读');
    expect(websiteReadme).toContain('gad.soundoer.com');
    expect(websiteReadme).toContain('本站由希辰');
  });

  it('points project instructions and local skills at the new content directories', () => {
    const agents = read('AGENTS.md');
    const docsSkill = read('.cursor/skills/gad-docs-authoring/SKILL.md');
    const slidesSkill = read('.cursor/skills/gad-slides-authoring/SKILL.md');

    expect(agents).toContain('website/docs/');
    expect(agents).toContain('website/drafts/');
    expect(agents).toContain('slides/pages/*.md');
    expect(agents).toContain('slides/drafts/');
    expect(agents).not.toContain('`docs/` 正式文章');
    expect(agents).not.toContain('`slidev/pages/*.md`');

    expect(docsSkill).toContain('website/docs/**/*.md');
    expect(docsSkill).toContain('website/drafts/draft-*.md');
    expect(docsSkill).not.toContain('root `drafts/draft-*.md`');

    expect(slidesSkill).toContain('slides/pages/*.md');
    expect(slidesSkill).toContain('slides/drafts/');
    expect(slidesSkill).toContain('slides/public/');
    expect(slidesSkill).not.toContain('slidev/pages');
  });

  it('documents slides source paths without renaming the Slidev framework', () => {
    const slidesReadme = read('slides/README.md');

    expect(slidesReadme).toContain('Slidev 讲稿');
    expect(slidesReadme).toContain('slides/pages/<stem>.md');
    expect(slidesReadme).toContain('slides/public/');
    expect(slidesReadme).toContain('website/static/slides/');
    expect(slidesReadme).not.toContain('slidev/pages');
    expect(slidesReadme).not.toContain('slidev/public');
  });
});
