# 参考 - GAD Docs Authoring

本文件是 `website/docs/` 文章写作规范、模板和示例的真源。工作流规则与阶段门槛以 [SKILL.md](SKILL.md) 为准。

项目级协作入口见 [`AGENTS.md`](../../../AGENTS.md)。

## 写作语言

- 正文使用中文。
- 专有名词、工具名称、技术术语保留英文原文。
- 中文与英文之间必须有空格，例如：「用 Wwise 实现」而非「用Wwise实现」。

## 行文风格

以下文章是风格基准，生成内容时对照参考：

- `website/docs/A-Thought-of-Designing-Sound-in-Game-Deconstruction-and-Modeling.md`
- `website/docs/Listener-Centered-Dynamic-Wind-Audio-Design/Listener-Centered-Dynamic-Wind-Audio-Design.md`
- `website/docs/A-Procedural-Way-of-Melee-Weapon-Whoosh-Sound-Design/A-Procedural-Way-of-Melee-Weapon-Whoosh-Sound-Design.md`

风格要点：
- 方法论导向，有清晰的分析框架。
- 论点之后必须跟具体案例或实例说明。
- 不使用口语化表达，不啰嗦，不堆砌形容词。
- 第一人称叙述，保持作者视角。
- 结尾不做总结式收尾，而是开放性收尾或延伸思考。

## 术语表

### 统一写法

| 正确写法 | 不接受的写法 |
|---|---|
| Wwise | wwise / WWISE |
| Unreal Engine / UE | unreal engine / ue |
| Object-Based Audio | object based audio / OBA |
| Procedural Audio | procedural audio |
| Ambisonics | ambisonics / AMBISONICS |
| HRTF | hrtf |
| Attenuation | attenuation |
| Reverb | reverb（正文中优先使用“混响”，技术语境保留英文） |
| Middleware | middleware |
| Audio Bus | audio bus |
| RTPC | rtpc |
| Game Parameter | game parameter |

### 中英文使用规范

- 工具名称始终用英文：Wwise、Unreal Engine、FMOD、Reaper。
- 技术概念第一次出现时中英文并列，例如「对象音频（Object-Based Audio）」，后续可只用中文或英文。
- 职位名称优先用中文：音频设计师、技术音频设计师、音频程序员。

## 文章结构要求

- 每篇文章必须有清晰的方法论主线，不是知识点罗列。
- 段落之间要有逻辑连接，不能跳跃。
- 图示（Slidev iframe）只在文字无法清晰表达时使用，不滥用。
- 字数参考范围：1500-4000 字。

## Draft 模板

保存为 `website/drafts/draft-<slug>.md`。

```markdown
# Draft - <文章标题>

## 目标

- Slug: `<slug>`
- Draft 文件: `website/drafts/draft-<slug>.md`
- 正式文章路径: `website/docs/<Article-Title>/<Article-Title>.md`
- 当前阶段: A / B / C

## 仓库状态

- `website/drafts/draft-<slug>.md`: exists / missing / to update
- `website/docs/<Article-Title>/<Article-Title>.md`: exists / missing / to create / to update
- 相关现有文章:
  - `website/docs/...`: none / path
- 相关来源材料:
  - `slides/...`: none / path
  - 其他参考: none / path

## 文章主线

用一到两句话描述这篇文章的核心方法论论点。

## 作者立场

- 需要表达的判断:
- 不应代替作者决定的判断:

## 大纲

1. 章节标题
   - 关键论点:
   - 案例或实例:
   - 需要确认:

## Section Plan

| # | Section title | Purpose | Claim | Supporting example | Source / material | Media / embed | Status |
|---|---------------|---------|-------|--------------------|-------------------|---------------|--------|
| 1 |  |  |  |  |  |  | TBD |

## Materials

| Need | Existing material | Placeholder | Status |
|------|-------------------|-------------|--------|
|  |  |  | missing / usable / replace later |

## Open Questions

- [ ] TBD
```

## Section Plan 字段

更新 draft 中的 section plan 时使用这些字段：

| Field | Meaning |
|-------|---------|
| `#` | 最终章节顺序，或讨论中的临时顺序。 |
| `Section title` | 预计出现在文章中的章节标题。 |
| `Purpose` | 这一节必须解决的问题或推进的功能。 |
| `Claim` | 这一节的核心论点或作者判断。 |
| `Supporting example` | 支撑论点的案例、实例或假设性示例。 |
| `Source / material` | 用户提供的材料、仓库文件、外部引用或待确认来源。 |
| `Media / embed` | 图片、音频、Slidev iframe、代码片段或无。 |
| `Status` | `confirmed`、`needs-user`、`placeholder` 或 `blocked`。 |

## Placeholder 示例

placeholder 要暴露缺失的作者判断、案例来源或技术事实，不要把问题藏起来。

```markdown
<!-- TODO(user): 确认这里是否使用你在某项目中的真实音乐系统案例。 -->
```

```markdown
> 示例 placeholder: 用一个假设性的战斗强度分层系统说明 Vertical Remixing 的设计逻辑。
```

```markdown
- TBD: 用户确认这里是否需要写到 Wwise Music Segment / Transition Rule 的具体配置层面。
```

不要把未确认内容写成真实项目经历、公开引用或确定技术参数。

## Frontmatter 示例

正式文章必须包含 `slug`、`description`、`date`：

```yaml
---
layout: default
nav_exclude: true
description: 从游戏状态与音乐结构的映射关系出发，讨论自适应音乐设计的方法论。
slug: adaptive-music-design
date: 2026-05-15
---
```

## 发布前检查清单

- [ ] 正式路径是 `website/docs/<Article-Title>/<Article-Title>.md`，不是 `website/docs/<slug>.md`。
- [ ] `<Article-Title>` 已由用户确认，或可从 draft 中明确得到。
- [ ] `slug` 是 kebab-case。
- [ ] `description` 是一句适合首页展示和分享的摘要。
- [ ] `date` 是 `YYYY-MM-DD`。
- [ ] 正文为中文，工具名和技术术语保留英文原文。
- [ ] 中文与英文之间有空格。
- [ ] 术语写法符合本文术语表。
- [ ] 每个主要论点后都有具体案例或实例说明。
- [ ] 没有未解决的 `TBD`、`TODO`、`needs-user` 或 `blocked`。
- [ ] 结尾不是总结式收尾，而是开放性收尾或延伸思考。
