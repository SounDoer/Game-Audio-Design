---
layout: cover
slug: audio-spatialization
deckListTitle: 音频空间化
description: 讲解游戏如何把真实声音传播抽象为空间化系统，并服务玩家的听声辨位体验。
---

::backdrop::

SPATIAL

::eyebrow::

Audio Spatialization

::title::

# 音频空间化

::subtitle::

在数字领域中还原真实世界的声音传播效果

::info::

xichen @ gad.soundoer.com

---
layout: section
---

::backdrop::

01

::eyebrow::

Sound Propagation

::title::

## 声音传播的解构与建模

---
layout: header-body
---

::eyebrow::

Listening in Game

::title::

### 游戏中的听声辨位

::body::

<div class="figure-frame flex h-full min-h-0 items-center justify-center overflow-hidden">
  <video class="h-full w-full object-contain" src="/audio-spatialization/R6%20Siege%20X%20Audio%20Overhaul.mp4" controls preload="metadata"></video>
</div>

<!-- https://www.youtube.com/watch?v=f7IQ-EcZPmw -->

---
layout: header-body
---

::backdrop::

REAL

::eyebrow::

Real Acoustics

::title::

### 现实中的声音传播

::body::

<div class="figure-frame flex h-full min-h-0 items-center justify-center overflow-hidden">
  <video class="h-full w-full object-contain" src="/audio-spatialization/SoundPropagation_Stairwell_FIN.mp4" controls preload="metadata"></video>
</div>

---
layout: header-body
---

::eyebrow::

Reproduction in DAW

::title::

### 数字音频制作复刻声音效果

::body::

<div class="figure-frame flex h-full min-h-0 items-center justify-center overflow-hidden">
  <video class="h-full w-full object-contain" src="/audio-spatialization/Duck_DAW_Effect_FIN.mp4" controls preload="metadata"></video>
</div>

---
layout: header-body
---

::eyebrow::

Sound Propagation

::title::

### 声音传播的解构

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-5">
  <div v-click class="callout flex min-h-0 flex-col justify-center gap-5">
    <span class="callout-title">定位</span>
    <div>
      <span class="step-index">Direction</span>
      <h4>方向</h4>
    </div>
    <div>
      <span class="step-index">Distance</span>
      <h4>距离</h4>
    </div>
  </div>
  <div v-click class="callout flex min-h-0 flex-col justify-center gap-5 p-5">
    <span class="callout-title">路径</span>
    <div>
      <span class="step-index">Diffraction</span>
      <h4>衍射</h4>
    </div>
    <div>
      <span class="step-index">Transmission</span>
      <h4>透射</h4>
    </div>
  </div>
  <div v-click class="callout flex min-h-0 flex-col justify-center gap-5">
    <span class="callout-title">空间</span>
    <div>
      <span class="step-index">Reverberation</span>
      <h4>混响</h4>
    </div>
    <div>
      <span class="step-index">Reflection</span>
      <h4>反射</h4>
    </div>
  </div>
</div>

---
layout: header-body
---

::eyebrow::

Listener & Emitter

::title::

### 听者与声源

::body::

<div class="grid h-full min-h-0 grid-cols-[1.35fr_0.65fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-4">
    <img class="h-full w-full object-contain" src="/audio-spatialization/object-based-positioning.svg" alt="Object based audio positioning diagram">
  </div>
  <div class="flex min-h-0 flex-col justify-center gap-3">
    <div class="callout">
      <span class="callout-title">Object-based positioning</span>
      <p>声源不先被塞进固定声道，而是作为对象保留在三维坐标里，再相对 Listener 计算方向、距离和角度。</p>
    </div>
    <ul>
      <li v-click>Listener：玩家或摄像机的 position / orientation。</li>
      <li v-click>Emitter：发声对象的 world position。</li>
      <li v-click>Spatializer：把相对向量转成可听的空间线索。</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

GEO

::eyebrow::

Scene Model

::title::

### Scene Geometry

::body::

