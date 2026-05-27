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

### 声音传播的典型效果

::body::

<div class="grid h-full min-h-0 grid-cols-5 gap-3">
  <div v-click class="callout flex min-h-0 flex-col justify-center">
    <span class="step-index">Attenuation</span>
    <h4>衰减</h4>
  </div>
  <div v-click class="callout flex min-h-0 flex-col justify-center">
    <span class="step-index">Diffraction</span>
    <h4>衍射</h4>
  </div>
  <div v-click class="callout flex min-h-0 flex-col justify-center">
    <span class="step-index">Transmission</span>
    <h4>透射</h4>
  </div>
  <div v-click class="callout flex min-h-0 flex-col justify-center">
    <span class="step-index">Reflection</span>
    <h4>反射</h4>
  </div>
  <div v-click class="callout flex min-h-0 flex-col justify-center">
    <span class="step-index">Reverberation</span>
    <h4>混响</h4>
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
    <img class="h-full w-full object-contain" src="/audio-spatialization/listener-emitter.svg" alt="Object based audio positioning diagram">
  </div>
  <div class="flex min-h-0 flex-col justify-start gap-3">
    <span v-click class="callout-title">Object-Based Positioning</span>
    <ul>
      <li v-click>听者 Listener：玩家控制的角色或者摄像机</li>
      <li v-click>声源 Emitter：各种发声体</li>
      <li v-click>两者均有 Position 和 Orientation 等空间信息</li>
      <li v-click>两者之间的向量关系可用于方向和距离的计算</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::eyebrow::

Scene Geometry

::title::

### 场景几何

::body::

<div class="grid h-full min-h-0 grid-cols-[1.35fr_0.65fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-4">
    <img class="h-full w-full object-contain" src="/audio-spatialization/scene-geometry.svg" alt="Scene geometry diagram">
  </div>
  <div class="flex min-h-0 flex-col justify-start gap-3">
    <span v-click class="callout-title">影响声音传播的场景元素</span>
    <ul>
      <li v-click>墙体、房间和障碍物</li>
      <li v-click>门窗、通路和开放区域</li>
      <li v-click>几何材质的声学特点</li>
      <li v-click>可交互或可破坏的动态几何</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::eyebrow::

Propagation Path

::title::

### 传播路径

::body::

<div class="grid h-full min-h-0 grid-cols-[1.35fr_0.65fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-4">
    <img class="h-full w-full object-contain" src="/audio-spatialization/propagation-path.svg" alt="Direct, blocked, diffracted, and reflected propagation paths">
  </div>
  <div class="flex min-h-0 flex-col justify-start gap-3">
    <span v-click class="callout-title">声音的传播路径</span>
    <ul>
      <li v-click>直达声路径</li>
      <li v-click>经过通路或绕过障碍物的衍射路径</li>
      <li v-click>直接穿过墙体的透射路径</li>
      <li v-click>墙体表面反弹形成反射路径</li>
    </ul>
    <div v-click class="callout">
      <span class="callout-title">Audio Ray Tracing</span>
      <p>通常由一系列 Raycast 组成，从听者、声源或其他参考位置发出射线，查询距离、遮挡、命中表面等信息。</p>
    </div>
  </div>
</div>

---
layout: header-body
---

::eyebrow::

Parameter Mapping

::title::

### 参数映射

::body::

