# Slidev decks

Entry: `slides.md` (global frontmatter and slide order). Chapters live in `pages/*.md` and are included with `src: ./pages/your-file.md` blocks.

## Layouts (`slidev/layouts/`)

幻灯里 `layout: xxx` 会加载 **`slidev/layouts/xxx.vue`**（与 Slidev 内置或主题同名时，以本仓库文件为准）。下面按用途分组；槽位语法为 [Slidev MDC](https://sli.dev/features/slot-syntax)。

### 章节与过渡页

| `layout:` | 说明 |
|-----------|------|
| `section` | 分章大标题（通常一页只有标题行） |
| `cover` | 封面 |
| `statement` | 一句话 / 提问，正文纵向居中 |
| `default` | 无标题栏，整页一个默认槽（适合自定义居中块） |
| `image` | 全屏背景图；frontmatter 需 `image: 相对 public 的路径或 URL`，可选 `backgroundSize`（默认 `cover`） |
| `end` | 结束页 |

### 标题 + 正文区（`header` + 主区）

| `layout:` | 主区槽位 | 说明 |
|-----------|----------|------|
| `header-body` | `::body::` | 常规单栏；可选 **`background:`**（淡色全屏底图，透明度与原先 `header-body-bg` 一致） |
| `header-body-center` | `::body::` | 主区水平 + 垂直居中，适合单图或少字；`main` 内 `img` 限制在可视区内 `contain` |
| `header-body-grid` | `::left::` `::right::`；三列时加 **`cols: 3`** 并增加 `::mid::` | 两列栅格（默认）或三列；`cols` 省略时为 2 |

**示例（单栏 + 淡底图）：**

```yaml
---
layout: header-body
background: game-poster.png
---

### 小节标题

::body::

正文 Markdown……
```

**示例（两列）：**

```yaml
---
layout: header-body-grid
---

### 标题

::left::

左列内容

::right::

右列内容
```

**示例（三列）：**

```yaml
---
layout: header-body-grid
cols: 3
---

### 标题

::left::
左

::mid::
中

::right::
右
```

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
