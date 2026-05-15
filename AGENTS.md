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

- `website/docs/` 正式文章与 `website/drafts/draft-*.md` 草稿：使用 `.cursor/skills/gad-docs-authoring/`。
- `slides/pages/*.md` 课程讲稿与 `slides/drafts/` 草稿：使用 `.cursor/skills/gad-slides-authoring/`。

---

## 仓库目录结构

```
Game-Audio-Design/
  website/      ← Astro 文章网站：`src/`、`docs/`、`drafts/`、`static/`
  slides/       ← Slidev 课程讲稿：`pages/*.md`、`drafts/`、`public/`、layouts/components/styles
  scripts/      ← 根目录共享构建脚本；`npm run slidev:build` 会输出到 `website/static/slides/`
  README.md     ← 仓库级入口；网站说明见 `website/README.md`
  AGENTS.md      ← 本文件（项目级协作入口）
  CLAUDE.md      ← 指向本文件的兼容入口
  （若使用各工具的 agent 扩展，可能另有 `.claude/commands/` 等目录，以本地为准）
```

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