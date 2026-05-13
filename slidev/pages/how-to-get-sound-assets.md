---
layout: cover
---

::eyebrow::

SOUND ASSETS

::title::

# 如何获取声音素材

::info::

Game Audio Design

<!--
开场先不讲「录音、素材库、委托」这几个答案。
告诉学生：本节课先从一个游戏片段里识别声音模块，再讨论每类素材为什么要用不同方式获取。
-->

---
layout: header-body
---

::eyebrow::

LISTENING FIRST

::title::

### 先看一段游戏录屏

::body::

<div class="h-full flex items-center justify-center border border-dashed border-neutral-700 rounded-lg">
  <div class="text-center max-w-2xl">
    <p class="text-xl text-neutral-200">Gameplay Recording Placeholder</p>
    <p class="text-sm text-neutral-500 mt-3">后续可替换为 <code>/how-to-get-sound-assets/gameplay-placeholder.mp4</code></p>
  </div>
</div>

<!--
课堂操作：播放一段 30-60 秒的游戏录屏。
请学生先不要讨论素材来源，只记录自己听到了哪些声音模块。
-->

---
layout: header-body
---

::eyebrow::

SOUND MAP

::title::

### 把录屏拆成声音模块

::body::

<div class="grid grid-cols-3 gap-4">
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>环境声</h4>
    <p>空间、天气、底噪、远景事件。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>角色拟音</h4>
    <p>脚步、服装、道具、身体动作。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>枪械 / 汽车</h4>
    <p>复杂状态、多层素材、定制录制。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>语音</h4>
    <p>表演、临时台词、TTS、版本管理。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>音乐</h4>
    <p>MIDI Mockup、实录 Session、Stem。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>特殊素材</h4>
    <p>怪物、技能、UI、科幻装置。</p>
  </div>
</div>

<!--
强调：模块识别先于素材来源选择。
同一个游戏片段里，不同模块对独特性、同步、版权、成本的要求不同。
-->

---
layout: statement
---

获取素材，不是找一个文件。

<!--
停顿一下，把问题从「去哪里找」转成「为什么这类声音需要这种来源」。
-->

---
layout: header-body
---

::eyebrow::

DECISION FLOW

::title::

### 一套通用判断顺序

::body::

<div class="grid grid-cols-5 gap-3">
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>职责</h4>
    <p>它在游戏里解决什么问题？</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>替代</h4>
    <p>能否用通用素材近似替代？</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>录制</h4>
    <p>现实中是否能稳定采集？</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>委托</h4>
    <p>是否需要资源、场地或专业团队？</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>入库</h4>
    <p>命名、版权、规格是否可追溯？</p>
  </div>
</div>

<!--
这一页是后面所有类别共用的判断框架。
不要把它讲成固定公式，而是讲成「拿到需求后的追问顺序」。
-->

---
layout: section
---

::backdrop::

Ambience

::eyebrow::

FIELD RECORDING

::title::

## 环境声

::subtitle::

Ambience as a Place

<!--
重点章节之一：环境声用于讲 field recording。
-->

---
layout: header-body
---

::eyebrow::

AMBIENCE LAYERS

::title::

### 环境声不是一条背景音

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>它更像一个空间的分层模型</h4>
    <ul>
      <li>底噪：空气、风、房间、电器、城市低频</li>
      <li>空间特征：反射、遮挡、距离、开阔度</li>
      <li>可识别事件：鸟、车辆、人群、机械、告警</li>
      <li>过渡层：从一个区域进入另一个区域的变化</li>
    </ul>
  </div>
  <div>
    <h4>获取方式要跟层次匹配</h4>
    <ul>
      <li>底层氛围适合实地录音建立真实纹理</li>
      <li>事件层可以用素材库补充密度</li>
      <li>强叙事地点需要定制采集或深度编辑</li>
    </ul>
  </div>
</div>

<!--
用开场录屏回指：同样是「森林」，底噪、鸟、远处水声、风穿过树叶不是同一个素材问题。
-->

---
layout: header-body
---

::eyebrow::

FIELD NEEDS

::title::

### 什么时候必须实地录音

::body::

<div class="grid grid-cols-2 gap-4">
  <div>
    <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=53560078&bvid=BV1E4411s7GR&cid=93696201&p=1&t=997" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="w-full h-48"></iframe>
    <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=66256999&bvid=BV1Y4411m7Bg&cid=114917046&p=1&t=300" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="w-full h-48 mt-4"></iframe>
  </div>
  <div>
    <h4>三个信号</h4>
    <ul>
      <li>地点特征无法被通用素材替代。</li>
      <li>声音承担叙事证据，而不只是填充空间。</li>
      <li>需要一组连续、同质、可循环的素材。</li>
    </ul>
  </div>
