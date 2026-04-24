import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { statSync } from 'node:fs';
import { join } from 'node:path';

function stripMd(id: string) {
  return id.replace(/\.mdx?$/, '');
}

function articleLink(
  kind: 'course' | 'topic',
  id: string,
  site: URL | string | undefined,
) {
  const base = stripMd(id);
  const path = `/articles/${kind}/${base}`;
  return new URL(path, site).href;
}

function mtime(kind: 'course' | 'topic', id: string): Date {
  const rel = join('docs', kind === 'course' ? 'Course' : 'Topic', id);
  try {
    return statSync(rel).mtime;
  } catch {
    return new Date();
  }
}

function mtimeResource(id: string): Date {
  const rel = join('docs', 'Resource', id);
  try {
    return statSync(rel).mtime;
  } catch {
    return new Date();
  }
}

function titleOf(data: Record<string, unknown>, id: string) {
  const t = typeof data.title === 'string' ? data.title.trim() : '';
  if (t) return t;
  return stripMd(id).split('/').pop() || id;
}

export async function GET(context: { site: URL | undefined }) {
  const { site } = context;
  const course = await getCollection('courseArticles');
  const topic = await getCollection('topicArticles');
  const resource = await getCollection('resourcePages');

  const items: {
    title: string;
    link: string;
    pubDate: Date;
    description?: string;
  }[] = [];

  for (const e of course) {
    if (stripMd(e.id) === 'Course') continue;
    if ((e.data as { slug?: unknown }).slug === '/') continue;
    const data = e.data as Record<string, unknown>;
    items.push({
      title: titleOf(data, e.id),
      link: articleLink('course', e.id, site),
      pubDate: mtime('course', e.id),
      description:
        typeof data.description === 'string' ? data.description : undefined,
    });
  }
  for (const e of topic) {
    const data = e.data as Record<string, unknown>;
    items.push({
      title: titleOf(data, e.id),
      link: articleLink('topic', e.id, site),
      pubDate: mtime('topic', e.id),
      description:
        typeof data.description === 'string' ? data.description : undefined,
    });
  }
  if (resource.length > 0) {
    let latestPub = new Date(0);
    for (const e of resource) {
      const t = mtimeResource(e.id);
      if (t.getTime() > latestPub.getTime()) {
        latestPub = t;
      }
    }
    items.push({
      title: 'Resource',
      link: new URL('/resource', site).href,
      pubDate: latestPub,
      description: '资源与外链（含 docs/Resource 下全部篇目）',
    });
  }

  items.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Game Audio Design',
    description: '游戏音频设计 — Course、Topic、Resource 与更新聚合',
    site: site ?? 'https://gad.soundoer.com',
    items,
    customData: '<language>zh-cn</language>',
  });
}
