import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {
  displayTitleFromEntry,
  isArticleEntry,
  isPublishedByDate,
  parseDateOrNull,
  slugFromEntry,
} from '../lib/article-slug';

export async function GET(context: { site: URL | undefined }) {
  const { site } = context;
  const baseSite = site ?? new URL('https://gad.soundoer.com');
  const articles = await getCollection('articles');

  const items: {
    title: string;
    link: string;
    pubDate: Date;
    description?: string;
  }[] = [];

  for (const e of articles) {
    if (!isArticleEntry(e.id)) continue;
    const data = e.data as Record<string, unknown>;
    if (!isPublishedByDate(data.date)) continue;
    const pubDate = parseDateOrNull(data.date);
    if (!pubDate) continue;
    const slug = slugFromEntry(e.id, data);
    const title = displayTitleFromEntry(e.id, e.body ?? '', data);
    items.push({
      title,
      link: new URL(`/${slug}/`, baseSite).href,
      pubDate,
      description:
        typeof data.description === 'string' ? data.description : undefined,
    });
  }

  items.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Game Audio Design',
    description: 'Game Audio Design articles feed',
    site: baseSite,
    items,
    customData: '<language>zh-cn</language>',
  });
}
