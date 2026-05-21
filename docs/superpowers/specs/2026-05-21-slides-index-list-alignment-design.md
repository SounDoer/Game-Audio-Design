# Slides 索引列表对齐设计

## 背景

网站现在通过共享站点外壳把 `Articles` 和 `Slides` 呈现为同级频道。

当前 `/slides/` 页面已经沿用了 Articles 索引页的搜索框和数量统计模式，但 slide deck 条目的形态还没有完全和文章条目对齐：

- Article 条目使用标题链接，并在下方呈现 `description`。
- Slide 条目目前是更紧凑的标题与 slug 同行展示，缺少与 Articles 对等的描述字段。

我们讨论过为 slide deck 使用视觉化 grid，包括封面卡片等形式。但本轮放弃该方向，因为它要么需要为每个 deck 维护额外封面元数据，要么需要引入更复杂的 Slidev 截图或构建链路。对于当前目标来说，这些复杂度不值得引入。

## 决策

采用保守的对齐方案：让 `/slides/` 条目跟随 Articles 列表的阅读节奏。

第一版将：

- 保持 `/slides/` 是共享站点外壳下的简单列表页。
- 保留现有搜索框和数量状态。
- 保留 deck 链接在新标签页或新窗口中打开的行为。
- 每个 deck 条目以 deck 标题作为主要链接。
- 每个 deck 在 frontmatter 中新增 `description` 字段，并显示在标题下方。
- slug 只用于链接生成和路由，不作为可见元信息展示。
- 不引入 grid、封面图、featured deck、生成缩略图或 Slidev 截图。

这样可以让 Slides 明确处在与 Articles 相同的网站体系中，同时避免新增内容维护要求或构建要求。

## 页面结构

`/slides/` 页面结构应继续与 `/` 保持平行：

- 顶部控制区：搜索框和实时数量。
- 主列表区域。
- 空搜索结果提示。

每个 slide 条目的阅读顺序为：

1. 主要标题链接。
2. `description` 描述文本。

`description` 承担与 Articles 页面相同的列表摘要职责，用于说明该 deck 的主题或内容范围。slug 只承担链接与路由职责，不进入可见文案层级。

## 非目标

本设计不做：

- 新增封面图或卡片缩略图。
- 新增 CSS 生成的抽象封面 fallback。
- 从 Slidev deck 生成截图。
- 新增 featured 或 pinned slides 区块。
- 修改 Slidev 构建链路。
- 修改 deck 排序逻辑。
- 合并 article 和 slide 的数据模型。

## 实现说明

实现应限定为 `slides/pages/*.md` frontmatter、`slides/deck-pages-shared.mjs` 数据读取，以及 `website/src/pages/slides/index.astro` markup/CSS 的小幅调整。

`listDeckPages()` 数据契约需要扩展：

- `listTitle` 用作链接文本。
- `description` 用作标题下方的描述文本。
- `slug` 只用于 URL。

所有参与 `/slides/` 索引的 `slides/pages/*.md` deck 都应在首个 frontmatter block 中提供 `description`。不参与索引的 `cover`、`intro`、`fin` 等排除页面不需要补充。

搜索行为应与 Articles 页面一致：按 deck 标题和 `description` 过滤，高亮匹配的标题文本，并更新数量。slug 不再作为搜索字段。

## 测试与验证

实现时应验证：

- `/slides/` 仍然在共享站点外壳中渲染。
- Slide deck 链接仍然指向 `/slides/<slug>/`，并在新标签页或新窗口中打开。
- slide deck 标题是每个条目的主要视觉元素。
- description 显示为标题下方的描述文本。
- slug 不作为可见元信息展示。
- Slides 搜索按标题和 description 过滤。
- 空搜索结果仍然可以清除。
- 没有引入 Slidev 构建或资源流水线改动。