</div>

<!--
讲解重点：field recording 不是因为「素材库不好」，而是因为地点本身就是设计对象。
-->

---
layout: header-body
---

::eyebrow::

RECORDING PLAN

::title::

### Field Recording 前要准备什么

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>录什么</h4>
    <ul>
      <li>地点：开阔 / 狭窄、室内 / 室外、自然 / 人造。</li>
      <li>时间：清晨、夜晚、工作日、雨后、风速变化。</li>
      <li>状态：静态底噪、稀疏事件、连续运动。</li>
    </ul>
  </div>
  <div>
    <h4>怎么保证可用</h4>
    <ul>
      <li>避开不可控噪声：施工、广播、路人对话。</li>
      <li>记录 metadata：地点、时间、设备、麦克风指向。</li>
      <li>预留 loop 与剪辑空间，不只录「好听的一小段」。</li>
    </ul>
  </div>
</div>

<!--
可以补一个个人经验：很多环境素材失败不是声音不好，而是没有可循环段、没有足够干净的 room tone、或忘记录制条件。
-->

---
layout: header-body
---

::eyebrow::

LIBRARY AS LAYER

::title::

### 素材库在环境声里怎么用

::body::

<div class="grid grid-cols-3 gap-4">
  <img src="/src/how-to-get-sound-assets/website-boomlibrary-crop.png" class="h-80 object-contain rounded" />
  <img src="/src/how-to-get-sound-assets/website-asoundeffect-crop.png" class="h-80 object-contain rounded" />
  <img src="/src/how-to-get-sound-assets/website-soundly-crop.png" class="h-80 object-contain rounded" />
</div>

<p class="mt-4">素材库适合补层、补事件、补远景；但完整空间仍需要按项目语境重新组织。</p>

<!--
讲解重点：不要把库素材当作「成品环境声」，而是把它作为层。比如底噪来自实地录音，鸟叫、远处车辆、树枝摩擦用库补密度。
-->

---
layout: section
---

::eyebrow::

FOLEY RECORDING

::title::

## 角色拟音

**Action as Performance**

<!--
重点章节之二：用 Foley 讲同步、表演、材质和动作颗粒度。
-->

---
layout: header-body
---

::eyebrow::

BODY & PROP

::title::

### Foley 的对象不是脚步声，是动作

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>角色动作由多层组成</h4>
    <ul>
      <li>脚步：步态、速度、地面材质、负重。</li>
      <li>服装：布料、护甲、装备晃动。</li>
      <li>道具：拔出、握持、碰撞、收纳。</li>
      <li>身体：摔倒、翻滚、攀爬、呼吸。</li>
    </ul>
  </div>
  <div>
    <h4>它需要跟画面一起表演</h4>
    <ul>
      <li>同步点决定可信度。</li>
      <li>力度决定角色重量。</li>
      <li>材质决定世界观信息。</li>
    </ul>
  </div>
</div>

<!--
回避「脚步声下载一套就完了」的误区。
Foley 的关键是动作被重新表演，而不是简单匹配一个文件名。
-->

---
layout: header-body
---

::eyebrow::

PERFORMANCE

::title::

### 为什么 Foley 常常需要录

::body::

<div class="grid grid-cols-2 gap-4">
  <div>
    <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=76029861&bvid=BV1mJ41127Zh&cid=130055471&p=1&t=427" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="w-full h-48"></iframe>
    <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=77526311&bvid=BV1BJ411Q78d&cid=132624948&p=1&t=69" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="w-full h-48 mt-4"></iframe>
  </div>
  <div>
    <h4>素材库难替代的部分</h4>
    <ul>
      <li>连续动作里的节奏与重心。</li>
      <li>角色专属材质组合。</li>
      <li>镜头语言中的夸张与省略。</li>
      <li>同一动作在不同状态下的变化。</li>
    </ul>
  </div>
</div>

<!--
讲解重点：Foley recording 是表演与剪辑共同完成的。
同一个「脚步」在潜行、奔跑、受伤、负重时不是同一个素材问题。
-->

---
layout: header-body
---

::eyebrow::

CUE SHEET

::title::

### Foley 录制清单怎么拆

::body::

<div class="grid grid-cols-4 gap-3">
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>动作</h4>
    <p>走、跑、跳、翻滚、拾取、换装。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>材质</h4>
    <p>皮革、金属、布料、木头、碎石。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>状态</h4>
    <p>轻装、重装、受伤、潜行、湿滑。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>镜头</h4>
    <p>近景强调，远景简化，过场同步。</p>
  </div>
