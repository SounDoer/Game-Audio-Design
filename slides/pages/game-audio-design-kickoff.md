---
layout: cover
description: 梳理从接手新项目到建立工作框架的音频启动方法论。
---

::backdrop::

GAD

::eyebrow::

Game Audio Design Kickoff

::title::

# 如何开启一个项目的音频设计工作？

::subtitle::

沟通 → 调研 → 决策 → 验证 → 规范

::info::

Xichen

---
layout: header-body
---

::backdrop::

ROADMAP

::eyebrow::

Overview

::title::

### 五个阶段

::body::

<div class="grid h-full min-h-0 grid-cols-5 gap-3">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">01</span>
    <h4>沟通</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">介入时机与项目信息</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-3">
    <span class="step-index">02</span>
    <h4>调研</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">对标分析与参考清单</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-3">
    <span class="step-index">03</span>
    <h4>决策</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">选型与审美定位</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-3">
    <span class="step-index">04</span>
    <h4>验证</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">Demo 与垂直切片</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-3">
    <span class="step-index">05</span>
    <h4>规范</h4>
    <p class="text-[0.85rem] text-[var(--color-text-muted)]">命名 / 流程 / 信号</p>
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

## 沟通：前期需求梳理

---
layout: header-body
---

::backdrop::

TIMING

::eyebrow::

Discovery

::title::

### 介入时机：什么时候加入最合适？

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">CONCEPT</span>
    <h4>概念期</h4>
    <p>参与世界观定义</p>
    <p class="text-[var(--color-text-muted)]">最大设计空间</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">PREPRODUCTION</span>
    <h4>预研期</h4>
    <p>跟进 Vertical Slice</p>
    <p class="text-[var(--color-text-muted)]">可做系统规划，失去早期话语权</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">PRODUCTION</span>
    <h4>生产期</h4>
    <p>资源补位为主</p>
    <p class="text-[var(--color-text-muted)]">难以系统设计，被动响应</p>
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
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">PRIORITY 01</span>
    <h4>游戏玩法</h4>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">PRIORITY 02</span>
    <h4>美术风格</h4>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">PRIORITY 03</span>
    <h4>世界观 / 叙事</h4>
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

## 调研：参考与对标

---
layout: header-body
---

::backdrop::

METHOD

::eyebrow::

Research

::title::

### 如何拆竞品？（方法篇）

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">METHOD 01</span>
    <h4>实际上手玩</h4>
    <p class="text-[var(--color-text-muted)]">最直接的完整体验，信息量最丰富</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">METHOD 02</span>
    <h4>看视频云体验</h4>
    <p class="text-[var(--color-text-muted)]">Gameplay walkthrough / Dev talk</p>
  </div>
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">METHOD 03</span>
    <h4>幕后内容与开发者访谈</h4>
    <p class="text-[var(--color-text-muted)]">GDC Talk / 博客 / YouTube</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">METHOD 04</span>
    <h4>解包</h4>
    <p class="text-[var(--color-text-muted)]">直接查看资源与工程结构，最技术向</p>
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

### 拆竞品看什么？

::body::

<v-clicks>

- 与游戏类型和核心玩法最相关的音频元素是如何设计的？
- 其他声音模块怎样配合核心音频元素运转？
- 混音层面：响度策略、频段分配、声音密度如何控制？
- 技术选型：中间件 / 引擎？用到哪些音频特性？有无自研方案？
- 玩家对声音设计的褒贬评价？
- 空间音频的处理方式？
- 有没有标志性的声音让人记住这款游戏？

</v-clicks>

---
layout: header-body
---

::backdrop::

TECH

::eyebrow::

Research

::title::

### 竞品用了什么技术方案？

::body::

<v-clicks>

- 引擎：Unreal / Unity / 自研？
- 中间件：Wwise / FMOD / 自研方案？
- 音频技术特性：HRTF / 动态混音 / 程序化音频？
- 目标平台与平台差异？
- 加载策略与音画同步？

</v-clicks>

---
layout: header-body
---

::backdrop::

AESTHETIC

::eyebrow::

Research

::title::

### 竞品的声音美学是什么样的？

::body::

<v-clicks>

- 声音设计风格：写实 / 风格化 / 复古 / 未来主义？
- 声景疏密节奏：什么时候满、什么时候空？
- 质感倾向：干的 / 湿的 / 近的 / 远的 / 有机 / 合成？
- 声音的情绪基调？紧张 / 放松 / 压抑 / 史诗感？
- 有无标志性的音频美学特征？

