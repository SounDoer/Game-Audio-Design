---
layout: cover
slug: ambience-sound-design
deckListTitle: 环境声设计
description: 环境声设计的完整链路：从资产制作到场景系统到设计理念，以实际开放世界自然场景项目为案例展开。
slidesOrder: 8
---

::backdrop::

AMBIENCE

::eyebrow::

Ambience Sound Design

::title::

# 环境声设计

::subtitle::

从资产制作、场景系统到设计理念

::info::

xichen @ gad.soundoer.com

---
layout: section
---

::backdrop::

CAMPFIRE

::eyebrow::

01

::title::

## 篝火的声音

::subtitle::

基于对象的资产制作方式

---
layout: header-body
---

::backdrop::

OVERVIEW

::eyebrow::

Approach

::title::

### 如何制作篝火的声音

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <div v-click>
      <span class="step-index">LAYER</span>
      <h4>声音层次</h4>
      <ul class="mb-0">
        <li>Burn：相对稳定的持续燃烧底噪</li>
        <li>Sizzle：偶尔出现的火苗跳窜声</li>
        <li>Crack：偶尔出现的木材爆裂声</li>
      </ul>
    </div>
    <div v-click class="mt-4">
      <span class="step-index">STATE</span>
      <h4>物理状态</h4>
      <ul class="mb-0">
        <li>Ignition：点燃</li>
        <li>Burning：持续燃烧</li>
        <li>Extinguish：熄灭</li>
      </ul>
    </div>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <img class="max-h-full max-w-full object-contain" src="/ambience-sound-design/ue-campfire.png" alt="">
  </div>
</div>

---
layout: header-body
---

::backdrop::

LOOP

::eyebrow::

Loop

::title::

### 无缝循环的声音片段

::body::

<div class="flex h-full min-h-0 flex-col gap-5">
  <div class="shrink-0">
    <div class="mb-4 flex gap-3">
      <span class="badge" style="background:var(--color-accent);color:var(--color-surface);">Loop</span>
      <span class="badge" style="opacity:0.35;">Random</span>
      <span class="badge" style="opacity:0.35;">Blend</span>
    </div>
    <ul class="mb-0">
      <li v-click>为什么要做成无缝循环 ？</li>
      <li v-click>怎么制作无缝循环的资产？</li>
    </ul>
  </div>
  <div class="mt-auto">
    <CampfireSoundDiagram layer="loop" />
  </div>
</div>

---
layout: header-body
---

::backdrop::

RANDOM

::eyebrow::

Random

::title::

### 间歇触发的随机片段

::body::

<div class="flex h-full min-h-0 flex-col gap-5">
  <div class="shrink-0">
    <div class="mb-4 flex gap-3">
      <span class="badge" style="opacity:0.35;">Loop</span>
      <span class="badge" style="background:var(--color-accent);color:var(--color-surface);">Random</span>
      <span class="badge" style="opacity:0.35;">Blend</span>
    </div>
    <ul class="mb-0">
      <li v-click>间歇的 Sizzle 和 Crack 两种声音，模拟真实燃烧的不规律感</li>
      <li v-click>有限的随机资产 + 无限的随机控制</li>
    </ul>
  </div>
  <div class="mt-auto">
    <CampfireSoundDiagram layer="random" />
  </div>
</div>

---
layout: header-body
---

::backdrop::

BLEND

::eyebrow::

Blend

::title::

### 层次之间的声音叠加

::body::

<div class="flex h-full min-h-0 flex-col gap-5">
  <div class="shrink-0">
    <div class="mb-4 flex gap-3">
      <span class="badge" style="opacity:0.35;">Loop</span>
      <span class="badge" style="opacity:0.35;">Random</span>
      <span class="badge" style="background:var(--color-accent);color:var(--color-surface);">Blend</span>
    </div>
    <ul class="mb-0">
      <li v-click>各个层次声音属性的不同，可以实现篝火不同强度下的声音表现</li>
      <li v-click>声音属性可以由动态参数来驱动，与其他视听表现一致</li>
    </ul>
  </div>
  <div class="mt-auto">
    <CampfireSoundDiagram layer="blend" />
  </div>
</div>

---
layout: header-body
---

::backdrop::

BLEND

::eyebrow::

Blend — Horizontal

::title::

### 状态之间的声音过渡

::body::

<div class="flex h-full min-h-0 flex-col gap-5">
  <div class="shrink-0">
    <div class="mb-4 flex gap-3">
      <span class="badge" style="opacity:0.35;">Loop</span>
      <span class="badge" style="opacity:0.35;">Random</span>
      <span class="badge" style="background:var(--color-accent);color:var(--color-surface);">Blend</span>
    </div>
    <ul class="mb-0">
      <li v-click>除了用动态参数驱动声音变化之外，还可以用素材交叉渐变的方式来实现状态之间的过渡</li>
    </ul>
  </div>
  <div class="mt-auto">
    <CampfireSoundDiagram layer="blend-horizontal" />
  </div>
</div>

---
layout: statement
---

::backdrop::

RECAP

::title::

### 循环、随机和混合

::subtitle::

Loop, Random & Blend