</div>

<p class="mt-6">录制清单不是越长越好，而是要让后期编辑知道每条素材服务哪个动作。</p>

<!--
备注：可以解释 spotting 的概念。先标记画面或动画中的动作点，再决定录什么。
-->

---
layout: header-body
---

::eyebrow::

EDITING LIMITS

::title::

### 库素材在 Foley 里的边界

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>适合用库素材的情况</h4>
    <ul>
      <li>单点撞击、短促道具声。</li>
      <li>远景或弱同步动作。</li>
      <li>临时占位与快速原型。</li>
    </ul>
  </div>
  <div>
    <h4>容易暴露的问题</h4>
    <ul>
      <li>动作连续性断裂。</li>
      <li>材质和角色身份不一致。</li>
      <li>同一套库声在多个项目里产生熟悉感。</li>
    </ul>
  </div>
</div>

<!--
这页作为 Foley 章节收束：库不是不能用，而是要知道它补的是点，不是完整表演。
-->

---
layout: section
---

::eyebrow::

CUSTOM RECORDING

::title::

## 枪械与汽车

**Complex Assets and Vendor Briefs**

<!--
用这章进入复杂定制录音和三方委托。
-->

---
layout: header-body
---

::eyebrow::

COMPLEX SYSTEMS

::title::

### 复杂素材的难点不是声音大

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>难在状态完整</h4>
    <ul>
      <li>同一对象有多种操作状态。</li>
      <li>近、中、远距离都要成立。</li>
      <li>内部、外部、第一人称、第三人称视角不同。</li>
      <li>游戏系统需要可组合、可变化的素材。</li>
    </ul>
  </div>
  <div>
    <h4>难在组织成本</h4>
    <ul>
      <li>场地、许可、安全与时间窗口。</li>
      <li>多麦克风同步与命名管理。</li>
      <li>供应商交付是否能直接进入管线。</li>
    </ul>
  </div>
</div>

<!--
这页把枪械和汽车合在一起讲：它们的共性是「复杂系统的素材采集」，不是音量或刺激感。
-->

---
layout: header-body
---

::eyebrow::

WEAPON ASSET

::title::

### 枪械：一次开火包含多层素材

::body::

<div class="grid grid-cols-3 gap-4">
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>瞬态</h4>
    <p>枪口爆发、机械动作、近距离冲击。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>空间</h4>
    <p>尾音、反射、远景、遮挡后的变化。</p>
  </div>
  <div class="border border-neutral-800 rounded-lg p-4">
    <h4>操作</h4>
    <p>上膛、换弹、弹壳、保险、空仓。</p>
  </div>
</div>

<p class="mt-6">如果只获取「一声枪响」，后面很难支撑游戏里的距离、连发、视角和交互变化。</p>

<!--
可以讲：枪械素材不是一个 wav，而是一套可以被系统重组的素材包。
-->

---
layout: header-body
---

::eyebrow::

VEHICLE ASSET

::title::

### 汽车：不是一条引擎声

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>需要覆盖的状态</h4>
    <ul>
      <li>怠速、启动、熄火、稳定巡航。</li>
      <li>加速、减速、换挡、转速变化。</li>
      <li>轮胎、刹车、悬挂、车身震动。</li>
      <li>内视角、外视角、通过声。</li>
    </ul>
  </div>
  <div>
    <h4>获取策略</h4>
    <ul>
      <li>素材库可用于占位或补充单点事件。</li>
      <li>写实车辆通常需要定制录制或专业库。</li>
      <li>风格化车辆可以用录音与合成层共同构建。</li>
    </ul>
  </div>
</div>

<!--
备注：汽车可以顺带讲循环素材和 RTPC，但不要展开到实现层，保持在「获取素材」范围内。
-->

---
layout: header-body
---

::eyebrow::

VENDOR BRIEF

::title::

### 什么时候找第三方

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>适合委托的信号</h4>
    <ul>
      <li>资源难以自有：枪械、车辆、场地、专业演员。</li>
      <li>安全与许可要求高。</li>
      <li>需要多机位、多麦克风、多状态同步采集。</li>
      <li>内部团队更适合做设计与整合，而不是组织采集。</li>
    </ul>
  </div>
  <div>
    <h4>Brief 里必须写清</h4>
    <ul>
      <li>对象、状态、距离、视角、数量。</li>
      <li>命名规则、采样率、声道、metadata。</li>
      <li>版权、可修改权、交付时间与返工边界。</li>
    </ul>
  </div>
