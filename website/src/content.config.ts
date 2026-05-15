import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const looseFrontmatter = z.record(z.string(), z.unknown());

export const collections = {
  articles: defineCollection({
    loader: glob({
      pattern: ['**/*.md', '!draft/**'],
      base: './docs',
    }),
    schema: looseFrontmatter,
  }),
  logPage: defineCollection({
    loader: glob({ pattern: 'Log.md', base: './docs' }),
    schema: looseFrontmatter,
  }),
};