---
layout: section
---

::backdrop::

DESIGN

::eyebrow::

02

::title::

## "看图说话"

::subtitle::

一个完整场景的环境声设计

---
layout: header-body
---

::backdrop::

DESIGN

::eyebrow::

Design Document

::title::

### 设计文档

::body::

<div class="grid h-full min-h-0 grid-cols-[1.5fr_0.5fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <img class="max-h-full max-w-full object-contain" src="/ambience-sound-design/ae-scene-01.jpg" alt="竹林场景">
  </div>
  <div class="min-h-0 min-w-0">
    <v-clicks>

- 世界观
- 美术 & 声音设计风格
- 故事情节
- 叙事动线
- POI (Point of Interest)
- 各个 POI 的具体情况
- ……

</v-clicks>
  </div>
</div>

---
layout: header-body
---

::backdrop::

ELEMENTS

::eyebrow::

Breakdown

::title::

### 场景中的声音元素

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="grid grid-cols-2 gap-4">
    <div v-click class="rounded-lg border border-[var(--color-border)] p-4">
      <h4>空气流动</h4>
      <ul class="mt-2 space-y-1">
        <li>空间底噪</li>
        <li>风</li>
      </ul>
    </div>
    <div v-click class="rounded-lg border border-[var(--color-border)] p-4">
      <h4>植被</h4>
      <ul class="mt-2 space-y-1">
        <li>竹子</li>
        <li>草</li>
      </ul>
    </div>
    <div v-click class="rounded-lg border border-[var(--color-border)] p-4">
      <h4>生物</h4>
      <ul class="mt-2 space-y-1">
        <li>鸟</li>
        <li>虫</li>
      </ul>
    </div>
    <div v-click class="rounded-lg border border-[var(--color-border)] p-4">
      <h4>其他</h4>
      <ul class="mt-2 space-y-1">
        <li>溪流湖泊</li>
        <li>远处不可名状的生物</li>
      </ul>
    </div>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <img class="max-h-full max-w-full object-contain" src="/ambience-sound-design/ae-scene-01.jpg" alt="竹林场景">
  </div>
</div>

---
layout: header-body
---

::eyebrow::

Classification

::title::

### 声音资产的类型

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="min-h-0 min-w-0 bg-[var(--color-surface)] p-5">
    <span class="badge">2D Bed</span>
    <h4 class="mt-3">背景氛围</h4>
    <p class="mt-2">通常是 Stereo 或 Quad 制式，声像较宽，表现场景整体的基础氛围。</p>
    <ul class="mt-4">
      <li v-click>风</li>
      <li v-click>植被</li>
      <li v-click>群鸟</li>
      <li v-click>群虫</li>
    </ul>
  </div>
  <div class="min-h-0 min-w-0 bg-[var(--color-surface)] p-5">
    <span class="badge">3D Emitter</span>
    <h4 class="mt-3">空间定位</h4>
    <p class="mt-2">通常是 Mono 或 Stereo，需要配合 Attenuation 和 Reverb 效果，表现场景中有方位的声音元素。</p>
    <ul class="mt-4">
      <li v-click>河流与瀑布</li>
      <li v-click>特定位置的风</li>
      <li v-click>特定位置的鸟叫</li>
      <li v-click>玩家靠近后触发的鸟飞虫鸣</li>
    </ul>
  </div>
</div>

---
layout: section
---

::backdrop::

DAW

::eyebrow::

03

::title::

## 制作声音资产

::subtitle::

DAW Reaper 演示

---
layout: section
---

::backdrop::

MIDDLEWARE

::eyebrow::

04

::title::

## 整合声音资产

::subtitle::

中间件和引擎中的实现

---
layout: header-body
---

::backdrop::

EMITTERS

::eyebrow::

Point Emitter

::title::

### 点声源

::body::

<div class="grid h-full min-h-0 grid-cols-[1.3fr_0.7fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <EmitterDiagram type="point" />
  </div>
  <div class="min-h-0 min-w-0">
  </div>
</div>

---
layout: header-body
---

::backdrop::

EMITTERS

::eyebrow::

Line Emitter

::title::

### 线声源

::body::

<div class="grid h-full min-h-0 grid-cols-[1.3fr_0.7fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <EmitterDiagram type="line" />
  </div>
  <div class="min-h-0 min-w-0">
  </div>
</div>

---
layout: header-body
---

::backdrop::

EMITTERS

::eyebrow::

Volume Emitter

::title::

### 体声源

::body::

<div class="grid h-full min-h-0 grid-cols-[1.3fr_0.7fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <EmitterDiagram type="volume" />
  </div>
  <div class="min-h-0 min-w-0">
  </div>
</div>

---
layout: header-body
---

::backdrop::

EMITTERS

::eyebrow::

Scatter Emitter

::title::

### 随机声源

::body::

<div class="grid h-full min-h-0 grid-cols-[1.3fr_0.7fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <EmitterDiagram type="scatter" />
  </div>
  <div class="min-h-0 min-w-0">
  </div>
</div>

---
layout: header-body
---

::backdrop::

EMITTERS

::eyebrow::

