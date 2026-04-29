import { describe, expect, it } from 'vitest';
import {
  displayTitleFromEntry,
  isArticleEntry,
  isPublishedByDate,
  parseDateOrNull,
  slugFromEntry,
} from './article-slug';

describe('isArticleEntry', () => {
  it('排除 Log / Home / Resource / draft 路径', () => {
    expect(isArticleEntry('Log.md')).toBe(false);
    expect(isArticleEntry('log.md')).toBe(false);
    expect(isArticleEntry('Home.md')).toBe(false);
    expect(isArticleEntry('Resource.md')).toBe(false);
    expect(isArticleEntry('resource/foo.md')).toBe(false);
    expect(isArticleEntry('draft/intro.md')).toBe(false);
    expect(isArticleEntry('draft/Game-Engine-Intro/Game-Engine-Intro.md')).toBe(false);
  });

  it('普通文章路径视为文章', () => {
    expect(isArticleEntry('Preface.md')).toBe(true);
    expect(isArticleEntry('Some-Topic/post.md')).toBe(true);
  });
});

describe('slugFromEntry', () => {
  it('优先使用 frontmatter 中的 slug 并归一化', () => {
    expect(slugFromEntry('ignored.md', { slug: '  My_Post / Name  ' })).toBe('my-post-name');
  });

  it('无 slug 时从文件名推导', () => {
    expect(slugFromEntry('Hello World.md', {})).toBe('hello-world');
    expect(slugFromEntry('nested/My_Article.md', {})).toBe('my-article');
  });

  it('空字符串 slug 回退到文件名', () => {
    expect(slugFromEntry('Fallback.md', { slug: '   ' })).toBe('fallback');
  });
});

describe('displayTitleFromEntry', () => {
  it('优先正文一级标题', () => {
    const body = 'ignored\n\n# Real Title\n\npara';
    expect(displayTitleFromEntry('x.md', body, {})).toBe('Real Title');
  });

  it('无标题时使用 data.title', () => {
    expect(displayTitleFromEntry('x.md', 'no hash heading', { title: 'From FM' })).toBe('From FM');
  });

  it('否则从 slug 生成 Title Case 词组', () => {
    expect(displayTitleFromEntry('my-cool-post.md', '', {})).toBe('My Cool Post');
  });
});

describe('parseDateOrNull', () => {
  it('接受 YYYY-MM-DD 字符串为 UTC 午夜', () => {
    const d = parseDateOrNull('2024-06-15');
    expect(d).not.toBeNull();
    expect(d!.toISOString()).toBe('2024-06-15T00:00:00.000Z');
  });

  it('接受有效 Date 实例', () => {
    const src = new Date('2020-01-02T00:00:00.000Z');
    expect(parseDateOrNull(src)).toEqual(src);
  });

  it('拒绝非法格式与无效日期', () => {
    expect(parseDateOrNull('2024/06/15')).toBeNull();
    expect(parseDateOrNull('24-06-15')).toBeNull();
    expect(parseDateOrNull('')).toBeNull();
    expect(parseDateOrNull(null)).toBeNull();
    expect(parseDateOrNull(new Date('invalid'))).toBeNull();
  });
});

describe('isPublishedByDate', () => {
  it('与 parseDateOrNull 是否非空一致', () => {
    expect(isPublishedByDate('2024-01-01')).toBe(true);
    expect(isPublishedByDate('')).toBe(false);
    expect(isPublishedByDate(undefined)).toBe(false);
  });
});
