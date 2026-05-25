# Draft - Audio Spatialization 音频空间化

## 目标

- Stem: `audio-spatialization`
- Slide 文件: `slides/pages/audio-spatialization.md`
- 标准资源文件夹: `slides/public/audio-spatialization/`
- 当前阶段: B complete / ready for C with placeholders

## 仓库状态

- `slides/pages/audio-spatialization.md`: missing / to create from confirmed page plan
- `slides/public/audio-spatialization/`: exists; currently contains `triton.gif`, `wwise_spatial_audio_profile_3p.mp4`, `wwise_spatial_audio_simple_demo.mp4`
- 已有来源文档:
  - `slides/drafts/legacy/audio-spatialization.md`: legacy reference only; do not edit directly
  - `slides/public/src/audio-spatialization/`: legacy asset references found; verify before reuse
  - `website/docs/...`: none confirmed
  - 其他参考:
    - GAD article: Microsoft Project Acoustics 声波物理模拟测试
    - Wwise Spatial Audio documentation and blog posts
    - Snowdrop GPU Raytracing for Audio public materials
    - Steam Audio documentation
    - Microsoft Project Acoustics / Project Triton materials
    - 自己项目案例: 自研射线检测 / propagation -> 参数映射 -> 音频侧处理

## 专题主线

现实空间中的声音传播非常复杂。游戏音频空间化要做的不是完整复刻物理世界，而是用一套可实时计算、可设计控制的工程近似，让玩家在虚拟空间里听见方向、距离、遮挡、环境和空间关系。

这套 deck 的核心问题是：游戏如何把真实声学空间抽象成可计算的系统，并最终服务玩家的空间判断，尤其是“听声辨位”这类玩法体验。

## 已确认的结构决策

- 新建 `slides/drafts/draft-audio-spatialization.md` 作为 active draft，legacy 草稿只作为参考。
- 开场使用“双引子”：
  - 先放一个游戏“听声辨位”视频吸引注意。
  - 再放一个现实声音传播视频，展示真实声音传播的复杂性。
- HRTF 单独成章，放在方案案例组之后，作为空间计算结果到双耳听感的桥接。
- “听声辨位”游戏案例放在最后做综合分析；开头可先使用同一类 gameplay clip 作为 hook。
- Raycast 章节讲到“可理解的工程原理和参数映射”，不深入数学算法或引擎源码。
- 方案案例组顺序: Wwise Spatial Audio -> 自己项目案例 -> Snowdrop GPU Raytracing for Audio -> Project Acoustics。
- Project Acoustics 作为区别于常规运行时几何检测路线的对照方案，使用用户准备的视频，先按 1 页规划。
- Steam Audio 只在 HRTF 章节作为 HRTF / spatializer 案例，不作为传播方案主例。

## 术语边界

- 第 3、4 节不把 `Room / Portal` 作为通用基础术语提前突出。
- 更中性的基础抽象使用：
  - 听者 Listener
  - 声源 Emitter / Source
  - 场景几何 Scene Geometry
  - 声学区域 Acoustic environment / zone
  - 传播路径 Propagation Path
  - 材质 Material
  - 障碍物 Obstacle: 作为某条传播路径中由几何对象承担的角色，而不是和 Geometry 并列的基础对象
- `Room / Portal` 可以在 Wwise Spatial Audio 方案中正式引入，作为 Wwise 对“声学区域与连接关系”的具体实现方式。
- Wwise Spatial Audio 不应简单说成“本质上就是射线检测”。更准确的表述是：Wwise Spatial Audio 组合了基于几何的可见性与传播路径计算、diffraction、early reflection，以及 Rooms/Portals 这种作者定义的环境传播和混响路由模型。
- Project Acoustics / Triton 更适合作为另一条路线说明：离线波动声学模拟或烘焙，再在运行时查询并映射到 occlusion、portaling、reverb 等参数。

## 大纲

1. 开场：为什么玩家能听声辨位？
   - 关键点: 用游戏视频先建立问题意识；玩家听到的不只是左右声像，还有距离、遮挡、空间和材质线索。
   - 案例: 需要选择一个具体游戏片段，最好能清楚展示通过声音判断敌人位置或空间关系。

2. 真实世界的声音传播为什么复杂？
   - 关键点: 现实声音会同时发生直达、衰减、遮挡、透射、衍射、反射和混响。
   - 案例: 现实视频例子，展示隔墙、拐角、门洞、室内外或复杂空间中的声音变化。

3. 音频空间化要解决什么？
   - 关键点: 定位、距离衰减、遮挡、透射与衍射、反射与混响、空间边界。
   - 案例: 可借鉴 legacy 中已有的旧图示，但需要重新组织叙事。

4. 游戏如何把声学空间抽象成可计算对象？
   - 关键点: Listener / Emitter、Scene Geometry、Propagation Path、Parameter Mapping。
   - 案例: 使用中性示意图说明“游戏并不直接模拟所有空气振动，而是抽象出少量可计算关系”。

5. 基于几何的路径检测与声学参数映射
   - 关键点: 直达声路径、可见性 / 遮挡检测、绕射或间接路径近似、早期反射、参数映射。
   - 参数映射: 音量、低通滤波、距离衰减、wet/dry、reverb send、early reflection level、virtual source position 等。
   - 边界: 不深入数学算法或引擎源码。

6. 现成方案主例：Wwise Spatial Audio
   - 关键点: Wwise Spatial Audio 不是单纯 raycast，而是几何传播、diffraction、early reflection、Rooms/Portals 和混响路由的组合方案。
   - 重点: 到这里再引入 Rooms and Portals，说明它们如何把声学区域和开口关系产品化给设计师使用。
   - 结构: 先用一页 on-click 交互图示讲清楚 Listener & Emitter、Room & Portal、Diffraction、Transmission、Reverb、Reflect；再起一页放用户后续准备的视频。
   - 案例: 旧稿中的 Room/Portal 图示只作为构图参考；标准目录现有 Wwise MP4 暂不作为本章节素材决策依据。

