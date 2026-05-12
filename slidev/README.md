# Slidev decks

Each file under **`pages/*.md`** is one standalone deck (built with a generated entry + shared head in **`deck-entry-header.in.yaml`**). Default URL slug is the file name without `.md`; override with frontmatter **`slug:`**. Sort order for the Astro index and default build order comes from **`deck-order.txt`** (one stem per line); optional per-file **`slidesOrder:`** in the first slide frontmatter overrides. Optional **`deckListTitle:`** sets the label on `/slides/`; otherwise the first `##` heading (or stem) is used.

The legacy **`slides.md`** file is no longer a Slidev entry; see its header comment.

## Layouts (`slidev/layouts/`)

幻灯里 `layout: xxx` 会加载 **`slidev/layouts/xxx.vue`**（与 Slidev 内置或主题同名时，以本仓库文件为准）。下面按用途分组；槽位语法为 [Slidev MDC](https://sli.dev/features/slot-syntax)。

### 章节与过渡页

| `layout:` | 说明 |
|-----------|------|
| `section` | 分章大标题：`::title::`（`##`）+ `::subtitle::`（如 `**English**`）；仅居中排版，字号与其它页一致（**`styles/base.css`** 中 `.slidev-layout` 下的 `h*` / `p`） |
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
background: what-is-game-audio-design/game-poster.png
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

## 样式写法（规范）

Slidev 默认用 **UnoCSS**，类名风格与 **Tailwind CSS** 兼容（如 `flex`、`gap-4`、`text-center`、`w-[45%]`）。本仓库幻灯内容建议统一如下。

### 优先：`class="..."`（Uno / Tailwind 风格原子类）

- **布局与对齐**：`flex`、`grid`、`justify-center`、`items-center` 等。
- **间距与尺寸**：`p-4`、`mt-5`、`w-full`、`max-h-[70vh]`、`w-[45%]` 等。
- **文字**：`text-sm`、`font-bold`、`opacity-70` 等。

在 `pages/*.md` 里写 HTML 片段时，**尽量用 `class`，少用 `style`**，便于全文一致调整、也和 `layouts/*.vue` 里已有写法一致。

### 例外：允许 `style="..."` 的情况

仅在下列情况使用行内样式即可：

- 需要 **任意数值** 且不便用原子类表达（较少见；可优先试 `w-[420px]` 这类任意值写法）。
- 从设计稿 **临时对照**、确认后再改成 class（避免长期留在稿子里）。

### 全局与单页

- **跨多页、且与主题冲突的排版**（例如标题字号）：放在 **`styles/base.css`**，选择器写在 **`.slidev-layout`** 下，减少对演讲者界面的影响（见 [Slidev 目录说明 · Style](https://sli.dev/custom/directory-structure#style)）。`layout: section` 不做单独字号规则，与全局一致。
- **单页一次性微调**：可在该页 markdown 底部使用 `<style scoped>`（慎用，避免复制粘贴扩散）。

### 参考

- [UnoCSS](https://unocss.dev/) · [Tailwind 文档](https://tailwindcss.com/docs)（查类名语义时二者可对照）

## Public assets (`slidev/public/`)

**约定：**`pages/<章节>.md` 与 **`public/<章节>/`** 一一对应（与 md 文件**同名**目录），该章用到的图片、视频等静态文件放在该目录下。在正文里用站点根路径引用，例如 `/how-to-listen-sound/listen-digital-audio.png` 对应磁盘上的 `slidev/public/how-to-listen-sound/listen-digital-audio.png`；`frontmatter` 里的 `background:` 等可写相对 `public/` 的路径（如 `what-is-game-audio-design/game-poster.png`），不加前导 `/`。

**整理中：**历史资源可能仍在 `public/` 根目录或 `public/src/<主题>/` 下。开始改某篇 `pages/*.md` 时，若尚无同名 `public/<章节>/`，应**新建目录**，把该页实际引用的资产**迁入**并更新 md 中的路径。

**遗留路径：**部分历史资源仍在 `slidev/public/src/<主题>/`，对应链接形如 `/src/...`。共用游戏封面位于 **`slidev/public/game-poster/`**，正文中请使用 `/game-poster/...`。

与幻灯改动一起增删资源时，请**随仓库提交** `slidev/public/` 下的相应文件。

Optional one-time bulk import from the historical repo [Game-Audio-Design-Slidev](https://github.com/SounDoer/Game-Audio-Design-Slidev):

```bash
npm run slidev:sync-public
```

See `scripts/sync-slidev-public.mjs` for flags (`--resume`, `--skip-mp4`, `--mp4-only`).

## Local preview

```bash
npm run slidev:dev -- <stem>
```

Example: `npm run slidev:dev -- game-audio-debug` (passes through to `scripts/slidev-dev-deck.mjs`). Open the printed local URL under `/slides/<slug>/`.

```bash
npm run slidev:build
```

Writes each deck to `../static/slides/<slug>/` and runs automatically before `astro build`.

Open `https://gad.soundoer.com/slides/` for the deck index. If slides reference missing files under `slidev/public/`, add those assets or adjust the markdown first.
