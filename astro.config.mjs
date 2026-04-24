// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gad.soundoer.com',
  outDir: 'build',
  publicDir: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