7. 自己项目案例：自研传播检测与参数映射
   - 关键点: 引擎内根据 Listener / Emitter 打射线，检测出遮挡、路径、距离、材质、环境等参数，再把这些参数传回 Wwise 驱动声音变化和效果。
   - 重点: 入手点是减少手动配置和不规则 volume 带来的人力成本；作为匿名自研方案案例，解释“引擎侧检测 -> 参数回传 -> Wwise 内驱动音频效果”的工程链路；这里不提前引入 HRTF 或 Steam Audio。
   - 案例: 不公开项目名，不使用真实项目截图或视频；使用 HTML / CSS / inline SVG mockup 图表达方案思路。

8. Snowdrop GPU Raytracing for Audio
   - 关键点: 公开的大型自研引擎案例，使用 GPU raytracing / raytracing query system 做 sound propagation。
   - 重点: 接在自研方案后面，说明当项目规模变成开放大世界、几何复杂度和性能需求更高时，声音传播计算会更依赖 raytracing 和 GPU；同时保留 Massive 文章中提到的 hybrid system 和 hand placed data 边界。
   - 案例: GDC `GPU Raytracing for Audio in Snowdrop` 及 Massive 官方文章，关联 Avatar: Frontiers of Pandora / Star Wars Outlaws。

9. 对照方案：Project Acoustics / Triton
   - 关键点: 与运行时几何检测不同，Project Acoustics 更像静态光照烘焙：离线做波动声学模拟，再把结果压缩成运行时可查询的声学参数。
   - 重点: 说明它适合讲 occlusion、portaling、reverb、diffraction 等效果如何由离线物理模拟生成基础数据。
   - 结构: 拆成两页。第一页用图片和文字解释离线模拟 / bake / runtime lookup 路线；第二页放用户准备的视频。
   - 案例: GAD 旧文《Microsoft Project Acoustics 声波物理模拟测试》、`triton.gif`、用户后续准备的视频，以及 Microsoft / GDC 相关材料。

10. HRTF：空间计算结果如何变成耳机里的方向感？
   - 关键点: 先说明传统非 HRTF 方案通常如何做声像、距离和多声道定位，再引出 ITD、ILD、耳廓滤波、前后 / 上下判断、外化感、个体化差异。
   - 重点: HRTF 在本课中是从空间音频系统到 binaural rendering 的桥接；先建立“传统方案能做什么、缺什么”的基线，再讲 HRTF 如何补充方向和外化线索。不展开 SOFA 数据、测量方法或插件细节；Steam Audio 在这里作为 HRTF / spatializer 案例，不作为前面传播方案主例。

11. 回到听声辨位：一次完整的空间听觉拆解
   - 定位: 作为单独 section，不只是结尾总结页。
   - 关键点: 玩家如何综合利用方向、距离、遮挡、混响、材质和 HRTF 线索判断声音来源。
   - 案例: 使用开头的游戏片段或另一个更清晰的 gameplay clip 进行回收分析。

## Page Plan

Stage B 已完成。逐页计划已覆盖 purpose、visible title、key text、media、layout intent 和 speaker notes；用户已确认所有缺失素材和未定细节可先以 placeholder 进入 Stage C 实现。当前页表没有 `needs-user` 或 `blocked` 项。

