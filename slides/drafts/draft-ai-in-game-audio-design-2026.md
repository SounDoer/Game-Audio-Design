# Draft - 2026 年 AI 与游戏音频设计

## 目标

- Stem: `ai-in-game-audio-design-2026`
- Slide 文件: `slides/pages/ai-in-game-audio-design-2026.md`
- 资源文件夹: `slides/public/ai-in-game-audio-design-2026/`
- 当前阶段: C

## 仓库状态

- `slides/pages/ai-in-game-audio-design-2026.md`: created
- `slides/public/ai-in-game-audio-design-2026/`: created, awaiting user-provided assets
- 已有来源文档:
  - `website/docs/...`: none
  - 其他参考: none

## 专题主线

这套 90 分钟课程面向游戏音频学习者 / 初入行设计师，分成两个大 section：先用约 55 分钟观察 2026 年游戏音频行业在 AIGC 与 AI 工具方面的实际应用、边界和案例类型，再用约 35 分钟转入作者本人使用 AI 的经历、工作流、判断标准与心得。

核心目标不是把 AI 当作工具清单介绍，而是帮助学习者理解：AI 正在进入游戏音频生产的多个环节，但真正有价值的能力，是把 AI 输出放回声音设计、交互实现、团队协作和职业成长的判断框架里。

Section 1 从两个角度入手，共约 55 分钟：

- AIGC（约 35 分钟）：实际用于生产音频内容的生成式工具，按语音、音乐、音效三个方向分别观察 SOTA 工具、使用范式和边界。
- AI 工具（约 20 分钟）：更宽泛的游戏开发与音频设计工作流提效工具，本节聚焦三类：素材发现与管理、音频编辑与修复、技术音频与实现辅助。每类都从“以前是怎样的”与“AI powered 之后变成怎样”两个角度展开。文档、沟通与学习不在这一节展开，后续放到个人经验 section。

Section 1 的核心目标：先建立 2026 年游戏音频相关 AI 工具地图，再说明行业里的真实使用方式通常是辅助、占位、探索和提效，而不是完整替代游戏音频设计师。版权、授权、质量、一致性和可控性等风险边界，集中放在语音 / 音乐 / 音效三类 AIGC 的横向总结中讨论。

AIGC 三个方向采用同一讲法：每类选 1-2 个代表工具或案例，不做工具大全；案例选择标准是“使用范式优先，SOTA / 知名度辅助”。重点讲它代表了哪种工作方式、适合做什么、不适合做什么，以及游戏音频设计师应该如何介入和判断。

AIGC 35 分钟暂定时间分配：语音约 12 分钟、音乐约 10 分钟、音效约 10 分钟，最后约 3 分钟做三类内容的横向小结。

AI 工具 20 分钟暂定聚焦三类：素材发现与管理、音频编辑与修复、技术音频与实现辅助。测试 QA 与内容验证暂不展开。

## 大纲

1. 开场：为什么 2026 年必须重新谈 AI 与游戏音频（约 5 分钟）
   - 关键点:
     - AI 已经从“新奇工具”进入音频生产、学习、协作和内容验证流程。
     - 对新人来说，问题不只是会不会用工具，而是如何判断哪些工作可以交给 AI、哪些仍需要设计师负责。
   - 案例:
     - TBD: 是否使用一个具体的近期行业事件、工具 demo 或个人项目片段作为开场。

2. Section 1 总览：2026 年行业在做什么（行业现状部分，共约 55 分钟）
   - 关键点:
     - 区分 AIGC 内容生成与更宽泛的 AI 工具提效。
     - AIGC 内容生成按语音、音乐、音效拆分；AI 工具提效按工作流场景拆分。
     - 强调“能生成声音”不等于“能完成游戏音频设计”。
   - 案例:
     - 每类选 1-2 个代表工具或案例；具体工具信息需在 Stage B 前核验官网、授权条款和可展示素材。

3. AIGC 方向一：语音 Voice（约 12 分钟）
   - 关键点:
     - 观察 AI 配音、voice cloning、speech-to-speech、角色声线探索、临时配音、版本化对白、跨语言本地化。
     - 使用范式可能包括：前期占位与迭代、角色声音概念探索、低成本临时对白、导演式批量生成、后期修正或变声。
     - 代表范式聚焦游戏对白生产流程：角色配音、临时对白和本地化，而不是只展示 voice cloning 的新奇感。
     - 需要强调表演控制、情绪连续性、角色一致性、授权、演员权益、平台政策和商业风险。
   - 案例:
     - 代表工具 / 案例方向（待核验）: ElevenLabs 作为英文 AI 语音生成典型；Qwen 系列语音模型作为国内典型，由用户补充具体模型和案例。
     - 不再使用 Replica Studios 作为代表候选；该产品已停止。

4. AIGC 方向二：音乐 Music（约 10 分钟）
   - 关键点:
     - 观察 AI 作曲、风格参考、stem 输出、demo track、临时音乐、情绪方向探索、给作曲家的 brief 和 reference。
     - 使用范式可能包括：快速 mood board、pitch / prototype 阶段的临时音乐、stem 拆分后进 DAW 二次制作、生成多个风格方向供筛选。
     - 代表范式聚焦原型阶段的 mood board / reference / temp music，用 AI 帮助探索情绪、风格和沟通方向。
     - 需要强调互动音乐结构、loop、分层、转场、授权、音乐审美和后期制作仍然关键。
   - 案例:
     - 代表工具 / 案例方向（待核验）: Suno。重点作为高知名度 AI 音乐生成典型，用于说明 mood board、reference、temp music 和方向探索。
     - Udio、Stable Audio 不在音乐部分展开；Stable Audio 可视情况放入音效 / text-to-audio 方向作为补充候选。

