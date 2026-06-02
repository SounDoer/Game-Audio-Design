---
layout: cover
deckListTitle: 环境声设计
description: 环境声设计的完整链路：从资产制作到场景系统到设计理念，以实际开放世界自然场景项目为案例展开。
---

::backdrop::

AMBIENCE

::eyebrow::

Sound Design

::title::

# 环境声设计

::subtitle::

Ambience Sound Design

::info::

xichen @ gad.soundoer.com

---
layout: section
---

::backdrop::

PART 01

::eyebrow::

Foundations

::title::

## 篝火的声音

::subtitle::

Random、Loop & Blend

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
    <h4>三种基础形态</h4>
    <ul class="mb-0">
      <li v-click>篝火声音由三个基础形态组成：Loop / Blend / Random</li>
      <li v-click>我们先做 Loop（持续燃烧底噪），无缝循环</li>
      <li v-click>然后做 Random（噼啪爆裂声），随机触发</li>
      <li v-click>最后 Blend 纵向多层混合 + 横向状态过渡</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Campfire Screenshot</span>
  </div>
</div>


<!--
篝火是我们后面竹林场景里也会用到的资产，先拿小例子说清楚三个基础形态，后面直接复用思路
-->

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

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <div class="mb-4 flex gap-3">
      <span class="badge" style="background:var(--color-accent);color:var(--color-surface);">Loop</span>
      <span class="badge" style="opacity:0.35;">Random</span>
      <span class="badge" style="opacity:0.35;">Blend</span>
    </div>
    <h4>Loop 是篝火的「背景骨架」</h4>
    <ul class="mb-0">
      <li v-click>持续的柴火燃烧底噪，构成声音的底层</li>
      <li v-click>为什么用 Loop：不用一直录制，节省资源，性能可控</li>
      <li v-click>怎么无缝循环：首尾波形对齐，平滑衔接</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Loop Asset</span>
  </div>
</div>


<!--
后面竹林场景的风也是 Loop 思路，只不过更长、更复杂而已
-->

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

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <div class="mb-4 flex gap-3">
      <span class="badge" style="opacity:0.35;">Loop</span>
      <span class="badge" style="background:var(--color-accent);color:var(--color-surface);">Random</span>
      <span class="badge" style="opacity:0.35;">Blend</span>
    </div>
    <h4>Random 是篝火的「细节层」</h4>
    <ul class="mb-0">
      <li v-click>间歇的噼啪爆裂声，模拟真实燃烧的不规律感</li>
      <li v-click>为什么用 Random：打破循环感，给声音注入生命力</li>
      <li v-click>怎么实现：单次触发 + 随机间隔（Wwise Event 随机触发）</li>
      <li v-click>和 Loop 的关系：Loop 做底，Random 做点缀，互不干扰</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Random Asset</span>
  </div>
</div>


<!--
竹林场景里的鸟叫、虫鸣也是 Random 思路，随机位置、随机时间触发
-->

---
layout: header-body
---

::backdrop::

BLEND

::eyebrow::

Blend — Vertical

::title::

### 纵向层叠：多层的混合

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <div class="mb-4 flex gap-3">
      <span class="badge" style="opacity:0.35;">Loop</span>
      <span class="badge" style="opacity:0.35;">Random</span>
      <span class="badge" style="background:var(--color-accent);color:var(--color-surface);">Blend</span>
    </div>
    <h4>同时播放多个素材层，按比例叠加混合</h4>
    <ul class="mb-0">
      <li v-click>篝火例子：小火层 + 旺火层 + 残焰层，同时播放，通过音量比例控制整体强度</li>
      <li v-click>好处：同一个 RTPC 可以同时控制多层，不需要切换素材</li>
      <li v-click>应用：竹林场景的风也有多个强度层（微风 / 中风 / 强风），纵向叠加</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Blend Vertical Asset</span>
  </div>
</div>


<!--
纵向Blend是资产复用利器——录一套素材，做多个强度层，成本低效果好
-->

---
layout: header-body
---

::backdrop::

BLEND

::eyebrow::

Blend — Horizontal

::title::