<div class="grid h-full min-h-0 grid-cols-[1.2fr_0.8fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-5">
    <svg class="h-full w-full" viewBox="0 0 720 420" role="img" aria-label="Scene geometry with two acoustic zones and a door opening">
      <rect x="70" y="55" width="580" height="290" fill="none" stroke="rgba(240,240,240,0.72)" stroke-width="10" />
      <line x1="350" y1="55" x2="350" y2="345" stroke="rgba(240,240,240,0.72)" stroke-width="10" />
      <line x1="310" y1="345" x2="390" y2="345" stroke="var(--color-accent)" stroke-width="10" />
      <rect x="120" y="105" width="190" height="115" fill="rgba(212,90,42,0.08)" stroke="var(--color-border)" />
      <rect x="410" y="105" width="190" height="115" fill="rgba(212,90,42,0.08)" stroke="var(--color-border)" />
      <text x="215" y="170" fill="var(--color-text-primary)" text-anchor="middle" font-size="30" font-weight="700">Zone A</text>
      <text x="505" y="170" fill="var(--color-text-primary)" text-anchor="middle" font-size="30" font-weight="700">Zone B</text>
      <text x="255" y="385" fill="var(--color-text-muted)" font-size="20" font-family="monospace">material: concrete</text>
      <text x="440" y="385" fill="var(--color-text-muted)" font-size="20" font-family="monospace">material: wood</text>
      <text x="290" y="330" fill="var(--color-accent)" font-size="20" font-family="monospace">opening / door state</text>
    </svg>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>场景里哪些对象会改变声音？</h4>
    <ul>
      <li v-click>墙体、门窗、房间、区域和通路</li>
      <li v-click>材质、厚度、开关状态等声学属性</li>
      <li v-click>动态几何和玩法状态变化</li>
    </ul>
    <div v-click class="callout mt-4">
      <span class="callout-title">术语边界</span>
      <p>这里先用中性几何语言，不提前把 Wwise 的 Room / Portal 当作通用基础术语。</p>
    </div>
  </div>
</div>

---
layout: header-body
---

::backdrop::

PATH

::eyebrow::

Propagation

::title::

### Propagation Path

::body::

<div class="grid h-full min-h-0 grid-cols-[1.25fr_0.75fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-5">
    <svg class="h-full w-full" viewBox="0 0 720 420" role="img" aria-label="Direct, blocked, diffracted, and reflected propagation paths">
      <rect x="328" y="70" width="34" height="260" fill="rgba(240,240,240,0.72)" />
      <circle cx="145" cy="275" r="28" fill="var(--color-accent)" />
      <text x="145" y="286" fill="var(--color-text-primary)" text-anchor="middle" font-size="28" font-weight="900">L</text>
      <circle cx="590" cy="145" r="28" fill="var(--color-bg)" stroke="var(--color-text-primary)" stroke-width="3" />
      <text x="590" y="156" fill="var(--color-text-primary)" text-anchor="middle" font-size="28" font-weight="900">E</text>
      <line v-click x1="170" y1="260" x2="565" y2="155" stroke="rgba(240,240,240,0.75)" stroke-width="4" stroke-dasharray="8 8" />
      <line v-click x1="170" y1="260" x2="330" y2="215" stroke="var(--color-accent)" stroke-width="4" />
      <polyline v-click points="170,260 330,345 395,345 565,155" fill="none" stroke="#7aa2ff" stroke-width="4" stroke-linejoin="round" />
      <polyline v-click points="170,260 175,80 565,155" fill="none" stroke="#6bd38d" stroke-width="4" stroke-linejoin="round" />
      <text x="80" y="380" fill="var(--color-text-muted)" font-size="20" font-family="monospace">direct / blocked / diffracted / reflected paths</text>
    </svg>
  </div>
  <div class="flex min-h-0 flex-col justify-center gap-3">
    <div class="callout">
      <span class="callout-title">路径不是一条直线</span>
      <p>不同方案可能用 raycast、ray tracing、pathing 或 probe lookup 估计声音如何到达听者。</p>
    </div>
    <ul>
      <li v-click>direct：直达路径</li>
      <li v-click>blocked：被几何阻挡</li>
      <li v-click>diffraction：绕过边缘或开口</li>
      <li v-click>reflection：由表面反射形成间接路径</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

MAP

::eyebrow::

Parameter Mapping

::title::

### Parameter Mapping

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div class="min-h-0 min-w-0">
    <span class="step-index">INPUT</span>
    <h4>Propagation Data</h4>
    <p>distance, visibility, occlusion, path length, direction, reflection, diffraction, environment</p>
  </div>
  <div class="active-panel min-h-0 p-4">
    <span class="step-index">MAPPING</span>
    <h4>转译层</h4>
    <p>把几何 / 路径结果变成声音系统能消费的控制参数。</p>
  </div>
  <div class="min-h-0 min-w-0 border-l hairline pl-4">
    <span class="step-index">OUTPUT</span>
    <h4>Audio Parameters</h4>
    <p>volume, LPF / EQ, reverb send, wet / dry, virtual source position, spread</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