| # | Purpose | Visible title | Key text | Media | Layout intent | Speaker notes | Status |
|---|---------|---------------|----------|-------|---------------|---------------|--------|
| 1 | 建立专题身份和主题范围 | 音频空间化 / Audio Spatialization | “听声辨位”是如何实现的？ | none | cover | 开场说明本课会从玩家体验倒推游戏如何重建可玩的空间听觉 | confirmed |
| 2 | 进入第一章：讲解音频空间化的原理、抽象和实现流程 | 从声音传播到空间化系统 | none | none | section | 第一章不是具体案例，而是从声音传播现象推到游戏音频空间化系统 | confirmed |
| 3 | 用游戏视频 hook 吸引注意 | TBD: 等游戏视频素材确定后命名 | 只用 callout class 放视频标题，不额外放提问 | Placeholder: gameplay clip showing player locating sound by listening | full-media / video + callout title | 不先解释技术，让学生先形成直觉问题 | placeholder |
| 4 | 从现实声音传播引出复杂性 | 现实中的声音传播 | 定位、直达声 / 距离衰减、遮挡 / 透射、衍射 / 绕射、反射、混响 | Missing: real-world sound propagation clip | video + key points | 视频之外露出声音传播关键点，为后续“游戏如何近似实现”铺垫 | placeholder |
| 5 | 把现实传播现象转译成游戏音频空间化目标 | 游戏里要重建哪些空间线索？ | 方向、距离、遮挡、环境、路径 | Self-made Slidev native diagram: real acoustic phenomena -> game spatial cues | question / mapping | 从“真实声音怎么传播”转向“游戏需要计算和控制哪些线索”；图示只建立概念映射，不展开任何产品术语 | confirmed |
| 6 | 建立空间音频计算的两个基本对象 | Listener / Emitter | 谁在听？谁在发声？位置、朝向、距离和相对关系 | Self-made Slidev native diagram: listener, emitter, orientation, distance | diagram / two-object model | 强调这是后续定位、衰减和路径检测的基础；画面保持中性，不绑定 Unity / Unreal / Wwise 表达 | confirmed |
| 7 | 说明场景中哪些对象和属性会影响声音传播 | Scene Geometry | 阻挡物、墙体、房间 / 区域、门窗通路、材质、动态几何 / 状态变化 | Self-made Slidev native diagram: neutral scene cutaway with geometry labels | diagram / labeled scene | Material 放在 geometry 这一页，作为几何对象的声学属性；房间、区域和通路先作为中性几何组织方式，不提前使用 Wwise Rooms / Portals 术语 | confirmed |
| 8 | 说明路径检测如何把 Listener / Emitter 与 Scene Geometry 联系起来 | Propagation Path | 直达路径、遮挡检测、绕射路径、反射路径、多段路径；具体实现可能是 raycast、ray tracing、pathing 或 probe lookup | Self-made Slidev native diagram: direct, blocked, diffracted, reflected paths | diagram / step-by-step | 不把传播路径简化成一条直线；强调不同方案会用不同方式估计声音如何到达听者 | confirmed |
| 9 | 说明路径检测结果如何交给音频侧继续处理 | Parameter Mapping | 距离、可见性 / 遮挡程度、路径长度、路径方向、反射 / 绕射信息、所在环境 -> 音量、LPF / EQ、reverb send、wet / dry、virtual source position、spread | Self-made Slidev native diagram: propagation data -> audio parameters | mapping / table-like | 这是从几何计算到可听结果的转译层，为后续 Wwise 和 Project Acoustics 案例铺垫 | confirmed |
| 10 | 用 Wwise Spatial Audio 的一张交互图对应前面的通用原理 | Wwise Spatial Audio | Listener & Emitter; Room & Portal; Diffraction; Transmission; Reverb; Reflect | Self-made on-click Slidev native diagram based on user's old drawio-style reference | interactive concept diagram | 这一页先讲概念关系，不放视频；用点击顺序逐步显露 Wwise 如何组织听者、声源、房间、门户和多种传播 / 环境效果 | confirmed |
| 11 | 用视频展示 Wwise Spatial Audio 概念在工具或场景中的实际效果 | Wwise Spatial Audio Demo | Placeholder: 根据用户后续准备的视频命名和补充说明 | User will prepare video later; ignore current standard-directory Wwise MP4s for now | full-media / video + brief caption | 这一页放在概念页之后，用视频承接刚讲过的 Listener / Emitter、Room / Portal、Diffraction、Transmission、Reverb、Reflect | placeholder |
| 12 | 用匿名自研方案说明引擎侧射线检测如何降低手动配置成本并驱动 Wwise 音频效果 | 自研射线检测方案 | 为什么要从手动配置 / 不规则 volume 转向自研检测？Engine-side Listener / Emitter ray queries -> detected parameters -> Wwise RTPC / States / Switches / Sends / Effects | Self-made HTML mockup diagram; no real project name, screenshot, or video | pipeline diagram + bullet questions / anonymous case study | 方案思路是用引擎侧检测减少手动配置和不规则 volume 的人力成本；引擎根据 Listener 和 Emitter 打射线，检测遮挡、距离、路径、材质和环境等参数，再传回 Wwise 驱动音量、滤波、混响发送、状态切换等声音变化 | confirmed |
| 13 | 用 Snowdrop 展示开放大世界和高性能需求下更依赖 GPU raytracing 的公开案例 | Snowdrop GPU Raytracing for Audio | Open-world scale; varied geometry; hardware-accelerated raytracing; raytracing query system; sound propagation; hybrid system; hand-placed data | User will provide screenshots from the downloaded GDC lecture PDF; pair with sourced text summary | case study / PDF screenshots + sourced keyword overview | 这一页从“规模和性能压力”入手：开放大世界和复杂几何让手工规则更难维护，也让 GPU raytracing 更有价值；文字只写公开材料和 PDF 截图能支撑的点，不展开未核验的实现细节 | confirmed |
| 14 | 用 Project Acoustics 展示不同于实时几何检测的波动声学路线 | Project Acoustics / Triton | Wave-based simulation; Offline bake; Probe / acoustic data; Runtime parameter lookup; Occlusion / Portaling / Reverb; Design controls | `slides/public/audio-spatialization/triton.gif`; optional supporting screenshots if user adds them later | image + text explanation / route comparison | 说明它不是实时 raycast，而是离线波动声学模拟 / 烘焙，再在运行时查询并映射为传统音频参数；和前面的 Wwise / 自研 / Snowdrop 实时检测路线形成对照 | confirmed |
| 15 | 用视频展示 Project Acoustics / Triton 的实际效果或操作过程 | Project Acoustics Demo | Placeholder: 根据用户后续准备的视频命名和补充说明 | User will prepare Project Acoustics video later | full-media / video + brief caption | 视频页放在概念解说页之后，用实际画面承接离线 bake、probe / acoustic data、runtime lookup 和效果变化 | placeholder |
| 16 | 进入 HRTF 章节，承接“空间计算结果如何被听见” | 从空间计算到双耳听感 | TBD: section subtitle | none | section | 前面讲的是传播和参数；这里开始讲耳机里的方向感如何被渲染出来 | confirmed |
| 17 | 说明传统非 HRTF 空间化通常如何实现，以及它的感知边界 | 不用 HRTF 时怎么做空间化？ | Panning; distance attenuation; spread; speaker layout / surround routing; reverb send; front-back / elevation / externalization limits | Self-made Slidev native comparison diagram | baseline concept diagram | 先建立传统方案基线：它能提供左右声像、距离和环境感，但在耳机双耳听感中对前后、上下和头外感支持有限，为下一页 HRTF 做铺垫 | confirmed |
| 18 | 解释 HRTF 提供哪些双耳定位线索 | HRTF | ITD; ILD; pinna filtering; front-back / up-down cues; externalization; individual differences | Self-made Slidev native diagram: source -> head / ears -> binaural render -> headphones | concept diagram | 不展开 SOFA 数据、测量方法或插件参数；重点是为什么同一个方向需要经过头部和耳廓相关滤波才能形成双耳空间感 | confirmed |
| 19 | 用 Steam Audio 说明项目中 HRTF / binaural rendering 的工具角色 | Steam Audio HRTF | Game / audio event -> Steam Audio Spatializer -> HRTF-based binaural rendering -> headphones; custom HRTF / SOFA support as optional note | Self-made pipeline diagram; optional Steam Audio docs screenshot if useful | case study / HRTF tool pipeline | 这一页只把 Steam Audio 作为 HRTF / binaural spatializer 案例，不展开它的 propagation、reflection、pathing 等能力；其他 HRTF/spatializer 方案可在备注中提到 Meta XR Audio, Oculus Spatializer, Resonance Audio, atmoky Ears | confirmed |
| 20 | 进入独立的听声辨位案例分析章节 | 听声辨位 | 从玩家经验回到系统拆解：我们到底听到了什么？ | none | section | 这是单独 section，不只是前面内容的结尾；开始从玩家听觉判断反推空间音频系统 | confirmed |
| 21 | 用配图建立听声辨位案例场景 | 案例：听声辨位 | Placeholder: 根据用户准备的图片说明场景、玩家位置、声源位置和要判断的问题 | User will prepare image | image + case setup text | 这页不是视频页，而是配图案例说明；先让观众知道接下来要分析的空间判断任务 | placeholder |
| 22 | 讨论如何判断声源的方位和距离 | 如何判断声源的方位和距离？ | Direction & distance: panning / binaural cues, distance attenuation, high-frequency loss, early reflections, visual context | Self-made analysis overlay or simple diagram | question analysis | 从玩家听感出发解释方向和距离判断；连接前面的 Listener / Emitter、distance attenuation、parameter mapping 和 HRTF | placeholder |
| 23 | 讨论如何判断声源是否和玩家有阻挡 | 如何判断声源是否和我有阻挡？ | Occlusion, diffraction, transmission, low-pass / EQ, volume attenuation, indirect path | Self-made analysis overlay or simple diagram | question analysis | 重点解释“听起来被挡住”来自哪些线索：直达声变弱、高频损失、绕射路径、透射过滤和间接路径 | placeholder |
| 24 | 讨论如何判断声源在室内还是室外 | 如何判断声源在室内还是室外？ | Reverb, reflections, room tone, early / late reflection pattern, environmental sends | Self-made analysis overlay or simple diagram | question analysis | 把室内外判断落到反射密度、混响尾巴、空间包围感和环境发送，而不是只说“有混响” | placeholder |
| 25 | 讨论如何判断声源在楼上还是楼下 | 如何判断声源是在楼上还是楼下？ | HRTF elevation cues, filtering, obstruction through floor / ceiling, material texture, footsteps / surface cues | Self-made analysis overlay or simple diagram | question analysis | HRTF 提供上下方向线索，但还要结合楼板遮挡、材质质感、脚步/碰撞等内容线索 | placeholder |
| 26 | 讨论音频空间化之外仍会影响听声辨位的系统问题 | 还有哪些额外要考虑的点？ | Sound event trigger logic; priority; voice limiting; mix hierarchy; masking; gameplay readability | Self-made priority / mix diagram | question analysis / design constraints | 说明听声辨位不只靠空间化算法，还受声音事件何时触发、哪些声音优先、混音层级和可读性影响 | placeholder |
| 27 | 把听声辨位问题回收到前面讲过的系统链路 | 从听感回到系统 | Propagation Path -> Parameter Mapping -> Spatializer / HRTF -> Event priority / Mix -> Player judgement | Self-made summary mapping diagram | synthesis / system recap | 最后一页把方向、距离、遮挡、环境、HRTF、事件触发和混音映射回整套空间化系统，形成课程闭环 | placeholder |

