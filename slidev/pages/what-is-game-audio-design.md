---
layout: cover
---

::backdrop::

GAD

::eyebrow::

What is Game Audio Design?

::title::

# 游戏音频设计是什么？

::info::

Xichen

---
layout: section
---

::backdrop::

01

::eyebrow::

Framework

::title::

## 游戏·音频·设计

---
layout: header-body
---

::backdrop::

GAME

::eyebrow::

Game

::title::

### 游戏

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4 text-left">

<div v-click class="min-h-0 min-w-0">

<span class="step-index">PLATFORM</span>
#### 平台

- Console
- PC
- Mobile
- ……

</div>

<div v-click class="min-h-0 border-l hairline pl-4">

<span class="step-index">GENRE</span>
#### 类型

- First-Person Shooter
- Third-Person Shooter
- Action / Adventure / Role-Playing
- Platformer / Metroidvania
- Multiplayer Online Battle Arena
- Strategy
- Simulation
- Racing
- ……

</div>

<div v-click class="active-panel min-h-0 p-4">

<span class="step-index">MEDIA</span>
#### 游戏 vs. 电影

- Visual Media
- 交互媒体
- 线性媒体

</div>

</div>

<!--
-->

---
layout: header-body
---

::backdrop::

AUDIO

::eyebrow::

Audio

::title::

### 音频

::body::

<div class="grid h-full min-h-0 grid-cols-[0.9fr_1.1fr] gap-5 text-left">

<div v-click class="active-panel min-h-0 p-4">

<span class="step-index">CONTENT</span>
#### 声音内容

- 音效 Sound Effect
- 音乐 Music
- 语音 Voice

</div>

<div v-click class="callout min-h-0">

<span class="callout-title">Implementation</span>
#### 实现方式

- 基于对象的资源制作形式
- 音频空间化的听者与声源
- 基于游戏开发模式的整合方式
- 地图关卡中的物件对象
- 功能逻辑中的事件节点
- 动画序列与状态机
- 互动音乐
- 语音系统
- ……

</div>

</div>

<!--
-->

---
layout: header-body
---

::backdrop::

SFX

::eyebrow::

Audio

::title::

### 音频

::body::

<div class="grid h-full min-h-0 grid-cols-[0.75fr_1.25fr] gap-5 text-left">

<div class="quote-accent self-center">
  <h4>声音内容 · 音效 Sound Effect</h4>
</div>

<div class="callout self-center">
<span class="callout-title">Sound Effect</span>

<v-clicks>

- 环境声 Ambience
- 拟音 Foley
- 技能 Skill
- 交互音效 UI
- ……

</v-clicks>

</div>

</div>

<!--
-->

---
layout: header-body
---

::backdrop::

SOURCE

::eyebrow::

Audio

::title::

### 音频

::body::

<div class="flex h-full min-h-0 items-center justify-center">

<div class="quote-accent max-w-[42rem]">
  <p class="text-[1.7rem] font-semibold leading-snug text-[var(--color-text-primary)]">声音素材的主要来源：音效库，合成器，录音</p>
</div>

</div>

<!--
-->

---
layout: header-body
background: what-is-game-audio-design/bg-image-for-audio.png
---

::backdrop::

RECORDING

::eyebrow::

Audio

::title::

### 音频

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">

<div class="figure-frame min-h-0"></div>

<div class="caption-plate self-end">
  <span class="badge">BTS</span>
  <p class="mt-3 text-[1.2rem] font-semibold leading-snug text-[var(--color-text-primary)]">Field Recording & Foley Recording BTS</p>
</div>

</div>

<!--
配图：Field recording / Foley 幕后或现场素材（放入 slidev/public/what-is-game-audio-design/ 后可用 `layout: header-body` 的 `::body::` 内 `flex` + 居中 + `img` 约束，或本地 `layout: fullscreen-media`）
-->

---
layout: header-body
---

::backdrop::

SPACE

::eyebrow::

Audio

::title::

### 音频

::body::

<div class="grid h-full min-h-0 grid-cols-[0.8fr_1.2fr] gap-5 text-left">

<div class="active-panel p-4">
  <span class="step-index">INTERACTIVE MEDIA</span>
  <p>交互媒体的特点决定了游戏音频复杂的实现方式</p>

  <div class="mt-4 grid grid-cols-2 gap-2 text-sm text-[var(--color-text-muted)]">

  <div>Emitter (X, Y, Z)</div>
  <div>Listener (X, Y, Z)</div>

  </div>
</div>

<div class="min-h-0 min-w-0 border-l hairline pl-4">

<v-clicks>

- 基于对象的资源制作形式
- 音频空间化的听者与声源
- 基于游戏开发模式的整合方式
- 地图关卡中的物件对象
- 功能逻辑中的事件节点
- 动画序列与状态机
- 互动音乐
- 语音系统
- ……

</v-clicks>

</div>

</div>

<!--
-->

---
layout: header-body
---

::backdrop::

MUSIC

::eyebrow::

Audio

::title::

### 音频

::body::

<div class="grid h-full min-h-0 grid-cols-[0.8fr_1.2fr] gap-5 text-left">