5. AIGC 方向三：音效 Sound Effects（约 10 分钟）
   - 关键点:
     - 观察 text-to-audio、video-to-audio、环境氛围、foley、小型 utility SFX、UI、机械、魔法、科幻音效等。
     - 代表范式聚焦 text-to-audio 与 video-to-audio：从文字 prompt 生成音效，以及根据视频 / gameplay / 动画自动生成同步声音。
     - 素材库厂商和素材库管理工具的 AI 化不在 AIGC 音效段展开，移动到 AI 工具 section 的“素材发现与管理”中讨论。
     - 需要强调当前 SOTA 工具、好玩的 demo、可控性、可编辑性、同步准确度、素材授权，以及这些工具是否能进入真实游戏音频工作流。
     - 收束判断：AI 音效最有冲击力的变化，不只是“生成一个声音”，而是 text-to-audio 和 video-to-audio 正在改变声音原型制作与配声入口；但进入游戏项目仍要看可控性、编辑性、授权和实现语境。
   - 案例:
     - text-to-audio 代表工具 / 案例方向（待核验）: ElevenLabs Sound Effects。
     - video-to-audio / 视听生成前沿方向（待核验）: MMAudio 作为 Sony AI / CVPR 2025 公开模型代表；PrismAudio 作为 ICLR 2026 前沿研究方向；Seedance 2.0 作为 native audio-video generation / 视听一体生成趋势案例。

6. AIGC 横向总结：共性与风险边界（约 3 分钟）
   - 关键点:
     - 语音、音乐、音效三类 AIGC 的共同特点：适合方向探索、占位、原型制作、批量变体和效率提升，但不自动等于可交付的游戏音频设计。
     - 做成一个总结页，整体说明当前 AIGC 音频资产的通用问题：质量稳定性、风格 / 角色一致性、可控编辑、版权 / 授权、训练数据来源、演员 / 创作者权益和商业使用风险。
     - 对学习者的判断：不要只问“AI 能不能生成”，还要问“这个结果能不能被解释、修改、授权、实现和验收”。
   - 案例:
     - TBD: 用一页总结前面语音、音乐、音效案例暴露出的共同问题。

7. AI 工具：游戏开发与音频工作流提效（约 20 分钟）
   - 关键点:
     - 主线：AIGC 关注“声音从哪里来”，AI 工具关注“工作如何更快、更可控、更可验证地推进”。
     - 这一块不只看“生成声音”，而是看 AI 如何进入音频设计师每天的工作。
     - 聚焦三类场景：素材发现与管理、音频编辑与修复、技术音频与实现辅助。
     - 每类都从两个角度展开：以前是怎样的；AI powered 之后是怎样的。
     - 取向：实用成熟工具和前沿趋势都要覆盖；具体删减留到后续逐页阶段。
     - 对学习者来说，AI 工具的价值可能比 AIGC 更稳定：它帮助你更快找到素材、整理资产、处理音频、写脚本、排查实现问题和验证内容。
   - 案例:
     - 素材发现与管理：以前主要依赖文件名、关键词、人工标签、素材库经验和反复试听；AI powered 之后进入语义搜索、相似声音搜索、自动标签和更智能的素材库整理。候选方向（待核验）: Soundly Find Similar、SoundQ / Pro Sound Effects、Orion、SFX Stacks、SonikSearch 等。
     - 音频编辑与修复：以前依赖人工听辨、手动 spectral editing、插件链和经验参数；AI powered 之后可以用降噪、对白清理、stem separation、响度优化、repair assistant 等方式更快处理素材。候选方向（待核验）: iZotope RX 12 / RX 系列、Adobe Enhance Speech、LALAL.AI、Descript、StemSplit / stem separation 工具等。
     - 技术音频与实现辅助：以前依赖手写脚本、查 API 文档、手动批处理、在 Wwise / Unreal / Unity 中反复设置和排查；AI powered 之后开始出现基于 API / MCP / agent 的脚本生成、批量对象创建、属性设置、实现排查和编辑器内辅助。候选方向（待核验）: Wwise Authoring API / WAAPI、Wwise MCP / WAAPI MCP、UE Audio MCP、Unity AI Assistant、Unreal 生态 AI 插件等。

8. 行业边界：AI 目前还替代不了什么
   - 关键点:
     - 审美方向、交互语境、实现约束、混音判断、团队沟通、责任归属。
     - 游戏音频的难点在“动态系统中的声音决策”，不是单个 wav 文件。
     - 语音、音乐、音效三类 AIGC 的边界不同：语音更敏感于授权和表演，音乐更敏感于结构和版权，音效更敏感于可控编辑和交互实现。
   - 案例:
     - TBD: 使用一个“AI 输出看似可用但放进游戏就失败”的对比案例。

## Section 1 Slide Groups（Stage A 草案）

> Slide group 不是 Slidev 的正式语法，而是 Stage A 到 Stage B 之间的规划单位：一组服务同一个教学目的的 slides。它比章节更细，但还没有进入逐页文案、布局和素材确认。

