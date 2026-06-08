# Draft - 如何开启一个项目的音频设计工作

## 目标

- Stem: `game-audio-design-kickoff`
- Slide 文件: `slides/pages/game-audio-design-kickoff.md`
- 资源文件夹: `slides/public/game-audio-design-kickoff/`
- 当前阶段: A ✅ → 就绪，等待进入 B

## 仓库状态

- `slides/pages/game-audio-design-kickoff.md`: missing
- `slides/public/game-audio-design-kickoff/`: missing
- 已有来源文档:
  - `website/docs/...`: none
  - 其他参考: none

## 专题主线

从接手一个新项目开始，梳理关键阶段，建立一套可落地的项目音频启动方法论，帮助音频设计师在项目初期建立清晰的工作框架，避免后期被动补位。

## 封面

- 中文主标题：**如何开启一个项目的音频设计工作？**
- 英文眉标（eyebrow）：**Game Audio Design Kickoff**
- 副标题（subtitle）：**沟通 → 调研 → 决策 → 验证 → 规范**
- 信息栏（info）：Xichen

## 阶段总览页

封面之后、第一章之前，一页五列 `step-index` 栏位：

沟通 → 调研 → 决策 → 验证 → 规范

## 各章概览

| 章 | 中文标题 | 英文眉标 | 内容要点 |
|----|----------|----------|----------|
| 1 | 沟通：前期需求梳理 | `DISCOVERY` | 介入时机、向策划/制作人提问、Audio Brief（叙事/玩法/技术三维度） |
| 2 | 调研：参考与对标 | `RESEARCH` | 竞品拆解与 Reference List、技术对标（引擎/中间件/平台） |
| 3 | 决策：工程选型与审美定位 | `STRATEGY` | 工程：工具链选型、资源评估（人力/预算/里程碑）；审美：Audio Design Pitch、风格与 Design Pillar |
| 4 | 验证：Demo 与垂直切片 | `PROTOTYPE` | 技术功能打样、垂直切片验证整体功能与表现 |
| 5 | 规范：命名、工作流与信号流程 | `CONVENTIONS` | 命名规范、DAW→中间件→引擎工作流、信号流程框架、版本控制与 CI/CD、本地化规划 |

## 写作约定

- 工具链选型按通用原则讲，用具体工具（Wwise / FMOD / Unreal / Unity）举例，不绑定特定版本
- 信号流程部分只谈框架层面的层级操作边界，具体混音细节留给 game-audio-mixing
- 不绑定单一游戏类型，各章按需引用不同案例
- 保持多案例并行引用的风格，与 what-is-game-audio-design 等现有 deck 一致

## Page Plan

| # | Purpose | Visible title | Key text | Media | Layout intent | Speaker notes | Status |
|---|---------|---------------|----------|-------|---------------|---------------|--------|

## Media Assets

| Need | Existing asset | Placeholder | Status |
|------|----------------|-------------|--------|

## 开放问题

- [x] 封面标题
- [x] 封面副标题
- [x] 阶段总览页：封面之后、第一章之前，五列 `step-index` 栏位（沟通 → 调研 → 决策 → 验证 → 规范）
- [x] 各章英文眉标：DISCOVERY / RESEARCH / STRATEGY / PROTOTYPE / CONVENTIONS
- [x] 工具链选型：按通用原则讲，用具体工具举例

## 脑暴储备（A 阶段未纳入、后续可讨论）

- 跨部门协作与利益相关方沟通（Audio Pitch 呈现、协作网络、Audio Playtest）
- Audio Design Doc / 音频圣经（统一文档沉淀）
- Mood Board 与 Sound Palette（早期声音草图探索）
- 质量基准与 Review Gate（各阶段门禁）