## Stage B Completion Check

- Page plan covers slides 1-27.
- All pages are marked `confirmed` or `placeholder`.
- No pages are marked `needs-user` or `blocked`.
- User confirmed placeholder implementation is acceptable for missing media and unresolved asset details.
- Stage C may create `slides/pages/audio-spatialization.md` using clear placeholders for missing videos, images, and selected screenshots.

## Diagram Plan: 第 5-9 页通用原理图

这组图统一使用自制的 Slidev 原生图示，优先用 HTML / CSS / SVG inline elements 实现，不先依赖 Figma、draw.io 或外部图片。目标是先把教学逻辑跑通，并保持视觉风格、颜色、标注方式一致；如果后续某张图需要独立复用，再抽成 SVG 放入 `slides/public/audio-spatialization/`。

| Slide | Diagram idea | Visual structure | Must show | Avoid |
|-------|--------------|------------------|-----------|-------|
| 5 | 空间线索映射 | 左侧“真实传播现象”，右侧“游戏需要重建的空间线索”，中间用箭头连接 | Direction, Distance, Occlusion, Environment, Path | 不引入具体引擎、插件或算法 |
| 6 | Listener / Emitter 双对象模型 | 一个听者图标、一个声源图标，标出 forward direction、relative vector、distance | Listener position / orientation; Emitter position; relative distance and angle | 不讨论房间、墙体或路径检测，避免提前复杂化 |
| 7 | Scene Geometry 场景几何 | 简化俯视或剖面空间：墙体、门洞、区域、材质标签、动态门状态 | Geometry, material, zone / area, opening, dynamic state | 不使用 Wwise Rooms / Portals 作为通用术语 |
| 8 | Propagation Path 多路径 | 同一 Listener / Emitter 场景中画出直达、被遮挡、绕射、反射路径 | Direct path, blocked path, diffraction / around-corner path, reflection path, possible multi-segment path | 不把路径检测说成只有 raycast；不展开数学推导 |
| 9 | Parameter Mapping 输入输出 | 左侧 propagation data，右侧 audio parameters，中间 mapping layer | Distance, visibility / occlusion, path length / direction, reflection / diffraction info, environment -> volume, LPF / EQ, reverb send, wet / dry, virtual source position, spread | 不把参数映射说成唯一标准表；强调按项目和工具链设计 |

实现建议：

- 第 5-9 页先用 Slidev 页面内的图示结构实现，减少资源文件维护成本。
- 颜色上区分三类信息：几何 / 空间关系、传播路径、音频参数。
- 所有图示都保持“通用抽象”口径，厂商术语留到 Wwise、Snowdrop、Project Acoustics、Steam Audio 等案例页再出现。
- 若后续需要导出独立图像，再把已确认的图形抽成 SVG 资产。

## Diagram Plan: 第 10 页 Wwise Spatial Audio 交互图

第 10 页先不放视频，目标是用一张可逐步显露的图讲清楚 Wwise Spatial Audio 的核心概念如何协同工作。用户提供的旧 drawio 风格图可作为构图参考：左侧 Listener，右侧 Emitter，场景中有 Room A / Room B、Portal A / Portal B，以及绕射、透射、反射、混响等可视化路径或区域。

