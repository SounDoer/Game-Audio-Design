# 游戏音频设计 Game Audio Design

基于 [Astro](https://astro.build/) 的静态站点，内容源为仓库内 `docs/` 下的 Markdown（**请勿删除**已有 `.md` 正文）。静态资源与 **`CNAME`** 放在 **`static/`**，会原样进构建产物根目录。

主要路由：文章首页 **`/`**、文章详情 **`/[slug]`**、**`/rss.xml`**。

若使用 VS Code 的 [Front Matter](https://frontmatter.codes/) 插件，仓库内 `frontmatter.json` 已配置为 **Astro** 与预览 **`http://localhost:4321`**。

## 本地开发

需要 **Node 22+**。

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

静态产物输出到 **`build/`**（与 GitHub Actions 中 `peaceiris/actions-gh-pages` 的 `publish_dir` 一致）。CI 使用 **`npm ci`** 按 `package-lock.json` 安装依赖。

## 部署

推送到 `main` 后由 `.github/workflows/deploy.yml` 构建并发布至 GitHub Pages（自定义域见 `static/CNAME`）。

## 长期内容规范（必须遵守）

以下规则用于保证内容可发布、可排序、可维护。

### Frontmatter 必填字段

所有 `docs/**/*.md` 页面（包含文章与功能页）统一要求：

- `slug`: 页面唯一标识，推荐全小写 + 连字符（kebab-case）
- `description`: 首页摘要与分享摘要来源
- `date`: `YYYY-MM-DD`

可选字段：

- `pinned: true|false`
- `pinnedOrder: number`

### 发布与可见性规则

- 无 `date` 视为未发布，不应进入首页流、RSS、sitemap。
- 首页排序基于单一 `date` 字段。
- `date` 应与正文末尾署名日期保持一致。

### 置顶规则

- 单流混排，最多 3 篇置顶。
- 置顶优先按 `pinnedOrder`，重复时按 `date`。
- 置顶文必须具备合法 `date`。
- 搜索状态下也保留 `[置顶]` 标记。

### slug 规则

- `slug` 允许手动覆盖默认值。
- 任何 `slug` 冲突都视为错误，必须阻止构建。

### 构建检查（严格模式）

以下任一项失败都应直接导致构建失败：

- 缺失 `slug`
- 缺失 `description`
- 缺失 `date`
- `date` 格式不合法（非 `YYYY-MM-DD`）
- `slug` 重复

## 首页与交互规范（长期）

- 首页视觉无标题、无说明文案，浏览器标题为 `Game Audio Design`。
- 首页列表项只显示标题 + 摘要。
- 首页文章链接：桌面新窗口、移动同窗口（复合设备判断）。
- 文章页底部保留“返回首页”（同窗口）。
- 搜索为前端本地过滤，范围为标题 + 摘要，不写 URL 参数。
- 搜索交互：`/` 聚焦，`Esc` 清空/失焦，有输入时显示清空按钮。

## 邮件订阅（Buttondown）

站点内置了首页与文章页订阅表单，使用 Buttondown 托管订阅流程（默认双重确认）。

在本地或 CI 环境设置：

```bash
PUBLIC_BUTTONDOWN_USERNAME=your_buttondown_username
```

未配置时，订阅按钮会自动置灰并提示改用 RSS。