<div class="grid h-full min-h-0 grid-cols-3 items-start gap-4">
  <div v-click="1" class="min-h-0 min-w-0 border-l hairline bg-[var(--color-surface)] px-4 pb-4 pt-0">
    <span class="step-index">Scene Data</span>
    <h4>场景数据</h4>
    <ul>
      <li v-click="2">方向 Direction</li>
      <li v-click="3">距离 Distance</li>
      <li v-click="4">可见性 Visibility</li>
      <li v-click="5">遮蔽值 Obstruction / Occlusion</li>
      <li v-click="6">空间尺寸 SpaceSize</li>
      <li v-click="7">空间开放度 SpaceOpenness</li>
      <li v-click="8">……</li>
    </ul>
  </div>
  <div v-click="9" class="min-h-0 min-w-0 border-l hairline bg-[var(--color-surface)] px-4 pb-4 pt-0">
    <span class="step-index">Audio Parameters</span>
    <h4>音频参数</h4>
    <ul>
      <li v-click="10">响度 Volume</li>
      <li v-click="11">频率 Frequency</li>
      <li v-click="12">声像宽度 Spread</li>
      <li v-click="13">混响 Reverberation</li>
      <li v-click="14">干湿声比例 Wet / Dry Ratio</li>
      <li v-click="15">虚像声源 Virtual Source</li>
      <li v-click="16">……</li>
    </ul>
  </div>
  <div v-click="17" class="min-h-0 min-w-0 border-l hairline bg-[var(--color-surface)] px-4 pb-4 pt-0">
    <span class="step-index">Sound Results</span>
    <h4>声音效果</h4>
    <ul>
      <li v-click="18">距离衰减</li>
      <li v-click="19">障碍物衍射</li>
      <li v-click="20">隔墙透射</li>
      <li v-click="21">墙面反射</li>
      <li v-click="22">混响效果</li>
      <li v-click="23">……</li>
    </ul>
  </div>
</div>

---
layout: section
---

::backdrop::

02

::eyebrow::

IMPLEMENTATION

::title::

## 实现方案

---
layout: header-body
---

::backdrop::

WWISE

::eyebrow::

Wwise

::title::

### Wwise Spatial Audio

::body::

<div class="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-5">
    <img class="h-full w-full object-contain" src="/audio-spatialization/SOP_Wwise_3D_Viewer.png" alt="Wwise 3D viewer spatial audio visualization">
  </div>
  <div class="min-h-0 min-w-0">
    <ul>
      <li v-click>Listener & Emitter 建立基础关系</li>
      <li v-click>Room & Portal 组件界定空间和通路</li>
      <li v-click>Diffraction & Transmission 处理非直达路径</li>
      <li v-click>Reverb & Reflect 效果器插件实现空间混响和表面反射</li>
    </ul>
  </div>
</div>

<!-- https://www.audiokinetic.com/en/wwise/wwise-spatial-audio/ -->

---
layout: header-body
---

::eyebrow::

Wwise

::title::

### Wwise Spatial Audio Demo

::body::

<div class="figure-frame flex h-full min-h-0 items-center justify-center overflow-hidden">
  <video class="h-full w-full object-contain" src="/audio-spatialization/SOP_Spatial_Audio_Voice_Demo_FIN.mp4" controls preload="metadata"></video>
</div>

---
layout: fullscreen-media
image: audio-spatialization/wwise-spatial-audio-signal-flow.svg
backgroundSize: 90% auto
alt: Wwise spatial audio signal flow diagram
---

<div class="relative h-full w-full">
  <div class="caption-plate absolute bottom-6 right-6 max-w-[38rem]">
    <p class="caption mt-3">Wwise Spatial Audio Signal Flow</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

TRACING

::eyebrow::

In-house Solution

::title::

### Audio Ray Tracing 自研方案

::body::

<div class="grid h-full min-h-0 grid-cols-[1fr_1fr] gap-5">
  <div class="flex min-h-0 min-w-0 flex-col justify-start gap-4">
    <div v-click="1">
      <span class="callout-title">Wwise Spatial Audio 方案的取舍</span>
      <ul>
        <li>Room & Portal 组件可控性高，但会有额外的维护成本。</li>
        <li>复杂空间难以用 Room & Portal 精准定义。</li>
      </ul>
    </div>
    <div v-click="2" class="callout">
      <span class="callout-title">Audio Ray Tracing + Wwise Sound Engine</span>
      <p>在引擎中对标注过的场景几何体进行射线检测，得出听者与声源之间的遮蔽情况、通路的开合状态、空间的类型与开放程度等信息，再转换成 Wwise Game Syncs，驱动声音参数的实时变化。</p>
    </div>
  </div>
  <div v-click="1" class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 overflow-hidden p-3">
    <img class="min-h-0 flex-1 w-full object-contain" src="/audio-spatialization/di11_map004_roomportal_02.png" alt="Room and portal placement view in an audio ray tracing scene">
    <img class="min-h-0 flex-1 w-full object-contain" src="/audio-spatialization/di11_map004_roomportal_01.png" alt="Room and portal geometry overview in an audio ray tracing scene">
  </div>