| Group | Purpose | Candidate content | Status |
|-------|---------|-------------------|--------|
| S1-G1 开场与工具地图 | 建立 2026 年游戏音频 AI 工具的观察框架 | 双栏形式：左栏 AIGC，看声音内容从哪里来；右栏 AI 工具，看工作流如何更快、更可控、更可验证。核心问题不是“AI 会不会替代游戏音频设计师”，而是“AI 已经进入了哪些环节”。 | confirmed |
| S1-G2 AI 语音：游戏对白生产流程 | 说明 AI 语音在角色配音、临时对白和本地化中的使用范式 | ElevenLabs 作为英文 AI 语音生成典型；Qwen 系列语音模型作为国内典型，由用户补充具体模型和案例；聚焦 TTS、语音克隆、变声 / 声线转换、角色声音探索、临时配音、版本化对白、本地化；Replica Studios 不再作为代表候选 | confirmed |
| S1-G3 AI 音乐：原型阶段的 mood / reference / temp music | 说明 AI 音乐更适合方向探索和沟通，而不是直接替代互动音乐设计 | 只讲 Suno，作为高知名度 AI 音乐生成典型；强调 mood board、reference、temp music、方向探索和互动音乐结构限制；Udio、Stable Audio 不在音乐部分展开 | confirmed |
| S1-G4 AI 音效：text-to-audio 与 video-to-audio | 展示 AI 音效当前最有冲击力的两条生成入口 | text-to-audio 主讲 ElevenLabs Sound Effects；video-to-audio / 视听生成不包装成成熟主流商用工具，作为前沿方向讲 MMAudio、PrismAudio，并补充 Seedance 2.0 的 native audio-video generation 趋势；素材库 AI 化移到 S1-G6“素材发现与管理”中讨论 | confirmed |
| S1-G5 AIGC 横向总结：共性与风险边界 | 从三类 AIGC 里提炼共同特点和风险判断 | 做成一个总结页，整体说明当前 AIGC 音频资产的通用问题：质量稳定性、风格 / 角色一致性、可控编辑、版权 / 授权、训练数据来源、演员 / 创作者权益和商业使用风险 | confirmed |
| S1-G6 AIGC 风险正在如何演进 | 简单说明这些问题不是静态风险，而是在法律、授权和行业协议中快速演进 | 语音侧：配音演员授权、知情同意、补偿、数字声音复制等行业协议演进，例如 SAG-AFTRA 相关协议；音乐侧：Suno 与唱片公司的诉讼、和解和授权模型变化；强调这不是法律课，而是提醒学生关注“可商用”背后的制度变化 | placeholder |
| S1-G7 AI 工具一：素材发现与管理 | 用 before / after 展示素材库工作流如何被 AI 改造 | 以前：文件名、关键词、人工标签、经验和反复试听；AI powered：语义搜索、相似声音搜索、自动标签、智能素材库整理；Soundly / SoundQ 代表成熟专业素材库工作流，Orion / SFX Stacks 代表更 AI-native 的语义和相似声音搜索方向 | confirmed |
| S1-G8 AI 工具二：音频编辑与修复 | 用 before / after 展示 AI 如何进入清理、分离和修复流程 | 以前：人工听辨、手动 spectral editing、插件链、经验参数；AI powered：降噪、对白清理、stem separation、响度优化、repair assistant；iZotope RX 作为专业修复主线，Adobe Enhance Speech 作为低门槛语音清理代表，LALAL.AI / StemSplit 等 stem separation 工具作为分离类补充 | confirmed |
| S1-G9 AI 工具三：技术音频与实现辅助 | 用 before / after 展示 AI 如何辅助脚本、批处理、引擎 / 中间件实现 | 以前：手写脚本、查 API 文档、手动批处理、反复设置和排查；AI powered：API / MCP / agent 辅助脚本生成、对象创建、属性设置、实现排查；WAAPI 作为成熟自动化基础，Wwise MCP / UE Audio MCP 作为 agent 化前沿方向，Unity AI Assistant / Unreal AI 插件作为引擎生态也在引入 AI 的简短补充；补充 ReAgent 作为 REAPER 相关的 AI powered / agentic workflow automation 例子 | confirmed |
| S1-G10 Section 1 收束：AI 没有替代设计问题 | 用问题收束 Section 1，并自然桥接 Section 2 | 既然 AI 已经进入声音生成和工作流提效，游戏音频设计师接下来还要学什么、负责什么？真实项目仍需要人判断方向、语境、实现、质量和验收；这个问题引出后面作者自己的 AI 使用经历和 agent 协作范式 | confirmed |

## Section 2 Slide Groups（Stage A 草案）

