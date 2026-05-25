# Project Instructions

本文件是本仓库的 **项目级 AI 协作入口**。在 Cursor、Claude Code 等环境中，启动任务前请先阅读。

根目录 `CLAUDE.md` 仅指向本文件，供只自动索引 `CLAUDE.md` 的环境使用；**新增或修改项目级规范时只维护本文件。**

文章写作方法、术语、frontmatter 与发布检查不在本文件维护，见 `.cursor/skills/gad-docs-authoring/`；Slidev 讲稿写作与版式规范见 `.cursor/skills/gad-slides-authoring/` 与 `slides/README.md`。

---

## 项目背景

- 网站：https://gad.soundoer.com
- 仓库：Game-Audio-Design（Astro 框架）
- 内容：游戏音频设计深度技术长文与配套 Slidev 课程讲稿
- 作者：希辰（SounDoer）

---

## 专项 Skill 入口

- `website/docs/**/*.md` 正式文章与 `website/drafts/draft-*.md` active draft：使用 `.cursor/skills/gad-docs-authoring/`。
- `slides/pages/*.md` 课程讲稿、`slides/drafts/` 草稿与 `slides/public/` 配套资源：使用 `.cursor/skills/gad-slides-authoring/`。
- `website/drafts/legacy/` 是迁移前历史草稿目录；新文章协作不要把它当作 active draft 位置。

---

## 仓库目录结构

```
Game-Audio-Design/
  website/      ← Astro 文章网站：`src/`、`docs/`、`static/`、`astro.config.mjs`、测试配置
  slides/       ← Slidev 课程讲稿：`pages/*.md`、`drafts/`、`public/`、`layouts/`、`components/`、`styles/`
  scripts/      ← 根目录共享脚本；Slidev 构建输出到 `website/static/slides/`
  docs/superpowers/ ← 设计稿、实施计划等工程协作记录；不是网站正式文章目录
  README.md     ← 仓库级入口；网站公开说明见 `website/README.md`，Slidev 说明见 `slides/README.md`
  AGENTS.md      ← 本文件（项目级协作入口）
  CLAUDE.md      ← 指向本文件的兼容入口
  （若使用各工具的 agent 扩展，可能另有 `.claude/commands/` 等目录，以本地为准）
```

---

## 常用命令

从仓库根目录运行：

- `npm run dev` / `npm run start`：启动 Astro 网站开发服务器（`--root website`）。
- `npm run slidev:dev -- <stem>`：预览 `slides/pages/<stem>.md` 对应 deck。
- `npm run slidev:build`：构建所有参与索引的 Slidev deck 到 `website/static/slides/`。
- `npm run build`：先构建 Slidev，再构建 Astro 网站到根目录 `build/`。
- `npm run check`：运行 Astro check。
- `npm run test`：运行 `website/vitest.config.ts` 下的 Vitest 测试。
- `npm run verify:build-output`：检查构建产物契约。

---

## 代码语言

`website/src/` 目录下所有代码内部一律使用英文，包括：

- UI 文案（按钮、标签、提示文字、空态文案）
- HTML 属性（`aria-label`、`alt`、`placeholder` 等）
- 代码注释
- 测试描述（`it()`、`describe()` 等）

---

## Git Commits

Always write commit messages in English.