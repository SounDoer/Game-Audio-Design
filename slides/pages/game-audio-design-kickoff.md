---
layout: cover
description: 梳理从接手新项目到建立工作框架的音频启动方法论。
---

::backdrop::

GAD

::eyebrow::

Game Audio Design Kickoff

::title::

# 如何开启一个项目的
# 音频设计工作？

::subtitle::

沟通 · 调研 · 决策 · 验证 · 规范

::info::

xichen @ gad.soundoer.com

---
layout: header-body
---

::backdrop::

ROADMAP

::eyebrow::

Overview

::title::

### 五个维度

::body::

<div class="grid h-full min-h-0 grid-cols-5 gap-3">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">01</span>
    <h4>沟通</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">介入时机与信息收集</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-3">
    <span class="step-index">02</span>
    <h4>调研</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">竞品分析与美学参考</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-3">
    <span class="step-index">03</span>
    <h4>决策</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">技术选型与资源规划</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-3">
    <span class="step-index">04</span>
    <h4>验证</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">技术验证与垂直切片</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-3">
    <span class="step-index">05</span>
    <h4>规范</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">命名规范与工作流</p>
  </div>
</div>

---
layout: section
---

::backdrop::

01

::eyebrow::

DISCOVERY

::title::

## 沟通

::subtitle::

介入时机与信息收集

---
layout: header-body
---

::backdrop::

TIMELINE

::eyebrow::

Context

::title::

### 开发阶段 Dev Stage

::body::

<div class="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center">

```mermaid {theme: 'base', scale: '0.45', themeVariables:{fontSize: '24px', primaryTextColor: '#fff',primaryColor: '#a6a6a6'}}
timeline
  section CONCEPT 原型
    Brainstorm : An iterative development spiral, to take risks, try and fail, test and refine vision.
    Approval : Formal evaluation and greenlighting of the concept to proceed to preproduction.
  section PREPRODUCTION 预研
    First Playable : The earliest functional prototype demonstrating core gameplay mechanics.
    Vertical Slice : A polished segment of the game showcasing key features, visual fidelity and mechanics.
  section PRODUCTION 开发
    Alpha Test : An internal test phase focusing on core functionality and major features.
    Closed Beta Test : A limited external test to gather feedback and identify issues before wider release.
    Open Beta Test : A public test phase to assess scalability, stability, and final gameplay refinements.
  section OPERATION 上线
    Release : The official launch of the game to the public.
    Long-term operation : Ongoing content updates, bug fixes, and community engagement to sustain the game.
```

</div>

---
layout: header-body
---

::backdrop::

TIMING

::eyebrow::

Discovery

::title::

### 什么时候加入最合适？

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div class="min-h-0 min-w-0">
    <div v-click>
      <span class="step-index">CONCEPT</span>
      <h4>原型期</h4>
      <p>设计空间最大</p>
    </div>
    <ul class="mt-3" v-click>
      <li>融入世界观定义</li>
      <li>在玩法设计中植入音频设计</li>
      <li>与项目组建立美学方向共识</li>
      <li>参与引擎与中间件技术预研</li>
    </ul>
  </div>
  <div class="min-h-0 border-l hairline pl-4">
    <div v-click>
      <span class="step-index">PREPRODUCTION</span>
      <h4>预研期</h4>
      <p>可做系统规划</p>
    </div>
    <ul class="mt-3" v-click>
      <li>规划音频系统与功能模块</li>
      <li>制定资源规格与性能预算</li>
      <li>与项目组对齐实现方案</li>
      <li>跟进切片，验证音频管线</li>
    </ul>
  </div>
  <div class="min-h-0 border-l hairline pl-4">
    <div v-click>
      <span class="step-index">PRODUCTION</span>
      <h4>开发期</h4>
      <p>资源补位为主，被动响应</p>
    </div>
    <ul class="mt-3" v-click>
      <li>按需生产音频资源</li>
      <li>维护资产配置与整合</li>
      <li>配合版本迭代或更新</li>
      <li>难以从零建立系统框架</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

INFO

::eyebrow::

Discovery

::title::

### 需要哪些项目信息？

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div class="min-h-0 min-w-0">
    <div v-click>
      <span class="step-index">Gameplay</span>
      <h4>游戏玩法</h4>
      <p>核心机制决定音频重心</p>
    </div>
    <ul class="mt-3" v-click>
      <li>游戏类型与核心循环</li>
      <li>依赖音频反馈的机制</li>
      <li>空间音频策略</li>
    </ul>
  </div>
  <div class="min-h-0 border-l hairline pl-4">
    <div v-click>
      <span class="step-index">Art</span>
      <h4>美术风格</h4>
      <p>视觉风格决定声音质感</p>
    </div>
    <ul class="mt-3" v-click>
      <li>写实 / 复古 / 风格化？</li>
      <li>色彩基调与情绪氛围</li>
      <li>标志性的设计元素</li>
    </ul>
  </div>
  <div class="min-h-0 border-l hairline pl-4">
    <div v-click>
      <span class="step-index">Story</span>
      <h4>世界观 / 叙事</h4>
      <p>叙事背景决定声音语汇</p>
    </div>
    <ul class="mt-3" v-click>
      <li>科幻 / 奇幻 / 历史？</li>
      <li>文化参考影响音色与器乐的选择</li>
      <li>标志性的声音母题</li>
    </ul>
  </div>
</div>

---
layout: section
---

::backdrop::

02

::eyebrow::

RESEARCH

::title::

## 调研

::subtitle::

竞品分析与美学参考

---
layout: header-body
---

::backdrop::

METHOD

::eyebrow::

Research

::title::