建议使用 Slidev 原生 HTML / CSS / inline SVG 实现，而不是先导出静态图片。这样 Stage C 可以用 `v-click` 或分层元素做到逐步讲解，也方便后续微调文案和路径颜色。

点击顺序：

1. `Listener & Emitter`: 先出现听者、声源、相对方向与距离，承接前面的通用 Listener / Emitter 模型。
2. `Room & Portal`: 再出现 Room A / Room B 与 Portal A / Portal B，说明 Wwise 用房间和开口组织声学区域与连接关系。
3. `Diffraction`: 显示绕过墙角或门洞边缘的路径，强调声音不只有直线可见路径。
4. `Transmission`: 显示穿过墙体或障碍物的路径，配合说明材质和阻隔会影响声音过滤与衰减。
5. `Reverb`: 显示房间内的环境声场或 aux / reverb send 区域，说明房间环境如何影响混响路由。
6. `Reflect`: 显示早期反射路径或虚拟反射方向，说明 Reflect / early reflections 提供空间表面线索。

视觉约定：

- 使用统一俯视图：白色墙体 / 房间边界，橙色或高亮线表示 portal，Listener / Emitter 使用简单图标或标签。
- 路径颜色建议固定：direct / listener-emitter 关系用中性白或灰，diffraction 用蓝，transmission 用红或橙，reflect 用绿，reverb 用半透明黄色环或区域。
- 不在这一页做操作教程，不展示 Wwise UI；只讲概念、关系和听感结果。
- 第 11 页再放用户后续准备的视频，用来展示工具或场景中的实际效果。

## Diagram Plan: 第 12 页自研射线检测方案

第 12 页不公开项目名，也不展示实际项目截图或视频。目标是用一张 mockup 图说明一个常见的自研方案：空间关系和射线检测在引擎侧完成，检测结果以参数形式传给 Wwise，再由 Wwise 驱动实际的声音变化和效果。

建议使用 Slidev 原生 HTML / CSS / inline SVG 实现一张“引擎侧 -> 参数层 -> Wwise 侧”的横向 pipeline 图。

视觉结构：

| Area | Content | Visual idea |
|------|---------|-------------|
| Engine scene | Listener, Emitter, Geometry, ray queries | 左侧画一个简化俯视场景：听者、声源、墙体 / 门洞 / 材质块，几条 ray 或 fan-shaped query 表示检测 |
| Detected parameters | Distance, occlusion, line of sight, material, room / zone, path length | 中间放参数卡片或数据包，表示引擎检测结果不是直接“声音”，而是一组可传递参数 |
| Wwise control | RTPC, States, Switches, Aux / Reverb Sends, Effects | 右侧画 Wwise 控制层 mockup，用参数驱动 Volume, LPF / EQ, Reverb Send, Wet / Dry, Effect intensity |

讲解顺序：

1. 引擎侧已有 Listener、Emitter 和 Scene Geometry。
2. 自研系统从 Listener / Emitter 出发打射线或做 query，得到可见性、遮挡程度、距离、路径和环境信息。
3. 这些检测结果被整理成参数，而不是在引擎里直接生成最终听感。
4. 参数传回 Wwise，驱动 RTPC、State、Switch、Aux Send 或效果器参数。
5. 最终听感变化包括音量、低通 / EQ、混响发送、干湿比例和其他空间效果。

补充展开方式：

这一页可以在图示旁边放一组 bullet 问句，说明当项目不直接使用 Wwise 内置 Spatial Audio 方案，而是改成自研射线检测 / propagation 后，需要自己承担哪些工程问题：

- 为什么要从手动配置 / 不规则 volume 转向自研检测？哪些配置最花人力？
- Listener 和 Emitter 的采样频率、更新时机和性能预算怎么定？
- 射线检测要测哪些信息：直达可见性、遮挡比例、路径长度、材质、房间 / 区域，还是更多？
- 多条 ray / 多个 hit result 怎么合成为稳定的 occlusion、transmission、reverb send 等参数？
- 参数变化如何平滑，避免遮挡、滤波或混响在移动中抖动？
- 哪些逻辑放在引擎侧，哪些交给 Wwise RTPC、State、Switch、Aux Send 或 Effect 参数？
- 自研系统如何给声音设计师保留可调空间，而不是把所有听感写死在代码里？
- debug 和验证怎么做：如何看到射线、参数值和最终 Wwise 侧响应是否一致？

边界：

- 不公开项目名称、截图、视频、关卡结构或真实 debug overlay。
- 不展示源码或具体算法细节。
- 不把这页讲成 Wwise Spatial Audio 的内置方案；它是“项目自研 propagation + Wwise 参数驱动”的工程路径。
- 图示可以使用假 UI / mockup 数据，例如 `occlusion=0.72`, `distance=18m`, `material=concrete`, `reverbSend=0.45`，但要避免暗示这是某个真实项目的原始数据。

## Source Notes: 第 13 页 Snowdrop GPU Raytracing

第 13 页的入手点不是“另一个普通 raycast 方案”，而是作为第 12 页的规模化对照：当项目变成开放大世界、几何形态复杂、声源和动态遮挡更多、性能预算更紧时，声音传播计算更需要借助 raytracing 和 GPU。用户已下载 GDC 讲座 PDF，后续会从 PDF 中截取适合页面，配合文字内容说明。

公开资料中可直接支撑的表述：

- Massive 文章说明 Snowdrop 团队使用 ray tracing 做 sound propagation，声音 ray 会 bounce around and propagate sound。
- Massive 文章说明 Avatar: Frontiers of Pandora 的森林、树木、叶子、灌木等复杂几何让旧有城市环境方案不够适合。
- Massive 文章说明最终是 hybrid system，主要依赖 Ray Tracing solution，同时仍使用已有 hand placed data，例如 inside spaces 和 doors 的 volumes。
- Massive 文章说明把部分过程从 CPU 移到 GPU，可以更快创建和采样更多 rays，并释放 CPU。
- GDC Vault 摘要说明 talk 会介绍 Snowdrop 的 audio raytracing、raytracing query system、sound propagation，以及 Avatar: Frontiers of Pandora 和 Star Wars Outlaws 中的使用。

