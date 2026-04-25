import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { statSync } from 'node:fs';
import { join } from 'node:path';
import { articleSlugFromTitle, isArticleEntry, titleFromEntry } from '../lib/article-slug';

function articleLink(title: string, site: URL | string | undefined) {
  const path = `/${articleSlugFromTitle(title)}`;
  return new URL(path, site).href;
}

function mtimeArticle(id: string): Date {
  const rel = join('docs', id);
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
  return titleFromEntry(id, data);
}

export async function GET(context: { site: URL | undefined }) {
  const { site } = context;
  const articles = await getCollection('articles');
  const resource = await getCollection('resourcePages');

  const items: {
    title: string;
    link: string;
    pubDate: Date;
    description?: string;
  }[] = [];

  for (const e of articles) {
    if (!isArticleEntry(e.id)) continue;
    const data = e.data as Record<string, unknown>;
    const title = titleOf(data, e.id);
    items.push({
      title,
      link: articleLink(title, site),
      pubDate: mtimeArticle(e.id),
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
    description: '游戏音频设计 — 文章、Resource 与更新聚合',
    site: site ?? 'https://gad.soundoer.com',
    items,
    customData: '<language>zh-cn</language>',
  });
}
