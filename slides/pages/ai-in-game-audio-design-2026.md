---
layout: cover
slug: ai-in-game-audio-design-2026
deckListTitle: 2026 年 AI 与游戏音频设计
slidesOrder: 17.5
---

::backdrop::

AI AUDIO

::eyebrow::

Game Audio Design 2026

::title::

# 2026 年，AI 正在怎样进入游戏音频设计？

::subtitle::

行业现状、AIGC、AI 工具与个人协作经验

::info::

xichen @ gad.soundoer.com

---
layout: header-body
---

::backdrop::

MAP

::eyebrow::

Framework

::title::

### 两条线：AIGC 与 AI 工具

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="active-panel p-5">
    <span class="step-index">LINE 01</span>
    <h4>AIGC</h4>
    <p>看声音内容从哪里来。</p>
    <ul>
      <li>语音：角色、临时对白、本地化</li>
      <li>音乐：mood、reference、temp music</li>
      <li>音效：text-to-audio、video-to-audio</li>
    </ul>
  </div>
  <div class="callout">
    <span class="step-index">LINE 02</span>
    <h4>AI Tools</h4>
    <p>看工作如何更快、更可控、更可验证。</p>
    <ul>
      <li>素材发现与管理</li>
      <li>音频编辑与修复</li>
      <li>技术音频与实现辅助</li>
    </ul>
  </div>
</div>

---
layout: section
---

::backdrop::

VOICE

::eyebrow::

Part 01

::title::

## AI Voice：游戏对白生产流程

::subtitle::

不是猎奇的 voice cloning，而是对白生产方式正在变化

---
layout: header-body
---

::backdrop::

VOICE

::eyebrow::

Tool Focus

::title::

### ElevenLabs：英文 AI 语音生成典型

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>它代表的使用范式</h4>
    <ul>
      <li v-click>快速探索角色声音方向</li>
      <li v-click>为原型阶段生成临时对白</li>
      <li v-click>在版本迭代中批量试音</li>
      <li v-click>把语音生成纳入导演式筛选流程</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">PLACEHOLDER</span>
    <p class="text-center">TODO: ElevenLabs 官网或 demo 截图</p>
    <p class="text-center text-[0.9rem] text-[var(--color-text-muted)]">实现时需核验可展示材料和最新功能。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

VOICE

::eyebrow::

Placeholder

::title::

### Qwen TTS：国内语音模型案例

::body::

<div class="grid h-full min-h-0 grid-cols-[0.9fr_1.1fr] gap-5">
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">USER MATERIAL</span>
    <p class="text-center">TODO: Qwen 系列 TTS 模型材料</p>
    <p class="text-center text-[0.9rem] text-[var(--color-text-muted)]">当前只保留国内案例位置，不编写未核验细节。</p>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>保留这个位置的原因</h4>
    <ul>
      <li>中文语音和本地化场景需要单独观察。</li>
      <li>国内模型进展会影响学习者可接触的工具生态。</li>
      <li>真正进入项目仍要看授权、稳定性和可控性。</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

VOICE

::eyebrow::

Summary

::title::

### AI 语音真正改变了什么？

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="active-panel p-4">
    <span class="step-index">01</span>
    <h4>占位更快</h4>
    <p>原型阶段可以更快听到角色对白，而不是只看文字脚本。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">02</span>
    <h4>探索更多</h4>
    <p>声线、语气和语言版本可以更早进入比较。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">03</span>
    <h4>责任更重</h4>
    <p>表演、授权、角色一致性和演员权益仍然需要人判断。</p>
  </div>
</div>

---
layout: section
---

::backdrop::

MUSIC

::eyebrow::

Part 02

::title::

## AI Music：从正式配乐到方向探索

::subtitle::

这一节只讲 Suno：mood、reference 与 temp music

---
layout: header-body
---

::backdrop::

MUSIC

::eyebrow::

Tool Focus

::title::

### Suno：快速生成音乐方向

::body::