第 13 页应避免写成确定事实的内容：

- 不写具体性能数据，除非后续拿到 GDC 正文或视频中的明确数字。
- 不写具体参数映射细节，除非有公开来源。
- 不把 raytracing 描述成完全取代手工 authoring；Massive 公开文章明确说是 hybrid system。
- PDF 截图只作为讲座内容佐证，不额外改写为 PDF 中没有明确支持的实现细节。

## Page Plan: 第 14-15 页 Project Acoustics / Triton

Project Acoustics / Triton 作为前面实时几何检测与 GPU raytracing 路线之外的对照：它更接近“离线模拟 / 烘焙 + 运行时轻量查询”。讲法上应强调路线差异，而不是把它误讲成另一种实时 raycast。

第 14 页：图片和文字解说

- 使用 `slides/public/audio-spatialization/triton.gif` 作为主要视觉素材。
- 文字重点：`wave-based simulation`、`offline bake`、`probes / acoustic data`、`runtime lookup`、`occlusion / portaling / reverb parameters`、`design controls`。
- 推荐版式：左侧图片，右侧文字流程：`Scene + Materials -> Bake -> Acoustic Data / Probes -> Runtime Parameter Lookup -> Audio Controls`。
- 讲解边界：不展开 Project Acoustics 的安装和具体操作；重点是方法论对照。

第 15 页：视频

- 使用用户后续准备的视频。
- 视频页只保留简短标题和 caption，承接上一页的“离线 bake / runtime lookup”概念。
- 如果视频更偏操作流程，caption 可以强调这是工具链示例；如果视频更偏听感对比，caption 可以强调运行时参数如何改变 occlusion、portaling、reverb。

## Diagram Plan: 第 17-18 页传统空间化与 HRTF

第 17 页先讲传统非 HRTF 空间化的实现情况，第 18 页再讲 HRTF 的双耳定位线索。两页应形成“基线 -> 补充”的关系，而不是把 HRTF 直接孤立成一个术语介绍。

第 17 页：不用 HRTF 时怎么做空间化？

- 图示建议：左侧为游戏声源和听者，右侧为常见音频控制链：`Panning -> Distance Attenuation -> Spread -> Reverb Send -> Speaker / Headphone Output`。
- 可见文字重点：传统方案能做左右声像、距离衰减、声像宽度、环境混响发送和多声道 / 环绕路由。
- 对比边界：在耳机双耳听感中，单纯 panning 和 attenuation 很难稳定提供前后、上下和头外感；这不是说传统方案无用，而是说明它缺少头部和耳廓相关的个体化滤波线索。
- 避免：不要把非 HRTF 方案说成“错误方案”；它仍然是很多项目和平台中的基础空间化方法。

第 18 页：HRTF

- 图示建议：一个头部 / 双耳简图，声源从不同方向到达左右耳，标出 `ITD`、`ILD`、`pinna filtering`，再输出到 headphones。
- 可见文字重点：ITD 提供到达时间差，ILD 提供响度差，耳廓滤波帮助前后 / 上下判断，externalization 影响声音是否在头外。
- 讲解边界：不展开 SOFA 数据、测量流程、个体化建模或插件参数；只解释为什么 HRTF 是从空间计算到耳机双耳听感的桥。

## Page Plan: 第 19 页 Steam Audio HRTF

第 19 页只把 Steam Audio 作为 HRTF / binaural spatializer 的工具案例，不展开它也具备的 propagation、reflection、pathing 等能力。前面已经讲过传播系统，这里要保持主线集中在“空间计算结果如何被渲染成耳机里的双耳信号”。

建议图示：

- `Game / Audio Event`
- `Source direction + direct sound parameters`
- `Steam Audio Spatializer`
- `HRTF-based binaural rendering`
- `Headphones / L-R output`

可见文字重点：

- Steam Audio Spatializer 在这里承担 final spatial rendering / binaural rendering 的角色。
- 输入侧可以来自游戏和音频系统已有的 source position、direction、distance、direct sound 等信息。
- 输出侧是适合耳机播放的 binaural signal。
- `custom HRTF / SOFA support` 可以作为扩展点提到，但不展开测量和数据格式。

边界：

- 不讲 Steam Audio propagation 作为本 deck 的传播方案主例。
- 不把 Steam Audio 和 Wwise Spatial Audio、Project Acoustics 放在同一类传播系统里比较。
- 可在 speaker notes 中顺带列其他 HRTF / spatializer 工具：Meta XR Audio, Oculus Spatializer, Resonance Audio, atmoky Ears。

## Page Plan: 第 20-27 页听声辨位 Section

“听声辨位”作为独立 section，而不是普通结尾总结。它的作用是回到玩家体验：玩家并不是在脑中识别某个插件或算法，而是在综合方向、距离、遮挡、环境、材质和双耳线索判断声音来源。

第 20 页：section

- 标题：`听声辨位`
- 作用：从前面“系统如何计算空间”切换到“玩家如何利用空间听觉判断”。
- 可见文案可保留一句问题：`我们到底听到了什么？`

第 21 页：案例配图说明

- 使用用户后续准备的图片。
- 图片用于建立场景、玩家位置、声源位置、楼层/室内外/阻挡关系等基础信息。
- 页面以“案例说明”为主，不做视频播放页。

第 22 页：如何判断声源的方位和距离？

- 关键词：direction & distance。
- 讨论方向线索：左右声像、双耳线索、HRTF、朝向变化。
- 讨论距离线索：音量衰减、高频衰减、直达声 / 环境声比例、反射线索。

第 23 页：如何判断声源是否和我有阻挡？

- 关键词：occlusion, diffraction, transmission。
- 讨论阻挡线索：直达声变弱、高频损失、低通 / EQ、绕射路径、透射过滤。
- 连接前面的 Propagation Path 和 Parameter Mapping。

