// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gad.soundoer.com',
  outDir: '../build',
  publicDir: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [
      {
        name: 'slidev-dev-index',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            if (req.url && /^\/slides\/[^/]+\/$/.test(req.url)) {
              req.url = req.url + 'index.html';
            }
            next();
          });
        },
      },
    ],
  },
});
