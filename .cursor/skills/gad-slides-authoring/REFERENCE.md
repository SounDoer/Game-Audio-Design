# 参考 - GAD Slides Authoring

本文件只放模板和示例。工作流规则与阶段门槛以 [SKILL.md](SKILL.md) 为准。

设计规范以 [`slides/README.md`](../../../slides/README.md) 为准。实现样例以 [`slides/pages/EXAMPLE.md`](../../../slides/pages/EXAMPLE.md) 为准。

## Draft 模板

保存为 `slides/drafts/draft-<stem>.md`。

```markdown
# Draft - <deck 标题>

## 目标

- Stem: `<stem>`
- Slide 文件: `slides/pages/<stem>.md`
- 资源文件夹: `slides/public/<stem>/`
- 当前阶段: A / B / C

## 仓库状态

- `slides/pages/<stem>.md`: exists / missing / to update
- `slides/public/<stem>/`: exists / missing / has usable assets
- 已有来源文档:
  - `website/docs/...`: none / path
  - 其他参考: none / path

## 专题主线

用一到两句话描述这套 deck 的核心教学论点。

## 大纲

1. 章节标题
   - 关键点:
   - 案例:

## Page Plan

| # | Purpose | Visible title | Key text | Media | Layout intent | Speaker notes | Status |
|---|---------|---------------|----------|-------|---------------|---------------|--------|
| 1 |  |  |  |  |  |  | TBD |

## Media Assets

| Need | Existing asset | Placeholder | Status |
|------|----------------|-------------|--------|
|  |  |  | missing / usable / replace later |

## 开放问题

- [ ] TBD
```

## Page Table 字段

更新 draft 中的 page plan 时使用这些字段：

| Field | Meaning |
|-------|---------|
| `#` | 最终 slide 顺序，或讨论中的临时顺序。 |
| `Purpose` | 这一页必须让学习者理解什么或做出什么。 |
| `Visible title` | 预计显示在 slide 上的标题文字。 |
| `Key text` | bullets、陈述句、标签，或明确的 `TBD` placeholder。 |
| `Media` | 已有路径、缺失资源说明，或文字 placeholder。 |
| `Layout intent` | 简短的布局意图，例如 cover、章节页、双栏对比、full-media 或 quote。 |
| `Speaker notes` | 案例背景、时间安排、演示步骤或口播备注。 |
| `Status` | `confirmed`、`needs-user`、`placeholder` 或 `blocked`。 |

## Placeholder 示例

placeholder 要暴露缺失的决策，不要把问题藏起来。

```markdown
<!-- TODO(user): 替换为 Wwise Attenuation 曲线对比截图。 -->
```

```markdown
> Media placeholder: 展示距离相关 low-pass filtering 的 gameplay clip。
```

```markdown
- TBD: 用户确认这个例子使用 Wwise、Unreal Engine，还是不绑定引擎的中性图示。
```

除非文件真实存在，否则不要写 `/how-to-listen-sound/example-final.png` 这类虚假的资源路径。

## 资源状态示例

```markdown
| Need | Existing asset | Placeholder | Status |
|------|----------------|-------------|--------|
| Loudness meter 截图 | `slides/public/<stem>/loudness-meter.png` |  | usable |
| Footstep layering 图示 |  | Text block: "diagram placeholder: layer stack" | missing |
| Before/after audio demo | 仅有 `slides/public/<stem>/dry.wav` | Need wet version | blocked |
```

## 命令速查

```bash
npm run slidev:build
```

```bash
npm run slidev:dev -- <stem>
```

```bash
npm run slidev:sync-public
```
