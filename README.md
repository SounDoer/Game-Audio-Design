# Game Audio Design

Game Audio Design repository for the article website and Slidev course decks.

## Structure

- `website/`: Astro article site for [gad.soundoer.com](https://gad.soundoer.com), including `website/docs/`, `website/drafts/`, `website/src/`, and `website/static/`.
- `slides/`: Slidev course deck source, including `slides/pages/`, `slides/drafts/`, `slides/public/`, layouts, components, and styles.
- `scripts/`: root-level build helpers shared by the website and slides.

## Commands

Run shared commands from the repository root:

- `npm run dev`: start the Astro website dev server.
- `npm run slidev:dev -- <stem>`: preview one Slidev deck.
- `npm run slidev:build`: build all decks into `website/static/slides/`.
- `npm run build`: build decks first, then build the website into `build/` for Netlify.
