# Examples — layouts & typography (Game-Audio-Design)

本文件提供 **可复制 Markdown 片段** 与 **标题 / 配色速查**，便于写 `slidev/pages/*.md` 时少翻文档。

**真源仍为** [`slidev/README.md`](../../../slidev/README.md)（§3–§5）；若实现与 README 有出入，以 **`slidev/styles/base.css`**、**`slidev/layouts/*.vue`** 为准，并优先改 README 后再同步本文件。

---

## 1. 画布与标题区（速查）

- 逻辑画布：**1080 × 607**（16:9）。系统级 `canvasWidth`、`fonts`、`transition` 等见 **`slidev/deck-entry-header.in.yaml`**，勿在每页重复抄写。
- **`cover` / `section` / `header-body`**：可选 **`::eyebrow::`**（英文眉标槽）→ **1px** `--color-accent` 横线 → **`::title::`** 主标题槽（见 README §3.5）。

### 1.1 标题层级与 Markdown（`.slidev-layout`，README §3.4）

| 元素 | 字号（实现） | 字重 / 颜色 token | 典型用法 |
|------|----------------|-------------------|----------|
| `h1` | `4.5rem` | 900 / `--color-text-primary` | `cover` 内 `#` |
| `h2` | `3.5rem` | 900 / primary | `section` 内 `##`，置于 `::title::` |
| `h3` | `2.8rem` | 900 / primary | `header-body` 内 `###`，置于 `::title::` |
| `h4` | `1.6rem` | 700 / primary | `::body::` 内小节标题 |
| `h5` | `1.15rem` | 500 / body | `::body::` 内子标题 |
| `h6` | `1rem` | 500 / muted | 更弱层级 |
| `p` / `li` | `1rem` | regular / body，`line-height: 1.75` | 正文与列表 |
| `code` | `0.875rem` | mono | 行内代码 |

**`section` 注意**：主标题推荐用 **`##`**（`h2`）。若误用 **`#`**（`h1`），会与封面主标题同档字号（README §4.2）。

### 1.2 配色 token（`:root`，README §3.2）

| Token | 色值 | 用途 |
|-------|------|------|
| `--color-bg` | `#0A0A0A` | 背景 |
| `--color-surface` | `#141414` | 卡片 / 分层（语义预留） |
| `--color-border` | `#2A2A2A` | 边框 / 分隔 |
| `--color-text-muted` | `#666666` | 眉标、次要文案 |
| `--color-text-body` | `#B0B0B0` | 正文、列表 |
| `--color-text-primary` | `#F0F0F0` | 主标题与强调正文 |
| `--color-accent` | `#D45A2A` | 列表标记、眉标下划线、`end` 首段下划线等 |

### 1.3 字体角色（README §3.3）

| 角色 | 实现要点 |
|------|----------|
| 中文标题 / 正文 | `Noto Sans SC`（`fonts.sans`） |
| 英文眉标 | `Cormorant Garamond`，全大写、`letter-spacing: 0.15em`、细字重 |
| 代码 / 页码 | `Fira Code`（`fonts.mono`） |

---

## 2. 本地 layout：最小可用片段

以下每段为 **一张幻灯**；多页 deck 用 `---` 在文件中拼接（与现稿一致）。将示例里的 `your-stem` 换成与 `pages/<stem>.md` 同名的 stem；图片路径见 README §6。

### 2.1 `cover`

```markdown
---
layout: cover
---

::eyebrow::

SESSION 01

::title::

# 示例专题标题

::info::

可选：日期 / 课程名脚注（右下）
```

### 2.2 `section`（无 `::subtitle::`）

```markdown
---
layout: section
---

::eyebrow::

PART A

::title::

## 章节中文标题

**English line under the same slot**
```

### 2.3 `header-body`（单栏）

```markdown
---
layout: header-body
---

### 本页主标题

::body::

- 要点一
- 要点二
```

### 2.4 `header-body`（带眉标 + `background:`）

```yaml
---
layout: header-body
background: your-stem/poster.png
---

::eyebrow::

CONTEXT

::title::

### 带淡底图的内容页

::body::

正文……
```

（`background:` 为相对 `slidev/public/` 的路径，无 leading `/`。）

### 2.5 `header-body`（`::body::` 内两栏 `grid`）

```markdown
---
layout: header-body
---

### 两栏对比

::body::

<div class="grid min-h-0 grid-cols-2 gap-4">
  <div class="min-h-0 min-w-0 overflow-auto">左列</div>
  <div class="min-h-0 min-w-0 overflow-auto">右列</div>
</div>
```

更多片段（垂直居中大图、`contain` 等）见 README **§5.1**。

### 2.6 `statement`

```markdown
---
layout: statement
---

### 一句可居中的金句或反问
```

### 2.7 `end`

```markdown
---
layout: end
---

感谢聆听

your@email.com · [站点](https://example.com)
```

（两段顺序：收束标题 → 联系方式；样式由 `end.vue` 处理。）

### 2.8 `custom`

```markdown
---
layout: custom
---

<div class="flex h-full w-full items-center justify-center">
  全自定义结构；需要令牌时用 `base.css` 变量与 `.slidev-layout` 下规则。
</div>
```

---

## 3. Slidev 内置（本仓库无同名 `layouts/*.vue` 覆盖时）

### 3.1 `image`（全屏底图）

```yaml
---
layout: image
image: your-stem/full-bleed.png
backgroundSize: cover
---
```

（`image:` 相对 `public/`，见 README §4.7。）

### 3.2 `default`

无本地覆盖时使用主题自带整页默认槽；适合极简占位或自定义块。

---

## 4. 装饰与行内强调（README §3.6）

- 列表 `::marker`、眉标下划线：强调色由全局样式处理。
- 行内关键词可用 **`base.css`** 中的 **`.accent`** 包裹（若与现稿一致）。

---

## 5. 维护约定

- 增删本地 layout、或调整 `h1`–`h6` 比例时：**先改** `slidev/README.md` §3–§4 **再改**本 `EXAMPLES.md`。
- 反模式与验证分层见同目录 **[REFERENCE.md](REFERENCE.md)**。