</div>

---
layout: header-body
---

::backdrop::

SNOWDROP

::eyebrow::

Ubisoft

::title::

### Snowdrop GPU Raytracing

::body::

<div class="grid h-full min-h-0 grid-cols-[1.2fr_0.8fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <img class="max-h-full max-w-full object-contain" src="/audio-spatialization/gpu-raytracing-for-audio-gdc2025-page-01.png" alt="GPU Raytracing for Audio in Snowdrop GDC 2025 title slide">
  </div>
  <div class="flex min-h-0 flex-col justify-start gap-3">
    <div class="callout">
      <span class="callout-title">GPU Raytracing</span>
      <p>利用硬件光追在 GPU 上异步执行大量声线查询，实时估算复杂场景中的声传播路径。</p>
    </div>
    <ul class="list-disc space-y-2 pl-5 text-[0.95rem] text-[var(--color-text-body)]">
      <li><a href="https://www.gdcvault.com/play/1035485/GPU-Raytracing-for-Audio-in" target="_blank" rel="noreferrer">GPU Raytracing for Audio in Snowdrop</a></li>
      <li><a href="https://www.massive.se/blog/news/ray-tracing-audio-in-snowdrop-creating-a-living-pandora/" target="_blank" rel="noreferrer">Ray Tracing Audio in Snowdrop: Creating a Living Pandora</a></li>
    </ul>
  </div>
</div>

---
layout: custom
---

::default::

<div class="relative h-full w-full bg-[var(--color-bg)] p-6">
  <div class="grid h-full min-h-0 grid-cols-2 grid-rows-2 gap-3">
    <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-2">
      <img class="h-full w-full object-contain" src="/audio-spatialization/gpu-raytracing-for-audio-gdc2025-page-10.png" alt="Snowdrop engine introduction from GPU Raytracing for Audio in Snowdrop">
    </div>
    <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-2">
      <img class="h-full w-full object-contain" src="/audio-spatialization/gpu-raytracing-for-audio-gdc2025-page-11.png" alt="Audio ray tracing goals in Snowdrop">
    </div>
    <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-2">
      <img class="h-full w-full object-contain" src="/audio-spatialization/gpu-raytracing-for-audio-gdc2025-page-23.png" alt="Audio raytracing pipeline in Snowdrop">
    </div>
    <div class="figure-frame flex min-h-0 items-center justify-center overflow-hidden p-2">
      <img class="h-full w-full object-contain" src="/audio-spatialization/gpu-raytracing-for-audio-gdc2025-page-107.png" alt="Sound propagation simulation recap from GPU Raytracing for Audio in Snowdrop">
    </div>
  </div>
</div>

---
layout: fullscreen-media
image: audio-spatialization/afop_raytracingsound_waterfall_1280x720.jpg
backgroundSize: contain
alt: Visualization of ray tracing a waterfall's sound in Avatar Frontiers of Pandora
---

<div class="relative h-full w-full">
  <div class="caption-plate absolute bottom-8 left-6 max-w-[38rem]">
    <span class="badge">Massive Snowdrop</span>
    <p class="caption mt-3">Visualization of Ray Tracing a waterfall's sound in <em>Avatar: Frontiers of Pandora</em>.</p>
  </div>
</div>

<!-- https://www.massive.se/blog/news/ray-tracing-audio-in-snowdrop-creating-a-living-pandora/ -->

---
layout: fullscreen-media
image: audio-spatialization/afop_raytracingsound_diffraction_1280x720.jpg
backgroundSize: contain
alt: Tracing sound rays through dense vegetation
---

<div class="relative h-full w-full">
  <div class="caption-plate absolute bottom-8 left-6 max-w-[38rem]">
    <span class="badge">Massive Snowdrop</span>
    <p class="caption mt-3">Tracing sound rays through dense vegetation.</p>
  </div>
</div>

