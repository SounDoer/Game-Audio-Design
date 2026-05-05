# Slidev decks

Entry: `slides.md` (global frontmatter and slide order). Chapters live in `pages/*.md` and are included with `src: ./pages/your-file.md` blocks.

## Public assets (`slidev/public/`)

Place images, video, and other static files here. Paths in markdown such as `/src/...` resolve under `slidev/public/` (e.g. `slidev/public/src/...`). **Commit this directory with the repo** when you add or change assets alongside slide edits.

Optional one-time bulk import from the historical repo [Game-Audio-Design-Slidev](https://github.com/SounDoer/Game-Audio-Design-Slidev):

```bash
npm run slidev:sync-public
```

See `scripts/sync-slidev-public.mjs` for flags (`--resume`, `--skip-mp4`, `--mp4-only`).

## Local preview

```bash
npm run slidev:dev
```

Open `http://localhost:3030/slidev/` (port may vary). If slides reference missing files under `slidev/public/`, add those assets or adjust the markdown first.

`npm run slidev:build` writes to `../static/slidev/` and runs automatically before `astro build`.
