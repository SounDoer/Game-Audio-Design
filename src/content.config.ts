import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** 宽松 schema：兼容现有 frontmatter（含 Docusaurus 遗留字段），不删改 md 内容。 */
const looseFrontmatter = z.record(z.string(), z.unknown());

export const collections = {
  courseArticles: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './docs/Course' }),
    schema: looseFrontmatter,
  }),
  topicArticles: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './docs/Topic' }),
    schema: looseFrontmatter,
  }),
  logPage: defineCollection({
    loader: glob({ pattern: 'Log.md', base: './docs' }),
    schema: looseFrontmatter,
  }),
};