<div class="grid h-full min-h-0 grid-cols-[1fr_1fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>适合放在原型与沟通阶段</h4>
    <ul>
      <li v-click>生成多个 mood board 方向</li>
      <li v-click>给作曲家或团队提供 reference</li>
      <li v-click>快速制作 pitch / prototype 阶段 temp music</li>
      <li v-click>帮助讨论风格、情绪和节奏关键词</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">PLACEHOLDER</span>
    <p class="text-center">TODO: Suno 公开材料或 demo 截图</p>
    <p class="text-center text-[0.9rem] text-[var(--color-text-muted)]">不要把它讲成互动音乐系统替代品。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

SYSTEM

::eyebrow::

Boundary

::title::

### 生成一首歌，不等于设计互动音乐

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="callout">
    <span class="callout-title">AI 生成歌曲</span>
    <ul>
      <li>单一线性音频文件</li>
      <li>适合快速感受风格和情绪</li>
      <li>常用于临时音乐与方向沟通</li>
    </ul>
  </div>
  <div class="active-panel p-5">
    <span class="callout-title">游戏互动音乐系统</span>
    <ul>
      <li>loop、分层、转场、状态切换</li>
      <li>需要服务玩法节奏和交互反馈</li>
      <li>混音、授权和实现仍需人负责</li>
    </ul>
  </div>
</div>

---
layout: section
---

::backdrop::

SFX

::eyebrow::

Part 03

::title::

## AI Sound Effects：文字与视频两条入口

::subtitle::

text-to-audio 与 video-to-audio 正在改变声音原型制作入口

---
layout: header-body
---

::backdrop::

PROMPT

::eyebrow::

Text To Audio

::title::

### ElevenLabs Sound Effects：用文字生成音效

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>可以尝试的声音类型</h4>
    <ul>
      <li v-click>短音效与 utility SFX</li>
      <li v-click>foley、ambience、UI sound</li>
      <li v-click>机械、魔法、科幻等概念声音</li>
      <li v-click>给后续声音设计提供起点或变体</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">PLACEHOLDER</span>
    <p class="text-center">TODO: ElevenLabs Sound Effects 截图 / demo</p>
    <p class="text-center text-[0.9rem] text-[var(--color-text-muted)]">重点讲产品化程度相对高的生成入口。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

VIDEO

::eyebrow::

Video To Audio

::title::

### Video-to-audio：给画面自动生成声音

::body::

<div class="grid h-full min-h-0 grid-cols-[0.9fr_1.1fr] gap-5">
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">PLACEHOLDER</span>
    <p class="text-center">TODO: MMAudio / PrismAudio demo 截图</p>
    <p class="text-center text-[0.9rem] text-[var(--color-text-muted)]">谨慎表述：前沿研究方向，不包装成成熟主流商用工具。</p>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>这个方向真正值得观察</h4>
    <ul>
      <li>声音可以从画面运动和事件中被推断。</li>
      <li>同步、节奏和材质判断开始进入模型能力范围。</li>
      <li>但可编辑性、授权和项目实现仍是核心门槛。</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

AV

::eyebrow::

Trend

::title::

### Seedance 2.0：native audio-video generation

::body::

<div class="grid h-full min-h-0 grid-cols-[1fr_1fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>趋势不是“给静音视频补声”这么简单</h4>
    <p>当视频生成开始内建声音，声音设计的入口会从单独的 wav 文件进一步前移到视听一体的概念生成阶段。</p>
    <div v-click class="quote-accent mt-5">
      <p>问题变成：这个声音能不能被解释、修改、授权，并放进真实互动系统？</p>
    </div>
  </div>
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">PLACEHOLDER</span>
    <p class="text-center">TODO: Seedance 2.0 公开材料</p>
    <p class="text-center text-[0.9rem] text-[var(--color-text-muted)]">区分它和纯 video-to-audio 工具。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

RISK

::eyebrow::

AIGC Summary

::title::

### AIGC 音频资产的通用问题

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="active-panel p-4">
    <span class="step-index">QUALITY</span>
    <h4>质量与一致性</h4>
    <p>单次结果惊艳，不代表批量稳定，也不代表角色和风格能连续。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">CONTROL</span>
    <h4>可控编辑</h4>
    <p>声音能生成，还要能解释、修改、迭代和适配实现。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">RIGHTS</span>
    <h4>版权与授权</h4>
    <p>训练数据、商业使用、演员和创作者权益都会影响项目风险。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