第 24 页：如何判断声源在室内还是室外？

- 关键词：reverb and reflections。
- 讨论环境线索：反射密度、混响尾巴、空间包围感、room tone、environment send。
- 避免只把室内外差异简化成“混响大 / 小”。

第 25 页：如何判断声源是在楼上还是楼下？

- 关键词：HRTF + extra material texture。
- 讨论上下线索：HRTF elevation cues、耳廓滤波、楼板遮挡、材质质感、脚步和碰撞的内容线索。
- 强调上下判断通常不是单一算法结果，而是双耳线索与内容线索的综合。

第 26 页：其他音频空间化额外要考虑的点

- 关键词：声音事件触发逻辑与优先级、游戏音频混音。
- 讨论哪些声音应该触发、何时触发、同屏/同区域多个声音如何分配优先级、哪些声音会被 masking。
- 强调即使空间化计算正确，如果事件逻辑和混音优先级不清楚，玩家仍然听不出关键信息。

第 27 页：系统回收

- 用一张 summary mapping diagram 把案例线索映射回系统链路：
  `Propagation Path -> Parameter Mapping -> Spatializer / HRTF -> Event Priority / Mix -> Player judgement`
- 作用是形成课程闭环：真实传播复杂，游戏用可计算抽象生成可用线索；事件触发和混音决定哪些线索真正被玩家听见；玩家再把这些线索转化为空间判断。

## Media Assets

| Need | Existing asset | Placeholder | Status |
|------|----------------|-------------|--------|
| 游戏听声辨位开场视频 |  | Gameplay clip showing player locating sound by listening | missing |
| 现实声音传播复杂性视频 |  | Real-world clip showing occlusion, reflection, diffraction, or room transition | missing |
| 第 5-9 页通用原理图 | None needed initially; implement as self-made Slidev native diagrams | Later extract to SVG only if reuse is needed | confirmed |
| Wwise Spatial Audio 概念交互图 | User-provided old drawio-style reference image in chat; legacy drawio may be used as visual reference only | Implement as self-made on-click Slidev native diagram | confirmed |
| Wwise Spatial Audio demo 视频 | User will prepare a new video later | Ignore current standard-directory Wwise MP4s for this page unless user reselects them | placeholder |
| 自研射线检测方案图示 | No real project asset; use anonymous HTML mockup diagram | Engine Listener / Emitter ray queries -> detected parameters -> Wwise-driven sound changes | confirmed |
| Snowdrop GPU Raytracing for Audio 资料 | `slides/public/audio-spatialization/GPU Raytracing for Audio in Snowdrop GDC2025.pdf`; user will provide selected screenshots later | Pair 1-3 PDF screenshots with sourced text summary from Massive article / GDC abstract | confirmed / pending selected screenshots |
| Project Acoustics / Triton 图片解说 | `slides/public/audio-spatialization/triton.gif`; GAD article text exists but image files were not found in repo search | Use for page 14 image + text explanation; optional extra screenshots only if user adds them later | confirmed |
| Project Acoustics / Triton 视频 | User will prepare video later | Use for page 15 full-media demo | placeholder |
| 传统非 HRTF 空间化图示 | None needed initially; implement as self-made Slidev native diagram | Show panning / attenuation / spread / reverb send / speaker or headphone output and its limits | confirmed |
| HRTF / binaural rendering 图示 | None needed initially; implement as self-made Slidev native diagram | Show ITD / ILD / pinna filtering / externalization through a simple perceptual diagram | confirmed |
| Steam Audio HRTF 案例素材 | None needed initially; implement self-made pipeline diagram, optional Steam Audio docs screenshot if useful | Use as HRTF / spatializer example only, not full propagation-system example; optional comparison: Meta XR Audio, Oculus Spatializer, Resonance Audio, atmoky Ears | confirmed |
| 听声辨位 section 案例配图 | User will prepare image | Use for page 21 case setup: player, source, blocking, room / outdoor, floor relationship | placeholder |
| 听声辨位问题拆解图 | None needed initially; can use annotated screenshot or self-made overlays | Pages 22-26: direction / distance, obstruction, indoor / outdoor, upstairs / downstairs, event priority / mix | placeholder |

## Asset Audit: audio-spatialization

当前标准资源目录 `slides/public/audio-spatialization/` 已有素材：

| Asset | Likely use | Notes | Status |
|-------|------------|-------|--------|
| `triton.gif` | Project Acoustics / Triton 对照方案页 | 可作为“离线波动声学模拟 / 烘焙数据”视觉辅助；需要确认来源和是否配合用户准备的视频使用 | available |
| `wwise_spatial_audio_profile_3p.mp4` | Not selected for current Wwise page plan | 用户已说明标准目录素材先不用管；除非后续重新选择，否则不作为第 10-11 页素材依据 | available / deferred |
| `wwise_spatial_audio_simple_demo.mp4` | Not selected for current Wwise page plan | 用户已说明标准目录素材先不用管；除非后续重新选择，否则不作为第 10-11 页素材依据 | available / deferred |

Legacy draft 引用但当前未在标准目录中找到的素材：

| Legacy reference | Intended use in old draft | Current decision |
|------------------|---------------------------|------------------|
| `/what-is-wwise-spatial-audio.png` | Wwise Spatial Audio overview | Not found; replace with existing Wwise MP4, official docs screenshot, or self-made keyword overview |
| `/spatial-audio-signal-flow.png` | Spatial audio signal flow | Not found; likely replace with self-made Slidev native diagram or redraw from `slides/public/src/char-foley/spatial-audio-signal-flow.drawio` if relevant |
| `/src/audio-spatialization/Wwise_Room_Portal_Texture_02.png` | Wwise Rooms / Portals visual | Not found; use only if user supplies it again or replace with official reference / self-made simplified Room-Portal diagram |
| `/src/audio-spatialization/SOP_Wwise_3D_Viewer.png` | Wwise 3D Viewer screenshot | Not found; existing Wwise MP4 may replace this if it shows the profiler / 3D viewer clearly |
| `/src/audio-spatialization/ProjectAcoustics-GDC2019-01.png` | Project Acoustics GDC support screenshot | Not found; do not depend on it unless re-added |
| `/src/audio-spatialization/ProjectAcoustics-GDC2019-02.png` | Project Acoustics GDC support screenshot | Not found; do not depend on it unless re-added |

