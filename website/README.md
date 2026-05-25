# Website 说明（单一真源）

本文件是 **Game-Audio-Design** 仓库内 **Astro 文章网站** 的维护说明源：站点目录、内容加载、路由结构、构建命令与网站 UI 实现，均以当前仓库中的 **实现文件** 为准，对应关系如下。

在线阅读：**[gad.soundoer.com](https://gad.soundoer.com)**

| 主题 | 实现文件（优先查阅） |
|------|----------------------|
| Astro 站点配置、输出目录、静态资源目录 | `website/astro.config.mjs` |
| 内容集合与文章加载规则 | `website/src/content.config.ts` |
| 站点外壳、导航与全站布局 | `website/src/components/SiteShell.astro`、`website/src/layouts/BaseLayout.astro` |
| 文章页布局、目录与正文渲染 | `website/src/layouts/ArticleLayout.astro`、`website/src/components/TableOfContents.astro` |
| 首页、文章详情、日志、Slides 索引、404 | `website/src/pages/*.astro` |
| 全站样式与设计令牌 | `website/src/styles/global.css` |
| 仓库布局与发布契约测试 | `website/src/lib/*.test.ts` |

文章写作方法、术语、frontmatter 与发布检查不在本文件维护，见 `.cursor/skills/gad-docs-authoring/`。

---

## 1. 仓库结构与产物

```
website/
  README.md               # 本文件
  astro.config.mjs        # Astro 配置；站点输出到根目录 build/
  tsconfig.json           # website 子项目 TypeScript 配置
  vitest.config.ts        # website 相关测试配置
  docs/                   # 正式文章内容
  drafts/                 # 新文章协作草稿：draft-<slug>.md；历史草稿在 legacy/
  src/
    content.config.ts     # Astro content collections
    pages/                # 文件路由
    layouts/              # BaseLayout、ArticleLayout
    components/           # SiteShell、TOC、订阅表单等
    styles/global.css     # 全站样式
    lib/*.test.ts         # 契约与工具测试
  static/                 # Astro publicDir；构建后原样公开
    slides/               # Slidev 构建产物，来自 npm run slidev:build
```

- **正式文章**：位于 `website/docs/`。Astro content collection 从 `./docs` 读取 Markdown；该目录只放正式文章内容。
- **历史草稿**：迁移前旧草稿已移至 `website/drafts/legacy/`，仅用于查阅和迁移。
- **新文章协作草稿**：按项目规范使用 `website/drafts/draft-<slug>.md`；进入正式实现时再写入 `website/docs/<Article-Title>/<Article-Title>.md`。
- **Slides 页面**：`/slides/` 是网站路由，源文件在 `website/src/pages/slides/index.astro`；具体 deck 源码与资源归 `slides/` 管理，说明见 `slides/README.md`。
- **构建产物**：`npm run build` 会先把 Slidev deck 写入 `website/static/slides/`，再把 Astro 网站输出到仓库根目录 `build/`。

---

## 2. 命令与工作流

从仓库根目录运行：

| 命令 | 作用 |
|------|------|
| `npm run dev` / `npm run start` | 启动 Astro 网站开发服务器（`astro dev --root website`）。 |
| `npm run check` | 运行 Astro check（`astro check --root website`）。 |
| `npm run test` | 运行 `website/vitest.config.ts` 下的 Vitest 测试。 |
| `npm run build` | 先构建 Slidev deck，再构建 Astro 网站到根目录 `build/`。 |
| `npm run preview` | 预览已构建的 Astro 网站。 |
| `npm run verify:build-output` | 检查构建产物契约。 |

若只改文章 Markdown，通常至少检查 frontmatter、slug、链接与页面渲染；若改 `website/src/`、配置或构建脚本，运行相关测试，必要时再跑 `npm run check` / `npm run build`。

---

## 3. 内容与路由

- `/`：首页，列出文章入口。
- `/[slug]/`：文章详情页，slug 由 `website/src/lib/article-slug.ts` 解析。
- `/log/`：日志页，读取 `website/docs/Log.md`。
- `/rss.xml`：RSS 输出。
- `/slides/`：Slidev deck 索引，读取 `slides/deck-pages-shared.mjs` 生成的 deck 元数据。

本站由希辰（SounDoer）维护，面向游戏音频从业者的深度技术长文与课程资料。访问与分享请使用 <https://gad.soundoer.com/>。

---

## 4. 与项目级规范的关系

- 仓库级协作入口见根目录 `AGENTS.md`。
- 文章写作工作流见 `.cursor/skills/gad-docs-authoring/`。
- Slidev 讲稿与资源规范见 `slides/README.md` 和 `.cursor/skills/gad-slides-authoring/`。
- `website/src/` 内代码、UI 文案、HTML 属性、注释与测试描述使用英文。