WWISE

::eyebrow::

Case Study

::title::

### Wwise Spatial Audio

::body::

<div class="grid h-full min-h-0 grid-cols-[1.2fr_0.8fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-5">
    <svg class="h-full w-full" viewBox="0 0 720 420" role="img" aria-label="Wwise spatial audio room and portal relationship">
      <rect x="75" y="80" width="245" height="245" fill="rgba(212,90,42,0.08)" stroke="var(--color-border)" stroke-width="2" />
      <rect x="400" y="80" width="245" height="245" fill="rgba(212,90,42,0.08)" stroke="var(--color-border)" stroke-width="2" />
      <rect v-click x="340" y="180" width="40" height="70" fill="var(--color-accent)" />
      <circle v-click cx="200" cy="250" r="28" fill="var(--color-accent)" />
      <text x="200" y="261" fill="var(--color-text-primary)" text-anchor="middle" font-size="28" font-weight="900">L</text>
      <circle v-click cx="535" cy="155" r="28" fill="var(--color-bg)" stroke="var(--color-text-primary)" stroke-width="3" />
      <text x="535" y="166" fill="var(--color-text-primary)" text-anchor="middle" font-size="28" font-weight="900">E</text>
      <text x="160" y="205" fill="var(--color-text-primary)" text-anchor="middle" font-size="28" font-weight="700">Room A</text>
      <text x="485" y="205" fill="var(--color-text-primary)" text-anchor="middle" font-size="28" font-weight="700">Room B</text>
      <polyline v-click points="200,250 360,215 535,155" fill="none" stroke="#7aa2ff" stroke-width="4" />
      <line v-click x1="200" y1="250" x2="535" y2="155" stroke="var(--color-accent)" stroke-width="4" />
      <polyline v-click points="535,155 525,90 200,250" fill="none" stroke="#6bd38d" stroke-width="4" />
      <ellipse v-click cx="195" cy="205" rx="85" ry="130" fill="rgba(212,90,42,0.12)" stroke="rgba(212,90,42,0.6)" />
    </svg>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>不是“一个 raycast”</h4>
    <ul>
      <li v-click>Listener & Emitter 建立基础关系</li>
      <li v-click>Room & Portal 组织声学区域和连接</li>
      <li v-click>Diffraction / Transmission 处理非直达路径</li>
      <li v-click>Reverb / Reflect 提供环境和早期反射线索</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

DEMO

::eyebrow::

Demo

::title::

### Wwise Spatial Audio Demo

::body::

<div class="figure-frame flex h-full min-h-0 flex-col items-center justify-center gap-3 p-6 text-center">
  <span class="badge">Placeholder Video</span>
  <h4>User will prepare Wwise Spatial Audio demo video later</h4>
  <p>视频用于承接上一页的 Listener / Emitter、Room / Portal、Diffraction、Transmission、Reverb 和 Reflect 概念。</p>
</div>

---
layout: header-body
---

::backdrop::

ENGINE

::eyebrow::

Anonymous Case

::title::

### 自研射线检测方案

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div class="min-h-0 min-w-0">
    <span class="step-index">ENGINE SCENE</span>
    <h4>Listener / Emitter Ray Queries</h4>
    <p>从引擎侧检测距离、遮挡、路径、材质和环境。</p>
  </div>
  <div class="active-panel min-h-0 p-4">
    <span class="step-index">PARAMETERS</span>
    <h4>Detected Data</h4>
    <p><code>occlusion=0.72</code><br><code>distance=18m</code><br><code>material=concrete</code><br><code>reverbSend=0.45</code></p>
  </div>
  <div class="min-h-0 min-w-0 border-l hairline pl-4">
    <span class="step-index">WWISE CONTROL</span>
    <h4>RTPC / States / Sends / Effects</h4>
    <p>驱动 Volume、LPF / EQ、Reverb Send、Wet / Dry 和效果强度。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

SNOW

::eyebrow::

Case Study

::title::

### Snowdrop GPU Raytracing for Audio

::body::

