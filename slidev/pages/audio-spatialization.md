---
layout: section
---

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
layout: header-body-two-cols
---

### 声像定位 Sound Positioning

::left::

<div v-click>
    Channel-Based
    <img src="/channel-based-positioning.svg" alt="Channel Based Positioning" style="width: auto; height: 420px;">
</div>

::right::

<div v-click>
    Object-Based
    <img src="/object-based-positioning.svg" alt="Object Based Positioning" style="width: auto; height: 420px;">
</div>

<!--
- Listener & Emitter
-->

---
layout: header-body-center
---

### 空间划分 Space Partition

::body::

<img src="/space-partition.svg" alt="Space Partition" style="width: auto; height: 450px;">

<!--
- 使用 Volume 来界定 Region、Room 和 Portal 等
-->

---
layout: header-body-center
---

### 反射与混响 Reflect & Reverb

::body::

<img src="/reflect-reverb.svg" alt="Reflect-Reverb" style="width: auto; height: 450px;">

<!--  -->

---
layout: header-body-center
---

### 衍射与透射 Diffraction & Transmission

::body::

<img src="/diffraction-transmission.svg" alt="Diffraction Transmission" style="width: auto; height: 450px;">

<!--
- Diffraction & Transmission
-->

---
layout: header-body-center
---

### 声音衰减 Sound Attenuation

::body::

<img src="/sound-attenuation.svg" alt="Sound Attenuation" style="width: auto; height: 450px;">

<!--  -->

---
layout: header-body-center
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
layout: header-body-center
---

### Wwise Spatial Audio Demo

::body::

<video controls width="85%">
  <source src="/wwise_spatial_audio_simple_demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--  -->

---
layout: header-body-center
---

### Wwise Spatial Audio Demo

::body::

<video controls width="85%">
  <source src="/wwise_spatial_audio_profile_3p.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--  -->

---
layout: header-body-center
---

### Spatial Audio Signal Flow

::body::

![](/spatial-audio-signal-flow.png){style="height: 450px"}

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
layout: header-body-center
---

### Wave Physics Simulation Demo

::body::

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=727071638&bvid=BV1fS4y1q7ty&cid=734954302&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 450px;"></iframe>

<!--  -->

---
layout: statement
---

#### 音频空间化是还原和创造数字声学空间的底层框架。
Audio spatialization is the fundamental framework for recreating and designing digital acoustic spaces.