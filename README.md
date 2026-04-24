# 游戏音频设计 Game Audio Design

基于 [Astro](https://astro.build/) 的静态站点，内容源为仓库内 `docs/` 下的 Markdown（**请勿删除**已有 `.md` 正文）。

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

更多规划见根目录 **`REFACTOR.md`**。
