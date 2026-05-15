---
name: gad-docs-authoring
description: Use when preparing, rewriting, or maintaining Game-Audio-Design long-form articles, `website/docs/**/*.md` formal posts, `website/drafts/draft-*.md` article drafts, or adapting game-audio ideas into site articles. 中文触发：游戏音频文章写作、website/docs 文章、website/drafts 草稿、GAD 长文。
---

# GAD Docs Authoring

## 核心规则

使用三阶段工作流：**A 大纲 -> B 各节内容 -> C 正式文章实现**。

在 B 阶段形成 confirmed section plan 之前，不要跳到 C。除非用户明确授权你起草缺失内容，否则不要凭想象补写 B 阶段内容。

用户可以从 A、B、C 任意阶段进入。继续之前，先检查上游产物是否存在且足够具体；如果缺失，就退回对应阶段补齐。

## 入口检查

1. 识别目标 `slug`。
   - 如果用户提供 `website/drafts/draft-<slug>.md`，使用该 `slug`。
   - 如果用户提供正式文章路径 `website/docs/<Article-Title>/<Article-Title>.md`，读取 frontmatter 中的 `slug`。
   - 如果用户只提供主题或标题，先请用户确认 `slug`；不要自行最终确定。
   - active draft 必须是 `website/drafts/draft-<slug>.md`。

2. 检查目标在仓库中的状态。
   - 检查 `website/drafts/draft-<slug>.md`。
   - 检查是否已有正式文章匹配该 `slug` 或主题。
   - 检查目标正式路径是否符合 `website/docs/<Article-Title>/<Article-Title>.md`。
   - 忽略旧的 `website/docs/draft/` 目录；本 skill 不使用它作为 draft 位置。

3. 确认当前阶段。
   - A：用户想讨论专题、想法、主线或文章大纲。
   - B：用户已有大纲，想确认每一节的论点、案例、材料和开放问题。
   - C：用户已有 confirmed section plan，想写入正式 `website/docs/` 文章。

进入 B 或 C 时，先读取 active draft，并向用户简短复述当前状态，再继续。

## 讨论方式

当决策不清楚时，使用 grill-me 方式：

Interview the user relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. **For each question, provide your recommended answer.**

**Ask the questions one at a time.**

**If a question can be answered by exploring the codebase, explore the codebase instead.**

## Stage A - 大纲

目的：把一个专题或粗略想法整理成清晰的文章大纲。

进入条件：
- 已知目标 `slug`。
- 已检查 active draft 和可能冲突的正式文章。

流程：
- 如果用户给了具体来源文档、旧草稿或参考文章，先检查它；不要追问仓库中已经能回答的事实。
- 如果专题仍然模糊，使用一问一答的 grill-me 讨论。
- 明确文章主线、作者立场、案例、章节结构、限制条件和开放问题。
- 对照 [REFERENCE.md](REFERENCE.md) 中的写作规范：文章必须方法论导向，论点之后必须跟具体案例或实例说明。

退出产物：
- 保存或更新 `website/drafts/draft-<slug>.md`。
- draft 必须包含目标文章、仓库状态、文章主线、作者立场、大纲、案例素材、引用/资料备注和开放问题。
- 使用 [REFERENCE.md](REFERENCE.md) 中的模板。

除非用户明确把任务切换到 C，且 Stage B 已经完成，否则不要在 Stage A 创建或重写正式 `website/docs/` 文章。

## Stage B - 各节内容

目的：把大纲转化为已确认的逐节内容计划。

进入条件：
- active draft 存在。
- Stage A 大纲已经具体到可以拆分为文章章节。
- 你已经读取 draft，并向用户确认过你的理解。

硬门槛：
- 除非用户明确授权你起草缺失内容，否则不要自行填充关键论点、作者立场、项目事实、真实案例、引用来源或技术细节。
- 如果内容缺失，在 draft 中写 placeholder、问题或 `TBD`。
- “直接开始”“快一点”“按大纲写成文章”这类请求，不足以授权你编写缺失立场、案例、事实、引用、参数或技术流程。
- “案例你看着补”“帮我补完整”只授权你提出示例性方向；未确认的案例必须标为假设性示例或待用户确认，不能写成作者真实经验或项目事实。