| Group | Purpose | Candidate content | Status |
|-------|---------|-------------------|--------|
| S2-G1 同一起跑线 | 用一句开场 statement 降低学生焦虑，并把话题从“工具强不强”转到“我们如何学习使用 AI” | Statement layout：关于如何使用 AI，大家其实是站在同一起跑线上的。不要先假设自己落后，而是看自己如何建立判断和协作方式 | confirmed |
| S2-G2 背景：有基础，但过去仍被代码门槛挡住 | 说明 coding agents 对作者的真正改变：不是少写代码，而是让想法能进入可迭代工程实践 | 短背景页：作者已有一些开发基础，主要包括会使用版本控制软件（GitHub、Perforce）和代码编辑器（VS Code 等）；但在 coding agents 兴起前，很多工具 / 产品想法仍难以独立落地 | confirmed |
| S2-G3 阶段一：一问一答 vibe coding | 展示早期使用 coding agents 的兴奋感与局限 | 以作者自己做 audiometer 工具为例：先讲自己的需求、现有工具无法满足、因此开始自己 vibe coding；最后用梗图总结这一阶段体验：想法第一次能落地，但缺少结构、标准和验证时，很容易进入“错了重来、还是不对、再让它改”的失控低效循环 | confirmed |
| S2-G4 阶段二：理解 agents 与 skills | 说明从聊天式使用转向流程化协作的过程 | 用作者常用的 Claude 和 Cursor 作为 agent 环境，再选 3-4 类 skills 展示流程设计的价值，例如 brainstorming / grill-me、TDD / verification、code review、docs / slides authoring 等；重点不是列工具，而是说明真正用过厉害的 skills 后，才意识到“调教 AI 工作”的流程本身是被设计出来的 | confirmed |
| S2-G5 阶段三：形成 agent 协作范式 | 概括成熟阶段的核心转变 | Before / after 对比页：以前是“我描述功能，AI 写代码”，现在是“我定义目标、边界、标准和验收，AI 在流程中执行、检查和迭代”；callback 前面的 audiometer 案例，说明后续功能开发如何从 vibe coding 进化到更有结构的 agent 协作 | confirmed |
| S2-G6 规范化开发意识 | 说明与 agent 协作反过来促使作者学习开发前置规范 | 继续围绕 audiometer 展开，聚焦四个关键词：设计系统、design token、组件规范、验收标准。这里不是前端细节课，而是说明这些前置规范为什么能让 agent 输出更一致、可维护、可验收；这些文档也是为了解决 AI 容易断片和缺少 SSOT 的问题，让协作有稳定的单一事实来源。如果没有前置标准，agent 只能“做出东西”，但很难做出稳定的产品体验 | confirmed |
| S2-G7 Audiometer 成品展示 | 在讲完从 vibe coding 到规范化协作后，展示这个工具现在变成了什么 | 展示 audiometer 当前网站和截图，说明它从最初的需求、vibe coding、后续功能开发，到更成熟的产品形态之间的演进。具体网址、截图和功能点由用户提供 | needs-user |
| S2-G8 人在 AI 协作中的价值 | 将个人经验收束到人的两类核心价值 | 双栏页：工程决策 vs 审美决策。工程决策包括目标、边界、架构、验收；审美决策包括风格、取舍、体验、声音 / 界面品味。提问、拆解、写规范、验证、使用 skills 等能力，最终都服务于这两个必须由人负责的判断 | confirmed |
| S2-G9 彩蛋：这套 slides 也是 AI 协作完成的 | 说明前面的协作范式不只适用于写代码，也适用于内容创作、课程准备和个人项目 | 拆成三页：先用 Slidev 全览图说明这套 slides 本身也是 AI 协作产物；再讲 `gad-slides-authoring` skill 如何用 A/B/C 阶段约束协作；最后讲 `slides/README.md` 与 `slides/pages/EXAMPLE.md` 如何把设计系统、layout 写法和实现规范变成 SSOT。重点是让学生看到：即使不写代码，也可以把同样的协作思路用于自己的实际需求 | confirmed |
| S2-G10 过渡到课程总结 | 用 statement layout 把个人经历回接到学生行动建议 | Statement layout：AI 发展太快，这套 slides 里提到的很多工具、案例和流程，可能明年就会过时，甚至需要全部重写。真正值得带走的不是某个工具名，而是如何建立自己的判断标准、协作方法和验证意识 | confirmed |

9. Section 2 转场：从行业观察到个人使用方法（个人经验部分，共约 35 分钟）
   - 关键点:
     - 把问题从“AI 能做什么”转成“我如何把 AI 放进自己的学习与创作流程”。
     - 说明个人经验不是万能答案，而是一套可借鉴的思考方式。
     - Section 2 主线句：AI 时代真正改变我的，不是让我少写代码，而是让我把想法变成可迭代的工程实践；但越深入使用 agent，越需要人负责工程判断和审美判断。
     - 讲述顺序：同一起跑线 statement -> 三阶段成长 -> 人的工程 / 审美价值。
     - 内部不做硬时间切分，优先完整呈现个人经历、阶段变化和最终观点；35 分钟仅作为整体长度参考。
   - 案例:
     - TBD: 用户提供个人经历中的代表性转折点。

10. 个人经验：我的 AI 使用场景与实际案例
   - 关键点:
     - 开场 statement：在当下 AI 时代，大家对 AI 如何使用其实在同一起跑线上。
     - 作者的代码基础、UE C++ 经验和 GitHub 仓库管理经验不在开场展开；如果需要，只作为后续案例中的背景补充。
     - 阶段一：vibe coding 一问一答。作者提出想法，agent 写代码；展示 2-3 个小工具 / 小实验，重点呈现“想法第一次能落地”的兴奋感，同时指出缺少结构、标准和验证时，很容易进入“错了重来、还是不对、再让它改”的失控低效循环。
     - 阶段二：开始理解不同 coding agents 的特性，并配合 skills 使用；用作者常用的 Claude、Cursor 和一些有名 / 常用 skills 举例，从“让 AI 写代码”逐渐转向“给 AI 更好的上下文、流程和约束”。
     - 阶段二的关键感受：真正用过厉害的 skills 后，才意识到“调教 AI 工作”的流程本身是被设计出来的；skills 把重复的好习惯固化成协作协议，也促使作者开始理解后续的设计规范、开发规范和流程规范。
     - 阶段三：形成更良好的 agent 协作范式。从“我描述功能，AI 写代码”转成“我定义目标、边界、标准和验收，AI 在流程中执行、检查和迭代”。
     - 阶段三的另一层收获是规范化开发意识：设计系统、design token、组件规范、验收标准等内容需要在开发前明确；这些不是一开始就知道的，而是在与 agent 实践协作中逐渐习得的。
     - 最终收束为人的两类核心价值：工程决策与审美决策。提问、拆解、写规范、验证、使用 skills 等能力，最终都服务于这两个必须由人负责的判断；AI agent 更适合执行、扩展、检查和迭代。
   - 案例:
     - TBD: 阶段一展示 2-3 个小工具 / 小实验，用户稍后提供具体案例。
     - TBD: 阶段二展示作者常用的 Claude、Cursor 使用方式，以及若干有名 / 常用 skills。
     - TBD: 阶段三展示一次更成熟的协作开发流程。