### 横向过渡：状态的渐变

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>不同时段/状态之间的交叉渐变过渡</h4>
    <ul class="mb-0">
      <li v-click>篝火例子：从旺火 → 残焰 → 熄灭，通过 RTPC 或时间线驱动层与层之间的权重渐变</li>
      <li v-click>关键点：素材本身不需要重新制作，通过参数控制过渡，成本低</li>
      <li v-click>应用：竹林场景也有 ToD 横向过渡（清晨鸟鸣 → 夜间虫鸣）</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Blend Horizontal Asset</span>
  </div>
</div>


<!--
横向 Blend 是动态系统的雏形——Part 2 里会展开讲 ToD 和 Weather 系统，基础就在这里
-->

---
layout: statement
---

::backdrop::

RECAP

::title::

### 循环、随机和叠加

::subtitle::

Loop, Random & Blend


<!--
Part 1 小结：篝火教会我们的三个基础形态——Loop 做底、Random 做点缀、Blend 做变化。接下来我们把它们放到更大的场景里。
-->

---
layout: section
---

::backdrop::

PART 02

::eyebrow::

Case Study

::title::

## 竹林的声音

::subtitle::

从素材制作到资产整合


<!--
Part 2 以竹林自然场景项目展开完整的环境声设计链路；承接 Part 1 的局部资产制作，拉远到全场景视角
-->

---
layout: fullscreen-media
image: ambience-sound-design/bamboo-forest-placeholder.jpg
backgroundSize: cover
---

<div class="relative h-full w-full">
  <div class="caption-plate absolute bottom-8 left-6 max-w-[34rem]">
    <p class="caption">这就是我们接下来要分析的项目案例；先从整体画面建立感性认知。</p>
  </div>
</div>


<!--
这就是我们接下来要分析的项目案例；先从整体画面建立感性认知
-->

---
layout: header-body
---

::backdrop::

CONTEXT

::eyebrow::

Pre-Design

::title::

### 设计前需要什么？

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-5">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">01</span>
    <h4>世界观</h4>
    <p>场景在哪个世界？现在是什么时间？天气怎么样？</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">02</span>
    <h4>地图动线</h4>
    <p>玩家会走哪条路？哪些是必经之路？哪些是角落？</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">03</span>
    <h4>POI 清单</h4>
    <p>地图上有哪些兴趣点？瀑布、洞穴、露营地、竹林深处……</p>
  </div>
</div>


<!--
环境声不是凭空想象的，先搞清楚这些基础信息，后面的设计才不瞎。
-->

---
layout: header-body
---

::backdrop::

ELEMENTS

::eyebrow::

Breakdown

::title::

### 这个场景里有哪些声音？

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-5">
  <div v-click class="min-h-0 min-w-0">
    <div class="metric">植</div>
    <div class="metric-label">Vegetation</div>
    <p>竹叶沙沙、竹子晃动、草叶摩擦</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <div class="metric">生</div>
    <div class="metric-label">Wildlife</div>
    <p>鸟叫、虫鸣、风吹过竹林惊飞的鸟</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <div class="metric">他</div>
    <div class="metric-label">Other</div>
    <p>脚步声（玩家的）、远处的风声、河流的声音</p>
  </div>
</div>


<!--
先列出来，后面才好决定哪些是2D背景，哪些是3D定位。
-->

---
layout: header-body
---

::backdrop::

STRUCTURE

::eyebrow::

2D / 3D

::title::

### 如何组织这些声音？

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div v-click class="min-h-0 min-w-0">
    <div class="metric">2D</div>
    <div class="metric-label">Bed</div>
    <p>不参与空间定位，全屏都有。全场景的背景氛围层，为整个关卡提供一致的声音底色。</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <div class="metric">3D</div>
    <div class="metric-label">Emitter</div>
    <p>具体位置的声音，跟着镜头远近走。可定位的环境事件，提供空间感和方向感。</p>
  </div>
</div>

<div class="callout mt-4">
  <span class="callout-title">为什么要分？</span>
  <p>性能、空间感层次、设计可控性——把不需要空间化的声音从 3D 管线里解放出来。</p>
</div>


<!--
分层，先把底铺好，再往上加细节。
-->

---
layout: header-body
---

::backdrop::

COMPARE

::eyebrow::

2D vs 3D

::title::