---
layout: fullscreen-media
image: audio-spatialization/afop_raytracingsound_indoorspaceportals_1280x720.jpg
backgroundSize: contain
alt: Sound transparency through windows and doors
---

<div class="relative h-full w-full">
  <div class="caption-plate absolute bottom-8 left-6 max-w-[38rem]">
    <span class="badge">Massive Snowdrop</span>
    <p class="caption mt-3">Sound transparency through windows and doors.</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

TRITON

::eyebrow::

Microsoft

::title::

### Project Acoustics / Triton

::body::

<div class="grid h-full min-h-0 grid-cols-[1fr_1fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <img class="max-h-full max-w-full object-contain" src="/audio-spatialization/triton.gif" alt="Project Triton acoustic simulation visualization">
  </div>
  <div class="flex min-h-0 flex-col justify-start gap-3">
    <div class="callout">
      <span class="callout-title">另一条路线</span>
      <p>类似静态光照烘焙，离线做波动声学模拟，再把结果压缩成运行时可查询的声学参数。</p>
    </div>
    <ul class="list-disc space-y-2 pl-5 text-[0.95rem] text-[var(--color-text-body)]">
      <li><a href="https://www.microsoft.com/en-us/research/project/project-triton/" target="_blank" rel="noreferrer">Project Triton - Microsoft Research</a></li>
      <li><a href="https://www.microsoft.com/en-us/research/video/project-triton-making-waves-with-acoustics/" target="_blank" rel="noreferrer">Project Acoustics: Making Waves with Triton</a></li>
      <li><a href="https://github.com/microsoft/ProjectAcoustics" target="_blank" rel="noreferrer">microsoft/ProjectAcoustics</a></li>
      <li><a href="https://gad.soundoer.com/microsoft-project-acoustics-wave-physics-simulation-playtest/" target="_blank" rel="noreferrer">Microsoft Project Acoustics 声波物理模拟测试</a></li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::eyebrow::

Microsoft

::title::

### Project Acoustics Demo

::body::

<div class="figure-frame flex h-full min-h-0 items-center justify-center overflow-hidden">
  <video class="h-full w-full object-contain" src="/audio-spatialization/ProjectAcoustics_WavePhysicsSimulation_Demo.mp4" controls preload="metadata"></video>
</div>

---
layout: section
---

::backdrop::

03

::eyebrow::

Audio Panning

::title::

## 从空间计算到声像定位

---
layout: statement
---

::backdrop::

HEADPHONES

::title::

#### 如何在耳机上听出来自上下前后的声音效果？

---
layout: header-body
---

::backdrop::

PANNING

::eyebrow::

Panning

::title::

### 声像定位

::body::

<div class="grid h-full min-h-0 grid-cols-[1fr_auto_1fr_auto_1fr] grid-rows-2 gap-x-4 gap-y-5">
  <div v-click="1" class="figure-frame col-start-1 row-start-1 flex min-h-0 items-center justify-center overflow-hidden p-4">
    <img class="h-full w-full object-contain" src="/audio-spatialization/listener-emitter.svg" alt="Listener and emitter object positioning diagram">
  </div>
  <div v-click="1" class="col-start-2 row-start-1 flex items-center justify-center text-3xl text-[var(--color-accent)]">&rarr;</div>
  <div v-click="1" class="figure-frame col-start-3 row-start-1 flex min-h-0 items-center justify-center overflow-hidden p-4">
    <img class="h-full w-full object-contain" src="/audio-spatialization/speaker-panning.svg" alt="Speaker panning diagram">
  </div>
  <div v-click="1" class="callout col-start-5 row-start-1 flex h-fit self-start text-[1rem] leading-relaxed text-[var(--color-text-body)]">
    从 Objected-Based Positioning 到 Channel-Based Panning
  </div>
  <div v-click="2" class="callout col-start-1 row-start-2 flex h-fit self-start text-[1rem] leading-relaxed text-[var(--color-text-body)]">
    Audio Beds & Objects
  </div>
  <div v-click="2" class="figure-frame col-start-3 row-start-2 flex min-h-0 items-center justify-center overflow-hidden p-2">
    <img class="h-full w-full object-contain" src="/audio-spatialization/Objects%20and%20Beds%20Explained%20-%20Audient.png" alt="Dolby Atmos objects and beds explained in renderer interface">
  </div>
  <div v-click="2" class="col-start-4 row-start-2 flex items-center justify-center text-3xl text-[var(--color-accent)]">&rarr;</div>
  <div v-click="2" class="figure-frame col-start-5 row-start-2 flex min-h-0 items-center justify-center overflow-hidden p-2">
    <img class="h-full w-full object-cover" src="/how-to-listen-sound/MixingStage.JPG" alt="Dolby Atmos mixing stage">
  </div>