### 如何分析竞品？

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">METHOD 01</span>
    <h4>实际上手玩</h4>
    <p class="text-[var(--color-text-muted)]">最直接的完整体验</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">METHOD 02</span>
    <h4>看视频云体验</h4>
    <p class="text-[var(--color-text-muted)]">Gameplay walkthrough</p>
  </div>
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">METHOD 03</span>
    <h4>幕后内容与开发者访谈</h4>
    <p class="text-[var(--color-text-muted)]">GDC Talk / Dev Talk / BTS</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">METHOD 04</span>
    <h4>解包</h4>
    <p class="text-[var(--color-text-muted)]">直接查看资源与工程结构</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

WHAT

::eyebrow::

Research

::title::

### 分析竞品看什么？

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div v-click class="min-h-0 min-w-0">
    <h4 class="mb-3">设计与美学</h4>
    <ul>
      <li>与游戏核心玩法最相关的音频元素是如何设计的？</li>
      <li>其他声音模块是怎样配合核心音频元素的？</li>
      <li>声音设计风格？</li>
      <li>有没有标志性的声音？</li>
      <li>玩家对声音设计的褒贬评价？</li>
      <li>……</li>
    </ul>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-5">
    <h4 class="mb-3">技术与工程</h4>
    <ul>
      <li>引擎和中间件的技术选型？</li>
      <li>音频技术特性？</li>
      <li>空间音频的处理方式？</li>
      <li>多平台适配与差异？</li>
      <li>资源量？</li>
      <li>……</li>
    </ul>
  </div>
</div>

---
layout: section
---

::backdrop::

03

::eyebrow::

STRATEGY

::title::

## 决策

::subtitle::

技术选型与资源规划

---
layout: header-body
---

::backdrop::

TOOLS

::eyebrow::

Strategy

::title::

### 技术选型

::body::

<v-clicks>

- 游戏是什么类型？
- 目标平台是什么？
- 团队规模和能力？

</v-clicks>

<div v-click class="mt-6">
  <div class="callout">
    <p>技术选型不是追求最新最好，而是这三个因素的交集。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

RESOURCE

::eyebrow::

Strategy

::title::

### 资源评估

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">PEOPLE</span>
    <h4>人力</h4>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">BUDGET</span>
    <h4>预算</h4>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">TIME</span>
    <h4>时间</h4>
  </div>
</div>

---
layout: statement
---

::backdrop::

PITCH

::title::

### Audio Design Pitch
### Design Pillar

---
layout: section
---

::backdrop::

04

::eyebrow::

PROTOTYPE

::title::

## 验证

::subtitle::

技术验证与垂直切片

---
layout: header-body
---

::backdrop::

TEST

::eyebrow::

Prototype

::title::

### 技术验证

::body::

- 中间件与引擎管线
- 关键系统技术 Demo
- 性能压力测试
- 空间音频方案
- 第三方插件兼容性
- 内部工作流

---
layout: statement
---

::backdrop::

SLICE

::title::

### Vertical Slice

---
layout: section
---

::backdrop::

05

::eyebrow::

CONVENTIONS

::title::

## 规范

::subtitle::

命名规范与工作流

---
layout: header-body
---

::backdrop::

NAMING

::eyebrow::

Conventions

::title::

### 命名规范

::body::

<v-clicks>

- 命名是**人与人**、**人类与机器**和**机器与机器**之间在开发过程中最频繁的接口
- 命名规范本质上是一种设计行为——将复杂混沌的信息进行归类、压缩和描述
- 命名规范是为了：易读、可维护、便于协作
- 命名规范是**系统工程规范**中最基础和最核心的部分之一
- 项目工程也是某种形式的作品

</v-clicks>

<div v-click class="mt-4">
  <div class="callout">
    <span class="callout-title">通用原则</span>
    <p>命名风格：PascalCase / camelCase / snake_case / Upper_Snake_Case</p>
    <p>包含语义清晰且可扩展的字段，使用约定的缩写和前后缀</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

NAMING

::eyebrow::

Conventions

::title::

### 命名规范的三个层面

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">PROJECT</span>
    <h4>项目层面</h4>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">ASSET</span>
    <h4>资产层面</h4>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">STRUCTURE</span>
    <h4>工程结构层面</h4>
  </div>
</div>

---
layout: header-body
---

::backdrop::

PIPELINE

::eyebrow::

Pipeline

::title::

### DAW · Middleware · Engine

::body::

<div class="flex h-full min-h-0 items-center justify-center">
  <img src="/game-audio-design-kickoff/the-core-audio-data.svg" class="max-h-full max-w-full" />
</div>

---
layout: header-body
---

::backdrop::

WORKFLOW

::eyebrow::

Pipeline

::title::

### Design Workflow

::body::

<div class="flex h-full min-h-0 items-center justify-center">
  <img src="/game-audio-design-kickoff/design-workflow.svg" class="max-h-full max-w-full" />
</div>

---
layout: header-body
---

::backdrop::

SIGNAL

::eyebrow::

Conventions

::title::

### Signal Flow

::body::

- WAV 资产
- Conversion
- Actor-Mixer
- Audio Bus
- Audio Device
- 终端听音设备

<div v-click class="mt-6">
  <div class="quote-accent">
    <p>理解信号流程，是为了在出问题时能快速定位到具体环节，而不是靠猜测排查。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

LOUDNESS

::eyebrow::

Conventions

::title::

### 资产响度规范

::body::


---
layout: header-body
---

::backdrop::

REF

::eyebrow::

Conventions

::title::

### 混音切片参考

::body::


---
layout: end
---

::backdrop::

FIN

::default::

Thanks & Questions?

xichen@soundoer.com
