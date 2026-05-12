# Project Instructions

本文件为本仓库 **AI 协作与文章写作的单一信息源**（single source of truth）。在 Cursor、Claude Code 等环境中，启动任务前请先阅读。

根目录 `CLAUDE.md` 仅指向本文件，供只自动索引 `CLAUDE.md` 的环境使用；**新增或修改规范时只维护本文件。**

---

## 项目背景

- 网站：https://gad.soundoer.com
- 仓库：Game-Audio-Design（Astro 框架）
- 内容：游戏音频设计深度技术长文
- 作者：希辰（SounDoer）
- 读者：有一定行业基础的游戏音频从业者

---

## 写作语言

- 正文使用中文
- 专有名词、工具名称、技术术语保留英文原文（见术语表）
- 中文与英文之间必须有空格，例如：「用 Wwise 实现」而非「用Wwise实现」

---

## 行文风格

以下文章是风格基准，生成内容时对照参考：

- `docs/a-thought-of-designing-sound-in-game-deconstruction-and-modeling.md`
- `docs/listener-centered-dynamic-wind-audio-design.md`
- `docs/a-procedural-way-of-melee-weapon-whoosh-sound-design.md`

风格要点：
- 方法论导向，有清晰的分析框架
- 论点之后必须跟具体案例或实例说明
- 不使用口语化表达，不啰嗦，不堆砌形容词
- 第一人称叙述，保持作者视角
- 结尾不做总结式收尾，而是开放性收尾或延伸思考

---

## 术语表

### 统一写法（大小写、空格严格遵守）

| 正确写法 | 不接受的写法 |
|---|---|
| Wwise | wwise / WWISE |
| Unreal Engine / UE | unreal engine / ue |
| Object-Based Audio | object based audio / OBA |
| Procedural Audio | procedural audio |
| Ambisonics | ambisonics / AMBISONICS |
| HRTF | hrtf |
| Attenuation | attenuation |
| Reverb | reverb（正文中优先使用"混响"，技术语境保留英文） |
| Middleware | middleware |
| Audio Bus | audio bus |
| RTPC | rtpc |
| Game Parameter | game parameter |

### 中英文使用规范

- 工具名称始终用英文：Wwise、Unreal Engine、FMOD、Reaper
- 技术概念第一次出现时中英文并列：「对象音频（Object-Based Audio）」，后续可只用中文或英文
- 职位名称优先用中文：音频设计师、技术音频设计师、音频程序员

---

## 文章结构要求

- 每篇文章必须有清晰的方法论主线，不是知识点罗列
- 段落之间要有逻辑连接，不能跳跃
- 图示（Slidev iframe）只在文字无法清晰表达时使用，不滥用
- 字数参考范围：1500—4000 字

---

## 仓库目录结构

```
Game-Audio-Design/
  docs/          ← Astro 文章（.md 文件）
  slidev/        ← Slidev：`pages/*.md` 每文件独立讲稿；构建见 `npm run slidev:build`；线上 `/slides/<slug>/`；目录页 `/slides/`（Astro）
  static/        ← 静态资源
  src/           ← 站点前端代码
  AGENTS.md      ← 本文件（规范主文档）
  CLAUDE.md      ← 指向本文件的兼容入口
  （若使用各工具的 agent 扩展，可能另有 `.claude/commands/` 等目录，以本地为准）
```

---

## Frontmatter 必填字段

```yaml
---
slug: kebab-case-article-name
description: 一句话摘要，用于首页展示和分享
date: YYYY-MM-DD
---
```

---

## 代码语言

`src/` 目录下所有代码内部一律使用英文，包括：

- UI 文案（按钮、标签、提示文字、空态文案）
- HTML 属性（`aria-label`、`alt`、`placeholder` 等）
- 代码注释
- 测试描述（`it()`、`describe()` 等）

`docs/` 下的文章内容不受此限制，仍使用中文写作。

---

## Git Commits

Always write commit messages in English.