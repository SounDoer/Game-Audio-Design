# Slides 索引列表对齐 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 `/slides/` 列表改成与 Articles 一致的“标题链接 + description”结构，并让 `slug` 只用于链接。

**Architecture:** 继续复用现有 `listDeckPages()` 作为 Slidev deck 元数据读取入口，扩展其返回值以包含 `description`。`website/src/pages/slides/index.astro` 只消费 `listTitle`、`description` 与 `slug`，其中 `slug` 仅用于 `href`。所有参与索引的 `slides/pages/*.md` deck 在首个 frontmatter block 中提供 `description`，不引入封面、grid 或构建链路变化。

**Tech Stack:** Astro, Slidev Markdown frontmatter, Node ESM helper, Vitest contract tests.

---

## File Structure

- Modify: `slides/pages/*.md`
  - 给所有当前会进入 `listDeckPages()` 的 deck 首个 frontmatter block 增加 `description`。
  - 不修改 `cover.md`、`intro.md`、`fin.md`，因为它们在 `EXCLUDED_STEMS` 中。
  - `EXAMPLE.md` 当前也会进入 `listDeckPages()`，因此也必须提供 `description`。
  - 不修改 deck 正文结构。
- Modify: `slides/deck-pages-shared.mjs`
  - 在 `listDeckPages()` 中读取 `description`。
  - 返回对象增加 `description` 字段。
  - 不改变排序、slug 规则、title fallback 或 excluded stems。
- Modify: `website/src/pages/slides/index.astro`
  - 将 slide 条目渲染为标题链接 + description 段落。
  - 删除可见 slug metadata。
  - 搜索字段从 title + slug 改为 title + description。
- Modify: `website/src/lib/slides-layout.test.ts`
  - 更新现有 Slides index contract。
  - 增加 description 数据契约测试，防止以后漏填。

---

### Task 1: Update Slides Contract Tests First

**Files:**
- Modify: `website/src/lib/slides-layout.test.ts`

- [ ] **Step 1: Update the existing slides index contract to expect description instead of slug search**

Replace the test block named `keeps the slides index as a searchable channel list` with:

```ts
  it('keeps the slides index as a searchable channel list aligned with articles', () => {
    const slidesIndexPage = read('website/src/pages/slides/index.astro');

    expect(slidesIndexPage).not.toContain('<h1 class="slides-index-title">Slides</h1>');
    expect(slidesIndexPage).not.toContain('Standalone Slidev decks. Open a link below.');
    expect(slidesIndexPage).toContain('id="slides-search"');
    expect(slidesIndexPage).toContain('aria-label="Search title or description"');
    expect(slidesIndexPage).toContain('id="slides-count"');
    expect(slidesIndexPage).toContain('slides / ');
    expect(slidesIndexPage).toContain('matching');
    expect(slidesIndexPage).toContain('data-title=');
    expect(slidesIndexPage).toContain('data-description=');
    expect(slidesIndexPage).not.toContain('data-slug=');
    expect(slidesIndexPage).toContain('class="slides-index-description"');
    expect(slidesIndexPage).not.toContain('class="slides-index-meta"');
    expect(slidesIndexPage).toContain('target="_blank"');
    expect(slidesIndexPage).toContain('rel="noopener noreferrer"');
  });
```

- [ ] **Step 2: Add a contract test that all indexed decks provide description frontmatter**

First update the URL import:

```ts
import { fileURLToPath, pathToFileURL } from 'node:url';
```

Then add this test after the slides index contract test:

```ts
  it('requires descriptions for all slide decks listed on the website', async () => {
    const helperUrl = pathToFileURL(path.join(repoRoot, 'slides/deck-pages-shared.mjs')).href;
    const { listDeckPages } = (await import(helperUrl)) as {
      listDeckPages: (repoRoot: string) => Array<{ stem: string; description?: unknown }>;
    };
    const decks = listDeckPages(repoRoot);

    expect(decks.length).toBeGreaterThan(0);

    for (const deck of decks) {
      expect(deck.description, `${deck.stem} should expose description`).toEqual(
        expect.any(String),
      );
      expect((deck.description as string).trim(), `${deck.stem} should expose description`).not.toBe(
        '',
      );

      const deckSource = read(`slides/pages/${deck.stem}.md`);
      const firstFrontmatter = deckSource.match(/^---\r?\n([\s\S]*?)\r?\n---/);

      expect(firstFrontmatter, `${deck.stem} should have first-slide frontmatter`).not.toBeNull();
      expect(firstFrontmatter?.[1], `${deck.stem} should define description`).toMatch(
        /^description:\s*\S/m,
      );
    }
  });
```

This test deliberately follows the complete `listDeckPages(repoRoot)` output because that is the actual data source for `/slides/`.

- [ ] **Step 3: Run the targeted test and confirm it fails**

Run:

```bash
npm test -- website/src/lib/slides-layout.test.ts
```

Expected: FAIL because `website/src/pages/slides/index.astro` still uses `aria-label="Search title or slug"`, `data-slug=`, `.slides-index-meta`, and the listed deck files do not all define or expose `description`.

