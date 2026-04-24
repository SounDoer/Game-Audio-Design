# Game Audio Design 站点重构备忘

本文档记录重构背景、现状审计结论、目标需求与待决事项，供后续迭代对照。随讨论推进可继续增删改。

---

## 已定案决策（2026-04-24；Astro / Node 于同日补充）

| 主题 | 结论 |
|------|------|
| **托管与部署** | **维持现状**：GitHub Actions 构建静态站点 → 发布至 GitHub Pages；自定义域名 **`gad.soundoer.com`**（`CNAME`）与现有 workflow 先不改。 |
| **邮件订阅** | **优先评估自建**：若实现与运维成本可接受则自建；若明显拖慢上线，再采用 **第三方 ESP + 表单** 作为备选。 |
| **语言** | **收敛为单一语言**（内容与站点 UI 一致；建议默认 **中文 `zh-Hans`**，与现有正文主体一致）。 |
| **SSG 与框架** | **弃用 Docusaurus**，采用 **[Astro](https://astro.build/)** 作为静态站点生成框架；产出仍为由 CI 构建的静态 HTML，部署链路不变。官方文档：<https://docs.astro.build/>。 |
| **构建用 Node** | **Astro 6 + Node 22+**；`.github/workflows/deploy.yml` 已使用 **`node-version: 22`**。本机开发亦需 Node 22。参见 [Astro 6.0 发布公告](https://astro.build/blog/astro-6/)。 |
| **分享预览** | **无独立封面图也可**：但至少保证链接在微信等 IM 里展开时 **有清晰标题（及建议有短摘要）**。实现上依赖每页 HTML 的 **Open Graph `og:title`**（及 `og:description` 等）；详见下文「何为复制链接 + OG 卡片」。 |
| **旧链接** | **不做兼容**：新站 URL 可与旧 Docusaurus 不一致；历史外链失效 **可接受**。 |
| **信息架构** | **Course 与 Topic 合并**为同一套「文章」流（单一 Content Collection 或等价方案，实施时定 slug 规则）；**`docs/Resource` 为独立线**，站内路由 **`/resource`** 汇总该目录下篇目，并纳入导航与 RSS（单一 RSS 项指向该页，避免多文件同 URL 重复）。**`docs/Log.md` 单独成线**：不与文章流合并，站点内 **独立路由/入口**（如 `/log`），首页目录区 **单独列出**。需要 **独立首页**：展示整站结构与目录入口（可理解为站点地图 + 导航枢纽）。 |
| **Admonition（`:::`）** | **已定案：方案 C**——将 `:::info` 等 **手工改为 HTML**（如 `<aside class="…">`）；具体 class 与样式在 Astro 全局 CSS 统一约定。 |
| **插图** | **迁移期已定案**：与 Markdown **同目录（colocation）**，不先整体迁到 `src/assets`；在 Content Collections 中按 Astro 要求声明资源即可。 |
| **Canonical** | **实施默认**：`site` 使用 **`https://gad.soundoer.com`**；基类布局为每页输出 **`<link rel="canonical">`**（= `site` + 当前 pathname，不含 query）；**`og:url` 与 canonical 一致**；与全站 **HTTPS** 对齐。 |
| **迁移节奏** | **直接在主分支改**：可接受站点短时不可用；不单独保「旧站并行」工期。 |
| **第一版范围** | **RSS + OG + 分享**（复制链接、微信扫码引导等）先上线；**邮件订阅**仅占位或 **二期**。 |
| **内容安全线** | **`docs/` 下已有 `.md` 不得误删**；其余（Docusaurus 配置、CI、新增 Astro 目录等）可按迁移需要任意调整。 |

---

## 何为「复制链接 + OG 卡片」（与「至少要有标题」的关系）

**场景**：你把站点里某篇文章的 **URL 复制** 下来，发到微信聊天、群或「文件传输助手」里。

**微信（及多数 IM）会做的事**：对方（或你自己）点开或预览该消息时，客户端会 **请求这个 URL 对应的网页**，读取 HTML 里的 **Open Graph 元数据**（例如 `og:title`、`og:description`、`og:image`），在气泡下面画出一块 **链接预览卡片**——上面一行 **标题**、一行摘要、左侧或上方一张图（若有）。

- **「OG 卡片」**：指的就是这种 **由 OG 标签驱动的链接预览块**（不是公众号后台里那种单独排版的图文，但 **标题展示效果类似「有标题的分享」**）。
- **「以复制链接为主」**：网页 **不能像微信 App 内置分享那样**，从任意浏览器一键「分享到朋友圈」；常见做法是页面上放 **「复制链接」**，用户复制后到微信里粘贴发送，收件人看到的是 **带标题的卡片**（前提是页面里 **`og:title` 正确**，且微信能抓到该页；有时与 HTTPS、缓存有关）。
- **没有封面图**：可以不设 `og:image` 或设一张全站默认小图；**标题仍应来自 `og:title`**（通常与文章 `h1` 或 frontmatter 标题一致），这样即满足「至少得有标题」。

实施时会在模板里 **为每篇文章注入** `og:title` / `og:description`（摘要可从 frontmatter 或首段自动生成），可选 `og:image`。

### 补充：点「分享到微信」弹出二维码，扫一下行不行？

**可以做成体验接近的流程，但「扫一下」通常只解决「用微信打开这篇网页」，不能替用户一键发帖到朋友圈。**

| 做法 | 能做什么 | 不能做什么 |
|------|-----------|-------------|
| **弹窗里放当前文章 URL 的二维码**（或用微信提供的「打开小程序/网页」类中间页，本质仍是 URL） | 用户用 **微信扫一扫** → 在 **微信内置浏览器**里打开文章；之后在聊天里转发该链接时，微信已能读到 OG，**卡片带标题**。 | **无法**让任意个人站点在用户扫码后 **自动调起「分享到朋友圈」** 并完成发送；朋友圈没有给普通 H5 这种「免确认一键发」的开放能力。 |
| **用户已在微信里打开文章后** | 可用文案引导：**右上角 `···` → 转发给朋友 / 分享到朋友圈**（系统原生菜单，最稳）。 | 同上，需用户 **再点一两下**，不是「只扫一次码就发完朋友圈」。 |
| **微信 JS-SDK**（`updateTimelineShareData` 等） | 在 **已认证服务号 + 绑定安全域名 + 后端签名** 的前提下，可在微信内浏览器里 **预置分享标题/描述/图**，用户仍要点确认分享。 | 成本高、且依赖公众号主体，**不适合当作个人静态博客的默认方案**。 |

**产品上的折中（推荐预期）**：

1. 按钮文案可以是 **「在微信中打开」** 或 **「分享到微信（扫码）」**，弹层里：**二维码 + 短文说明**——例如「使用微信扫一扫，在浏览器中打开本文；打开后点右上角 … 分享给朋友或朋友圈」。
2. 若仍写「分享到朋友圈」，建议在说明里写清 **「打开后请在微信内点右上角分享」**，避免用户以为扫完即等同已发朋友圈。

技术上二维码即 **encodeURIComponent（文章的首选规范 URL）** 生成图片（前端库或构建时 SVG/PNG 均可），**无后端也能做**。规范 URL 即下文的 **canonical**。

---

## 名词与实现选项备忘（实施前对齐）

### 1）Docusaurus 里的 `:::info` 是什么？迁到 Astro 有哪几条路？

在 Docusaurus 里，下面这种写法叫 **admonition（告示块）**，构建时会变成带样式的 HTML（提示框）：

```markdown
:::info
这是一段提示正文
:::
```

标准 Markdown **没有**这条语法，所以换到 Astro 后必须 **显式处理**，否则要么当普通文字瞎显示，要么构建报错。常见三条路如下；**本项目已定案：路线 C**。

| 路线 | 做法 | 优点 | 缺点 |
|------|------|------|------|
| **A. MDX + 小组件** | 把需要告示的 md 改成 `.mdx`，在文里写 `<Aside type="info">...</Aside>` 之类 | 行为最可控、样式随你写 | 要改文件扩展名或引入组件语法 |
| **B. remark/rehype 插件** | 在 Astro 的 markdown 管线里加插件：构建时把 `:::info ... :::` **自动转成** `<aside>` 等 HTML | 源文件可继续用 `:::`，批量迁移省力 | 要自己找或写插件、调试边界情况 |
| **C. 手工改成纯 HTML（已定案）** | 直接在 md 里写 `<aside class="note">...</aside>` | 无魔法、最直观 | 源码略冗长；class 名需全站统一 |

迁移时逐篇把 `:::info` / `:::warning` 等替换为带语义/class 的 `<aside>`（或等价块级元素），再用站点 CSS 控制外观即可。**现状（2026-04）**：仓库内 `docs/**/*.md` 已无 `:::` 残留；三篇课程概览中的 `:::info` 已改为 **`<aside class="admonition" role="note">`**，样式见 `src/styles/global.css`。日后若新增 `:::warning` 等，按同案处理。

---

### 2）插图放 `src/assets` 和「放在 md 同目录」各有什么优劣？

| 方式 | 说明 | 优点 | 缺点 |
|------|------|------|------|
| **`src/assets/`（或按文章分子目录）** | 图集中放在 `src` 下，由 Astro/Vite 当 **模块** 处理 | 可 **哈希文件名** 利于缓存；路径校验、优化（压缩、转 webp）与 bundler 集成好 | 和 md 物理分离，写相对路径要习惯 `import` 或约定别名 |
| **与内容同目录（colocation）** | 图和 `.md` 放在同一文件夹（你现在是 `Game-Engine-Audio-Middleware-Integration/xxx.png` 这种） | **和 Docusaurus 习惯接近**，「文章 + 图」一包搬走直观 | 要符合 Astro **Content Collections 对静态资源的约定**（通常仍可 colocate，需在 `config` 里声明 `assets` 等）；大量图时仓库略散 |

**已定案（迁移期）**：**继续 colocation（与 md 同目录）**，与现有 `docs/` 结构对齐；若以后要做强图片优化，再评估迁到 `src/assets`。

---

### 3）`canonical`（规范链接）是什么？

同一个页面在理论上可能有 **多个不同 URL** 能打开（例如带不带 `www`、HTTP 与 HTTPS 并存、`?utm=...` 追踪参数、尾部斜杠差异）。**搜索引擎和微信预览**会困惑：到底以哪一个为准？

**Canonical** 就是在 HTML `<head>` 里加一行（概念上）：

```html
<link rel="canonical" href="https://gad.soundoer.com/article/slug" />
```

含义：**「这篇内容的首选地址是这一个」**。好处包括：避免 **重复内容** 稀释 SEO；分享、统计时 **统一计数**；配合 **全站 HTTPS** 时，避免微信抓到 `http` 版页面。

**实施约定（已定案）**：在 Astro 配置中设定 `site: 'https://gad.soundoer.com'`；在 **基类布局**（文章、Log、首页等）的 `<head>` 中输出 **canonical** 与 **`og:url`**，取值均为「`site` + 当前页 pathname」，**忽略 query string**；与 **OG 标签、分享二维码中的 URL** 使用同一套规则，避免微信与搜索引擎抓到「多个官方地址」。

---

## 一、背景与动机

1. **原定位**：使用 Docusaurus 做「在线课程」形态的文档站，持续写入 `docs/` 下的 Markdown。
2. **动机变化**：在 AI 辅助阅读/写作普及的语境下，弱化「固定课程框架」心智，更偏向 **作者持续更新的文章/笔记集合**。
3. **内容形态期望**：以 **Markdown 为单一事实来源**、维护成本低；**不再保留 Docusaurus**，迁移至轻量 SSG。

---

## 二、当前技术栈与仓库结构（迁移完成后快照，随仓库更新）

| 项目 | 说明 |
|------|------|
| 框架 | **Astro 6.x**（`package.json` / `astro.config.mjs`）；`site: https://gad.soundoer.com`，`outDir: build`，`publicDir: static`，`trailingSlash: 'never'` |
| 内容源 | **`docs/`** 下 Markdown **不迁目录**；由 **`src/content.config.ts`** 中 **glob loader** 映射为 `courseArticles`、`topicArticles`、`resourcePages`、`logPage` |
| 主要路由 | **`/`** 首页目录；**`/articles/course/...`**、**`/articles/topic/...`**；**`/resource`**（汇总 `docs/Resource`）；**`/log`**（`docs/Log.md`）；**`/rss.xml`**；**`/404`**；**sitemap**（`@astrojs/sitemap`） |
| 正文 | Markdown + 按需 **内联 HTML**（如 `<aside class="admonition">`）；插图与 md **同目录 colocation** |
| 静态资源 | **`static/`**（含 **`static/CNAME`** 自定义域、**`img/GAD_Logo.svg`** 作 favicon） |
| 布局与 SEO | **`src/layouts/BaseLayout.astro`**：`canonical`、`og:*`、`twitter:*`、可选 **`ogType`**；**`ArticleLayout.astro`**：文章 **`og:type=article`**、分享区（复制链接 + 构建期二维码） |
| 本地草稿 | **`_local/`** 不参与 Astro 构建 |
| 编辑器 | **`frontmatter.json`**：Front Matter 插件 → **Astro**，预览 **`http://localhost:4321`** |
| Node | **`>= 22`**（`package.json` `engines`）；CI **`node-version: 22`** |
| 部署 | GitHub Actions：`yarn install --frozen-lockfile` → **`yarn build`** → 上传 **`build/`** artifact → **`peaceiris/actions-gh-pages`**（`publish_dir: ./build`）；需 Secret **`GH_PAT`** |

### 已实现 / 仍可增强

| 状态 | 说明 |
|------|------|
| ✅ | Docusaurus 已移除；canonical / `og:url` / 文章 `og:title`；RSS（含 Resource 聚合一条）；分享区；Resource 进站；根目录冗余 **CNAME** 已删；未使用的 Docusaurus 占位 SVG 已删 |
| 🔜 可选 | 按篇 **`og:image`**（frontmatter 可用 `ogImage` / `og_image` / `image` / `cover` / `thumbnail`）；首页从 **Course/Topic 分组** 演进为 **时间线 / 标签 / 自动生成目录树** |
| ⏳ 二期 | **邮件订阅**（见已定案表） |

*旧 Docusaurus 栈说明仅保留于 git 历史与本对话记录，不再维护于本节。*

---

## 三、重构目标（需求清单 — 与实现对照）

### 3.1 信息架构与形态

- [x] **弱化「在线课程」产品感（第一步）**：首页已新增 **按更新时间排序的全站列表**（基于文件 mtime）；Course / Topic 分组暂保留为次级入口，后续可继续演进标签与自动目录。
- [x] **Markdown 为源**，内容保留在 **`docs/`**。
- [x] **插图**：与 md **同目录（colocation）**，当前构建正常。
- [x] **`:::` 告示块**：已按方案 C 处理；**`docs` 内已无 `:::`**（首批三篇课程概览为 `<aside class="admonition">`）。

### 3.2 订阅与触达

- [x] **RSS**：`/rss.xml` 已生成（Course + Topic + Resource 聚合项 + 文件 mtime）。
- [ ] **邮件订阅**：**二期**（或首页仅占位）；落地时评估自建 vs 第三方（见已定案表）。

### 3.3 分享与预览

- [x] 文章页 **复制链接** + **二维码**（构建期生成，见 `ArticleLayout.astro`）。
- [x] **`og:title`** / **`og:url`** / **`canonical`**；文章 **`og:type=article`**。
- [x] **`og:description`**：`docs/` 下篇目 frontmatter **`description`** 已补齐，预览不再依赖站点默认句回落。
- [x] **`og:image`**：已配置全站默认分享图（`/img/GAD_Logo.svg`）；按篇图可通过 frontmatter 的 `ogImage` / `og_image` / `image` / `cover` / `thumbnail` 覆盖。

---

## 四、技术方向（已定：Astro，弃用 Docusaurus）

- **目标形态**：**Astro** + 现有 **GitHub Actions → 静态产物 → gh-pages**；构建链对齐 **Node 22+**（见上文已定案表）。
- **不再考虑**：在 Docusaurus 上继续堆插件作为长期方案。

**基础设施**：托管部署先不变；**Cloudflare** 等加速/边缘能力仍为可选、非本次定案范围。

---

## 五、仍待实施阶段细化的事项

- [x] **内容目录与 slug**：**已定 — 保留 `docs/`**，由 `src/content.config.ts` 读入；slug 由相对路径生成；**`/log`**、**`/resource`** 已接导航与首页。
- [ ] **首页与信息架构**：已增加全站「最新更新」列表；是否进一步改为 **自动目录树**、是否增加 **标签**，按需排期。
- [ ] **邮件（二期）**：自建形态（Serverless + Resend/SMTP 等）或第三方 ESP，与 **opt-in / 退订 / 隐私文案**。
- [x] **Front Matter**（`frontmatter.json`）已对接 **Astro** 与 `docs/`。

---

## 六、建议实施顺序（里程碑 — 2026-04 对照）

| 步骤 | 内容 | 状态 |
|------|------|------|
| 1 | Astro 骨架 + **Node 22** CI + 独立首页 + Course/Topic 接入 + `build/` 对接 gh-pages | ✅ 已完成 |
| 2 | 内容仍在 `docs/`；**HTTPS**（`site`）、**canonical**、默认 OG 元数据 | ✅ 已完成 |
| 3 | **RSS** + sitemap | ✅ 已完成 |
| 4 | 文章 **分享区**；**`og:title` / `og:url`**；文章 **`og:type=article`**；微信扫码说明文案 | ✅ 已完成 |
| 5 | 顶栏导航；Docusaurus **已移除** | ✅ 已完成 |
| 6 | **邮件订阅**（二期或占位） | ⏳ 未开始 |
| — | **可选增强**：按篇 **`og:image`**；首页从「最新更新 + 分组」继续演进（标签/自动目录树）；**`Course.md`** 欢迎页是否恢复 | 🔜 按需 |

---

## 七、当前实现备注（Astro 迁移后）

- **自定义域**：`CNAME` 仅保留在 **`static/CNAME`**（随构建进 `build/`），根目录不再重复放一份。
- **`docs/Course/Course.md`**：因 frontmatter 中 `slug: /` 会错误映射到站点根，**不参与构建、首页与 RSS**；文件保留。若要在站上展示欢迎页 / Slidev，可后续改 `slug` 或增加单独路由。
- **Front Matter（VS Code 插件）**：`frontmatter.json` 已指向 **Astro**，本地预览 **`http://localhost:4321`**。
- **favicon**：使用 **`static/img/GAD_Logo.svg`** 作为站点图标。

---

## 八、文档维护

- 关键决策已记入文首「已定案决策」表；后续变更请 **改表并追加日期**。
- 初稿：2026-04-24；已定案补充：2026-04-24（含 Astro 选型、Astro 6 / Node 22 CI 备忘）；同日第二轮：旧 URL 不兼容、Course+Topic 合并、Resource 首发不做、首页与第一版范围、canonical/`:::`/插图说明；**第三轮**：Log 单独、`:::` 方案 C、插图 colocation、canonical/HTTPS 实施约定；**第四轮**：资源页 `/resource`、Front Matter 与 CNAME 整理、三篇 `:::` 转 `<aside>`、favicon 与文章 `og:type`、移除未用 Docusaurus 占位图；**第五轮（2026-04-25）**：**本文档与仓库对齐** — 重写第二节为当前栈快照、第三节/第五节/第六节勾选与里程碑表、构建用 Node 行改为已落地、名词备忘补充 `:::` 迁移现状。
