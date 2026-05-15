import { describe, expect, it } from 'vitest';
import {
  displayTitleFromEntry,
  isArticleEntry,
  isPublishedByDate,
  parseDateOrNull,
  slugFromEntry,
} from './article-slug';

describe('isArticleEntry', () => {
  it('excludes Log / Home / Resource / draft paths', () => {
    expect(isArticleEntry('Log.md')).toBe(false);
    expect(isArticleEntry('log.md')).toBe(false);
    expect(isArticleEntry('Home.md')).toBe(false);
    expect(isArticleEntry('Resource.md')).toBe(false);
    expect(isArticleEntry('resource/foo.md')).toBe(false);
    expect(isArticleEntry('draft/intro.md')).toBe(false);
    expect(isArticleEntry('draft/Game-Engine-Intro/Game-Engine-Intro.md')).toBe(false);
  });

  it('treats regular article paths as articles', () => {
    expect(isArticleEntry('Preface.md')).toBe(true);
    expect(isArticleEntry('Some-Topic/post.md')).toBe(true);
  });
});

describe('slugFromEntry', () => {
  it('prefers frontmatter slug and normalizes it', () => {
    expect(slugFromEntry('ignored.md', { slug: '  My_Post / Name  ' })).toBe('my-post-name');
  });

  it('derives slug from filename when no frontmatter slug', () => {
    expect(slugFromEntry('Hello World.md', {})).toBe('hello-world');
    expect(slugFromEntry('nested/My_Article.md', {})).toBe('my-article');
  });

  it('falls back to filename when slug is empty string', () => {
    expect(slugFromEntry('Fallback.md', { slug: '   ' })).toBe('fallback');
  });
});

describe('displayTitleFromEntry', () => {
  it('prefers h1 from body', () => {
    const body = 'ignored\n\n# Real Title\n\npara';
    expect(displayTitleFromEntry('x.md', body, {})).toBe('Real Title');
  });

  it('falls back to data.title when no h1', () => {
    expect(displayTitleFromEntry('x.md', 'no hash heading', { title: 'From FM' })).toBe('From FM');
  });

  it('generates Title Case from slug as last resort', () => {
    expect(displayTitleFromEntry('my-cool-post.md', '', {})).toBe('My Cool Post');
  });
});

describe('parseDateOrNull', () => {
  it('accepts YYYY-MM-DD string as UTC midnight', () => {
    const d = parseDateOrNull('2024-06-15');
    expect(d).not.toBeNull();
    expect(d!.toISOString()).toBe('2024-06-15T00:00:00.000Z');
  });

  it('accepts a valid Date instance', () => {
    const src = new Date('2020-01-02T00:00:00.000Z');
    expect(parseDateOrNull(src)).toEqual(src);
  });

  it('rejects invalid formats and invalid dates', () => {
    expect(parseDateOrNull('2024/06/15')).toBeNull();
    expect(parseDateOrNull('24-06-15')).toBeNull();
    expect(parseDateOrNull('')).toBeNull();
    expect(parseDateOrNull(null)).toBeNull();
    expect(parseDateOrNull(new Date('invalid'))).toBeNull();
  });
});

describe('isPublishedByDate', () => {
  it('is consistent with parseDateOrNull being non-null', () => {
    expect(isPublishedByDate('2024-01-01')).toBe(true);
    expect(isPublishedByDate('')).toBe(false);
    expect(isPublishedByDate(undefined)).toBe(false);
  });
});