Spatialized Bed

::title::

### 3D 化的 2D Bed

::body::

<div class="grid h-full min-h-0 grid-cols-[1.3fr_0.7fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <EmitterDiagram type="spatialized-bed" />
  </div>
  <div class="min-h-0 min-w-0">
  </div>
</div>

---
layout: header-body
---

::backdrop::

DYNAMIC

::eyebrow::

Wind

::title::

### Wind System

::body::

<div class="flex h-full min-h-0 flex-col gap-4">
  <div class="figure-frame flex min-h-0 flex-1 items-center justify-center">
    <span class="badge">Wind System</span>
  </div>
  <div class="shrink-0">
    <p>竹林中风的声音动态——风如何影响声音表现。</p>
  </div>
</div>


<!--
竹林中的风如何影响声音表现
-->

---
layout: header-body
---

::backdrop::

DYNAMIC

::eyebrow::

Weather

::title::

### Weather System

::body::

<div class="flex h-full min-h-0 flex-col gap-4">
  <div class="figure-frame flex min-h-0 flex-1 items-center justify-center">
    <span class="badge">Weather System</span>
  </div>
  <div class="shrink-0">
    <p>晴天 / 阴天 / 雨天 / 风暴的声景差异。</p>
  </div>
</div>


<!--
不同天气下的竹林声景变化
-->

---
layout: header-body
---

::backdrop::

DYNAMIC

::eyebrow::

Time of Day

::title::

### Time of Day System

::body::

<div class="flex h-full min-h-0 flex-col gap-4">
  <div class="figure-frame flex min-h-0 flex-1 items-center justify-center">
    <span class="badge">ToD System</span>
  </div>
  <div class="shrink-0">
    <p>清晨鸟鸣 → 正午蝉噪 → 黄昏虫鸣 → 夜间静谧</p>
  </div>
</div>


<!--
竹林在不同时段的声景切换
-->

---
layout: header-body
---

::backdrop::

DYNAMIC

::eyebrow::

Player-Driven

::title::

### 玩家行为驱动的环境声互动

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="min-h-0 min-w-0">
    <span class="step-index">TRIGGER</span>
    <h4>靠近 / 远离</h4>
    <p>昆虫停止鸣叫或飞走、鸟群惊飞、鱼跳出水面、小动物逃窜声</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">INTERACTION</span>
    <h4>物体交互</h4>
    <p>推开门 / 破坏物体 → 环境声变化 + 生物惊飞</p>
  </div>
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">MOVEMENT</span>
    <h4>移动状态</h4>
    <p>跑步 vs 走路 → 惊飞程度不同；潜行 / 战斗 → 环境情绪变化</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">PRESENCE</span>
    <h4>停留时间</h4>
    <p>在同一地方待足够久 → 环境声渐入（昆虫声慢慢丰富）</p>
  </div>
</div>


<!--
用竹林案例具体演示：玩家走进一片草丛，虫子停声了；走远之后，虫子重新开始叫。
-->

---
layout: fullscreen-media
image: ambience-sound-design/sop-video-placeholder.jpg
backgroundSize: cover
---

<div class="relative h-full w-full">
  <span class="badge absolute left-6 top-6" style="background:var(--color-accent);color:var(--color-surface);">Video</span>
  <div class="caption-plate absolute bottom-8 left-6 max-w-[34rem]">
    <p class="caption">环境声设计 SOP——完整的环境声设计实战案例。</p>
  </div>
</div>


<!--
用户准备，展示完整的环境声设计 SOP 实战案例
-->

---
layout: section
---

::backdrop::

PART 03

::eyebrow::

03

::title::

## 环境声的其他考量

::subtitle::

环境声不只是背景


<!--
Part 3 从案例抽离出通用设计考量：真实性、叙事、混音等
-->

---
layout: statement
---

::backdrop::

AUTHENTIC

::title::

### Recreate, Don't Simulate

::subtitle::

游戏环境声不需要 1:1 还原现实，recreate 而非 simulate


<!--
用竹林案例对照——哪些声音是真实的但游戏里没有？哪些是游戏里有但现实中不常听到的？
-->

---
layout: statement
---

::backdrop::

NARRATIVE

::title::

### 环境声与叙事

::subtitle::

环境声承载情感温度，同一场景在不同时间、天气、叙事节点下声景不同


<!--
结合竹林案例——竹林在叙事主线和支线任务里，声景是否有差异？
-->

---
layout: statement
---

::backdrop::

MIXING

::title::

### 环境声不是孤岛

::subtitle::

环境声 vs 语音、脚步、枪声、UI——当其他声音响起时，懂得退让


<!--
举竹林场景的例子——战斗时环境声怎么处理？播片时呢？
-->

---
layout: statement
---

::backdrop::

FREQUENCY

::title::

### 频段管理与混音

::subtitle::

环境声容易在低频和中频堆积，策略：sidechain / ducking / 静态混音层级


<!--
拿竹林频谱举例——哪些频段给了环境声，哪些让给了语音和特效？
-->

---
layout: end
---

::backdrop::

FIN

::default::

Thanks & Questions?

xichen@soundoer.com