### 2D Bed 与 3D Emitter

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="min-h-0 min-w-0 bg-[var(--color-surface)] p-5">
    <span class="badge">2D Bed</span>
    <h4 class="mt-3">背景氛围层</h4>
    <ul>
      <li v-click>竹叶沙沙</li>
      <li v-click>远处虫鸣</li>
      <li v-click>背景风</li>
      <li v-click>环境底噪</li>
    </ul>
  </div>
  <div class="min-h-0 min-w-0 bg-[var(--color-surface)] p-5">
    <span class="badge" style="background:var(--color-accent);color:var(--color-surface);">3D Emitter</span>
    <h4 class="mt-3">空间定位层</h4>
    <ul>
      <li v-click>近处瀑布</li>
      <li v-click>特定位置的鸟叫</li>
      <li v-click>随机走动的脚步声</li>
      <li v-click>玩家靠近的虫鸣惊飞</li>
    </ul>
  </div>
</div>


<!--
看看，具体哪些是背景，哪些是有位置的。
-->

---
layout: fullscreen-media
image: ambience-sound-design/reaper-session-placeholder.jpg
backgroundSize: cover
---

<div class="relative h-full w-full">
  <div class="caption-plate absolute bottom-8 left-6 max-w-[34rem]">
    <p class="caption">在 Reaper 里制作——展示我们要做的竹林环境声的 Reaper session 全貌。</p>
  </div>
</div>


<!--
展示我们要做的竹林环境声的 Reaper session 全貌
-->

---
layout: fullscreen-media
image: ambience-sound-design/reaper-video-placeholder.jpg
backgroundSize: cover
---

<div class="relative h-full w-full">
  <span class="badge absolute left-6 top-6" style="background:var(--color-accent);color:var(--color-surface);">Video</span>
  <div class="caption-plate absolute bottom-8 left-6 max-w-[34rem]">
    <p class="caption">Reaper 实操演示——现场一步步展示素材整理、编辑、导出等流程。</p>
  </div>
</div>


<!--
现场一步步展示素材整理、编辑、导出等流程
-->

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

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>固定位置的单点 3D 声源</h4>
    <ul class="mb-0">
      <li v-click>这个就钉在那不动，靠近了就响，走远了就小</li>
      <li v-click>例子：特定位置的瀑布、特定位置的鸟窝、特定位置的脚步声起点</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Point Emitter</span>
  </div>
</div>


<!--
这个就钉在那不动，靠近了就响，走远了就小。
-->

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

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>沿路径分布的连续声源</h4>
    <ul class="mb-0">
      <li v-click>沿着路走，一路都有，声音跟着位置渐变</li>
      <li v-click>例子：河流、小路、围墙旁边的虫鸣</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Line Emitter</span>
  </div>
</div>


<!--
沿着路走，一路都有，声音跟着位置渐变。
-->

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

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>区域内的体积声源</h4>
    <ul class="mb-0">
      <li v-click>这个范围，有边界，一进去就沉浸进去</li>
      <li v-click>进去就有，出来就没（渐变过渡）</li>
      <li v-click>例子：森林区、洞穴区、竹林区</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Volume Emitter</span>
  </div>
</div>


<!--
这个范围，有边界，一进去就沉浸进去。
-->

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

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>在区域内随机 scatter 的触发点</h4>
    <ul class="mb-0">
      <li v-click>让这片区域有生命力，不是死循环</li>
      <li v-click>例子：随机位置的虫鸣、随机位置的鸟叫、随机的风吹草叶声</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Scatter Emitter</span>
  </div>
</div>


<!--
让这片区域有生命力，不是死循环。
-->

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

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="min-h-0 min-w-0">
    <h4>在 2D 背景层上叠加 3D 位置信息</h4>
    <ul class="mb-0">
      <li v-click>2D 的底也能有空间感，不闷</li>
      <li v-click>风有方向、风有远近、不同方向的风不同声、不同高度的风不同声</li>
    </ul>
  </div>
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Spatialized Bed</span>
  </div>
</div>


<!--
2D的底也能有空间感，不闷。
-->

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

Principles

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
layout: statement
---

::backdrop::

FIN

::title::

### &nbsp;

::subtitle::


<!--
结尾页，用户后续填入
-->