---

### Task 2: Add Deck Descriptions To Indexed Slide Pages

**Files:**
- Modify: `slides/pages/what-is-game-audio-design.md`
- Modify: `slides/pages/EXAMPLE.md`
- Modify: `slides/pages/how-to-listen-sound.md`
- Modify: `slides/pages/dev-workflow.md`
- Modify: `slides/pages/dev-tool.md`
- Modify: `slides/pages/campfire-sound.md`
- Modify: `slides/pages/soundbank-generation.md`
- Modify: `slides/pages/audio-spatialization.md`
- Modify: `slides/pages/ambience-sound-design.md`
- Modify: `slides/pages/character-foley-design.md`
- Modify: `slides/pages/naming-convention.md`
- Modify: `slides/pages/gun-sound-design.md`
- Modify: `slides/pages/vehicle-sound-design.md`
- Modify: `slides/pages/how-to-get-sound-assets.md`
- Modify: `slides/pages/music-design.md`
- Modify: `slides/pages/voice-design.md`
- Modify: `slides/pages/cinematic-sound-design.md`
- Modify: `slides/pages/ai-in-game-audio.md`
- Modify: `slides/pages/ai-in-game-audio-design-2026.md`
- Modify: `slides/pages/game-audio-mixing.md`
- Modify: `slides/pages/game-audio-debug.md`

- [ ] **Step 1: Add one-line descriptions to first-slide frontmatter**

For each file, add `description` inside the first `---` frontmatter block. Keep existing fields such as `layout`, `slug`, `deckListTitle`, and `slidesOrder`.

Use these exact strings unless the deck content makes an obvious better wording necessary while editing:

```yaml
# slides/pages/EXAMPLE.md
description: 展示 GAD Slidev 布局、组件与写法约定的参考样张。

# slides/pages/what-is-game-audio-design.md
description: 建立游戏音频设计的基础概念、边界与工作框架。

# slides/pages/how-to-listen-sound.md
description: 从听感、环境与工具出发，建立分析声音的基础方法。

# slides/pages/dev-workflow.md
description: 梳理游戏音频从需求、制作到引擎集成的开发流程。

# slides/pages/dev-tool.md
description: 介绍游戏音频设计常用开发工具与协作工具。

# slides/pages/campfire-sound.md
description: 以篝火声音为例拆解环境音效的设计思路。

# slides/pages/soundbank-generation.md
description: 说明 SoundBank 生成、管理与游戏音频资源交付流程。

# slides/pages/audio-spatialization.md
description: 讲解空间音频、定位感与游戏场景中的听觉呈现。

# slides/pages/ambience-sound-design.md
description: 讲解环境声设计的层次、氛围构建与案例方法。

# slides/pages/character-foley-design.md
description: 拆解角色 Foley 声音的动作逻辑、材质层次与制作方法。

# slides/pages/naming-convention.md
description: 建立游戏音频资源命名、分类与团队协作规范。

# slides/pages/gun-sound-design.md
description: 拆解枪械声音的结构层次、瞬态表现与设计方法。

# slides/pages/vehicle-sound-design.md
description: 讲解载具声音设计的循环、速度状态与交互变化。

# slides/pages/how-to-get-sound-assets.md
description: 梳理游戏音频素材的录制、采集、整理与授权来源。

# slides/pages/music-design.md
description: 讲解游戏音乐设计中的结构、情绪、交互与实现思路。

# slides/pages/voice-design.md
description: 讲解游戏语音设计、录制流程与角色表达控制。

# slides/pages/cinematic-sound-design.md
description: 讲解游戏过场与叙事镜头中的声音设计方法。

# slides/pages/ai-in-game-audio.md
description: 讨论 AI 技术在游戏音频设计流程中的应用方向。

# slides/pages/ai-in-game-audio-design-2026.md
description: 从 AIGC、AI 工具与 Vibe Coding 观察 2026 年游戏音频设计变化。

# slides/pages/game-audio-mixing.md
description: 讲解游戏音频混音中的层级、动态范围与播放场景控制。

# slides/pages/game-audio-debug.md
description: 讲解游戏音频调试中的问题定位、工具使用与协作流程。
```

- [ ] **Step 2: Run the targeted contract test and confirm only implementation failures remain**

Run:

```bash
npm test -- website/src/lib/slides-layout.test.ts
```

Expected: still FAIL because helper and Astro page have not been updated yet. The failure should no longer report missing `description` in listed deck frontmatter.

---

### Task 3: Extend Deck Metadata Reader

**Files:**
- Modify: `slides/deck-pages-shared.mjs`

- [ ] **Step 1: Update the JSDoc return type**

Change the `listDeckPages()` return JSDoc from:

```js
 * @returns {Array<{ stem: string, slug: string, slidesOrder: number, listTitle: string }>}
```

to:

```js
 * @returns {Array<{ stem: string, slug: string, slidesOrder: number, listTitle: string, description: string }>}
```

- [ ] **Step 2: Update the local `rows` type comment**