11. 心得总结：给游戏音频学习者的 AI 使用原则
   - 关键点:
     - AI 是放大器，不是替代品；先训练耳朵、审美和实现理解，再让 AI 加速。
     - 保持可验证、可追溯、可交付；不要把无法判断的输出交给项目。
     - 用 AI 建立学习闭环，而不是制造“看起来很懂”的幻觉。
   - 案例:
     - TBD: 是否以 checklist、金句或个人原则收尾。

## Page Plan

| # | Purpose | Visible title | Key text | Media | Layout intent | Speaker notes | Status |
|---|---------|---------------|----------|-------|---------------|---------------|--------|
| 1 | 开场并建立课程主题 | 2026 年，AI 正在怎样进入游戏音频设计？ | 行业现状、AIGC、AI 工具、个人协作经验 | 可用纯文字或抽象背景 | cover | 说明本课不是工具教程，而是建立观察框架 | confirmed |
| 2 | 建立 Section 1 分类框架 | 两条线：AIGC 与 AI 工具 | AIGC 看声音内容从哪里来；AI 工具看工作如何更快、更可控、更可验证 | 双栏图，无需具体截图 | two-column / map | 用这页解释后面所有工具都放进这两条线 | confirmed |
| 3 | 进入 AI 语音主题 | AI Voice：游戏对白生产流程 | TTS、语音克隆、变声 / 声线转换、角色声音探索、临时对白、版本化对白、本地化 | 工具 logo 或文字占位 | header-body / topic intro | 先强调不只是 Text-to-Speech，而是对白生产流程；不是 deck-level section | confirmed |
| 4 | 展示英文 AI 语音典型 | ElevenLabs：英文 AI 语音生成典型 | 高知名度、质量表现、角色声音探索、临时配音 | `slides/public/ai-in-game-audio-design-2026/elevenlabs-home-01.png`；`slides/public/ai-in-game-audio-design-2026/elevenlabs-home-02.png`；后续补本地视频 demo | tool-focus / image + callout | 使用官网截图作为离线可展示材料，官网链接放在图片上；视频示例如需加入应本地化 | confirmed |
| 4a | 展示 ElevenLabs TTS demo | ElevenLabs Text to Speech | 两个小视频同页展示：英文 TTS demo（00:07-00:32）与中文 TTS demo（00:01-00:30） | `slides/public/ai-in-game-audio-design-2026/elevenlabs-tts-english.mp4`；`slides/public/ai-in-game-audio-design-2026/elevenlabs-tts-chinese.mp4` | two-video demo | 已用裁剪后的视频直接替换原文件名，避免弱网或非联网模式影响演示 | confirmed |
| 4b | 展示 ElevenLabs Voice Design | ElevenLabs Voice Design | 官方宣传片展示从文字描述生成或设计角色声线；观察概念探索阶段的角色声线设计能力 | `slides/public/ai-in-game-audio-design-2026/elevenlabs-voice-design.mp4` | full-width video | 直接展示本地视频，避免弱网或非联网模式影响演示 | confirmed |
| 5 | 展示国内 AI 语音典型 | Qwen Voice：国内语音模型案例 | 国内模型进展、中文 TTS、语音克隆、变声 / 声线转换、可能的角色对白和本地化用途 | `slides/public/ai-in-game-audio-design-2026/bailian-qwen-voice-model.png` | tool-focus / full-width image | 使用用户提供截图作为国内语音模型案例材料；不额外编写未核验细节 | confirmed |
| 5a | 展示 Qwen 语音角色 demo | Qwen 语音角色 Demo | 国内语音角色展示素材；具体能力点课堂口头说明 | `slides/public/ai-in-game-audio-design-2026/bailian-voice-character.mp4`，已裁掉末尾约 2 秒空白 | full-width video | 直接展示本地视频，避免弱网或非联网模式影响演示 | confirmed |
| 5b | 展示自建 Qwen API voice clone demo | 本地部署：Voice Clone | 作者使用 Qwen 语音模型 API 搭建 voice clone / voice design 流程的视频展示 | `slides/public/ai-in-game-audio-design-2026/localtts-voice-clone.mp4` | full-width video | 直接展示本地视频，避免弱网或非联网模式影响演示 | confirmed |
| 5c | 展示自建 Qwen API voice design demo | 本地部署：Voice Design | 作者使用 Qwen 语音模型 API 搭建 voice design 流程的视频展示 | `slides/public/ai-in-game-audio-design-2026/localtts-voice-design.mp4` | full-width video | 直接展示本地视频，避免弱网或非联网模式影响演示 | confirmed |
| 6 | 收束语音部分 | AI 语音真正改变了什么？ | 能加速占位、试音、本地化探索；仍要处理表演、授权、一致性 | 可用简短对比图 | summary | 连接到后面的 AIGC 通用风险 | confirmed |
| 7 | 进入 AI 音乐主题 | AI Music：从正式配乐到方向探索 | 本节只讲 Suno；重点是 mood、reference、temp music | Suno logo 或截图占位 | header-body / topic intro | 明确不展开 Udio / Stable Audio；不是 deck-level section | confirmed |
| 8 | 展示 Suno 的使用范式 | Suno：快速生成音乐方向 | Text to Song、prompt control、Voice / Persona、Studio / Explore | `slides/public/ai-in-game-audio-design-2026/suno-home-01.png`；`slides/public/ai-in-game-audio-design-2026/suno-explore-01.png` | layered image + text | 需要避免把 Suno 讲成互动音乐系统替代品 | confirmed |
| 8a | 展示 Suno 创作歌曲示例 | Suno 创作示例 | Prompt 代码框、歌曲播放器和歌词节选 | `slides/public/ai-in-game-audio-design-2026/suno-polaroids-in-the-pillowcase.wav` | prompt + audio player + lyric excerpt | 使用音频-only wav 离线播放，歌词只展示节选，避免整页过载 | confirmed |
| 8b | 展示 Suno Studio 分轨能力 | Stems in Suno Studio | 展示 Suno Studio 中 stems / 分轨相关操作 | `slides/public/ai-in-game-audio-design-2026/suno-studio-stems.mp4` | full-width video | 直接展示本地视频，避免弱网或非联网模式影响演示 | confirmed |
| 9 | 说明 AI 音乐边界 | 生成一首歌，不等于设计互动音乐 | loop、分层、转场、状态、混音、授权仍需人判断 | 可用“歌曲 vs 互动音乐系统”双栏 | comparison | 强调游戏音乐设计不是单个音频文件 | confirmed |
| 10 | 进入 AI 音效主题 | AI Sound Effects：文字与视频两条入口 | text-to-audio；video-to-audio / 视听生成 | 工具地图占位 | header-body / topic intro | 素材库 AI 化后移到 AI 工具部分；不是 deck-level section | confirmed |
| 11 | 展示 text-to-audio | ElevenLabs Sound Effects：用文字生成音效 | prompt、短音效、foley、ambience、game SFX | `slides/public/ai-in-game-audio-design-2026/elevenlabs-text-to-audio.mp4` | full-width video | 直接展示本地视频，重点讲产品化程度相对高的音效生成入口 | confirmed |
| 12 | 展示 video-to-audio 前沿 | Video-to-Audio：学术研究前沿 | MMAudio、PrismAudio；研究 / 开源 / 前沿方向 | `slides/public/ai-in-game-audio-design-2026/mmaudio-paper-diagram.png`；`slides/public/ai-in-game-audio-design-2026/prismaudio-paper-diagram.png`；标题链接到各自 project page | two research image cards | 谨慎表述：不是成熟主流商用工具，重点观察同步、语义、材质、空间和可编辑性 | confirmed |
| 12a | 补充 text-to-video 模型基本信息 | Text-to-Video | Seedance 2.0：字节跳动 Seed，2026 年 2 月；HappyHorse 1.0：阿里淘天 Future Life Lab，2026 年 4 月；补充课堂观察点 | Seedance 2.0 project page；HappyHorse 官方链接暂缺 | two info cards | 从 text-to-video 入口补充原生音视频生成模型，连接下一页 Seedance demo | confirmed |
| 13 | 补充视听一体生成趋势 | Seedance 2.0：native audio-video generation | 视频生成不再总是 silent，视听一体生成成为趋势 | `slides/public/ai-in-game-audio-design-2026/seedance2_example_game.mp4`；右侧显示对应 prompt | video + prompt | 区分它和纯 video-to-audio 工具：这里展示的是视听一体生成趋势 | confirmed |
| 13a | 展示 HappyHorse 1.0 测试示例 | HappyHorse 1.0 | 铁匠铺锻造场景 prompt；观察 text-to-video 是否处理声音事件、材质和节奏 | `slides/public/ai-in-game-audio-design-2026/happyhorse1-test.mp4`；右侧显示对应 prompt | video + prompt | 与 Seedance 示例并列，用于比较 text-to-video 原生音视频生成效果 | confirmed |
| 14 | 总结 AIGC 音频资产通用问题 | AIGC 音频资产的通用问题 | 质量稳定性、一致性、可控编辑、版权授权、训练数据、商业风险 | 可用问题列表 | statement / summary | 作为语音、音乐、音效后的横向总结页 | confirmed |
| 15 | 补充风险演进 | 这些问题正在如何演进？ | 配音演员授权、知情同意、补偿；Suno 诉讼、和解、授权模型 | TODO: SAG-AFTRA / Suno 公开新闻截图 | trend / news | 不是法律课，只提醒“可商用”背后有制度变化 | placeholder |
| 16 | 转入 AI 工具 | AI Tools：不是生成声音，而是改变工作流 | 找素材、修素材、做实现 | 简单三栏图 | header-body / topic intro | 明确和 AIGC 区分；不是 deck-level section | confirmed |
| 17 | AI 工具一 | 素材发现与管理：以前怎么找声音？ | 文件名、关键词、人工标签、素材库经验、反复试听 | 可用 before/after 示意 | before-after | 先讲传统痛点 | confirmed |
| 18 | AI 工具一 after | AI powered 素材发现 | Soundly / SoundQ；Orion / SFX Stacks；语义搜索、相似声音搜索、自动标签 | TODO: 工具截图 | before-after / tool-list | 成熟工作流 + AI-native 搜索各举一个方向 | placeholder |
| 19 | AI 工具二 | 音频编辑与修复：以前怎么修素材？ | 人工听辨、spectral editing、插件链、经验参数 | 可用 before/after 示意 | before-after | 讲清理、分离、修复为什么费时 | confirmed |
| 20 | AI 工具二 after | AI powered 音频修复 | iZotope RX、Adobe Enhance Speech、stem separation | TODO: RX / Adobe / stem separation 截图 | before-after / tool-list | RX 专业主线，Adobe 低门槛，stem separation 补充 | placeholder |
| 21 | AI 工具三 | 技术音频与实现辅助：以前怎么做？ | 手写脚本、查 API、手动批处理、反复设置和排查 | 可用 Wwise / Unreal / Reaper 图标占位 | before-after | 解释技术音频工作里的重复劳动和门槛 | confirmed |
| 22 | AI 工具三 after | AI powered 技术音频工作流 | WAAPI、Wwise MCP、UE Audio MCP、Unity / Unreal AI、ReAgent | TODO: WAAPI / MCP / ReAgent 材料 | before-after / tool-list | 区分成熟自动化基础和 agent 化前沿 | placeholder |
| 23 | Section 1 收束 | AI 已经进来了，那设计师还负责什么？ | 方向、语境、实现、质量、验收 | statement layout | statement | 用问题自然桥接 Section 2 | confirmed |
| 24 | Section 2 开场 | 关于如何使用 AI，大家其实是站在同一起跑线上的。 | 不是记住工具名，而是建立协作方式和判断标准 | 纯文字 | statement | 从行业观察转入个人经验 | confirmed |
| 25 | 个人背景 | 我不是零基础，但过去仍被门槛卡住 | GitHub、Perforce、VS Code；有想法但难以独立落地 | 可用工具 logo / 简单列表 | personal / context | 背景要短，不抢主线 | confirmed |
| 26 | 阶段一案例 | 从需求开始：为什么我要做 audiometer？ | 个人听声习惯：用监测表头观察桌面端各种音频信号，包括视频、游戏和开发中场景；现有工具无法同时满足 LUFS 响度和频谱观察需求；因此开始做自己的 audiometer | 用户已准备早期版本截图，待放入资源目录 | case-story | 从真实听声习惯切入：不是为了写代码而写代码，而是因为现有工具不够贴合自己的工作方式 | confirmed |
| 27 | 阶段一体验 | 一问一答 vibe coding | 想法第一次能落地；但缺少结构、标准和验证时，很容易进入“错了重来、还是不对、再让它改”的低效循环 | 可选：梗图；没有素材时用 statement 或对话气泡表现 | quote / meme | 梗图不是必需素材，重点是把早期兴奋感和失控感讲清楚 | confirmed |
| 28 | 阶段二 | 从聊天，到理解 agents 与 skills | Claude、Cursor；brainstorming / grill-me、TDD / verification、code review、docs / slides authoring | 可用 skills 分类图 | process / list | 讲 skills 是流程设计，不是工具清单 | confirmed |
| 29 | 阶段三 | 协作范式的 before / after | 以前：我描述功能，AI 写代码；现在：我定义目标、边界、标准、验收，AI 执行、检查、迭代 | callback audiometer | before-after | 回到 audiometer 后续功能开发 | confirmed |
| 30 | 规范化开发意识 | 为什么要有这些文档？ | 设计系统、design token、组件规范、验收标准；解决 AI 断片和 SSOT 问题 | 可用文档/SSOT 示意 | concept / diagram | 继续围绕 audiometer 展开 | confirmed |
| 31 | Audiometer 成品展示 | PLVS：这个工具现在变成了什么？ | PLVS 是一个实时音频监测桌面工具；展示官网、GitHub、实际工具截图，以及它如何从个人听声需求变成可发布的开源产品 | TODO(user): 工具实际截图；链接：https://plvs.soundoer.com/ 与 https://github.com/SounDoer/PLVS | showcase | 可以简短点出 Peak、Loudness、Vectorscope、Spectrum、Spectrogram，以及系统音频捕获、灵活布局、历史快照等代表功能；重点仍是“需求如何变成产品形态” | confirmed |
| 32 | 人在 AI 协作中的价值 | 工程决策 vs 审美决策 | 工程：目标、边界、架构、验收；审美：风格、取舍、体验、品味 | 双栏图 | two-column | 这是个人经验的观点收束 | confirmed |
| 33 | 彩蛋开场 | 这套 slides 也是 AI 协作完成的 | 不只代码可以和 AI 协作，课程准备、内容结构和 slides 实现也可以被流程化 | TODO(user): Slidev 全览图 | meta / overview | 用全览图把观众带回这套 deck 本身：前面讲的方法，正在被这套 slides 使用 | confirmed |
| 34 | 讲解 slides authoring skill | `gad-slides-authoring`：把协作拆成 A / B / C | A 先决定讲什么；B 决定每页怎么讲；C 才决定怎么做成 Slidev。A 大纲：确定主线和结构；B 逐页内容：确认每页目的、文字、媒体和 layout intent；C Slidev 实现：根据 confirmed page plan 写 `slides/pages/<stem>.md` 并构建验证 | 可用 `gad-slides-authoring/SKILL.md` 截图或三阶段流程图 | process / diagram | 按“内容生产流水线”讲：skill 的价值不是“让 AI 自由发挥”，而是用阶段门槛、placeholder 和 confirmed page plan 控制协作边界 | confirmed |
| 35 | 讲解 Slidev 设计 SSOT | `README.md` 与 `EXAMPLE.md`：规则说明书 + 可复制样张 | `slides/README.md` 是规则说明书，回答“这个 deck 系统怎么运转”：目录、构建、设计 token、layout 体系和资源约定；`slides/pages/EXAMPLE.md` 是可复制样张，回答“具体页面应该怎么写”：cover、section、header-body、fullscreen-media、statement 等标准写法 | 可用 `slides/README.md` 与 `slides/pages/EXAMPLE.md` 截图 | docs / reference | 强调 SSOT 不只是文档，而是“规则 + 样例”；这些文件让 AI 和人使用同一套设计语言，减少断片、风格漂移和临时写法 | confirmed |
| 36 | 结尾 statement | 这套 slides 明年可能就要重写 | 工具会变，案例会变；真正带走的是判断标准、协作方法和验证意识 | 纯文字 | statement | 全课收束 | confirmed |

