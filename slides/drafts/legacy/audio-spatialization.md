---
layout: section
description: 讲解空间音频、定位感与游戏场景中的听觉呈现。
---

::title::

## 音频空间化

**Audio Spatialization**

---
layout: header-body
---

### 还原真实世界中的声音传播效果

::body::

- 声像定位
- 空间划分
- 反射与混响
- 衍射与透射
- 声音衰减

<!--  -->

---
layout: header-body
---

### 声像定位 Sound Positioning

::body::

<div class="grid min-h-0 grid-cols-2 gap-4">
<div class="min-h-0 min-w-0 overflow-auto">

<div v-click>
    Channel-Based
    <img src="/channel-based-positioning.svg" alt="Channel Based Positioning" style="width: auto; height: 420px;">
</div>

</div>
<div class="min-h-0 min-w-0 overflow-auto">

<div v-click>
    Object-Based
    <img src="/object-based-positioning.svg" alt="Object Based Positioning" style="width: auto; height: 420px;">
</div>

</div>
</div>

<!--
- Listener & Emitter
-->

---
layout: header-body
---

### 空间划分 Space Partition

::body::

<div class="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center [&_img]:max-h-[min(78vh,100%)] [&_img]:max-w-full [&_img]:object-contain">

<img src="/space-partition.svg" alt="Space Partition" style="width: auto; height: 450px;">

</div>

<!--
- 使用 Volume 来界定 Region、Room 和 Portal 等
-->

---
layout: header-body
---

### 反射与混响 Reflect & Reverb

::body::

<div class="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center [&_img]:max-h-[min(78vh,100%)] [&_img]:max-w-full [&_img]:object-contain">

<img src="/reflect-reverb.svg" alt="Reflect-Reverb" style="width: auto; height: 450px;">

</div>

<!--  -->

---
layout: header-body
---

### 衍射与透射 Diffraction & Transmission

::body::

<div class="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center [&_img]:max-h-[min(78vh,100%)] [&_img]:max-w-full [&_img]:object-contain">

<img src="/diffraction-transmission.svg" alt="Diffraction Transmission" style="width: auto; height: 450px;">

</div>

<!--
- Diffraction & Transmission
-->

---
layout: header-body
---

### 声音衰减 Sound Attenuation

::body::

<div class="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center [&_img]:max-h-[min(78vh,100%)] [&_img]:max-w-full [&_img]:object-contain">

<img src="/sound-attenuation.svg" alt="Sound Attenuation" style="width: auto; height: 450px;">

</div>

<!--  -->

---
layout: header-body
---

### 音频空间化

::body::

<div class="grid grid-cols-2 gap-6">
  <div class="flex justify-center items-center">
    <img src="/object-based-positioning.svg" alt="Object Based Positioning" style="width: auto; height: 220px;">
  </div>
  <div class="flex justify-center items-center">
    <img src="/space-partition.svg" alt="Space Partition" style="width: auto; height: 220px;">
  </div>
  <div class="flex justify-center items-center">
    <img src="/diffraction-transmission.svg" alt="Diffraction Transmission" style="width: auto; height: 220px;">
  </div>
  <div class="flex justify-center items-center">
    <img src="/sound-attenuation.svg" alt="Sound Attenuation" style="width: auto; height: 220px;">
  </div>
</div>

<!--
https://www.audiokinetic.com/en/wwise/wwise-spatial-audio/
-->

---
layout: header-body
---

### 现成的解决方案

[Wwise Spatial Audio](https://www.audiokinetic.com/en/wwise/wwise-spatial-audio/)

::body::

![](/what-is-wwise-spatial-audio.png)

<!-- <iframe 
  src="https://www.audiokinetic.com/en/wwise/wwise-spatial-audio/" 
  width="100%" 
  height="420px" 
  style="border: none;">
</iframe> -->

<!--  -->

---
layout: header-body
---

### Wwise Spatial Audio Demo

::body::

<div class="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center [&_img]:max-h-[min(78vh,100%)] [&_img]:max-w-full [&_img]:object-contain">

<p class="text-sm opacity-70">演示视频已迁出 <code>slides/public</code>（见仓库 <code>vidTemp/</code>），此处暂不内嵌播放以减小 CI 构建体积。</p>

</div>

<!--  -->

---
layout: header-body
---

### Wwise Spatial Audio Demo

::body::

<div class="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center [&_img]:max-h-[min(78vh,100%)] [&_img]:max-w-full [&_img]:object-contain">

<p class="text-sm opacity-70">演示视频已迁出 <code>slides/public</code>（见仓库 <code>vidTemp/</code>），此处暂不内嵌播放以减小 CI 构建体积。</p>

</div>

<!--  -->

---
layout: header-body
---

### Spatial Audio Signal Flow

::body::

<div class="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center [&_img]:max-h-[min(78vh,100%)] [&_img]:max-w-full [&_img]:object-contain">

![](/spatial-audio-signal-flow.png){style="height: 450px"}

</div>

<!--
- https://www.audiokinetic.com/en/library/edge/?source=SDK&id=soundengine_obsocc.html
-->

---
layout: header-body
---

### Acoustic Environments Recreation
Room & Portal + Raycast

::body::

<div class="grid grid-cols-2 gap-6">

<div>

![](/src/audio-spatialization/Wwise_Room_Portal_Texture_02.png){style="height: 100%"}

</div>

<div>

![](/src/audio-spatialization/SOP_Wwise_3D_Viewer.png){style="height: 100%"}

</div>

</div>

<!--  -->

---
layout: header-body
---

### Acoustic Environments Recreation
Wave Physics Simulation

::body::

<div class="grid grid-cols-2 gap-6">

<div>

Modeling wave effects like occlusion, obstruction, portaling and reverberation in complex scenes without requiring manual zone markup or CPU intensive raytracing.  
Similar to static lighting bake detailed physics offline to provide a physical baseline and use a lightweight runtime with expressive design controls to meet artistic goals.

![](/src/audio-spatialization/triton.gif){style="height: 200px"}

</div>

<div>

![](/src/audio-spatialization/ProjectAcoustics-GDC2019-01.png){style="height: 180px"}

![](/src/audio-spatialization/ProjectAcoustics-GDC2019-02.png){style="height: 180px"}

</div>

</div>

<!--
- [What is Project Acoustics?](https://docs.microsoft.com/en-us/gaming/acoustics/what-is-acoustics)
- [Project Acoustics - Game Developers Conference 2019](https://www.youtube.com/watch?v=uY4G-GUAQIE)
-->

---
layout: header-body
---

### Wave Physics Simulation Demo

::body::

<div class="flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center [&_iframe]:max-h-[min(78vh,100%)] [&_iframe]:w-full">

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=727071638&bvid=BV1fS4y1q7ty&cid=734954302&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 450px;"></iframe>

</div>

<!--  -->

---
layout: statement
---

#### 音频空间化是还原和创造数字声学空间的底层框架。
Audio spatialization is the fundamental framework for recreating and designing digital acoustic spaces.