LEGAL

::eyebrow::

Evolving Risk

::title::

### 这些问题正在如何演进？

::body::

<div class="grid h-full min-h-0 grid-cols-[1fr_1fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>语音侧</h4>
    <ul>
      <li>配音演员授权</li>
      <li>知情同意与补偿</li>
      <li>数字声音复制的行业协议</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">PLACEHOLDER</span>
    <p class="text-center">TODO: SAG-AFTRA / Suno 公开新闻截图</p>
    <p class="text-center text-[0.9rem] text-[var(--color-text-muted)]">这不是法律课，只提醒“可商用”背后有制度变化。</p>
  </div>
</div>

---
layout: section
---

::backdrop::

TOOLS

::eyebrow::

Part 04

::title::

## AI Tools：不是生成声音，而是改变工作流

::subtitle::

找素材、修素材、做实现

---
layout: header-body
---

::backdrop::

SEARCH

::eyebrow::

Before

::title::

### 素材发现与管理：以前怎么找声音？

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="min-h-0 min-w-0">
    <h4>传统素材库工作流</h4>
    <ul>
      <li v-click>依赖文件名和关键词</li>
      <li v-click>依赖人工标签和素材库经验</li>
      <li v-click>反复试听、筛选、重命名</li>
      <li v-click>找相似声音往往靠记忆和耐心</li>
    </ul>
  </div>
  <div class="quote-accent self-center">
    <p>痛点不是“没有素材”，而是你很难快速找到项目此刻真正需要的那一个声音。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

SEARCH

::eyebrow::

After

::title::

### AI powered 素材发现

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="grid min-h-0 grid-cols-2 gap-3">
    <div class="callout">
      <span class="callout-title">成熟专业工作流</span>
      <p>Soundly / SoundQ：语义、相似声音、自动标签等能力进入素材库使用过程。</p>
    </div>
    <div class="callout">
      <span class="callout-title">AI-native 搜索方向</span>
      <p>Orion / SFX Stacks：更强调从描述、听感和相似性出发组织声音。</p>
    </div>
  </div>
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">PLACEHOLDER</span>
    <p class="text-center">TODO: 素材发现工具截图</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

REPAIR

::eyebrow::

Before

::title::

### 音频编辑与修复：以前怎么修素材？

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="active-panel p-5">
    <h4>传统修复流程</h4>
    <ul>
      <li>人工听辨问题区域</li>
      <li>手动 spectral editing</li>
      <li>搭插件链、调经验参数</li>
      <li>在时间、质量和可接受度之间取舍</li>
    </ul>
  </div>
  <div class="callout">
    <span class="callout-title">对学习者的难点</span>
    <p>很多问题不是“会不会点按钮”，而是能不能听出问题、判断处理是否过度，并知道什么时候该停。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

REPAIR

::eyebrow::

After

::title::

### AI powered 音频修复

::body::

<div class="grid h-full min-h-0 grid-cols-[1fr_1fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>典型方向</h4>
    <ul>
      <li>iZotope RX：专业修复主线</li>
      <li>Adobe Enhance Speech：低门槛语音清理</li>
      <li>stem separation：分离、重组和二次制作</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">PLACEHOLDER</span>
    <p class="text-center">TODO: RX / Adobe / stem separation 截图</p>
    <p class="text-center text-[0.9rem] text-[var(--color-text-muted)]">重点仍是判断：处理后的声音是否可用、可交付。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

IMPLEMENT

::eyebrow::

Before

::title::

### 技术音频与实现辅助：以前怎么做？

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="active-panel p-4">
    <span class="step-index">SCRIPT</span>
    <h4>脚本与批处理</h4>
    <p>手写脚本、查 API、处理重复对象和命名规则。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">ENGINE</span>
    <h4>引擎与中间件</h4>
    <p>在 Wwise、Unreal、Unity 中反复设置和排查。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">DEBUG</span>
    <h4>实现验证</h4>
    <p>确认事件、参数、路由、混音和资源组织是否符合预期。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

IMPLEMENT

::eyebrow::

After

::title::

### AI powered 技术音频工作流

::body::