流程：
- 和用户一起确认每一节的 section title、purpose、claim、supporting example、source/material、media/embed need、open questions 和 status。
- 当某节内容依赖未解决的作者立场或事实时，使用一问一答的 grill-me 讨论。
- 更新同一个 active draft；不要只把章节计划散落在聊天记录里。

退出产物：
- active draft 包含足够进入实现的 section plan。
- 缺失案例、事实、引用、媒体或未决内容被明确标注。
- section plan 只有在每节都具备 purpose、claim、supporting example 或明确 placeholder、source/material status，并且状态为 `confirmed` 或 `placeholder` 时，才算足够进入实现。标记为 `needs-user` 或 `blocked` 的章节必须先由用户解决；除非用户明确要求把它们作为 placeholder 保留在正式文章中。

除非用户明确把任务切换到 C，且 section plan 已足够完整，否则不要在 Stage B 实现正式文章。

## Stage C - 正式文章实现

目的：根据已确认的 section plan 实现正式文章。

进入条件：
- active draft 存在。
- draft 包含 confirmed section plan。
- 你已经读取 draft，并向用户确认过 section plan、缺失内容和正式输出路径。
- “Confirmed” 指用户在你复述 section plan 后批准，或 draft 本身已将相关章节标为 `confirmed` / `placeholder`，且没有未解决的 `needs-user` 或 `blocked` 项。
- “直接整理”“快一点”“写成正式文章”这类请求，不构成跳过上述进入条件的授权。

输出路径：
- 正式文章必须写入 `website/docs/<Article-Title>/<Article-Title>.md`。
- 不允许把正式文章写成单文件 `website/docs/<slug>.md`。
- `<Article-Title>` 使用与现有正式文章一致的标题式文件夹/文件名；frontmatter 中的 `slug` 必须是 kebab-case。
- 如果 `<Article-Title>` 无法从 draft 或用户输入中明确确定，先向用户确认，不要自行最终命名。

必读参考：
- 读取并遵循 [REFERENCE.md](REFERENCE.md)。
- 按 [REFERENCE.md](REFERENCE.md) 对照当前风格基准文章；如果引用路径失效，先在 `website/docs/` 中查找对应文章的实际路径。
- 项目级协作入口见 [`AGENTS.md`](../../../AGENTS.md)，但文章写作规范以本 skill 的 [REFERENCE.md](REFERENCE.md) 为准。

流程：
- 创建或更新 `website/docs/<Article-Title>/<Article-Title>.md`。
- frontmatter 必须包含 `slug`、`description`、`date`；可保留仓库既有正式文章常用的 `layout`、`nav_exclude` 等字段。
- 正文使用中文；工具名和技术术语遵守 [REFERENCE.md](REFERENCE.md) 中的术语表与中英文空格规则。
- 保持方法论主线；论点之后必须跟具体案例或实例说明。
- 不要编造作者经历、项目事实、引用来源、技术参数或工具配置。
- 正式文章中不要留下未解决的编辑痕迹，除非用户明确要求以 placeholder 形式发布。

验证：
- 对正式文章做实质性编辑后，至少检查 frontmatter、`slug`、中文/英文空格、术语写法、未解决 `TBD` / `TODO` / `needs-user` / `blocked` 项。
- 如果任务会影响站点构建或发布，按仓库要求运行更广的检查。
- 除非实际运行并看到成功结果，否则不要声称构建或检查已通过。

## 参考边界

`SKILL.md` 是工作流规则和阶段门槛的真源。

[REFERENCE.md](REFERENCE.md) 只包含可复用模板和示例：
- draft 文件模板
- section plan 字段
- placeholder 示例
- frontmatter 示例
- 发布前检查清单