</div>

<!--
强调：三方委托不是「把问题丢出去」，而是把需求翻译成可交付的素材规格。
-->

---
layout: header-body
---

::eyebrow::

VOICE

::title::

### 语音：真人录制与 TTS

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>真人录制</h4>
    <ul>
      <li>适合正式表演、角色塑造、关键剧情。</li>
      <li>需要台词版本、导演、录音规范与后期整理。</li>
      <li>注意演员授权、补录成本和多语言扩展。</li>
    </ul>
  </div>
  <div>
    <h4>TTS</h4>
    <ul>
      <li>适合原型、占位、系统语音或大规模临时内容。</li>
      <li>风险在表演控制、版权边界和角色一致性。</li>
      <li>正式使用前必须明确授权与可商用范围。</li>
    </ul>
  </div>
</div>

<!--
本节略讲。不要展开成完整 VO 课程，只突出「获取方式」和风险。
-->

---
layout: header-body
---

::eyebrow::

MUSIC

::title::

### 音乐：MIDI Mockup 与实录 Session

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>MIDI Mockup</h4>
    <ul>
      <li>用于确认结构、情绪、段落和交互逻辑。</li>
      <li>适合前期沟通，也适合动态音乐系统的原型。</li>
      <li>听感可以接近成品，但不等于最终质感。</li>
    </ul>
  </div>
  <div>
    <h4>实录 Session</h4>
    <ul>
      <li>适合需要演奏质感、真实空间和品牌级表达的项目。</li>
      <li>要提前规划 stem、loop、尾巴、版本和授权。</li>
      <li>交付物必须服务游戏里的动态播放方式。</li>
    </ul>
  </div>
</div>

<!--
提醒：音乐获取不是只拿一首成品混音，而是要拿到能进入游戏系统的结构化交付。
-->

---
layout: section
---

::eyebrow::

SPECIAL SOURCES

::title::

## 特殊素材

**Recording, Synthesis, and Transformation**

<!--
特殊素材章节用于打开边界：现实里没有、或现实声音不足以表达的素材怎么来。
-->

---
layout: header-body
---

::eyebrow::

SOURCE HUNTING

::title::

### 特殊素材从哪里来

::body::

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4>典型对象</h4>
    <ul>
      <li>怪物、技能、魔法、UI、科幻装置。</li>
      <li>材质夸张、尺度异常、现实中不存在的运动。</li>
      <li>需要强风格化，又不能完全脱离物理感。</li>
    </ul>
  </div>
  <div>
    <h4>常见来源</h4>
    <ul>
      <li>录制现实中的可塑素材：金属、动物、液体、摩擦。</li>
      <li>用处理链改变尺度：pitch、time、distortion、granular。</li>
      <li>用合成器补充可控的能量、运动和调性。</li>
    </ul>
  </div>
</div>

<!--
讲解重点：特殊素材不是「随便做怪一点」，而是从现实质感、合成控制和后期变形之间建立来源组合。
-->

---
layout: header-body
---

::eyebrow::

SYNTHESIS

::title::

### 合成器不是最后的装饰

::body::

<div class="grid grid-cols-2 gap-6">
  <div class="grid grid-cols-2 gap-3">
    <img src="/src/how-to-get-sound-assets/Robert-Moog-with-Moog-Synthesizers.jpg" class="h-40 w-full object-cover rounded" />
    <img src="/src/how-to-get-sound-assets/Moog-One-Front.jpg" class="h-40 w-full object-cover rounded" />
    <img src="/src/how-to-get-sound-assets/massive-x.jpg" class="h-40 w-full object-cover rounded" />
    <img src="/src/how-to-get-sound-assets/reaktor-6.jpg" class="h-40 w-full object-cover rounded" />
  </div>
  <div>
    <h4>它解决的是可控性</h4>
    <ul>
      <li>现实中不存在的声源。</li>
      <li>需要跟参数、动作或界面状态同步变化。</li>
      <li>需要稳定复现同一类能量、调性或运动轨迹。</li>
      <li>和录音层叠后，让声音既有质感又有设计方向。</li>
    </ul>
  </div>
</div>

<!--
可以用 UI、技能充能、科幻门、魔法命中作为例子。
强调合成器不是「电子味」，而是获取可控素材的一种方式。
-->

---
layout: end
---

从来源回到资产。

命名、metadata、版权记录、采样率、声道、版本与可追溯性，决定素材能否真正进入项目。

<!--
不要总结成「今天讲了录音、素材库、委托」。
收束到：声音素材的获取最终要成为项目资产，而不是散落的文件。
-->