<div class="active-panel p-4">
  <span class="step-index">INTERACTIVE MEDIA</span>
  <p>交互媒体的特点决定了游戏音频复杂的实现方式</p>
</div>

<div class="callout self-start">
<span class="callout-title">Interactive Music</span>
#### 互动音乐

<v-clicks>

- 动作游戏中的敌方单位技能施放
- 时机与音乐节奏匹配
- Wwise Tour 2016 · CD Projekt Red · *The Witcher* — Music Action Sync

</v-clicks>

</div>

</div>

<!--
-->

---
layout: header-body
---

::backdrop::

VOICE

::eyebrow::

Audio

::title::

### 音频

::body::

<div class="grid h-full min-h-0 grid-cols-[0.8fr_1.2fr] gap-5 text-left">

<div class="active-panel p-4">
  <span class="step-index">INTERACTIVE MEDIA</span>
  <p>交互媒体的特点决定了游戏音频复杂的实现方式</p>
</div>

<div class="callout self-start">
<span class="callout-title">Voice System</span>
#### 语音系统

<v-clicks>

- 2020 GDC Virtual Talk · NPC Voice Design in *The Division 2*
- 射击游戏中 NPC 语音的触发逻辑

</v-clicks>

</div>

</div>

<!--
-->

---
layout: header-body
background: what-is-game-audio-design/bg-image-for-design.png
---

::backdrop::

DESIGN

::eyebrow::

Design

::title::

### 设计

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5 text-left">

<div v-click class="active-panel min-h-0 p-4">

<span class="step-index">AESTHETIC</span>
#### 美学性

与艺术风格和内容表现相匹配

- 写实主义 Realism
- 未来主义 Futurism
- 幻想 Fantasy
- 赛博朋克 Cyberpunk
- 像素风 Pixel Art
- 低多边形 Low Poly
- 赛璐珞 Cel-Shading
- ……

</div>

<div v-click class="callout min-h-0">

<span class="callout-title">Functional</span>
#### 功能性

与游戏类型和玩法机制相结合

- Action：即时反馈与打击感
- RPG / Adventure：角色塑造与叙事推进
- Sports / Racing：真实的物理反馈
- PvP：声音信息传递
- Horror / Survival：心理暗示
- ……

</div>

</div>

<!--
-->

---
layout: header-body
---

::backdrop::

STYLE

::eyebrow::

Design

::title::

### 设计

::body::

<div class="grid h-full min-h-0 grid-cols-[0.8fr_1.2fr] gap-5 text-left">

<div class="quote-accent self-center">
  <h4>美学性：声音设计风格的体现</h4>
</div>

<div class="grid min-h-0 grid-cols-3 gap-3">

<v-clicks>

<div class="figure-frame flex min-h-0 flex-col justify-end">
  <span class="badge">Case</span>
  <p class="mt-3"><em>Animal Well</em> · 2024</p>
</div>

<div class="figure-frame flex min-h-0 flex-col justify-end">
  <span class="badge">Case</span>
  <p class="mt-3"><em>Sekiro: Shadows Die Twice</em> · 2019</p>
</div>

<div class="figure-frame flex min-h-0 flex-col justify-end">
  <span class="badge">Case</span>
  <p class="mt-3"><em>Arknights: Endfield</em></p>
</div>

</v-clicks>

</div>

</div>

<!--
配图：三作案例海报或截图；若需横排分栏可在 `layout: header-body` 的 `::body::` 内用 `grid grid-cols-3` 等接入素材路径
-->

---
layout: statement
---

::backdrop::

FUNCTION

::title::

### 功能性：“玩家想听到什么”

<!--
-->

---
layout: header-body
background: what-is-game-audio-design/game-poster.png
---

::backdrop::

DOOM

::eyebrow::

Design

::title::

### 设计 · 功能性：“玩家想听到什么”

::body::

<div class="flex h-full min-h-0 items-center justify-center">

<div class="caption-plate">
  <span class="badge">Case</span>
  <p class="mt-3 text-[2rem] font-semibold leading-tight text-[var(--color-text-primary)]">DOOM · 2016</p>
</div>

</div>

<!--
配图：全屏案例图可改为 layout: fullscreen-media，frontmatter 设 image: /你的路径（放在 slidev/public/what-is-game-audio-design/ 下时与 background 写法一致）
-->

---
layout: header-body
---

::backdrop::

TARKOV

::eyebrow::

Design

::title::

### 设计 · 功能性：“玩家想听到什么”

::body::

<div class="flex h-full min-h-0 items-center justify-center">

<div class="quote-accent">
  <p class="text-[2rem] font-semibold leading-tight text-[var(--color-text-primary)]">Escape From Tarkov · 2017</p>
</div>

</div>

<!--
配图：全屏案例图可改为 layout: fullscreen-media，frontmatter 设 image: /你的路径（放在 slidev/public/what-is-game-audio-design/ 下时与 background 写法一致）
-->

---
layout: statement
---

::backdrop::

?

::title::

### 游戏音频设计是什么？

::subtitle::

**What is game audio design？**