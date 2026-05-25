# Slidev 说明（单一真源）

本文件是 **Game-Audio-Design** 仓库内 **Slidev 讲稿** 的唯一说明源：目录与构建流程、设计令牌与排版规则、本地 `layout` 与 `pages` 写法，均以当前仓库中的 **实现文件** 为准，对应关系如下。

| 主题 | 实现文件（优先查阅） |
|------|----------------------|
| 颜色、标题字号、正文与列表、页码、工具类 | `slides/styles/base.css` |
| 画布尺寸、字体栈、过渡、主题、MDC 等 | `slides/deck-entry-header.in.yaml` |
| 各页版式结构（槽位、局部样式） | `slides/layouts/*.vue` |
| 标准 Markdown 样张（可复制写法） | `slides/pages/EXAMPLE.md` |
| 单套讲义正文 | `slides/pages/<stem>.md` |
| 构建入口与顺序 | `scripts/build-slidev-decks.mjs`、`slides/deck-order.txt` |
| 每套构建时的 `public` 子集 | `scripts/prepare-slidev-public-subset.mjs`（由 `build-slidev-decks.mjs` 调用） |

槽位语法见 Slidev 文档：[Slot syntax (MDC)](https://sli.dev/features/slot-syntax)。

---

## 1. 仓库结构与产物

```
slides/
  pages/*.md              # 讲义 Markdown（多数 stem 对应一套可构建 deck）
  pages/EXAMPLE.md        # 设计系统与 layout 的标准样张
  layouts/*.vue           # 本仓库自定义 layout（同名优先于 Slidev 内置）
  components/*.vue        # 在 pages 中引用的 Vue 组件（如 SPLDiagram）
  styles/base.css         # 幻灯画布内全局样式与设计令牌
  public/                 # 静态资源（构建时按 deck 子集选用）
  deck-entry-header.in.yaml   # 每套 deck 生成入口时注入的共享 frontmatter
  deck-order.txt          # `/slides/` 索引与默认构建顺序（每行一个 stem）
```

- **样张**：`pages/EXAMPLE.md` 是当前视觉系统、槽位写法与常用组合的标准样张；README 说明原则与边界，具体 Markdown 片段以该文件为首要参考。
- **Slug**：默认等于文件名去掉 `.md`；在该 deck 文件 **首张幻灯片** 的 frontmatter（文件顶部的第一个 `---` 块）里可用 `slug:` 覆盖（解析见 `slides/deck-pages-shared.mjs` 的 `listDeckPages`）。
- **`deckListTitle:`**：可选，同上首张 frontmatter；用于站点 `/slides/` 列表标题。缺省顺序为：`deckListTitle` → 首张里的 `title:` → 首张之后正文中出现的第一个 Markdown **`# ` 标题行**（`extractFirstH1`，见 `deck-pages-shared.mjs`）→ `humanizeStem(stem)`。
- **`slidesOrder:`**：可选；写在首张 frontmatter，用于覆盖该 deck 在目录中的排序（数值越小越靠前）；未出现在 `deck-order.txt` 中的 stem 默认排在后面（实现见 `listDeckPages`）。
- **不参与构建与索引的 `pages/*.md`**：`deck-pages-shared.mjs` 中常量 **`EXCLUDED_STEMS`**（当前为 **`cover`**、**`intro`**、**`fin`**）对应的文件 **不会**进入 `listDeckPages()`，因此 **`npm run slidev:build` 不会生成** `website/static/slides/<stem>/`，站点 **`/slides/`** 索引也不列出。需要纳入构建时，从 `EXCLUDED_STEMS` 移除 stem（并视情况加入 `deck-order.txt`）。
- **遗留 `slides.md`**：不再是 Slidev 入口，仅保留说明性注释；正式内容均在 `pages/*.md`。

**构建产物**：`npm run slidev:build` 将**参与构建的**各 deck 输出到仓库根目录 **`website/static/slides/<slug>/`**。全站 **`npm run build`**（见根目录 `package.json`）会先执行 **`npm run slidev:build`**，再执行 **`astro build`**；单独跑 Astro 不会自动构建幻灯。

### 构建期 `public` 子集（`scripts/prepare-slidev-public-subset.mjs`）

`scripts/build-slidev-decks.mjs` 在调用 `slidev build` **每一套** deck 之前，会用 **`withPublicSubset(repoRoot, stem, fn)`**（本脚本导出）在回调 `fn` 执行期间，把 **`slides/public`** 临时换成「仅本套 deck 可能需要」的子集，避免 Vite 把**整库** `public/` 打进每个 `website/static/slides/<slug>/`。

实现要点（与代码一致）：

1. **`materializePublicSubsetStaging`** 在 **`slides/.deck-public-staging`** 生成子树；源仍以仓库里的完整 **`slides/public/`** 为真源（磁盘布局不变）。
2. **收集路径**：从 **`slides/pages/<stem>.md`** 的正文（去掉 HTML 注释后）用正则抓取 Markdown 图片、常见 `src` / `href` / `url(...)` 等形式的 **`/...`** 路径；从该文件**所有 slide frontmatter** 读取 **`image:`**、**`background:`** 等键（含 `fullscreen-media` 的后续页图片）；扫描 **`slides/layouts/*.vue`** 与 **`slides/components/*.vue`** 内出现的 **`/...`**；并始终尝试拷贝 **`GAD_Logo.ico`**（`ALWAYS_COPY_REL`）。
3. **整章目录**：若存在 **`slides/public/<stem>/`** 目录，则**递归整目录**拷入 staging（与「同名 public 子目录」约定一致）。
4. **切换与恢复**：将当前 **`slides/public`** 重命名为 **`slides/public.__full__`**，再把 staging 重命名为 **`slides/public`**；在 **`try/finally`** 中执行 `slidev build`，结束后删除临时 `public`、把 **`public.__full__`** 改回 **`public`**，并清理 **`.deck-public-staging`**。

本地若在 Windows 上构建时出现对 **`public` / `public.__full__` 的 `rename` EPERM**，多为目录被其它进程占用；关闭占用后重试 **`npm run slidev:build`**。

---

## 2. 命令与工作流

| 命令 | 作用 |
|------|------|
| `npm run slidev:dev -- <stem>` | 本地预览指定 deck（透传 `scripts/slidev-dev-deck.mjs`），浏览器路径形如 `/slides/<slug>/`。 |
| `npm run slidev:build` | 构建全部 deck 到 `website/static/slides/`。 |

若构建报资源缺失，在 `slides/public/` 下补文件或改正文引用路径。

线上目录索引：<https://gad.soundoer.com/slides/>。

---

## 3. 设计系统

本节描述 **视觉意图** 与 **当前 CSS 实现**；二者不一致时，以 `slides/styles/base.css` 与 `layouts/*.vue` 为准。

### 3.1 视觉定位

**黑色刊物（Black Editorial）**：在专业音频工具界面的精密感基础上，融入高端印刷刊物的排版张力；以黑白灰为基调，**单一暖色强调**（`--color-accent`）点睛，避免花俏渐变。

### 3.2 配色（CSS 变量）

定义于 `slides/styles/base.css` 的 `:root`：

| Token | 色值 | 用途 |
|-------|------|------|
| `--color-bg` | `#0A0A0A` | 幻灯背景（最深） |
| `--color-surface` | `#141414` | 卡片 / 分层（语义预留） |
| `--color-border` | `#2A2A2A` | 边框 / 分隔 |
| `--color-text-muted` | `#666666` | 次要文字、眉标、注释感文案 |
| `--color-text-body` | `#B0B0B0` | 正文、列表正文 |
| `--color-text-primary` | `#F0F0F0` | 主标题与强调正文 |
| `--color-accent` | `#D45A2A` | 暖赤陶强调色 |

**强调色使用约定**（与实现一致）：列表 `::marker`、`layouts` 中眉标下划线、**`end`** 页首段下划线等使用 `--color-accent`。**主标题字色**仍为 `--color-text-primary`，不把标题整段刷成强调色，以保证对比度。

### 3.3 字体

| 角色 | 实现 |
|------|------|
| 中文标题 / 正文无衬线 | `deck-entry-header.in.yaml` → `fonts.sans: Noto Sans SC`，`base.css` 中 `--font-sans` |
| 英文副标题 / 译文（`::subtitle::`） | `--font-sans`；用于 `cover`、`section` 与 `statement` 的可选副标题槽 |
| 信息结构标题（`.callout-title`） | `--font-sans`；`1rem` / `font-weight: 700`，属于卡片内标题，不归入眉标装饰 |
| 英文眉标（全大写、细字重） | `fonts.serif: Cormorant Garamond`，`--font-serif`；各 layout 的 `.eyebrow-slot` 内 `font-weight: 300`，`letter-spacing: 0.15em`，`text-transform: uppercase` |
| 代码 | `fonts.mono: Fira Code`，`--font-mono`；页码亦使用 mono |

**设计意图**：英文眉标小字、细笔画，与粗黑体中文标题形成「细 / 粗、衬线 / 黑体」对比，接近刊物栏目标签的阅读顺序。`callout-title` 是信息卡片内部的结构标题，优先保证可读性，因此使用 sans。

### 3.4 标题层级与 Markdown 映射

全局标题比例在 **`base.css`** 的 `.slidev-layout h1`–`h6`（注释中已标明推荐语义）：

| 元素 | 字号（实现） | 字重 / 颜色 | 典型用法 |
|------|----------------|-------------|----------|
| `h1` | `4.5rem` | 900 / primary | 封面主标题（`cover` 内 `#`） |
| `h2` | `3.5rem` | 900 / primary | 章节页主标题（`section` 内 `##`，置于 `::title::`） |
| `h3` | `2.8rem` | 900 / primary | 内容页主标题（`header-body` 内 `###`，常作幻灯标题） |
| `h4` | `1.6rem` | 700 / primary | Body 区内小节标题 |
| `h5` | `1.15rem` | 500 / body | Body 区内子标题 |
| `h6` | `1rem` | 500 / muted | 更弱层级 |
| 正文 `p` / `li` | `1rem` | regular / body，`line-height: 1.75` | 列表与段落 |
| `code` | `0.875rem` | mono | 行内代码 |

`cover.vue` 对 `h1` 有局部覆盖，与上表一致。

### 3.5 标题区结构（眉标 + 分隔线 + 主标题）

在 **`cover`**、**`section`**、**`header-body`** 中，可选 **`::eyebrow::`**：渲染为眉标槽，下侧 **1px** `--color-accent` 横线，再接 **`::title::`** 主标题槽（封面多为单个 `#`，章节多为 `##`，内容页多为 `###`，均以对应 `h1`–`h3` 全局样式呈现）。

设计意图：先以英文短标签定位语境，再读中文大字标题。眉标是 **阅读定位标签**，不固定等同于中文标题的英文翻译：

- **`cover`**：眉标写整套 deck 的结构定位或系列名；英文副标题 / 英文译名写入可选 **`::subtitle::`**，例如 `What is Game Audio Design?`。
- **`section`**：优先写结构标签，例如 `PART 01`、`FRAMEWORK`、`CASE STUDY`。若需要章节说明、英文副标题或译名，写入可选 **`::subtitle::`**，不占用眉标。
- **`header-body`**：优先写本页论证类型或当前视角，例如 `CONTEXT`、`PRINCIPLE`、`EXAMPLE`、`IMPLEMENTATION`、`LISTENING`、`PRACTICE`，不逐页翻译中文标题。
- **`statement` / `custom`**：默认不复制标题区。需要弱标签时放在正文结构内。

### 3.6 装饰与工具类

| 元素 | 实现位置 | 说明 |
|------|------------|------|
| 页码 | `header-body.vue` 内 `<span class="page-number">` + `base.css` `.page-number` | 右下角，`0.55rem`，`#444444` |
| 列表标记色 | `base.css` `ul/ol li::marker` | `--color-accent` |
| 行内强调 | `base.css` `.accent` | 文字颜色 `--color-accent` |
| 眉标纯 HTML 场景 | `base.css` `.eyebrow`、`.accent-rule` | 不用 layout 槽时的退路 |
| 背景装饰槽 | `layouts/*.vue` `::backdrop::` + `base.css` `.layout-backdrop` | 各 layout 可选弱背景层；放 `01`、`FIELD`、`?` 等章节编号、关键词或符号；若后面要回到默认槽，使用 `::default::` |
| 信息卡片 | `base.css` `.callout`、`.callout-title` | 深灰 surface + 细边框 + 赤陶左线；承载定义、原则、案例提示等需要从 bullet 中抬出来的信息；`.callout-title` 使用正文同级 sans 粗体，表示卡片内结构标题 |
| 小标签 | `base.css` `.badge` | 细描边短标签；标注 `Wwise`、`RTPC`、`CASE`、`DEMO`、媒体类型、图注标签或叠加说明，不做大面积色块 |
| 数字与步骤 | `base.css` `.metric`、`.metric-label`、`.step-index` | 大号轻字重数字、mono 步骤号；用于关键数值、阶段序号、操作顺序 |
| 引用与媒体 | `base.css` `.quote-accent`、`.figure-frame` | 左侧赤陶引线、图片 / 视频细框、图注；用于 statement、频谱图、流程图、案例截图；常规媒体默认放入 `.figure-frame` |
| 全屏图说明牌 | `base.css` `.caption-plate` | `fullscreen-media` / `custom` 页的半透明说明牌容器；说明牌内的短标签仍使用 `.badge` |
| 分隔与静态重点 | `base.css` `.accent-rail`、`.hairline`、`.active-panel` | 分栏边界、主观察对象、推荐做法、核心案例；灰线为主，赤陶只标本页常驻重点 |

强调色继续保持单色：不新增第二强调色，不把主标题整段染成赤陶。赤陶用于定位、分组、数值、引用、图注、静态重点等结构性信息。

`active-panel` 只表示**本页常驻的重点面板**，不会随着 `v-click` 自动切换。适合用于对照页中的推荐做法、案例拆解页的核心材料、流程页正在讨论的起点或 `custom` 画布里的主热点。若需要逐步揭示内容，使用 `v-click` / `<v-clicks>`；若需要“高亮随点击移动”，应另写显式组件或 `$clicks` 绑定，不把它伪装成静态 class。

### 3.7 画布与主题

`deck-entry-header.in.yaml` 中：`canvasWidth: 1080`、`aspectRatio: 16/9`、`colorSchema: dark`、`transition: slide-left`、`routerMode: history` 等，为所有 deck 共用。**勿**在单页重复抄写系统级键，除非该页确需覆盖。

---

## 4. Layout 体系（本地）

以下 7 个文件在 **`slides/layouts/`**，在 frontmatter 写 `layout: <name>` 时**优先**于 Slidev 内置同名 layout 加载。

画布逻辑尺寸：**1080 × 607**（16:9，由 `canvasWidth` 与比例推导）。

### 4.1 `cover` — Deck 封面

- **文件**：`layouts/cover.vue`
- **结构**：可选 `::backdrop::`（弱背景装饰）；可选 `::eyebrow::` → 赤陶下划线 → `::title::`（一般为单个 `#` 主标题）→ 可选 **`::subtitle::`**（样式同 `section` 的 subtitle）；可选 **`::info::`**，固定在右下脚注区（`0.8rem` muted），避免小字被误当作留白。
- **版式**：整页 `flex` 垂直居中；内容区全宽，主标题 `h1` **4.5rem**（与 `base.css` 一致）；左侧有极细赤陶竖线，`::info::` 非空时上方有短赤陶线。

### 4.2 `section` — 章节分隔页

- **文件**：`layouts/section.vue`
- **槽位**：可选 `::backdrop::`（弱化背景章节编号或关键词，如 `01`、`FRAMEWORK`）；可选 `::eyebrow::`；**`::title::`**（章节主标题，推荐 **`##`**）；可选 **`::subtitle::`**（章节说明、英文副标题或译名，不写则不渲染）。
- **版式**：全页居中，`section-content` `text-align: center`；`::backdrop::` 居中铺在背景层，使用极弱 surface 色。
- **注意**：若主标题使用 **`#`**，则套用全局 **`h1`（4.5rem）**（与封面同级），与 **`##`（`h2`，3.5rem）** 视觉不同；见 `base.css` 中 `.slidev-layout h1` / `h2`。

### 4.3 `header-body` — 标准内容页（主力）

- **文件**：`layouts/header-body.vue`
- **结构**：可选 `::backdrop::`（弱背景装饰）→ Header 区（`px-6 pt-2 pb-4`）→ 可选 `::eyebrow::` + 赤陶线 + **`::title::`**（通常 `###`）→ Main（`flex-1 overflow-hidden px-6 pb-6 pt-3`）→ **`::body::`**；右下页码。
- **Body**：为自由画布。**单栏、两栏、三栏、主区垂直居中、大图 `contain`** 等一律在 **`::body::` 内**用 UnoCSS / Tailwind 风格类（`grid`、`flex`、`min-h-0` 等）完成，**不**增加 layout 级 props。
- **背景图**：可在该页 frontmatter 使用 Slidev 的 **`background:`**（相对 `public/` 的路径），与 `ambience-sound-design.md` 等现稿一致；需要全屏媒体时优先使用本地 **`layout: fullscreen-media`**。

### 4.4 `statement` — 居中陈述

- **文件**：`layouts/statement.vue`
- **行为**：可选 `::backdrop::`（弱背景装饰）；可用默认槽写自由陈述，也可用 **`::title::`** + 可选 **`::subtitle::`** 写固定的中文陈述 + 英文译文。使用 `::title::` 时，layout 会自动把 title 与 subtitle 包进左侧赤陶 quote rail；无 header、**无页码**。

### 4.5 `end` — 结束页

- **文件**：`layouts/end.vue`
- **用法**：可选 `::backdrop::`（弱背景装饰）；默认槽内按顺序两个段落：第一段为感谢 / 收束标题（**3rem**、粗体、primary，下划赤陶线）；第二段为小字联系方式（**0.75rem** muted）。

### 4.6 `custom` — 空白画布

- **文件**：`layouts/custom.vue`
- **行为**：可选 `::backdrop::`（弱背景装饰）；默认槽提供一层全屏内容容器，**无**预设眉标或标题区；适合特殊构图或整页自定义 HTML。需要与全局令牌一致时，仍应使用 `base.css` 中的变量与 `.slidev-layout` 下规则。

### 4.7 `fullscreen-media` — 全屏媒体

- **文件**：`layouts/fullscreen-media.vue`
- **结构**：frontmatter 必填 **`image:`**（相对 `public/` 的路径，或 `/...` 根路径）；可选 **`backgroundSize:`**，默认 `cover`，写 `contain` 时完整显示媒体；可选 **`alt:`**。默认槽为全屏叠加层，可放绝对定位的 `.badge`、`.caption-plate` 等说明元素。
- **行为**：无标题区、无页码；用于游戏画面、界面截图、参考图等需要铺满画布的媒体页。若只是自由构图而不是全屏媒体，使用 `custom`。

### 4.8 Slidev 内置 layout（无本地文件时）

若 `slides/layouts/` 下**没有**同名 `.vue`，则使用 **`@slides/client`**（及主题）自带实现，例如 **`default`**。本仓库已有全屏媒体 layout，正式样张优先使用 **`fullscreen-media`**。

---

## 5. 正文与样式写法

- **原子类**：Slidev 集成 **UnoCSS**，与 **Tailwind CSS** 文档兼容；优先 `class="..."`，少用行内 `style`（仅任意值临时对照等例外）。
- **跨页且与默认主题冲突的排版**：写入 **`slides/styles/base.css`**，选择器挂在 **`.slidev-layout`** 下，减轻对演讲者界面 chrome 的影响。
- **单页一次性实验**：可在该页 md 底部使用 `<style scoped>`，**慎用**，避免复制扩散。
- **点击步进**：讲解型 bullet 默认用 `<v-clicks>` 包裹，让列表逐条出现；只有需要同时比较、作为索引目录、或在 statement / cover / section 中承担整体陈述时，才让 bullet 一次性显示。多栏卡片若需要逐块出现，可在每个子 `<div>` 上写 `v-click`。
- **链接与来源**：正文链接必须有可识别名称，不使用裸 URL 或「点击这里」；外部资料优先放在图注、说明牌或信息卡片中。若使用 HTML `<a>` 写外链，添加 `target="_blank" rel="noreferrer"`。

参考：[UnoCSS](https://unocss.dev/) · [Tailwind CSS](https://tailwindcss.com/docs) · [Slidev 自定义 · Style](https://sli.dev/custom/directory-structure#style)。

### 5.1 `v-click` 与讲解型列表

普通讲解列表默认逐条出现：

```markdown
<v-clicks>

- 先给出判断标准
- 再展示对应案例
- 最后落到可执行步骤

</v-clicks>
```

多栏卡片逐块出现时，把 `v-click` 放在子项上；`active-panel` 仍只是静态重点，不会跟随点击状态自动移动：

```markdown
<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div class="active-panel min-h-0 p-4">
    <span class="step-index">FOCUS</span>
    <h4>本页主观察对象</h4>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">补充维度 A</div>
  <div v-click class="min-h-0 border-l hairline pl-4">补充维度 B</div>
</div>
```

### 5.2 `header-body` 常用片段

`header-body` 是主力内容页。标准写法始终把页眉标题放进 `::title::`，正文结构放进 `::body::`：

```markdown
---
layout: header-body
---

::backdrop::

CONTENT

::eyebrow::

Principle

::title::

### 标准内容页标题

::body::

正文区承担论证、案例与媒体。
```

**两栏 / 三栏（Body 内 `grid`）**：

```markdown
::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="min-h-0 min-w-0">
    <h4>左侧：论证主线</h4>
    <p>先给出页面的核心判断。</p>
  </div>
  <div class="callout">
    <span class="callout-title">右侧</span>
    <p>放案例、图示说明、操作步骤或关键限制。</p>
  </div>
</div>
```

三栏结构用于并列分类、步骤或观察维度；栏位之间优先用 `gap`、`border-l hairline pl-4` 区分。

**主图 / 媒体框（Body 内 `.figure-frame`）**：

```markdown
::body::

<div class="flex h-full min-h-0 flex-col gap-4">
  <div class="figure-frame flex min-h-0 flex-1 items-center justify-center">
    <img class="max-h-full max-w-full object-contain" src="/example/image.png" alt="">
  </div>
  <div class="shrink-0 text-center text-[1rem] leading-tight text-[var(--color-text-body)]">
    图注只说明观察点，不承载另一条主线。
  </div>
</div>
```

所有常规截图、频谱图、流程图、视频容器默认使用 `.figure-frame`；需要铺满整页时改用 `fullscreen-media`。

**强调、重点与信息卡片**：

```markdown
::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div>
    <h4>使用原则</h4>
    <p>先解释这些元素承担的阅读层级。</p>
  </div>
  <div class="flex min-h-0 flex-col gap-3">
    <div class="quote-accent">
      <p>强调一句短判断。</p>
    </div>
    <div class="active-panel p-4">
      <p>标出本页常驻的主观察对象。</p>
    </div>
    <div class="callout">
      <span class="callout-title">信息卡片</span>
      <p>承载定义、原则或案例提示。</p>
    </div>
  </div>
</div>
```

**链接**：

```markdown
::body::

<v-clicks>

- 链接用于交代来源和延伸阅读。
- 正文链接使用明确名称，例如 <a href="https://gad.soundoer.com/" target="_blank" rel="noreferrer">Game Audio Design - SounDoer</a>。
- 资料来源可放在图注、说明牌或信息卡片中，不抢主标题层级。
- 外部资料只标出可识别的标题或站点名称，完整 URL 留在 Markdown 链接目标中。
- 避免使用裸链接、二维码堆叠或「点击这里」这类无语义文本。

</v-clicks>
```

链接样式由 `slides/styles/base.css` 中 `.slidev-layout a` 统一控制；不要在单页内临时改回浏览器默认蓝色链接。需要强调引用出处时，优先组合正文列表、`.caption`、`.caption-plate` 或 `.callout`，而不是把链接放进标题区。

**全屏媒体页**：

```markdown
---
layout: fullscreen-media
image: intro/FarCryPrimal_Title.jpg
backgroundSize: cover
---

<div class="relative h-full w-full">
  <span class="badge absolute left-6 top-6">Fullscreen Media</span>
  <div class="caption-plate absolute bottom-8 left-6 max-w-[34rem]">
    <p class="caption">说明牌只解释观察点，不替代标题区。</p>
  </div>
</div>
```

`image:` 可写相对 `public/` 的路径，也可写 `/...` 根路径；`backgroundSize: contain` 用于完整显示媒体，其它情况默认 `cover`。

---

## 6. 静态资源 `slides/public/`

- **约定**：`pages/<stem>.md` 与 **`public/<stem>/`** 同名目录一一对应；该讲义用到的图片、音频等放入此目录。正文里用 **站点根路径**，例如 `/how-to-listen-sound/foo.png` 对应磁盘 `slides/public/how-to-listen-sound/foo.png`。
- **`background:` / `image:`** 等 frontmatter 可写 **相对 `public/`** 的路径（无 leading `/`），与现稿一致。
- **历史路径**：部分资源仍在 `public/src/<主题>/`，正文里常见 `/src/...`；共用游戏封面在 **`public/game-poster/`**，新稿优先 **`/game-poster/...`**。
- 与讲稿增删同步提交 `slides/public/` 下变更。

---

## 7. 后续工作（原设计文档中的未决项）

以下条目保留为 **产品 / 工程决策**，实现以本 README 与代码为准；完成后请改代码并更新本节。

- 是否引入 **自定义 Slidev theme 包**，或长期在 **`theme: default`** 上叠 `base.css` + 本地 `layouts`（当前为后者）。
- 带复杂背景的全屏页：继续组合 **`header-body` + `background:`**、**`fullscreen-media`** 与 **`custom`**，是否再抽象统一规范。
- 组件 **`SPLDiagram.vue`** 等嵌入图表与全局设计令牌的视觉对齐（按需迭代）。

---

## 8. 与站点、文章规范的关系

- 站点项目级说明见仓库 **`AGENTS.md`**。
- 文章写作规范见 **`.cursor/skills/gad-docs-authoring/REFERENCE.md`**。
- 幻灯口播与演讲者备注可与文章语气不同，但 **Wwise、Unreal Engine** 等术语写法建议与文章写作规范一致。
