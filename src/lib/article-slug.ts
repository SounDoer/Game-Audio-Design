export function articleSlugFromTitle(title: string): string {
  return title
    .trim()
    .replace(/[\\/]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

export function titleFromEntry(entryId: string, data: Record<string, unknown>): string {
  const t = typeof data.title === 'string' ? data.title.trim() : '';
  if (t) return t;
  const base = entryId.replace(/\.mdx?$/, '');
  return base.split('/').pop() || base;
}

export function isArticleEntry(entryId: string): boolean {
  const normalized = entryId.replace(/\.mdx?$/, '').toLowerCase();
  if (normalized === 'log') return false;
  if (normalized === 'home') return false;
  if (normalized === 'resource') return false;
  if (normalized.startsWith('resource/')) return false;
  return true;
}
