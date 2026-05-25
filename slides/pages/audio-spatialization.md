---
layout: cover
slug: audio-spatialization
deckListTitle: 音频空间化
description: 讲解游戏如何把真实声音传播抽象为空间化系统，并服务玩家的听声辨位体验。
---

::backdrop::

SPATIAL

::eyebrow::

Game Audio System

::title::

# 音频空间化

::subtitle::

Audio Spatialization

::info::

“听声辨位”是如何实现的？

---
layout: section
---

::backdrop::

01

::eyebrow::

Framework

::title::

## 从声音传播到空间化系统

::subtitle::

先把真实声学现象，压缩成游戏可以实时计算和控制的空间线索。

---
layout: header-body
---

::backdrop::

HOOK

::eyebrow::

Opening Clip

::title::

### TBD：听声辨位 gameplay clip

::body::

<div class="gad-placeholder h-full">
  <span class="badge">Placeholder Video</span>
  <div class="gad-placeholder-title">Gameplay clip showing player locating sound by listening</div>
  <p>这里先保留视频位。正式素材确定后，只替换媒体和标题，不改变本页结构。</p>
</div>

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

<div class="grid h-full min-h-0 grid-cols-[1.25fr_0.75fr] gap-5">
  <div class="gad-placeholder">
    <span class="badge">Placeholder Video</span>
    <div class="gad-placeholder-title">Real-world sound propagation clip</div>
    <p>可展示隔墙、门洞、拐角、室内外过渡、反射或混响变化。</p>
  </div>
  <div class="flex min-h-0 flex-col justify-center gap-3">
    <div v-click class="callout">
      <span class="callout-title">现实里同时发生的事</span>
      <p>直达、距离衰减、遮挡、透射、衍射、反射和混响不是分开的开关，而是叠在同一个听觉结果里。</p>
    </div>
    <div v-click class="quote-accent">
      <p>游戏音频空间化的目标不是完整复刻空气振动，而是生成玩家可用的空间判断线索。</p>
    </div>
  </div>
</div>

---
layout: header-body
---

::backdrop::

CUES

::eyebrow::

Mapping

::title::

### 游戏里要重建哪些空间线索？

::body::

<div class="gad-flow gad-flow-two">
  <div class="gad-panel">
    <span class="step-index">REAL WORLD</span>
    <h4>真实传播现象</h4>
    <div class="gad-chip-list">
      <span>声源方向</span>
      <span>距离衰减</span>
      <span>遮挡 / 透射</span>
      <span>衍射 / 绕射</span>
      <span>反射 / 混响</span>
    </div>
  </div>
  <div class="gad-arrow">→</div>
  <div class="gad-panel active-panel">
    <span class="step-index">GAME SYSTEM</span>
    <h4>可计算的空间线索</h4>
    <div class="gad-chip-list">
      <span>方向</span>
      <span>距离</span>
      <span>遮挡</span>
      <span>环境</span>
      <span>路径</span>
    </div>
  </div>
</div>

---
layout: header-body
---

::backdrop::

L / E

::eyebrow::

Objects

::title::

### Listener / Emitter

::body::

