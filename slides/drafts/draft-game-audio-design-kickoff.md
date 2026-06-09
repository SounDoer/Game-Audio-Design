# Draft - 如何开启一个项目的音频设计工作

## 目标

- Stem: `game-audio-design-kickoff`
- Slide 文件: `slides/pages/game-audio-design-kickoff.md`
- 资源文件夹: `slides/public/game-audio-design-kickoff/`
- 当前阶段: B ✅ → 就绪，等待进入 C

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
| 1 | 沟通：前期需求梳理 | `DISCOVERY` | 介入时机、项目信息收集（游戏玩法 / 美术风格 / 世界观与叙事） |
| 2 | 调研：参考与对标 | `RESEARCH` | 竞品拆解与 Reference List、技术对标（引擎/中间件/平台） |
| 3 | 决策：工程选型与审美定位 | `STRATEGY` | 工程：工具链选型、资源评估（人力/预算/里程碑）；审美：Audio Design Pitch、风格与 Design Pillar |
| 4 | 验证：Demo 与垂直切片 | `PROTOTYPE` | 技术功能打样、垂直切片验证整体功能与表现 |
| 5 | 规范：命名、工作流与信号流程 | `CONVENTIONS` | 命名规范、DAW→中间件→引擎工作流、信号流程框架 |

## 写作约定

- 工具链选型按通用原则讲，用具体工具（Wwise / FMOD / Unreal / Unity）举例，不绑定特定版本
- 信号流程部分只谈框架层面的层级操作边界，具体混音细节留给 game-audio-mixing
- 不绑定单一游戏类型，各章按需引用不同案例
- 保持多案例并行引用的风格，与 what-is-game-audio-design 等现有 deck 一致

## Page Plan

