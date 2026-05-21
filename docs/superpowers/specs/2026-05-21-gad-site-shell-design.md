# GAD Site Shell Design

## Context

`gad.soundoer.com` currently has two public entry points:

- `/` lists Game Audio Design articles.
- `/slides/` lists standalone Slidev decks, and each deck opens in a separate Slidev rendering page.

The goal is to make Articles and Slides feel like two channels in the same Game Audio Design content site while preserving the existing minimal tone. The design should also leave room for future channels such as Podcast without turning the current homepage into a heavy dashboard.

## Decision

Use a multi-page website structure with a shared site shell.

- `/` remains the Articles page and default home.
- `/slides/` remains the Slides list page.
- Article detail pages remain regular pages under the same site shell.
- `/slides/<deck>/` pages remain Slidev presentation surfaces and do not use the site shell.

The first version exposes only existing internal channels:

- `Articles`
- `Slides`

No external links, About link, Podcast placeholder, hero block, pinned section, or cross-channel recommendations are included in the first version.

## Architecture

Add a shared `SiteShell` component for site-level layout:

- Desktop fixed left sidebar.
- Mobile top navigation row.
- Main content container.
- Active channel state based on the current path.

`BaseLayout` keeps responsibility for document structure, metadata, canonical URL, and Open Graph tags. It wraps page content in `SiteShell`.

`ArticleLayout` continues to use `BaseLayout`, so article detail pages inherit the shell without a separate article-specific navigation implementation.

## Desktop Layout

On desktop, the shell uses a fixed, lightweight left sidebar.

- Sidebar width should stay narrow, approximately `12rem` to `14rem`.
- Sidebar content is limited to site identity and channel navigation.
- Site identity uses `Game Audio Design`.
- Active channel uses subtle typographic emphasis such as weight or underline, not a heavy colored block.
- Main content keeps the existing narrow reading/list width.
- There is no top header.

The sidebar must not compete with article reading. Existing article table of contents and fixed share actions may need spacing adjustments so the left sidebar, prose column, and right-side article utilities do not collide on wide screens.

## Mobile Layout

On mobile, the shell becomes a single lightweight top row:

- `GAD`
- `Articles`
- `Slides`

There is no drawer or hamburger menu in the first version. If future channels make the row too crowded, the navigation pattern can be revisited.

Article detail pages also use the same mobile top row, followed directly by the article content.

## Articles Page

The Articles page remains close to the current homepage:

- Remove the current `site-identity` row because the shell now owns site identity.
- Keep the existing search box.
- Keep the article count status.
- Keep the existing article list style and description/date metadata.
- Do not add a hero or additional pinned content block.

Articles search continues to filter by title and description.

## Slides Page

The Slides list page should match the Articles page as a peer channel.

- Remove the visible `Slides` heading.
- Remove the visible lead copy.
- Start the page content with a search box.
- Show a count status such as `20 slides / 20 matching`.
- Keep deck links opening in a new window or tab.
- Continue showing the deck slug as subdued monospace metadata.

Slides search filters by deck title and slug.

The Slidev deck rendering pages under `/slides/<deck>/` remain outside the shell because they are presentation environments, not site navigation surfaces.

## Active Channel Rules

Active channel is derived from the path for pages that use `SiteShell`:

- `/slides/` uses `Slides`.
- All other article list and article detail paths use `Articles`.

This deliberately treats article detail pages as part of the Articles channel.

## Non-Goals

This design does not:

- Merge article and slide data into one content model.
- Build a single-page content-library app.
- Add future channel placeholders before those channels exist.
- Add a hero, dashboard, featured content area, or pinned module.
- Add external navigation links in the first version.

## Testing And Verification

Implementation should verify:

- `/`, `/slides/`, and article detail pages share the same shell.
- `/slides/<deck>/` pages remain Slidev pages opened from the list in a new window or tab.
- Desktop navigation shows a left sidebar.
- Mobile navigation shows a compact top row.
- `Articles` and `Slides` active states are correct.
- Articles search still filters by title and description.
- Slides search filters by title and slug.
- Existing deployment and Slidev build contracts remain unchanged.