Change:

```js
  /** @type {Array<{ stem: string, slug: string, slidesOrder: number, listTitle: string }>} */
```

to:

```js
  /** @type {Array<{ stem: string, slug: string, slidesOrder: number, listTitle: string, description: string }>} */
```

- [ ] **Step 3: Read description from first frontmatter block**

After `listTitle` is computed, add:

```js
    const description = (kv.description && kv.description.trim()) || '';
```

Then change:

```js
    rows.push({ stem, slug, slidesOrder, listTitle });
```

to:

```js
    rows.push({ stem, slug, slidesOrder, listTitle, description });
```

Do not add fallback text from body content. Missing descriptions should be caught by tests and fixed in deck frontmatter.

- [ ] **Step 4: Run the targeted test**

Run:

```bash
npm test -- website/src/lib/slides-layout.test.ts
```

Expected: still FAIL until `website/src/pages/slides/index.astro` is updated.

---

### Task 4: Align Slides Index Markup And Search With Articles

**Files:**
- Modify: `website/src/pages/slides/index.astro`

- [ ] **Step 1: Update search accessibility label**

Change:

```astro
aria-label="Search title or slug"
```

to:

```astro
aria-label="Search title or description"
```

- [ ] **Step 2: Replace slug data attribute with description data attribute**

Change each slide item from:

```astro
<li
  class="slides-index-item"
  data-title={d.listTitle.toLowerCase()}
  data-title-original={d.listTitle}
  data-slug={d.slug.toLowerCase()}
>
```

to:

```astro
<li
  class="slides-index-item"
  data-title={d.listTitle.toLowerCase()}
  data-title-original={d.listTitle}
  data-description={d.description.toLowerCase()}
>
```

- [ ] **Step 3: Render description below the title link**

Change:

```astro
<a href={`/slides/${d.slug}/`} target="_blank" rel="noopener noreferrer">
  <span class="slides-title">{d.listTitle}</span>
</a>
<span class="slides-index-meta">{d.slug}</span>
```

to:

```astro
<a href={`/slides/${d.slug}/`} target="_blank" rel="noopener noreferrer">
  <span class="slides-title">{d.listTitle}</span>
</a>
<p class="slides-index-description">{d.description}</p>
```

- [ ] **Step 4: Update client-side filtering**

Change:

```js
var slug = item.getAttribute('data-slug') || '';
var visible = !query || title.indexOf(query) >= 0 || slug.indexOf(query) >= 0;
```

to:

```js
var description = item.getAttribute('data-description') || '';
var visible = !query || title.indexOf(query) >= 0 || description.indexOf(query) >= 0;
```

- [ ] **Step 5: Update list item CSS to match Articles rhythm**

Replace the current item/meta CSS:

```css
.slides-index-list li {
  margin-bottom: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1rem;
}
.slides-index-list a {
  font-weight: 600;
}
.slides-index-meta {
  font-size: 0.85rem;
  opacity: 0.65;
  font-family: ui-monospace, monospace;
}
```

with:

```css
.slides-index-list li {
  margin-bottom: 1.5rem;
}
.slides-index-list a {
  font-size: 1.1rem;
  font-weight: 650;
}
.slides-index-description {
  margin: 0.35rem 0 0;
  color: var(--muted);
}
```

Keep `.slides-title mark` and empty result styles unchanged.

- [ ] **Step 6: Run the targeted test**

Run:

```bash
npm test -- website/src/lib/slides-layout.test.ts
```

Expected: PASS.

---

### Task 5: Verification

**Files:**
- Verify only; no planned source edits.

- [ ] **Step 1: Run all repository tests**

Run:

```bash
npm test
```

Expected: PASS.

- [ ] **Step 2: Run Astro type/content checks**

Run:

```bash
npm run check
```

Expected: PASS.

- [ ] **Step 3: Inspect lints for edited source files**

Use the IDE linter diagnostics for:

```text
website/src/pages/slides/index.astro
website/src/lib/slides-layout.test.ts
slides/deck-pages-shared.mjs
```

Expected: no new diagnostics introduced by this change.

- [ ] **Step 4: Manual browser smoke check if a dev server is already running**

Open `/slides/` and verify:

- The page still uses the shared site shell.
- The search box says it searches title or description.
- Each slide item shows title first and description below it.
- Slug is not visible as metadata.
- Clicking a deck still opens `/slides/<slug>/` in a new tab/window.
- Searching by visible description text filters matching decks.
- Searching by slug-only text no longer matches unless that text is also in title or description.

---

## Self-Review

- Spec coverage: covered description frontmatter, `listDeckPages()` data contract, `/slides/` markup, search behavior, visible slug removal, and no build pipeline changes.
- Completeness scan: all implementation steps are specified.
- Type consistency: plan consistently uses `description`, `listTitle`, and `slug`; `slug` remains URL-only.
- Scope check: plan does not add cover images, grid layout, screenshots, featured sections, or ordering changes.

---

## Execution Note

This plan intentionally omits automatic commit steps. Commit only if the user explicitly requests it.