| # | Purpose | Visible title | Key text | Media | Layout intent | Speaker notes | Status |
|---|---------|---------------|----------|-------|---------------|---------------|--------|
| 1 | Deck 封面 | 如何开启一个项目的音频设计工作？ | 沟通 → 调研 → 决策 → 验证 → 规范 | — | `cover` | — | confirmed |
| 2 | 全局认知 | 五个阶段 | 沟通 / 调研 / 决策 / 验证 / 规范 各一列 | — | `header-body`，五列 `step-index` | — | confirmed |
| 3 | 章分隔 | 沟通：前期需求梳理 | DISCOVERY | — | `section` | — | confirmed |
| 4 | 不同阶段介入的差异与代价 | 介入时机：什么时候加入最合适？ | 概念期：参与世界观，最大设计空间；预研期：跟进 Vertical Slice，可做系统规划，失去早期话语权；生产期：资源补位，难以系统设计，被动响应 | — | `header-body`，三栏 `grid-cols-3`，每栏 `step-index`+标题+要点，逐栏 `v-click` | — | confirmed |
| 5 | 音频设计师需要从项目中获取哪些关键信息 | 需要哪些项目信息？ | 三类信息按重要程度排序，各栏仅保留标题：① 游戏玩法；② 美术风格；③ 世界观/叙事 | — | `header-body`，三栏 `grid-cols-3`，逐栏 `v-click` | — | confirmed |
| 6 | 章分隔 | 调研：参考与对标 | RESEARCH | — | `section` | — | confirmed |
| 7 | 教音频设计师有哪几种方式获取竞品的音频设计信息 | 如何拆竞品？（方法篇） | 四种方法：① 实际上手玩（最完整）；② 看视频云体验（Gameplay walkthrough / Dev talk）；③ 幕后内容与开发者访谈（GDC Talk / 博客 / YouTube）；④ 解包（最技术向） | — | `header-body`，两栏或 grid 四格展示四种方法 | — | confirmed |
| 8 | 拆竞品时具体看哪些重点 | 拆竞品看什么？ | 7 个问题：① 与游戏类型和核心玩法最相关的音频元素如何设计？② 其他声音模块怎样配合核心音频元素？③ 混音层面：响度策略、频段分配、声音密度如何控制？④ 技术选型：中间件/引擎？用到哪些音频特性？有无自研方案？⑤ 玩家对声音设计的褒贬评价？⑥ 空间音频的处理方式？⑦ 有没有标志性的声音让人记住这款游戏？ | — | `header-body`，`<v-clicks>` 列表逐一展开 7 个问题 | — | confirmed |
| 9 | 从技术角度对标竞品，为工程选型提供依据 | 竞品用了什么技术方案？ | 引擎（Unreal/Unity/自研）？中间件（Wwise/FMOD/自研）？音频技术特性（HRTF/动态混音/程序化音频）？目标平台与平台差异？加载策略与音画同步？ | — | `header-body`，`<v-clicks>` 列表 | — | confirmed |
| 10 | 从审美角度对标竞品，为 Audio Design Pitch 提供美学参考 | 竞品的声音美学是什么样的？ | 声音设计风格（写实/风格化/复古/未来主义）？声景疏密节奏？质感倾向（干/湿、近/远、有机/合成）？情绪基调？有无标志性的音频美学特征？ | — | `header-body`，`<v-clicks>` 列表 | — | confirmed |
| 11 | 章分隔 | 决策：工程选型与审美定位 | STRATEGY | — | `section` | — | confirmed |
| 12 | 教音频设计师根据三个核心因素推导工具链选型 | 工具链和技术选型 | 3 个因素：① 游戏是什么类型？② 目标平台是什么？③ 团队规模和能力？；最后用 `callout` 收束一句核心原则 | — | `header-body`，单栏 `<v-clicks>` + 底部 `callout` 总结 | — | confirmed |
| 13 | 工程向：评估项目所需资源 | 资源评估：人力、财力与时间 | 三栏：① 人力（几个 Sound Designer？要不要 Technical Audio Designer？外包？）；② 财力（内存/CPU/Streaming 预算、音频资源总量预估）；③ 时间（Concept / Preproduction / Production 各阶段交付什么？） | — | `header-body`，三栏 `grid-cols-3`，逐栏 `v-click` | — | confirmed |
| 14 | 审美向：用一段话概括项目的音频愿景 | Audio Design Pitch | `<!-- TODO(user): Audio Design Pitch 案例陈述 -->` | — | `statement` | — | placeholder |
| 15 | Design Pillar 是 Pitch 的重要组成部分 | Design Pillar | `<!-- TODO(user): Design Pillar 案例陈述 -->` | — | `statement` | — | placeholder |
| 16 | 章分隔 | 验证：Demo 与垂直切片 | PROTOTYPE | — | `section` | — | confirmed |
| 17 | 在正式铺量前对技术风险点打样验证 | 技术功能验证与 Demo | 中间件与引擎管线能否跑通？关键系统技术 Demo（脚步/枪声/动态音乐）？性能压力测试？空间音频在目标平台是否正常？第三方插件 / SDK 兼容性？内部工作流与管线测试？ | — | `header-body`，`<v-clicks>` 列表 | — | confirmed |
| 18 | 用一个可玩切片验证整体音频功能与表现 | 垂直切片 | `<!-- TODO(user): 垂直切片示例陈述 -->` | — | `statement` | — | placeholder |
| 19 | 章分隔 | 规范：命名、工作流与信号流程 | CONVENTIONS | — | `section` | — | confirmed |
| 20 | 命名的基本重要性和通用原则 | 命名规范 | 搬运 naming-convention.md 中「重要性」与「通用原则」两页内容合并：命名是人与人/人与机/机与机之间最频繁的接口，命名规范是系统工程最基础最核心的部分之一；通用原则包括命名风格（PascalCase / camelCase / snake_case / Upper_Snake_Case）、语义字段、缩写约定、避免空格特殊符号等 | — | `header-body`，`<v-clicks>` 列表 | — | confirmed |
| 21 | 三个层面的命名规范 | 命名规范的三个层面 | 三栏：① 项目层面（地图/角色/物件的中英文对照与开发代码名）；② 资产层面（字段体系，举例枪声/Foley/语音）；③ 工程结构层面（目录结构、中间件嵌套、总线结构，与资产命名的关联） | — | `header-body`，三栏 `grid-cols-3`，逐栏 `v-click` | 具体示例待用户确认 | confirmed |
| 22 | 定义从 DAW 到引擎的标准工作流 | DAW → 中间件 → 引擎 | 三个环节：① DAW 侧（源文件管理、导出规范）；② 中间件侧（导入、Event 结构、参数配置）；③ 引擎侧（集成方式、运行时验证） | 用户将提供示例图 | `header-body`，三栏或图文组合 | — | confirmed |
| 23 | 了解完整的信号链路，快速定位问题出在哪个环节 | 信号流程：从 WAV 到听音设备 | 信号链路：WAV 资产 → Conversion（中间件导入转换）→ Actor-Mixer → Audio Bus → Audio Device → 终端听音设备；意义：理解信号流程是为了在出问题时能快速定位到具体环节，而不是靠猜测排查 | — | `header-body`，`<v-clicks>` 列表，可配信号链路示意图 | — | confirmed |
| 24 | 资产响度规范 | 资产响度规范 | `<!-- TODO(user): 资产响度规范内容 -->` | — | `header-body` | — | placeholder |
| 25 | 混音切片参考 | 混音切片参考 | `<!-- TODO(user): 混音切片参考内容 -->` | — | `header-body` | — | placeholder |
| 26 | Deck 结束页 | Thanks & 联系方式 | — | — | `end` | — | confirmed |

## Media Assets

| Need | Existing asset | Placeholder | Status |
|------|----------------|-------------|--------|

## 开放问题

- [x] 封面标题
- [x] 封面副标题
- [x] 阶段总览页：封面之后、第一章之前，五列 `step-index` 栏位（沟通 → 调研 → 决策 → 验证 → 规范）
- [x] 各章英文眉标：DISCOVERY / RESEARCH / STRATEGY / PROTOTYPE / CONVENTIONS
- [x] 工具链选型：按通用原则讲，用具体工具举例
- [ ] 第一章各页具体内容与案例

## 脑暴储备（A 阶段未纳入、后续可讨论）

- 跨部门协作与利益相关方沟通（Audio Pitch 呈现、协作网络、Audio Playtest）
- Audio Design Doc / 音频圣经（统一文档沉淀）
- Mood Board 与 Sound Palette（早期声音草图探索）
- 质量基准与 Review Gate（各阶段门禁）