<div class="grid h-full min-h-0 grid-cols-[0.95fr_1.05fr] gap-5">
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">PLACEHOLDER</span>
    <p class="text-center">TODO: WAAPI / MCP / ReAgent 材料</p>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>从自动化到 agent 化</h4>
    <ul>
      <li>WAAPI：成熟自动化基础</li>
      <li>Wwise MCP / UE Audio MCP：agent 化前沿方向</li>
      <li>Unity / Unreal AI：引擎生态也在引入辅助能力</li>
      <li>ReAgent：REAPER 工作流中的 agentic automation 例子</li>
    </ul>
  </div>
</div>

---
layout: statement
---

::backdrop::

?

::title::

### AI 已经进来了，
### 那设计师还负责什么？

::subtitle::

方向、语境、实现、质量、验收

---
layout: statement
---

::backdrop::

START

::title::

### 关于如何使用 AI，
### 大家其实是站在同一起跑线上的。

::subtitle::

不要先假设自己落后，而是建立协作方式和判断标准。

---
layout: header-body
---

::backdrop::

ME

::eyebrow::

Context

::title::

### 我不是零基础，但过去仍被门槛卡住

::body::

<div class="grid h-full min-h-0 grid-cols-[0.9fr_1.1fr] gap-5">
  <div class="callout">
    <span class="callout-title">已有基础</span>
    <ul>
      <li>GitHub</li>
      <li>Perforce</li>
      <li>VS Code</li>
      <li>一些开发经验</li>
    </ul>
  </div>
  <div class="active-panel p-5">
    <span class="callout-title">真正卡住的地方</span>
    <p>有很多工具和产品想法，但在 coding agents 兴起前，很难独立把它们推进到可迭代、可维护、可发布的工程实践。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

PLVS

::eyebrow::

Case Story

::title::

### 从需求开始：为什么我要做 audiometer？

::body::

<div class="grid h-full min-h-0 grid-cols-[1fr_1fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>个人听声习惯</h4>
    <ul>
      <li>用监测表头观察桌面端各种音频信号。</li>
      <li>场景包括视频、游戏和开发中的项目。</li>
      <li>希望同时看到 LUFS 响度和频谱。</li>
    </ul>
    <div v-click class="quote-accent mt-5">
      <p>不是为了写代码而写代码，而是现有工具不够贴合自己的工作方式。</p>
    </div>
  </div>
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">USER MATERIAL</span>
    <p class="text-center">TODO: audiometer 早期版本截图</p>
  </div>
</div>

---
layout: statement
---

::backdrop::

VIBE

::title::

### 想法第一次能落地，
### 但也第一次进入“让它再改改”的循环。

::subtitle::

缺少结构、标准和验证时，vibe coding 很容易变成反复试错。

---
layout: header-body
---

::backdrop::

SKILLS

::eyebrow::

Process

::title::

### 从聊天，到理解 agents 与 skills

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="min-h-0 min-w-0">
    <h4>早期使用</h4>
    <p>我描述功能，agent 写代码；我发现不对，再让它继续改。</p>
  </div>
  <div class="active-panel p-5">
    <h4>后来意识到</h4>
    <ul>
      <li>brainstorming / grill-me：先把问题问清楚</li>
      <li>TDD / verification：把结果变成可验证目标</li>
      <li>code review：让修改接受另一轮检查</li>
      <li>docs / slides authoring：把内容生产也流程化</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

SHIFT

::eyebrow::

Before / After

::title::

### 协作范式的 before / after

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="callout">
    <span class="callout-title">以前</span>
    <p>我描述功能，AI 写代码。</p>
    <p class="text-[0.9rem] text-[var(--color-text-muted)]">结果看起来能跑，但边界、标准和验收经常不清楚。</p>
  </div>
  <div class="active-panel p-5">
    <span class="callout-title">现在</span>
    <p>我定义目标、边界、标准和验收，AI 在流程中执行、检查和迭代。</p>
    <p class="text-[0.9rem] text-[var(--color-text-muted)]">PLVS 后续功能开发也从 vibe coding 逐步变成更结构化的协作。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

SSOT

::eyebrow::

Development Awareness

::title::

### 为什么要有这些文档？

::body::