## Media Assets

| Need | Existing asset | Placeholder | Status |
|------|----------------|-------------|--------|
| 语音 AI 工具 / 案例截图 | `slides/public/ai-in-game-audio-design-2026/elevenlabs-home-01.png`；`slides/public/ai-in-game-audio-design-2026/elevenlabs-home-02.png`；`slides/public/ai-in-game-audio-design-2026/bailian-qwen-voice-model.png` |  | ready |
| Qwen 语音角色视频 | `slides/public/ai-in-game-audio-design-2026/bailian-voice-character.mp4` |  | ready |
| 自建 Qwen API voice clone 视频 | `slides/public/ai-in-game-audio-design-2026/localtts-voice-clone.mp4` |  | ready |
| 自建 Qwen API voice design 视频 | `slides/public/ai-in-game-audio-design-2026/localtts-voice-design.mp4` |  | ready |
| ElevenLabs TTS / Voice Design 视频 | `slides/public/ai-in-game-audio-design-2026/elevenlabs-tts-english.mp4`；`slides/public/ai-in-game-audio-design-2026/elevenlabs-tts-chinese.mp4`；`slides/public/ai-in-game-audio-design-2026/elevenlabs-voice-design.mp4` |  | ready |
| 音乐 AI 工具 / 案例截图 | `slides/public/ai-in-game-audio-design-2026/suno-home-01.png`；`slides/public/ai-in-game-audio-design-2026/suno-explore-01.png` |  | ready |
| Suno 创作歌曲示例 | `slides/public/ai-in-game-audio-design-2026/suno-polaroids-in-the-pillowcase.wav` |  | ready |
| Suno Studio stems 视频 | `slides/public/ai-in-game-audio-design-2026/suno-studio-stems.mp4` |  | ready |
| 音效 AI 工具 / 案例截图 |  | TBD: 核验 ElevenLabs Sound Effects、MMAudio、PrismAudio、Seedance 2.0 等公开材料 | missing |
| 素材发现与管理案例截图 |  | TBD: 核验 Soundly、SoundQ、Orion、SFX Stacks 等公开材料 | missing |
| 音频编辑与修复案例截图 |  | TBD: 核验 iZotope RX、Adobe Enhance Speech、Descript、stem separation 工具等公开材料 | missing |
| 技术音频与实现辅助案例截图 |  | TBD: 核验 Wwise Authoring API、Unity AI Assistant、Unreal AI 插件、Wwise / UE MCP、ReAgent 等公开材料 | missing |
| Audiometer 早期案例素材 |  | TBD: 用户提供需求、早期截图、梗图或对话片段 | missing |
| Audiometer 成品展示素材 | https://plvs.soundoer.com/；https://github.com/SounDoer/PLVS | TODO(user): 工具实际截图 | partial |
| Slides AI 协作过程截图 | `gad-slides-authoring/SKILL.md`、`slides/README.md`、`slides/pages/EXAMPLE.md` | TODO(user): Slidev 全览图；可选：skill / README / EXAMPLE 截图或三阶段流程图 | partial |
| AI 输出前后对比素材 |  | TBD: 可用文字 placeholder 先占位 | missing |

## 开放问题

- [x] AIGC 三类内容采用“代表工具 / 案例 + 使用范式 + 适合做什么 + 不适合做什么 + 游戏音频设计师如何介入”的讲法。
- [x] AI 工具 section 聚焦三类：素材发现与管理、音频编辑与修复、技术音频与实现辅助；测试 QA 与内容验证不展开；文档、沟通与学习放到个人经验 section。
- [ ] 需要继续核验 AI 工具三类中的代表工具、官网材料、授权条款和可展示素材。
- [ ] 需要确认是否讨论版权、伦理、平台政策和商业使用风险；如果讨论，要放在行业边界中还是单独成章。
- [ ] 需要确认作者个人经历中可公开展示的 2-4 个真实案例。
- [ ] 需要确认课程语气：更像行业观察课、方法论课，还是个人经验分享课。
- [ ] 需要确认是否包含现场 demo；当前假设为不准备练习，但可以讲案例拆解。
