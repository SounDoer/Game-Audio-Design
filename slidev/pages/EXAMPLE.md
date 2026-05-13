---
layout: cover
slug: example
deckListTitle: Slidev Layout Example
slidesOrder: 9998
---

::backdrop::

EXAMPLE

::eyebrow::

Slidev Layout System

::title::

# Slidev 布局样张

::info::

Game Audio Design · Visual Test Deck

---
layout: section
---

::backdrop::

01

::eyebrow::

Layout

::title::

## 基础页面结构

::subtitle::

Cover / Section / Header-Body

---
layout: header-body
---

::backdrop::

TYPE

::eyebrow::

CONTEXT

::title::

### 标准内容页：眉标、标题与正文区

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <p>这一页展示主力 layout：上方标题区用于建立阅读定位，正文区承担论证、案例与媒体。</p>
    <ul>
      <li><span class="accent">眉标</span> 不是逐页标题翻译，而是页面视角。</li>
      <li>正文区可以自由组合单栏、双栏、图示、组件与局部强调。</li>
      <li>右下角页码由 layout 自动处理。</li>
    </ul>
  </div>
  <div class="callout">
    <span class="callout-title">Reading Order</span>
    <p>先读英文短标签，定位语境；再读中文主标题，进入具体论点。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

GRID

::eyebrow::

STRUCTURE

::title::

### Body 区：双栏、当前项与分隔线

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div class="active-panel min-h-0 p-4">
    <span class="step-index">STEP 01</span>
    <h4>判断需求</h4>
    <p>先确认声音要服务的玩法、叙事或反馈目标。</p>
  </div>
  <div class="min-h-0 border-l hairline pl-4">
    <span class="step-index">STEP 02</span>
    <h4>选择来源</h4>
    <p>现场录音、素材库、合成、外包或生成式工具。</p>
  </div>
  <div class="min-h-0 border-l hairline pl-4">
    <span class="step-index">STEP 03</span>
    <h4>整理入库</h4>
    <p>命名、版权、规格与可追溯性决定后续效率。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

NOTE

::eyebrow::

COMPONENTS

::title::

### 信息卡片与小标签

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="callout">
    <span class="callout-title">Principle</span>
    <p>当一句话承载的是判断标准，而不是普通项目符号，就适合从列表中抬出来。</p>
  </div>
  <div class="flex min-h-0 flex-col gap-3">
    <div>
      <span class="badge">Wwise</span>
      <span class="badge ml-2">RTPC</span>
      <span class="badge ml-2">Case</span>
    </div>
    <p>小标签用于标记工具、案例类型、媒体属性或示范状态。它只用细描边，不制造大面积色块。</p>
    <div class="quote-accent">
      <p>强调色的任务不是“变亮”，而是告诉观众哪里是当前结构的支点。</p>
    </div>
  </div>
</div>

---
layout: header-body
---

::backdrop::

24

::eyebrow::

METRICS

::title::

### 关键数字、步骤号与标签

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-5">
  <div>
    <div class="metric">01</div>
    <div class="metric-label">first decision</div>
    <p>章节编号、步骤序号或参数数量可以用轻字重数字建立节奏。</p>
  </div>
  <div>
    <div class="metric">3</div>
    <div class="metric-label">source types</div>
    <p>数字不是装饰，而是帮助学生把复杂问题拆成可记忆的阶段。</p>
  </div>
  <div>
    <div class="metric">A/B</div>
    <div class="metric-label">comparison</div>
    <p>对比页可以用短标签把视线引向当前讨论对象。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

IMG

::eyebrow::

MEDIA

::title::

### 图片、图注与媒体框

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="figure-frame min-h-0">
    <img src="/intro/Arknights_Endfield_Title.jpg" alt="Arknights Endfield title artwork" class="max-h-[300px] w-full object-contain" />
    <p class="caption"><span class="caption-label">Reference Image</span> 参考图适合放进 figure frame，避免图片像随手贴在画布上。</p>
  </div>
  <div class="min-h-0">
    <h4>何时使用 figure frame？</h4>
    <ul>
      <li>软件截图、频谱图、流程图、对比图。</li>
      <li>需要图注解释来源或观察点。</li>
      <li>图片本身边界不清，需要从背景里分离出来。</li>
    </ul>
  </div>
</div>

---
layout: image
image: intro/FarCry5_Title.jpg
backgroundSize: cover
---

<div class="absolute left-12 top-10">
  <span class="corner-label">Image Layout</span>
</div>

<div class="caption-plate absolute bottom-10 left-12 max-w-[34rem]">
  <p class="caption"><span class="caption-label">Observation</span> 全屏图页适合展示界面、场景或参考图；说明牌只解释观察点，不抢主图。</p>
</div>

---
layout: statement
---

::backdrop::

?

::title::

### 这套视觉系统的重点不是“更多装饰”，而是让结构被看见。

::subtitle::

The point is not more decoration, but making structure visible.

---
layout: custom
---

::backdrop::

MAP

::default::

<div class="relative h-full w-full p-12">
  <span class="corner-label absolute left-12 top-10">Custom Canvas</span>
  <div class="grid h-full grid-cols-[0.9fr_1.1fr] gap-6 pt-14">
    <div class="callout self-center">
      <span class="callout-title">Use Case</span>
      <p>custom 适合整页自定义构图：关系图、流程图、视觉地图、全屏 UI 注释。</p>
    </div>
    <div class="relative active-panel min-h-0 p-6">
      <span class="hotspot-label absolute right-6 top-6">Hotspot</span>
      <h4>画布内仍然使用同一套 token</h4>
      <p>背景、边框、标签、说明牌和当前项都保持一致，不另开一套视觉语言。</p>
      <div class="mt-6 grid grid-cols-2 gap-3">
        <div class="border hairline p-3">Source</div>
        <div class="border hairline p-3">Edit</div>
        <div class="border hairline p-3">Name</div>
        <div class="border hairline p-3">Archive</div>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<div class="h-full w-full p-14">
  <span class="badge">Default Layout</span>
  <h3 class="mt-4">主题默认 layout</h3>
  <p>本仓库没有覆盖 `default` 时，会使用 Slidev 主题默认结构。需要稳定视觉时，优先使用本地 layout；需要临时占位或实验时，可以使用 default。</p>
</div>

---
layout: end
---

::backdrop::

FIN

::default::

Thanks & Questions?

xichen@soundoer.com