Legacy source files found under `slides/public/src/audio-spatialization/`:

| Source file | Relevance | Current decision |
|-------------|-----------|------------------|
| `sound-positioning.drawio` | Old channel-based / object-based positioning diagram source | Reference only; current page 5-9 diagrams should be self-made in Slidev first |
| `space-partition.drawio` | Old space partition diagram source | Reference only; avoid introducing product-specific Room / Portal terminology too early |
| `reflect-reverb-diffraction-transmission.drawio` | Old reflection / reverb / diffraction / transmission source | Reference only; may inspire the Propagation Path diagram, but not used as-is |
| `sound-attenuation.drawio` | Old attenuation diagram source | Reference only; distance attenuation will be handled as part of spatial cues / parameter mapping |

No local files found yet for:

- Snowdrop GPU Raytracing for Audio screenshots or clips.
- HRTF / binaural rendering diagrams.
- Steam Audio HRTF / spatializer screenshots.
- Opening / final “听声辨位” gameplay clip.
- Real-world sound propagation clip.
- Real project screenshots or videos for the self-developed raycast case; intentionally not needed because this page will use an anonymous HTML mockup.

## Reference Links

### Wwise Spatial Audio

- Wwise Acoustics / Spatial Audio overview: https://www.audiokinetic.com/library/edge/?id=spatial__audio.html
- Rooms and Portals in Wwise Spatial Audio: https://www.audiokinetic.com/blog/rooms-and-portals-with-wwise-spatial-audio/
- Wwise Spatial Audio workflow in Scars Above: https://blog.audiokinetic.com/wwise-spatial-audio-implementation-workflow-in-scars-above/
- Obstruction and Occlusion with game-defined auxiliary sends: https://www.audiokinetic.com/en/public-library/2024.1.6_8842/?id=soundengine_obsocc.html

### Snowdrop GPU Raytracing for Audio

- GDC Vault - GPU Raytracing for Audio in Snowdrop: https://www.gdcvault.com/play/1035485/GPU-Raytracing-for-Audio-in
- Massive Entertainment - Ray Tracing Audio in Snowdrop: https://www.massive.se/article/ray-tracing-audio-in-snowdrop-creating-a-living-pandora/

### Project Acoustics / Triton

- GAD article - Microsoft Project Acoustics 声波物理模拟测试: https://gad.soundoer.com/microsoft-project-acoustics-wave-physics-simulation-playtest/
- Microsoft Research - Project Triton: https://www.microsoft.com/en-us/research/project/project-triton/
- Research Spotlight - Project Acoustics: https://developer.microsoft.com/en-us/games/articles/2020/08/research-spotlight-project-acoustics/
- Project Acoustics GitHub: https://github.com/microsoft/ProjectAcoustics

### HRTF / Binaural Spatializers

- Steam Audio SDK: https://valvesoftware.github.io/steam-audio/doc/capi/index.html
- Steam Audio Unreal guide: https://valvesoftware.github.io/steam-audio/doc/unreal/guide.html
- Meta XR Audio SDK features: https://developers.meta.com/horizon/documentation/unity/meta-xr-audio-sdk-features/
- Oculus Spatializer features: https://prod.developers.meta.com/horizon/documentation/native/audio-spatializer-features/
- Resonance Audio Unity developer guide: https://resonance-audio.github.io/resonance-audio/develop/unity/developer-guide
- Resonance Audio Unreal getting started: https://resonance-audio.github.io/resonance-audio/develop/unreal/getting-started
- atmoky Ears for Wwise: https://www.audiokinetic.com/en/blog/atmoky-ears-hyper-realistic-headphone-spatial-audio-plug-in/

## 开放问题

- [x] 开场游戏“听声辨位”视频先用 placeholder 实现；后续再替换具体素材，是否复用结尾案例素材暂不阻塞 Stage C。
- [x] 现实声音传播视频先用 placeholder 实现；后续再替换具体素材，具体突出遮挡、门洞、拐角、混响或综合现象暂不阻塞 Stage C。
- [x] 第 5-9 页的通用原理图使用自制中性示意图：空间线索映射、Listener / Emitter、Scene Geometry、Propagation Path、Parameter Mapping；Stage C 优先用 Slidev 原生图示实现。
- [x] Wwise Spatial Audio 章节先拆为两页：第 10 页用自制 on-click 图示讲 Listener & Emitter、Room & Portal、Diffraction、Transmission、Reverb、Reflect；第 11 页再放用户后续准备的视频。
- [x] 自研射线检测方案不公开项目名、截图、视频或 debug overlay；第 12 页使用匿名 HTML mockup 图表达 Engine ray queries -> detected parameters -> Wwise-driven sound changes。
- [x] Snowdrop GPU Raytracing for Audio 使用 GDC PDF 截图 + Massive/GDC 来源文字归纳；后续等待用户从 PDF 中选择 1-3 张截图。
- [x] Project Acoustics / Triton 拆成两页：第 14 页用 `triton.gif` 和文字解说离线 bake / runtime lookup 路线；第 15 页放用户后续准备的视频。
- [x] HRTF 前新增一页传统非 HRTF 空间化基线；HRTF 页使用简化双耳渲染图讲 ITD、ILD、pinna filtering、externalization，不展开 SOFA 或测量细节。
- [x] Steam Audio HRTF 章节只作为 HRTF / binaural spatializer 工具案例；优先自制 pipeline 图，可选官方文档截图，不展开 propagation / reflection / pathing。
- [x] 听声辨位作为独立 section：第 20 页 section，第 21 页配图案例说明，第 22-26 页分别讨论方向距离、阻挡、室内外、楼上楼下、事件触发与混音，第 27 页系统回收。