<div class="grid h-full min-h-0 grid-cols-[1.2fr_0.8fr] gap-5">
  <div class="gad-stage">
    <div class="gad-listener" style="left: 22%; top: 56%;">L</div>
    <div class="gad-emitter" style="left: 73%; top: 34%;">E</div>
    <div class="gad-line gad-line-distance"></div>
    <div class="gad-direction" style="left: 27%; top: 48%; transform: rotate(-24deg);"></div>
    <span class="gad-label" style="left: 16%; top: 69%;">Listener position / orientation</span>
    <span class="gad-label" style="left: 62%; top: 22%;">Emitter position</span>
    <span class="gad-label" style="left: 42%; top: 41%;">relative vector + distance</span>
  </div>
  <div class="flex min-h-0 flex-col justify-center gap-3">
    <div class="callout">
      <span class="callout-title">谁在听？谁在发声？</span>
      <p>位置、朝向、距离和相对角度，是后续定位、衰减与路径检测的基础。</p>
    </div>
    <ul>
      <li v-click>不绑定 Unity、Unreal 或 Wwise 的具体表达。</li>
      <li v-click>先建立两个对象之间的空间关系。</li>
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
  <div class="gad-stage gad-room">
    <div class="gad-wall" style="left: 14%; top: 18%; width: 72%; height: 3%;"></div>
    <div class="gad-wall" style="left: 14%; top: 18%; width: 3%; height: 60%;"></div>
    <div class="gad-wall" style="left: 83%; top: 18%; width: 3%; height: 60%;"></div>
    <div class="gad-wall" style="left: 14%; top: 76%; width: 29%; height: 3%;"></div>
    <div class="gad-wall" style="left: 58%; top: 76%; width: 28%; height: 3%;"></div>
    <div class="gad-wall accent-wall" style="left: 47%; top: 76%; width: 7%; height: 3%;"></div>
    <div class="gad-zone" style="left: 20%; top: 28%;">Zone A</div>
    <div class="gad-zone" style="left: 58%; top: 28%;">Zone B</div>
    <span class="gad-label" style="left: 36%; top: 81%;">opening / door state</span>
    <span class="gad-label" style="left: 20%; top: 64%;">material: concrete</span>
    <span class="gad-label" style="left: 58%; top: 64%;">material: wood</span>
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
  <div class="gad-stage gad-room">
    <div class="gad-listener" style="left: 18%; top: 58%;">L</div>
    <div class="gad-emitter" style="left: 78%; top: 30%;">E</div>
    <div class="gad-obstacle" style="left: 43%; top: 20%; width: 5%; height: 58%;"></div>
    <svg class="gad-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line v-click x1="23" y1="62" x2="78" y2="34" class="path direct" />
      <line v-click x1="23" y1="62" x2="43" y2="50" class="path blocked" />
      <polyline v-click points="23,62 42,80 52,80 78,34" class="path diffraction" />
      <polyline v-click points="23,62 22,25 78,34" class="path reflection" />
    </svg>
    <span class="gad-label" style="left: 10%; top: 80%;">direct / blocked / diffracted / reflected paths</span>
  </div>
  <div class="flex min-h-0 flex-col justify-center gap-3">
    <div class="callout">
      <span class="callout-title">路径不是一条直线</span>
      <p>不同方案可能用 raycast、ray tracing、pathing 或 probe lookup 估计声音如何到达听者。</p>
    </div>
    <div class="gad-legend">
      <span><i class="legend-direct"></i>direct</span>
      <span><i class="legend-blocked"></i>blocked</span>
      <span><i class="legend-diffraction"></i>diffraction</span>
      <span><i class="legend-reflection"></i>reflection</span>
    </div>
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

<div class="gad-flow gad-flow-three">
  <div class="gad-panel">
    <span class="step-index">INPUT</span>
    <h4>Propagation Data</h4>
    <p>distance, visibility, occlusion, path length, direction, reflection, diffraction, environment</p>
  </div>
  <div class="gad-panel active-panel">
    <span class="step-index">MAPPING</span>
    <h4>转译层</h4>
    <p>把几何 / 路径结果变成声音系统能消费的控制参数。</p>
  </div>
  <div class="gad-panel">
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
  <div class="gad-stage gad-wwise">
    <div class="gad-room-box" style="left: 12%; top: 18%; width: 36%; height: 58%;">Room A</div>
    <div class="gad-room-box" style="left: 52%; top: 18%; width: 36%; height: 58%;">Room B</div>
    <div v-click class="gad-portal" style="left: 47%; top: 42%;"></div>
    <div v-click class="gad-listener" style="left: 23%; top: 56%;">L</div>
    <div v-click class="gad-emitter" style="left: 74%; top: 34%;">E</div>
    <svg class="gad-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline v-click points="25,60 48,45 74,38" class="path diffraction" />
      <line v-click x1="25" y1="60" x2="74" y2="38" class="path transmission" />
      <polyline v-click points="74,38 72,20 25,60" class="path reflection" />
    </svg>
    <div v-click class="gad-reverb" style="left: 16%; top: 24%; width: 28%; height: 45%;"></div>
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

<div class="gad-placeholder h-full">
  <span class="badge">Placeholder Video</span>
  <div class="gad-placeholder-title">User will prepare Wwise Spatial Audio demo video later</div>
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

<div class="gad-flow gad-flow-three">
  <div class="gad-panel">
    <span class="step-index">ENGINE SCENE</span>
    <h4>Listener / Emitter Ray Queries</h4>
    <p>从引擎侧检测距离、遮挡、路径、材质和环境。</p>
  </div>
  <div class="gad-panel active-panel">
    <span class="step-index">PARAMETERS</span>
    <h4>Detected Data</h4>
    <p><code>occlusion=0.72</code><br><code>distance=18m</code><br><code>material=concrete</code><br><code>reverbSend=0.45</code></p>
  </div>
  <div class="gad-panel">
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
  <div class="gad-placeholder">
    <span class="badge">Pending Screenshots</span>
    <div class="gad-placeholder-title">1-3 screenshots from GPU Raytracing for Audio in Snowdrop GDC2025.pdf</div>
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
    <div class="gad-route">
      <span>Scene + Materials</span>
      <span>Bake</span>
      <span>Acoustic Data / Probes</span>
      <span>Runtime Parameter Lookup</span>
      <span>Audio Controls</span>
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

