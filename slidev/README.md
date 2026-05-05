# Slidev decks

Entry: `slides.md` (global frontmatter and slide order). Chapters live in `pages/*.md` and are included with `src: ./pages/your-file.md` blocks.

## Public assets (`slidev/public/`)

Static files (images, video, `src/…` paths used in markdown) are **not committed** in this repository. They are copied from the historical repo [Game-Audio-Design-Slidev](https://github.com/SounDoer/Game-Audio-Design-Slidev) before each Slidev build:

```bash
npm run slidev:sync-public
```

Options (see `scripts/sync-slidev-public.mjs`):

- `--resume` — skip files that already exist with non-zero size (default for `slidev:sync-public` npm script).
- `--skip-mp4` / `--mp4-only` — split phases if your network is unstable.

`npm run slidev:build` and `npm run build` run `slidev:sync-public` first, then emit to `../static/slidev/`.

### Optional: vendor `slidev/public/` into git

If you want binaries inside this repo (large clone), remove the `/slidev/public` line from the root `.gitignore`, run `npm run slidev:sync-public` until it completes, then `git add slidev/public` in a dedicated commit.

## Local preview

```bash
npm run slidev:sync-public
npm run slidev:dev
```

Open `http://localhost:3030/slidev/` (port may vary).
