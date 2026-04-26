# 游戏音频设计 Game Audio Design

基于 [Astro](https://astro.build/) 的静态站点，内容源为仓库内 `docs/` 下的 Markdown（**请勿删除**已有 `.md` 正文）。静态资源与 **`CNAME`** 放在 **`static/`**，会原样进构建产物根目录。

主要路由：首页目录 **`/`**，文章 **`/articles/course/...`**、**`/articles/topic/...`**，**`/resource`**（`docs/Resource` 汇总页），**`/log`**，**`/rss.xml`**。

若使用 VS Code 的 [Front Matter](https://frontmatter.codes/) 插件，仓库内 `frontmatter.json` 已配置为 **Astro** 与预览 **`http://localhost:4321`**。

## 本地开发

需要 **Node 22+**。

```bash
yarn install
yarn dev
```

## 构建

```bash
yarn build
```

静态产物输出到 **`build/`**（与 GitHub Actions 中 `peaceiris/actions-gh-pages` 的 `publish_dir` 一致）。

## 部署

推送到 `main` 后由 `.github/workflows/deploy.yml` 构建并发布至 GitHub Pages（自定义域见 `static/CNAME`）。

## 邮件订阅（Buttondown）

站点内置了首页与文章页订阅表单，使用 Buttondown 托管订阅流程（默认双重确认）。

在本地或 CI 环境设置：

```bash
PUBLIC_BUTTONDOWN_USERNAME=your_buttondown_username
```

未配置时，订阅按钮会自动置灰并提示改用 RSS。

更多规划见根目录 **`REFACTOR.md`**。