</div>

---
layout: header-body
---

::eyebrow::

Perception

::title::

### Binaural & HRTF

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 overflow-hidden p-3">
    <img class="min-h-0 flex-1 w-full object-contain" src="/audio-spatialization/Georg_Neumann_Ku_100_Dummy_Head.jpg" alt="Neumann KU 100 dummy head for binaural recording">
    <a class="text-[0.9rem] text-[var(--color-text-body)]" href="https://en.wikipedia.org/wiki/Binaural_recording" target="_blank" rel="noreferrer">Binaural Recording</a>
  </div>
  <div class="figure-frame flex min-h-0 flex-col items-center justify-center gap-3 overflow-hidden p-3">
    <img class="min-h-0 flex-1 w-full object-contain" src="/audio-spatialization/HRTF.svg.png" alt="Head-related transfer function diagram">
    <a class="text-[0.9rem] text-[var(--color-text-body)]" href="https://en.wikipedia.org/wiki/Head-related_transfer_function" target="_blank" rel="noreferrer">Head-Related Transfer Function</a>
  </div>
</div>

---
layout: header-body
---

::backdrop::

HRTF

::eyebrow::

Tool Landscape

::title::

### Spatial Audio 工具生态

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">PLATFORM RENDERER</span>
    <h4>System Endpoint</h4>
    <p>平台接收 Audio Objects，并在最终设备端完成耳机或扬声器的空间化。</p>
    <ul>
      <li><a href="https://learn.microsoft.com/en-us/windows/win32/coreaudio/spatial-sound" target="_blank" rel="noreferrer">Microsoft Spatial Sound</a></li>
      <li><a href="https://www.playstation.com/en-us/support/hardware/3d-audio-ps5/" target="_blank" rel="noreferrer">PS5 3D Audio</a></li>
    </ul>
  </div>
  <div v-click class="min-h-0 min-w-0 border-l hairline pl-4">
    <span class="step-index">SPATIAL AUDIO SDK</span>
    <h4>Develop Toolkit</h4>
    <p>开发者在游戏引擎或音频中间件内整合 SDK 来控制空间音频的效果。</p>
    <ul>
      <li><a href="https://valvesoftware.github.io/steam-audio/" target="_blank" rel="noreferrer">Steam Audio</a></li>
      <li><a href="https://developers.meta.com/horizon/documentation/unreal/meta-xr-audio-sdk-unreal/" target="_blank" rel="noreferrer">Meta XR Audio SDK</a></li>
      <li><a href="https://resonance-audio.github.io/resonance-audio/" target="_blank" rel="noreferrer">Resonance Audio</a></li>
    </ul>
  </div>
  <div v-click class="min-h-0 min-w-0 border-l hairline pl-4">
    <span class="step-index">SPATIALIZER PRODUCTION</span>
    <h4>Production</h4>
    <p>同样可接入游戏引擎或音频中间件，更偏商业产品化。</p>
    <ul>
      <li><a href="https://embody.co/pages/game-development?currency=SGD" target="_blank" rel="noreferrer">Embody Immerse</a></li>
      <li><a href="https://atmoky.com/products/true-spatial/" target="_blank" rel="noreferrer">atmoky trueSpatial</a></li>
    </ul>
  </div>
</div>

---
layout: section
---

::backdrop::

04

::eyebrow::

Locating with Sound

::title::

## 听声辨位

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
layout: end
---

::backdrop::

FIN

::default::

Thanks & Questions?

xichen@soundoer.com