<div class="grid h-full min-h-0 grid-cols-[1.2fr_0.8fr] gap-5">
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-6 text-center">
    <span class="badge">Pending Screenshots</span>
    <h4>1-3 screenshots from GPU Raytracing for Audio in Snowdrop GDC2025.pdf</h4>
    <p>后续替换为用户从 GDC PDF 中选定的截图。</p>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>规模化压力下的 propagation</h4>
    <ul>
      <li v-click>开放大世界和复杂几何让手工规则更难维护。</li>
      <li v-click>公开材料提到 sound propagation、raytracing query system 和 GPU raytracing。</li>
      <li v-click>Massive 文章明确这是 hybrid system，仍会结合 hand-placed data。</li>
    </ul>
    <div v-click class="callout mt-4">
      <span class="callout-title">边界</span>
      <p>不写具体性能数据或参数映射细节，除非后续截图或公开资料能明确支撑。</p>
    </div>
  </div>
</div>

---
layout: header-body
---

::backdrop::

TRITON

::eyebrow::

Alternative Route

::title::

### Project Acoustics / Triton

::body::

<div class="grid h-full min-h-0 grid-cols-[1.15fr_0.85fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <img class="max-h-full max-w-full object-contain" src="/audio-spatialization/triton.gif" alt="Project Triton acoustic simulation visualization">
  </div>
  <div class="flex min-h-0 flex-col justify-center gap-3">
    <div class="callout">
      <span class="callout-title">另一条路线</span>
      <p>更像静态光照烘焙：离线做波动声学模拟，再把结果压缩成运行时可查询的声学参数。</p>
    </div>
    <div class="grid gap-2 text-[0.95rem] text-[var(--color-text-body)]">
      <div><span class="step-index">01</span> Scene + Materials</div>
      <div><span class="step-index">02</span> Bake</div>
      <div><span class="step-index">03</span> Acoustic Data / Probes</div>
      <div><span class="step-index">04</span> Runtime Parameter Lookup</div>
      <div><span class="step-index">05</span> Audio Controls</div>
    </div>
  </div>
</div>

---
layout: header-body
---

::backdrop::

DEMO

::eyebrow::

Demo

::title::

### Project Acoustics Demo

::body::

<div class="figure-frame flex h-full min-h-0 flex-col items-center justify-center gap-3 p-6 text-center">
  <span class="badge">Placeholder Video</span>
  <h4>User will prepare Project Acoustics / Triton video later</h4>
  <p>可以偏工具链流程，也可以偏听感对比；caption 再按最终素材调整。</p>
</div>

---
layout: section
---

::backdrop::

02

::eyebrow::

Binaural Rendering

::title::

## 从空间计算到双耳听感

::subtitle::

前面讲传播和参数；接下来讲耳机里的方向感如何被渲染出来。

---
layout: header-body
---

::backdrop::

BASE

::eyebrow::

Baseline

::title::

### 不用 HRTF 时怎么做空间化？

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="grid min-h-0 grid-cols-2 gap-3">
    <div class="border-l hairline pl-4">
      <span class="step-index">01</span>
      <h4>Game Source</h4>
    </div>
    <div class="border-l hairline pl-4">
      <span class="step-index">02</span>
      <h4>Panning</h4>
    </div>
    <div class="border-l hairline pl-4">
      <span class="step-index">03</span>
      <h4>Distance Attenuation</h4>
    </div>
    <div class="border-l hairline pl-4">
      <span class="step-index">04</span>
      <h4>Spread</h4>
    </div>
    <div class="border-l hairline pl-4">
      <span class="step-index">05</span>
      <h4>Reverb Send</h4>
    </div>
    <div class="border-l hairline pl-4">
      <span class="step-index">06</span>
      <h4>Speaker / Headphone Output</h4>
    </div>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>它仍然很有用</h4>
    <ul>
      <li v-click>能提供左右声像、距离衰减、声像宽度和环境发送。</li>
      <li v-click>在多声道 / 环绕系统里也可以承担空间路由。</li>
      <li v-click>但在耳机双耳听感中，前后、上下和头外感通常不够稳定。</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

HRTF

::eyebrow::

Perception

::title::

### HRTF

::body::

