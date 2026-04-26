export function isArticleEntry(entryId: string): boolean {
  const normalized = entryId.replace(/\.mdx?$/, '').toLowerCase();
  if (normalized === 'log') return false;
  if (normalized === 'home') return false;
  if (normalized === 'resource') return false;
  if (normalized.startsWith('resource/')) return false;
  return true;
}

function normalizeSlug(input: string): string {
  return input
    .trim()
    .replace(/[\\/]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/_+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function basenameFromEntryId(entryId: string): string {
  const base = entryId.replace(/\.mdx?$/i, '');
  return base.split('/').pop() || base;
}

export function slugFromEntry(entryId: string, data: Record<string, unknown>): string {
  const manualSlug = typeof data.slug === 'string' ? data.slug : '';
  if (manualSlug.trim()) {
    return normalizeSlug(manualSlug);
  }
  return normalizeSlug(basenameFromEntryId(entryId));
}

export function displayTitleFromEntry(
  entryId: string,
  body: string,
  data: Record<string, unknown>,
): string {
  const heading = body.match(/^#\s+(.+)$/m);
  if (heading?.[1]?.trim()) {
    return heading[1].trim();
  }

  const explicitTitle = typeof data.title === 'string' ? data.title.trim() : '';
  if (explicitTitle) {
    return explicitTitle;
  }

  const slug = slugFromEntry(entryId, data);
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function parseDateOrNull(value: unknown): Date | null {
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) return null;
    return value;
  }
  if (typeof value !== 'string') return null;
  const dateText = value.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateText)) return null;
  const parsed = new Date(`${dateText}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed;
}

export function isPublishedByDate(value: unknown): boolean {
  return parseDateOrNull(value) !== null;
}
