# Website And Slides Directory Separation Design

## Goal

Separate the article website and course slides into two clear top-level content areas:

- `website/` contains the full Astro article site implementation and site-specific content.
- `slides/` contains the full Slidev course deck source and slide assets.
- The repository root remains a small orchestration layer for shared commands, deployment config, and AI collaboration instructions.

The public site URL and route structure stay unchanged:

- Article website remains published at `https://gad.soundoer.com/`.
- Slides index remains available at `/slides/`.
- Individual decks remain available at `/slides/<slug>/`.

## Target Repository Shape

```text
website/
  README.md
  src/
  docs/
  drafts/
  static/
  astro.config.mjs
  vitest.config.ts
  tsconfig.json

slides/
  README.md
  pages/
  drafts/
  public/
  layouts/
  components/
  styles/
  deck-pages-shared.mjs
  deck-entry-header.in.yaml
  deck-order.txt

scripts/
package.json
package-lock.json
netlify.toml
README.md
AGENTS.md
CLAUDE.md
```

The existing root `README.md` describes the website, so it should move to `website/README.md`.

Create a new root `README.md` as a short repository entry point. It should explain that:

- `website/` is the Astro article site.
- `slides/` is the Slidev deck source.
- Shared commands are still run from the repository root.

## Naming

Use content-oriented directory names:

- `website/` for the article website.
- `slides/` for the course slide source.

Keep implementation and command names that intentionally refer to the Slidev framework:

- Keep npm script names such as `slidev:build` and `slidev:dev`.
- Keep the package dependency names `@slidev/cli` and `@slidev/theme-default`.
- Keep runtime/tool references such as `npx slidev build`, `@slidev/client`, and `.slidev-layout`.

This keeps the root structure readable while avoiding a misleading rename of the underlying framework.

## Build Flow

The root `package.json` remains the command entry point.

Production build should still work as one command:

```text
npm run build
  -> npm run slidev:build
     -> read slides/pages/*.md
     -> write generated decks to website/static/slides/<slug>/
  -> build the Astro site from website/
     -> publish final output to build/
```

`website/static/slides/` remains generated output and should stay ignored by git.

The root deployment config should continue to publish `build/`.

## GitHub And Netlify Deployment

The repository source of truth is GitHub, and production deployment runs on Netlify.

The migration must preserve Netlify's root-level deployment contract:

- Netlify should still install dependencies from the root `package.json` and `package-lock.json`.
- Netlify should still run the root build command, currently `npm run build`.
- Netlify should still publish the root `build/` directory.
- `netlify.toml` should remain at the repository root unless there is a deliberate deployment setting change.

After moving the Astro project into `website/`, the root build command should explicitly build the website from that directory while preserving the root output path. A local successful build is not sufficient by itself; the command structure must match how Netlify executes builds from a fresh GitHub checkout.

## Website Migration

Move the Astro website implementation into `website/`:

- `src/` -> `website/src/`
- `docs/` -> `website/docs/`
- `drafts/` -> `website/drafts/`
- `static/` -> `website/static/`
- `astro.config.mjs` -> `website/astro.config.mjs`
- `vitest.config.ts` -> `website/vitest.config.ts`
- `tsconfig.json` -> `website/tsconfig.json`
- current root `README.md` -> `website/README.md`

Update Astro and test configuration so paths continue to resolve from the new website root:

- Root npm scripts should invoke Astro with `website/` as the project root.
- Article collection loader can continue to read from `./docs`, relative to `website/`.
- Astro public assets can continue to come from `static`, relative to `website/`.
- Astro output should still go to the repository root `build/`, for example via an output path relative to `website/`.
- Tests should include `website/src/**/*.test.ts`.

The `/slides/` Astro index remains part of the website because it is a web route, but it should read deck metadata from `slides/deck-pages-shared.mjs`.

## Slides Migration

Rename the Slidev source directory:

- `slidev/` -> `slides/`

Update scripts and documentation references that point to the source directory:

- Build and dev scripts should read from `slides/pages`.
- Generated temporary deck entry files should be written under `slides/`.
- Public subset staging should operate on `slides/public`.
- The slides README should describe `slides/` paths.
- The slides authoring skill should use `slides/pages`, `slides/drafts`, and `slides/public`.

Keep references to the Slidev framework unchanged when they describe the tool rather than the directory.

## Repository Rules And Documentation

Update repository-level guidance:

- `AGENTS.md` should describe `website/` and `slides/` as separate top-level areas.
- `CLAUDE.md` can continue to point to `AGENTS.md`.
- `.cursor/skills/gad-docs-authoring/` should use `website/docs` and `website/drafts`.
- `.cursor/skills/gad-slides-authoring/` should use `slides/pages`, `slides/drafts`, and `slides/public`.
- Ignore rules should move generated output ignores from `static/slides` and `slidev/*` to `website/static/slides` and `slides/*`.

## Verification

After migration, run:

```text
npm run test
npm run check
npm run build
```

Manual route checks should cover:

- `/`
- one article route
- `/rss.xml`
- `/slides/`
- one `/slides/<slug>/` route

## Risks And Mitigations

The largest risk is broken relative paths after moving both website and slides source directories. Mitigate by updating path construction in scripts and Astro pages together, then running the full build.

The second risk is confusing content directory names with framework names. Mitigate by using `website/` and `slides/` for directories while keeping `slidev:*` commands and Slidev package references unchanged.

The third risk is stale AI authoring rules that still point to old paths. Mitigate by updating the project instructions and both local GAD authoring skills in the same migration.