</v-clicks>

---
layout: section
---

::backdrop::

03

::eyebrow::

STRATEGY

::title::

## 决策：工程选型与审美定位

---
layout: header-body
---

::backdrop::

TOOLS

::eyebrow::

Strategy

::title::

### 工具链和技术选型

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

### 资源评估：人力、财力与时间

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">PEOPLE</span>
    <h4>人力</h4>
    <p>几个 Sound Designer？</p>
    <p>要不要 Technical Audio Designer？</p>
    <p>外包？</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">BUDGET</span>
    <h4>财力</h4>
    <p>内存 / CPU / Streaming 预算</p>
    <p>音频资源总量预估</p>
    <p>工具授权与成本</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">TIME</span>
    <h4>时间</h4>
    <p>Concept 阶段交付？</p>
    <p>Preproduction 交付？</p>
    <p>Production 各节点交付？</p>
  </div>
</div>

---
layout: statement
---

::backdrop::

PITCH

::title::

### Audio Design Pitch

<!-- TODO(user): Audio Design Pitch 案例陈述 -->

---
layout: statement
---

::backdrop::

PILLAR

::title::

### Design Pillar

<!-- TODO(user): Design Pillar 案例陈述 -->

---
layout: section
---

::backdrop::

04

::eyebrow::

PROTOTYPE

::title::

## 验证：Demo 与垂直切片

---
layout: header-body
---

::backdrop::

TEST

::eyebrow::

Prototype

::title::

### 技术功能验证与 Demo

::body::

<v-clicks>

- 中间件与引擎管线能否跑通？
- 关键系统技术 Demo：脚步 / 枪声 / 动态音乐等
- 性能压力测试：同时播放多少声音不掉帧？
- 空间音频方案能否在目标平台正常工作？
- 第三方插件 / SDK 兼容性？
- 内部工作流与管线测试

</v-clicks>

---
layout: statement
---

::backdrop::

SLICE

::title::

### 垂直切片

<!-- TODO(user): 垂直切片示例陈述 -->

---
layout: section
---

::backdrop::

05

::eyebrow::

CONVENTIONS

::title::

## 规范：命名、工作流与信号流程

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
    <p>地图 / 角色 / 物件的中英文对照</p>
    <p>开发代码名称</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">ASSET</span>
    <h4>资产层面</h4>
    <p>命名字段体系</p>
    <p>例：枪声 / Foley / 语音</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">STRUCTURE</span>
    <h4>工程结构层面</h4>
    <p>目录结构与总线结构</p>
    <p>中间件嵌套与资产命名的关联</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

PIPELINE

::eyebrow::

Conventions

::title::

### DAW → 中间件 → 引擎

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">DAW</span>
    <h4>DAW 侧</h4>
    <p>源文件管理</p>
    <p>导出规范</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">MIDDLEWARE</span>
    <h4>中间件侧</h4>
    <p>导入与 Event 结构搭建</p>
    <p>衰减 / 音高等参数配置</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">ENGINE</span>
    <h4>引擎侧</h4>
    <p>集成方式</p>
    <p>运行时验证</p>
  </div>
</div>

<div v-click class="figure-frame mt-4 flex min-h-0 items-center justify-center">
  <span class="badge">MEDIA</span>
  <p class="ml-3 text-[var(--color-text-muted)]">TODO(user): 示例图</p>
</div>

---
layout: header-body
---

::backdrop::

SIGNAL

::eyebrow::

Conventions

::title::

### 信号流程：从 WAV 到听音设备

::body::

<v-clicks>

- WAV 资产
- Conversion（中间件导入转换）
- Actor-Mixer
- Audio Bus
- Audio Device
- 终端听音设备

</v-clicks>

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

<div class="flex h-full min-h-0 items-center justify-center">
  <div class="callout max-w-[36rem]">
    <span class="callout-title">TODO</span>
    <p class="mt-3 text-[var(--color-text-muted)]">用户将补充资产响度规范的具体内容。</p>
  </div>
</div>

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

<div class="flex h-full min-h-0 items-center justify-center">
  <div class="callout max-w-[36rem]">
    <span class="callout-title">TODO</span>
    <p class="mt-3 text-[var(--color-text-muted)]">用户将补充混音切片参考的具体内容。</p>
  </div>
</div>

---
layout: end
---

::backdrop::

FIN

::default::

Thanks & Questions?

xichen@soundoer.com
