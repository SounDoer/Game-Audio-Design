---
name: gad-slides-authoring
description: Use when preparing, rewriting, or maintaining Game-Audio-Design Slidev teaching decks, `slides/pages/*.md` files, `slides/drafts/*.md` outlines, or course slides for online `/slides/` pages. 中文触发：游戏音频备课幻灯、课程 Slidev 讲稿、slides/pages、slides/drafts。
---

# GAD Slides Authoring

## 核心规则

使用三阶段工作流：**A 大纲 -> B 逐页内容 -> C Slidev 实现**。

在 B 阶段形成 confirmed page plan 之前，不要跳到 C。除非用户明确授权你起草缺失内容，否则不要凭想象补写 B 阶段内容。

用户可以从 A、B、C 任意阶段进入。继续之前，先检查上游产物是否存在且足够具体；如果缺失，就退回对应阶段补齐。

## 入口检查

1. 识别目标 `stem`。
   - 如果用户提供 `slides/pages/<stem>.md`，使用该 `stem`。
   - 如果用户提供 draft 路径，用 `draft-<stem>.md` 推断 `stem`，并在本次会话中使用这个具体 draft。
   - 如果用户只提供不带目录的 `draft-<stem>.md`，默认标准路径是 `slides/drafts/draft-<stem>.md`；如果该文件不存在，在进入 B 或 C 前先询问实际路径。
   - 如果没有具体 `stem` 或文档，先请用户确定；不要自行命名。
   - active draft 是用户提供的 draft 路径；如果用户未提供，则是 `slides/drafts/draft-<stem>.md`。

2. 检查目标在仓库中的状态。
   - 检查 `slides/pages/<stem>.md`。
   - 检查 `slides/public/<stem>/`。
   - 检查 active draft 路径。
   - 如果文件或文件夹缺失，记录为“待创建”或“缺少资源文件夹”；缺失文件不阻止 A，但可能阻止 B 或 C。

3. 确认当前阶段。
   - A：用户想讨论专题、想法、结构或教学大纲。
   - B：用户已有大纲，想确定每页 slide 的文字、媒体和布局。
   - C：用户已有 confirmed page plan，想制作实际的 Slidev 页面。

进入 B 或 C 时，先读取 active draft，并向用户简短复述当前状态，再继续。

## 讨论方式

当决策不清楚时，使用 grill-me 方式：

Interview the user relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. **For each question, provide your recommended answer.**

**Ask the questions one at a time.**

**If a question can be answered by exploring the codebase, explore the codebase instead.**

默认按 GAD 网站读者和在线 Slidev deck 语境推进。不要开场询问目标受众、授课时长或难度等级；只有用户明确在做线下课、直播课、工作坊，或这些信息会直接改变 deck 结构时，才把它们作为决策问题。

在 A/B 讨论阶段，除非用户明确说暂停、先到这里或不要继续问，每次回答或更新 draft 后都要继续推进一个最小决策：提出一个具体问题，并给出推荐答案。用户说“可以，先这样”时，理解为确认当前建议并继续下一个最小决策。

## Stage A - 大纲

目的：把一个专题或粗略想法整理成清晰的教学大纲。

进入条件：
- 已知目标 `stem`。
- 已检查 `slides/pages/<stem>.md`、`slides/public/<stem>/` 和 active draft。

流程：
- 如果用户给了具体来源文档或现有 deck，先检查它；不要追问仓库中已经能回答的事实。
- 如果专题仍然模糊，使用一问一答的 grill-me 讨论。
- 明确主线、案例、粗略章节结构和限制条件。
- 不要默认规划整体或各章节分钟数；只有用户明确要求演讲排练、直播课、工作坊或课堂时长控制时，才讨论时间分配。

退出产物：
- 保存或更新 active draft。新建 draft 时，使用 `slides/drafts/draft-<stem>.md`。
- draft 必须包含目标 deck、仓库状态、专题主线、大纲、资源备注和开放问题。
- 使用 [REFERENCE.md](REFERENCE.md) 中的模板。

除非用户明确把任务切换到 C，且 Stage B 已经完成，否则不要在 Stage A 创建或重写 `slides/pages/<stem>.md`。

## Stage B - 逐页内容

目的：把大纲转化为已确认的逐页计划。

进入条件：
- active draft 存在。
- Stage A 大纲已经具体到可以拆分为 slides。
- 你已经读取 draft，并向用户确认过你的理解。

硬门槛：
- 除非用户明确授权你起草缺失内容，否则不要自行填充 slide 文案、论点、案例或媒体选择。
- 如果内容缺失，在 draft 中写 placeholder、问题或 `TBD`。
- “直接开始”“快一点”“按大纲做成 slides”这类请求，不足以授权你编写缺失论点、案例、媒体、引用或资源路径。
- “帮我补每页内容”只授权你起草可见文字；不确定的事实、案例和媒体仍要保留为 placeholder 或问题。如果授权范围不清楚，继续追问。

流程：
- 和用户一起确定每页 slide 的标题、目的、可见文字、媒体需求、layout intent 和 speaker note intent。
- 当某页内容依赖未解决的决策时，使用一问一答的 grill-me 讨论。
- 优先推进内容结构、案例、可见文字、媒体和 layout intent；不要把每页或每章时长当作默认讨论项。
- 更新同一个 active draft；不要只把页表散落在聊天记录里。

退出产物：
- active draft 包含足够进入实现的 page table。
- 缺失媒体或未决内容被明确标注。
- page table 只有在每页都具备 purpose、visible title、key text 或明确 placeholder、layout intent、media status，并且状态为 `confirmed` 或 `placeholder` 时，才算足够进入实现。标记为 `needs-user` 或 `blocked` 的页面必须先由用户解决；除非用户明确要求把它们作为 placeholder 实现。

除非用户明确把任务切换到 C，且 page table 已足够完整，否则不要在 Stage B 实现 Slidev 页面。

## Stage C - Slidev 实现

目的：根据已确认的 page plan 实现 `slides/pages/<stem>.md`。

进入条件：
- active draft 存在。
- draft 包含 confirmed page table。
- 你已经读取 draft，并向用户确认过 page plan 和缺失资源。
- “Confirmed” 指用户在你复述 page plan 后批准，或 draft 本身已将相关 slides 标为 `confirmed` / `placeholder`，且没有未解决的 `needs-user` 或 `blocked` 项。

必读参考：
- 读取并遵循 [`slides/README.md`](../../../slides/README.md)。
- 读取并遵循 [`slides/pages/EXAMPLE.md`](../../../slides/pages/EXAMPLE.md)。
- 不要在本 skill 中复述或覆盖它们的设计规则。

流程：
- 创建或更新 `slides/pages/<stem>.md`。
- 优先使用 `slides/public/<stem>/` 中已有且合适的资产。
- 如果资产缺失或不合适，使用清晰的文字 placeholder，并保持 draft 中的资源清单准确。
- 不要编造资源文件名、项目截图、引用或媒体细节。

验证：
- 对 Slidev 做实质性编辑后，运行 `npm run slidev:build`。
- 如果任务还修改了站点代码、配置或构建脚本，按仓库要求运行更广的检查。
- 除非实际运行并看到成功结果，否则不要声称构建或检查已通过。

## 参考边界

`SKILL.md` 是工作流规则和阶段门槛的真源。

[REFERENCE.md](REFERENCE.md) 只包含可复用模板和示例：
- draft 文件模板
- page table 字段
- placeholder 示例
- 资源状态示例
- 命令速查
