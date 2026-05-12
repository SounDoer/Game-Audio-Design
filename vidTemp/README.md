# vidTemp

Video files that previously lived under `slidev/public/` were moved here so they are **not** copied into Slidev / Astro production builds (Vite copies the whole `public/` tree).

**Restore for local slides:** move files back to the same relative path under `slidev/public/` (e.g. `vidTemp/video/foo.mp4` → `slidev/public/video/foo.mp4`), then uncomment the `<video>` blocks in `slidev/pages/*.md` if you want embedded playback again.

**Long-term:** prefer external hosting (CDN / object storage / streaming) for large `.mp4` to keep CI and Pages artifacts small.
