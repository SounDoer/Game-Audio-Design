# Project Instructions

本文件是本仓库的 **项目级 AI 协作入口**。在 Cursor、Claude Code 等环境中，启动任务前请先阅读。

根目录 `CLAUDE.md` 仅指向本文件，供只自动索引 `CLAUDE.md` 的环境使用；**新增或修改项目级规范时只维护本文件。**

文章写作方法、术语、frontmatter 与发布检查不在本文件维护，见 `.cursor/skills/gad-docs-authoring/REFERENCE.md`。

---

## 项目背景

- 网站：https://gad.soundoer.com
- 仓库：Game-Audio-Design（Astro 框架）
- 内容：游戏音频设计深度技术长文与配套 Slidev 课程讲稿
- 作者：希辰（SounDoer）

---

## 专项 Skill 入口

- `docs/` 正式文章与根目录 `drafts/draft-*.md` 草稿：使用 `.cursor/skills/gad-docs-authoring/`。
- `slidev/pages/*.md` 课程讲稿与 `slidev/drafts/` 草稿：使用 `.cursor/skills/gad-slides-authoring/`。

---

## 仓库目录结构

```
Game-Audio-Design/
  docs/          ← Astro 正式文章（.md 文件或同名目录）
  drafts/        ← 新文章草稿：`draft-<slug>.md`
  slidev/        ← Slidev：`pages/*.md` 每文件独立讲稿；构建见 `npm run slidev:build`；线上 `/slides/<slug>/`；目录页 `/slides/`（Astro）
  static/        ← 静态资源
  src/           ← 站点前端代码
  AGENTS.md      ← 本文件（项目级协作入口）
  CLAUDE.md      ← 指向本文件的兼容入口
  （若使用各工具的 agent 扩展，可能另有 `.claude/commands/` 等目录，以本地为准）
```

---

## 代码语言

`src/` 目录下所有代码内部一律使用英文，包括：

- UI 文案（按钮、标签、提示文字、空态文案）
- HTML 属性（`aria-label`、`alt`、`placeholder` 等）
- 代码注释
- 测试描述（`it()`、`describe()` 等）

---

## Git Commits

Always write commit messages in English.