<div class="gad-placeholder h-full">
  <span class="badge">Placeholder Video</span>
  <div class="gad-placeholder-title">User will prepare Project Acoustics / Triton video later</div>
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
  <div class="gad-pipeline">
    <span>Game Source</span>
    <span>Panning</span>
    <span>Distance Attenuation</span>
    <span>Spread</span>
    <span>Reverb Send</span>
    <span>Speaker / Headphone Output</span>
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
  <div class="gad-stage">
    <div class="gad-head">
      <div class="ear left"></div>
      <div class="ear right"></div>
    </div>
    <div class="gad-emitter" style="left: 73%; top: 23%;">S</div>
    <svg class="gad-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line x1="75" y1="28" x2="47" y2="47" class="path direct" />
      <line x1="75" y1="28" x2="56" y2="55" class="path diffraction" />
    </svg>
    <span class="gad-label" style="left: 16%; top: 22%;">ITD / ILD</span>
    <span class="gad-label" style="left: 55%; top: 67%;">pinna filtering</span>
    <span class="gad-label" style="left: 34%; top: 82%;">binaural render → headphones</span>
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

<div class="gad-flow gad-flow-three">
  <div class="gad-panel">
    <span class="step-index">GAME / AUDIO EVENT</span>
    <h4>Source Direction + Direct Sound</h4>
    <p>输入来自游戏和音频系统已有的位置、方向、距离和直达声参数。</p>
  </div>
  <div class="gad-panel active-panel">
    <span class="step-index">SPATIALIZER</span>
    <h4>Steam Audio Spatializer</h4>
    <p>在这里作为 HRTF / binaural rendering 工具案例，不展开 propagation、reflection 或 pathing。</p>
  </div>
  <div class="gad-panel">
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
  <div class="gad-placeholder">
    <span class="badge">Placeholder Image</span>
    <div class="gad-placeholder-title">User will prepare case setup image</div>
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
  <div v-click class="gad-panel">
    <span class="step-index">REFLECTION</span>
    <h4>反射密度</h4>
    <p>墙面和空间尺度改变早期反射的数量、方向和到达时间。</p>
  </div>
  <div v-click class="gad-panel active-panel">
    <span class="step-index">REVERB</span>
    <h4>混响尾巴</h4>
    <p>尾巴长度和包围感帮助判断空间边界，但不能只用“大 / 小”解释。</p>
  </div>
  <div v-click class="gad-panel">
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

<div class="gad-flow gad-flow-three">
  <div class="gad-panel">
    <span class="step-index">EVENT</span>
    <h4>触发逻辑</h4>
    <p>声音何时触发、从哪里触发、是否持续更新，会直接影响空间判断。</p>
  </div>
  <div class="gad-panel active-panel">
    <span class="step-index">PRIORITY</span>
    <h4>优先级</h4>
    <p>同屏多个声音同时存在时，系统要决定哪些声音保留、降低或停止。</p>
  </div>
  <div class="gad-panel">
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

<div class="gad-pipeline gad-pipeline-wide">
  <span>Propagation Path</span>
  <span>Parameter Mapping</span>
  <span>Spatializer / HRTF</span>
  <span>Event Priority / Mix</span>
  <span>Player Judgement</span>
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

<style>
.slidev-layout .gad-placeholder {
  min-height: 0;
  border: 1px dashed var(--color-border);
  background: rgba(255, 255, 255, 0.025);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
}

.slidev-layout .gad-placeholder-title {
  max-width: 42rem;
  color: var(--color-text-primary);
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.25;
}

.slidev-layout .gad-flow {
  height: 100%;
  min-height: 0;
  display: grid;
  gap: 1rem;
  align-items: stretch;
}

.slidev-layout .gad-flow-two {
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.slidev-layout .gad-flow-three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.slidev-layout .gad-arrow {
  color: var(--color-accent);
  font-size: 2.5rem;
  font-weight: 900;
}

.slidev-layout .gad-panel {
  min-height: 0;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.025);
  padding: 1.25rem;
}

.slidev-layout .gad-panel h4 {
  margin-bottom: 0.75rem;
}

.slidev-layout .gad-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.slidev-layout .gad-chip-list span,
.slidev-layout .gad-route span,
.slidev-layout .gad-pipeline span {
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-text-body);
  padding: 0.45rem 0.65rem;
  font-size: 0.9rem;
}