<div class="grid h-full min-h-0 grid-cols-[1.15fr_0.85fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-5">
    <svg class="h-full w-full" viewBox="0 0 720 420" role="img" aria-label="HRTF binaural cues from a sound source to both ears">
      <path d="M285 110 C230 125 205 185 215 250 C225 330 275 365 335 360 C395 355 435 310 440 240 C445 170 400 115 335 105 C320 102 302 103 285 110 Z" fill="rgba(255,255,255,0.035)" stroke="var(--color-text-primary)" stroke-width="3" />
      <ellipse cx="217" cy="235" rx="18" ry="38" fill="none" stroke="var(--color-accent)" stroke-width="3" />
      <ellipse cx="440" cy="235" rx="18" ry="38" fill="none" stroke="var(--color-accent)" stroke-width="3" />
      <circle cx="560" cy="95" r="30" fill="var(--color-bg)" stroke="var(--color-text-primary)" stroke-width="3" />
      <text x="560" y="106" fill="var(--color-text-primary)" text-anchor="middle" font-size="28" font-weight="900">S</text>
      <line x1="560" y1="110" x2="420" y2="205" stroke="rgba(240,240,240,0.75)" stroke-width="4" />
      <line x1="560" y1="110" x2="455" y2="255" stroke="#7aa2ff" stroke-width="4" />
      <text x="130" y="90" fill="var(--color-text-muted)" font-size="22" font-family="monospace">ITD / ILD</text>
      <text x="410" y="320" fill="var(--color-text-muted)" font-size="22" font-family="monospace">pinna filtering</text>
      <text x="215" y="390" fill="var(--color-text-muted)" font-size="22" font-family="monospace">binaural render -> headphones</text>
    </svg>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>双耳定位线索</h4>
    <ul>
      <li v-click>ITD：到达左右耳的时间差</li>
      <li v-click>ILD：到达左右耳的响度差</li>
      <li v-click>耳廓滤波：帮助前后 / 上下判断</li>
      <li v-click>Externalization：声音是否听起来在头外</li>
      <li v-click>个体化差异：同一套 HRTF 不一定适合所有人</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

STEAM

::eyebrow::

Tool Role

::title::

### Steam Audio HRTF

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div class="min-h-0 min-w-0">
    <span class="step-index">GAME / AUDIO EVENT</span>
    <h4>Source Direction + Direct Sound</h4>
    <p>输入来自游戏和音频系统已有的位置、方向、距离和直达声参数。</p>
  </div>
  <div class="active-panel min-h-0 p-4">
    <span class="step-index">SPATIALIZER</span>
    <h4>Steam Audio Spatializer</h4>
    <p>在这里作为 HRTF / binaural rendering 工具案例，不展开 propagation、reflection 或 pathing。</p>
  </div>
  <div class="min-h-0 min-w-0 border-l hairline pl-4">
    <span class="step-index">OUTPUT</span>
    <h4>Headphones / L-R Signal</h4>
    <p>输出适合耳机播放的 binaural signal；custom HRTF / SOFA support 可作为扩展点。</p>
  </div>
</div>

---
layout: section
---

::backdrop::

03

::eyebrow::

Listening Analysis

::title::

## 听声辨位

::subtitle::

从玩家经验回到系统拆解：我们到底听到了什么？

---
layout: header-body
---

::backdrop::

CASE

::eyebrow::

Case Setup

::title::

### 案例：听声辨位

::body::

<div class="grid h-full min-h-0 grid-cols-[1.2fr_0.8fr] gap-5">
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 p-6 text-center">
    <span class="badge">Placeholder Image</span>
    <h4>User will prepare case setup image</h4>
    <p>图片用于说明玩家位置、声源位置、阻挡关系、室内外关系和楼层关系。</p>
  </div>
  <div class="callout self-center">
    <span class="callout-title">本节分析对象</span>
    <p>玩家不是在识别插件或算法，而是在综合方向、距离、遮挡、环境、材质和双耳线索判断声音来源。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

WHERE

::eyebrow::

Question 01

::title::

### 如何判断声源的方位和距离？

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="min-h-0 min-w-0">
    <h4>Direction</h4>
    <ul>
      <li v-click>左右声像</li>
      <li v-click>双耳线索 / HRTF</li>
      <li v-click>玩家转头或视角变化带来的对比</li>
    </ul>
  </div>
  <div class="min-h-0 border-l hairline pl-5">
    <h4>Distance</h4>
    <ul>
      <li v-click>音量衰减</li>
      <li v-click>高频损失</li>
      <li v-click>直达声 / 环境声比例</li>
      <li v-click>早期反射与视觉上下文</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

BLOCK

