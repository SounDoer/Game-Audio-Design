# Slidev decks

Entry: `slides.md` (global frontmatter and slide order). Add chapters as `pages/*.md` and reference them with `src: ./pages/your-file.md` blocks.

Local preview (matches production base path):

```bash
npm run slidev:dev
```

Open `http://localhost:3030/slidev/` (port may vary).

Production build is invoked by `npm run slidev:build` (writes to `../static/slidev/`) and runs automatically before `astro build`.
