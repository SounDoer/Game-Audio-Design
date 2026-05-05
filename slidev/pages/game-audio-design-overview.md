---
layout: section
---

## 游戏音频设计概述
**Game Audio Design Overview**

---
layout: default
---

<div class="flex items-center justify-center text-center mt-50">
  <div class="grid grid-cols-3 gap-4">
    <span class="text-red-500 font-bold text-4xl tracking-widest">游戏</span>
    <span class="text-green-500 font-bold text-4xl tracking-widest">音频</span>
    <span class="text-blue-500 font-bold text-4xl tracking-widest">设计</span>
    <span class="text-red-500 font-bold text-2xl tracking-wide">Game</span>
    <span class="text-green-500 font-bold text-2xl tracking-wide">Audio</span>
    <span class="text-blue-500 font-bold text-2xl tracking-wide">Design</span>
  </div>
</div>

<!--概述：游戏·音频·设计-->

---
routeAlias: gad-overview-game
layout: header-body-bg
background: game-poster.png
---

### <span class="text-red-500">游戏</span>
[电子游戏 Video Game](https://en.wikipedia.org/wiki/Video_game)

::body::

<div class="grid grid-cols-2 gap-4">

  <div v-click>

  #### 类型
  - First-Person Shooter / Third-Person Shooter
  - Action / Adventure / Role-Playing
  - Platformer / Metroidvania
  - Multiplayer Online Battle Arena
  - Strategy
  - Simulation
  - Racing
  - Sports
  - ……

  </div v-click>

  <div v-click>

  #### 平台
  - Console
  - PC
  - Mobile
  - ……
  
  </div v-click>

</div>

<!--
- Interactive Media：同样是视听语言的媒介，与其他传统媒体之间的区别？
- 趋势：平台之间的性能差距越来越小，多端游戏涌现
-->

---
routeAlias: gad-overview-audio
layout: header-body-bg
background: bg-image-for-audio.png
---

### <span class="text-green-500">音频</span>

::body::

<div class="grid grid-cols-3 gap-4">

  <div v-click>

  #### 声音内容
  - 音效 Sound Effect
    - 环境
    - 角色
    - 武器
    - ……
  - 音乐 Music
    - 主观音乐
    - 客观音乐
    - ……
  - 语音 Voice
    - 角色
    - 怪物
    - ……

  </div v-click>

  <div v-click>

  #### 实现方式
  - 基于对象的资源制作形式
  - 音频空间化的听者与声源
  - 地图关卡中的物件对象
  - 功能逻辑中的事件节点
  - 动画序列与状态机
  - 材质与物理
  - 互动音乐
  - 语音系统
  - ……

  </div v-click>

  <div v-click>

  #### 管线与规范
  - DAW -> Middleware -> Engine
  - 迭代式开发流程
  - 开发模块之间的分工协作
  - 数据结构与命名规范
  - 海量数据的管理
  - 语音开发管线
  - 不同平台的响度管理
  - ……

  </div v-click>

</div>

<!--
-->

---
routeAlias: gad-overview-design
layout: header-body-bg
background: bg-image-for-design.png
---

### <span class="text-blue-500">设计</span>
声音的“好听”和“有用”

::body::

<div class="grid grid-cols-2 gap-4">

  <div v-click>

  #### 美学性
  与**艺术风格**和**内容表现**相匹配
  - 写实主义 Realism
  - 未来主义 Futurism
  - 幻想 Fantasy
  - 哥特 Gothic
  - 赛博朋克 Cyberpunk
  - 像素风 Pixel Art
  - 低多边形 Low Poly
  - 赛璐珞 Cel-Shading
  - ……

  </div v-click>

  <div v-click>

  #### 功能性
  与**游戏类型**和**玩法机制**相结合
  - Action：即时反馈与打击感
  - RPG / Adventure：角色塑造与叙事推进
  - Sports / Racing：真实的物理反馈
  - PvP：声音信息传递
  - Horror / Survival：心理暗示
  - ……

  </div v-click>

</div>

<!--
-->

---
layout: header-body-two-cols
---

### 听声辨位

::left::

<v-clicks>

- 脚步声是玩家获取信息的重要声⾳
- 游戏内各种类别声⾳的听感⼤⼩和传播距离不同
- 声⾳传播时会受到房间、⻔和障碍物的影响
- 玩家能够根据听到的声⾳来判断声源的距离和⽅位

</v-clicks>

::right::

<img src="/locating-with-sound.png" alt="Locating with Sound" style="width: 100%; height: auto;">

<!--
-->