::eyebrow::

Question 02

::title::

### 如何判断声源是否和我有阻挡？

::body::

<div class="grid h-full min-h-0 grid-cols-[0.9fr_1.1fr] gap-5">
  <div class="quote-accent self-center">
    <p>“听起来被挡住”通常不是单一参数，而是直达声、频谱、路径和环境线索共同改变。</p>
  </div>
  <div class="min-h-0 min-w-0">
    <ul>
      <li v-click>Occlusion：直达声变弱</li>
      <li v-click>LPF / EQ：高频损失和材质过滤</li>
      <li v-click>Diffraction：绕过边缘或门洞的间接路径</li>
      <li v-click>Transmission：穿过墙体或障碍物后的过滤与衰减</li>
      <li v-click>Parameter Mapping：把路径检测结果变成可听变化</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

ROOM

::eyebrow::

Question 03

::title::

### 如何判断声源在室内还是室外？

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">REFLECTION</span>
    <h4>反射密度</h4>
    <p>墙面和空间尺度改变早期反射的数量、方向和到达时间。</p>
  </div>
  <div v-click class="active-panel min-h-0 p-4">
    <span class="step-index">REVERB</span>
    <h4>混响尾巴</h4>
    <p>尾巴长度和包围感帮助判断空间边界，但不能只用“大 / 小”解释。</p>
  </div>
  <div v-click class="min-h-0 min-w-0 border-l hairline pl-4">
    <span class="step-index">CONTEXT</span>
    <h4>Room Tone</h4>
    <p>环境底噪、材质声和室内外声场差异也会参与判断。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

UP / DN

::eyebrow::

Question 04

::title::

### 如何判断声源是在楼上还是楼下？

::body::

<div class="grid h-full min-h-0 grid-cols-[1fr_1fr] gap-5">
  <div class="callout">
    <span class="callout-title">HRTF elevation cues</span>
    <p>耳廓滤波和双耳线索可以提供上下方向判断，但它通常不是唯一答案。</p>
  </div>
  <div class="min-h-0 min-w-0">
    <ul>
      <li v-click>楼板 / 天花板遮挡导致过滤和衰减</li>
      <li v-click>材质质感改变脚步、碰撞和移动声音</li>
      <li v-click>内容线索帮助玩家判断“声音类型”和“空间关系”</li>
      <li v-click>视觉地图和关卡结构会补充听觉判断</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

MIX

::eyebrow::

Question 05

::title::

### 还有哪些额外要考虑的点？

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div class="min-h-0 min-w-0">
    <span class="step-index">EVENT</span>
    <h4>触发逻辑</h4>
    <p>声音何时触发、从哪里触发、是否持续更新，会直接影响空间判断。</p>
  </div>
  <div class="active-panel min-h-0 p-4">
    <span class="step-index">PRIORITY</span>
    <h4>优先级</h4>
    <p>同屏多个声音同时存在时，系统要决定哪些声音保留、降低或停止。</p>
  </div>
  <div class="min-h-0 min-w-0 border-l hairline pl-4">
    <span class="step-index">MIX</span>
    <h4>混音可读性</h4>
    <p>即使空间化计算正确，被 masking 后玩家仍然可能听不出关键信息。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

LOOP

::eyebrow::

Synthesis

::title::

### 从听感回到系统

::body::

<div class="grid min-h-0 grid-cols-5 gap-3">
  <div class="border-l hairline pl-3">
    <span class="step-index">01</span>
    <h4>Propagation Path</h4>
  </div>
  <div class="border-l hairline pl-3">
    <span class="step-index">02</span>
    <h4>Parameter Mapping</h4>
  </div>
  <div class="border-l hairline pl-3">
    <span class="step-index">03</span>
    <h4>Spatializer / HRTF</h4>
  </div>
  <div class="border-l hairline pl-3">
    <span class="step-index">04</span>
    <h4>Event Priority / Mix</h4>
  </div>
  <div class="border-l hairline pl-3">
    <span class="step-index">05</span>
    <h4>Player Judgement</h4>
  </div>
</div>

<div class="quote-accent mt-6">
  <p>真实传播很复杂；游戏把它抽象成可计算、可调试、可混音的线索。玩家听到的不是算法名称，而是一组能支持空间判断的声音变化。</p>
</div>

---
layout: end
---

::backdrop::

FIN

::default::

Thanks & Questions?

xichen@soundoer.com