.slidev-layout .gad-stage {
  position: relative;
  min-height: 0;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 36px 36px;
}

.slidev-layout .gad-listener,
.slidev-layout .gad-emitter {
  position: absolute;
  z-index: 3;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-primary);
  font-weight: 900;
}

.slidev-layout .gad-listener {
  background: var(--color-accent);
}

.slidev-layout .gad-emitter {
  border: 1px solid var(--color-text-primary);
  background: var(--color-bg);
}

.slidev-layout .gad-line-distance {
  position: absolute;
  left: 27%;
  top: 53%;
  width: 49%;
  border-top: 2px dashed rgba(240, 240, 240, 0.48);
  transform: rotate(-24deg);
  transform-origin: left center;
}

.slidev-layout .gad-direction {
  position: absolute;
  width: 5rem;
  border-top: 2px solid var(--color-accent);
}

.slidev-layout .gad-direction::after {
  content: "";
  position: absolute;
  right: -0.2rem;
  top: -0.32rem;
  border-left: 0.45rem solid var(--color-accent);
  border-top: 0.28rem solid transparent;
  border-bottom: 0.28rem solid transparent;
}

.slidev-layout .gad-label {
  position: absolute;
  z-index: 4;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.slidev-layout .gad-wall,
.slidev-layout .gad-obstacle {
  position: absolute;
  z-index: 2;
  background: rgba(240, 240, 240, 0.78);
}

.slidev-layout .accent-wall,
.slidev-layout .gad-portal {
  background: var(--color-accent);
}

.slidev-layout .gad-zone,
.slidev-layout .gad-room-box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  background: rgba(212, 90, 42, 0.08);
  color: var(--color-text-body);
  font-weight: 700;
}

.slidev-layout .gad-zone {
  width: 22%;
  height: 22%;
}

.slidev-layout .gad-room-box {
  z-index: 1;
}

.slidev-layout .gad-portal {
  position: absolute;
  z-index: 4;
  width: 6%;
  height: 18%;
}

.slidev-layout .gad-svg {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.slidev-layout .path {
  fill: none;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.slidev-layout .direct {
  stroke: rgba(240, 240, 240, 0.75);
  stroke-dasharray: 4 4;
}

.slidev-layout .blocked,
.slidev-layout .transmission {
  stroke: #d45a2a;
}

.slidev-layout .diffraction {
  stroke: #7aa2ff;
}

.slidev-layout .reflection {
  stroke: #6bd38d;
}

.slidev-layout .gad-legend {
  display: grid;
  gap: 0.55rem;
  color: var(--color-text-body);
}

.slidev-layout .gad-legend i {
  display: inline-block;
  width: 1.5rem;
  margin-right: 0.5rem;
  border-top: 3px solid currentColor;
  vertical-align: middle;
}

.slidev-layout .legend-direct {
  color: rgba(240, 240, 240, 0.75);
}

.slidev-layout .legend-blocked {
  color: #d45a2a;
}

.slidev-layout .legend-diffraction {
  color: #7aa2ff;
}

.slidev-layout .legend-reflection {
  color: #6bd38d;
}

.slidev-layout .gad-reverb {
  position: absolute;
  z-index: 2;
  border: 1px solid rgba(212, 90, 42, 0.6);
  border-radius: 999px;
  background: rgba(212, 90, 42, 0.12);
}

.slidev-layout .gad-route,
.slidev-layout .gad-pipeline {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.slidev-layout .gad-pipeline {
  justify-content: center;
}

.slidev-layout .gad-pipeline-wide {
  flex-direction: row;
  align-items: center;
}

.slidev-layout .gad-pipeline span::after,
.slidev-layout .gad-route span::after {
  content: " →";
  color: var(--color-accent);
}

.slidev-layout .gad-pipeline span:last-child::after,
.slidev-layout .gad-route span:last-child::after {
  content: "";
}

.slidev-layout .gad-head {
  position: absolute;
  left: 38%;
  top: 33%;
  width: 8.5rem;
  height: 10rem;
  border: 1px solid var(--color-text-primary);
  border-radius: 46% 46% 42% 42%;
  background: rgba(255, 255, 255, 0.035);
}

.slidev-layout .ear {
  position: absolute;
  top: 42%;
  width: 1rem;
  height: 2rem;
  border: 1px solid var(--color-accent);
  border-radius: 999px;
}

.slidev-layout .ear.left {
  left: -0.7rem;
}

.slidev-layout .ear.right {
  right: -0.7rem;
}
</style>