<div class="grid h-full min-h-0 grid-cols-4 gap-3">
  <div v-click class="active-panel p-4">
    <span class="step-index">01</span>
    <h4>设计系统</h4>
    <p>定义界面气质和组件语言。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">02</span>
    <h4>Design Token</h4>
    <p>让颜色、间距、字号有稳定来源。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">03</span>
    <h4>组件规范</h4>
    <p>让复用和一致性不靠临场发挥。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">04</span>
    <h4>验收标准</h4>
    <p>让 agent 的输出可以被检查。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

PLVS

::eyebrow::

Showcase

::title::

### PLVS：这个工具现在变成了什么？

::body::

<div class="grid h-full min-h-0 grid-cols-[1.15fr_0.85fr] gap-5">
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">USER MATERIAL</span>
    <p class="text-center">TODO: PLVS 工具实际截图</p>
    <p class="text-center text-[0.9rem] text-[var(--color-text-muted)]">展示它如何从个人听声需求变成可发布的开源产品。</p>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>Real-time Audio Metering</h4>
    <ul>
      <li>Peak、Loudness、Vectorscope</li>
      <li>Spectrum、Spectrogram</li>
      <li>系统音频捕获、灵活布局、历史快照</li>
      <li><a href="https://plvs.soundoer.com/" target="_blank" rel="noreferrer">PLVS 官网</a> / <a href="https://github.com/SounDoer/PLVS" target="_blank" rel="noreferrer">GitHub 仓库</a></li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

VALUE

::eyebrow::

Human Value

::title::

### 人在 AI 协作中的价值

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="active-panel p-5">
    <span class="callout-title">工程决策</span>
    <ul>
      <li>目标</li>
      <li>边界</li>
      <li>架构</li>
      <li>验收</li>
    </ul>
  </div>
  <div class="callout">
    <span class="callout-title">审美决策</span>
    <ul>
      <li>风格</li>
      <li>取舍</li>
      <li>体验</li>
      <li>声音 / 界面品味</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

META

::eyebrow::

Meta Case

::title::

### 这套 slides 也是 AI 协作完成的

::body::

<div class="grid h-full min-h-0 grid-cols-[1.15fr_0.85fr] gap-5">
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-5">
    <span class="badge">USER MATERIAL</span>
    <p class="text-center">TODO: Slidev 全览图</p>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>不只代码可以协作</h4>
    <p>课程准备、内容结构、逐页计划和 Slidev 实现也可以被流程化。</p>
    <div v-click class="quote-accent mt-5">
      <p>前面讲的方法，正在被这套 deck 自己使用。</p>
    </div>
  </div>
</div>

---
layout: header-body
---

::backdrop::

A/B/C

::eyebrow::

Skill

::title::

### `gad-slides-authoring`：把协作拆成 A / B / C

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="active-panel p-4">
    <span class="step-index">A</span>
    <h4>先决定讲什么</h4>
    <p>大纲阶段确定主线、章节结构、案例方向和开放问题。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">B</span>
    <h4>再决定每页怎么讲</h4>
    <p>逐页确认 purpose、visible title、key text、media 和 layout intent。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">C</span>
    <h4>最后做成 Slidev</h4>
    <p>根据 confirmed page plan 写页面，并用构建验证结果。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

DOCS

::eyebrow::

SSOT

::title::

### `README.md` 与 `EXAMPLE.md`：规则说明书 + 可复制样张

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="active-panel p-5">
    <span class="callout-title">`slides/README.md`</span>
    <p>规则说明书，回答“这个 deck 系统怎么运转”。</p>
    <ul>
      <li>目录与构建</li>
      <li>设计 token</li>
      <li>layout 体系</li>
      <li>资源约定</li>
    </ul>
  </div>
  <div class="callout">
    <span class="callout-title">`slides/pages/EXAMPLE.md`</span>
    <p>可复制样张，回答“具体页面应该怎么写”。</p>
    <ul>
      <li>cover / section</li>
      <li>header-body</li>
      <li>fullscreen-media</li>
      <li>statement</li>
    </ul>
  </div>
</div>

---
layout: statement
---

::backdrop::

2027

::title::

### 这套 slides 明年可能就要重写。

::subtitle::

工具会变，案例会变；真正值得带走的是判断标准、协作方法和验证意识。
