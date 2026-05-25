# Draft - Audio Spatialization 音频空间化

## 目标

- Stem: `audio-spatialization`
- Slide 文件: `slides/pages/audio-spatialization.md`
- 标准资源文件夹: `slides/public/audio-spatialization/`
- 当前阶段: B

## 仓库状态

- `slides/pages/audio-spatialization.md`: missing / to create from confirmed page plan
- `slides/public/audio-spatialization/`: missing
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
   - 案例: 旧稿中的 Wwise demo、Wwise 3D Viewer 或 Room/Portal 图示可作为候选素材，需重新核验资源。

7. 自己项目案例：自研传播检测与参数映射
   - 关键点: 自研射线检测负责 Listener / Emitter、Scene Geometry、Propagation Path 和 Parameter Mapping，并把结果交给音频侧处理。
   - 重点: 作为方案案例组的一部分，用自己的项目解释“传播计算 -> 参数映射 -> 音频侧处理”的工程链路；这里不提前引入 HRTF 或 Steam Audio。
   - 案例: 项目名、可展示视频、调试视图和参数链路待确认。

8. Snowdrop GPU Raytracing for Audio
   - 关键点: 公开的大型自研引擎案例，使用 GPU raytracing / raytracing query system 做 sound propagation。
   - 重点: 说明更偏纯射线 / 几何追踪路线如何在大型开放世界项目中落地，同时也保留部分手工数据和设计控制。
   - 案例: GDC `GPU Raytracing for Audio in Snowdrop` 及 Massive 官方文章，关联 Avatar: Frontiers of Pandora / Star Wars Outlaws。

9. 对照方案：Project Acoustics / Triton
   - 关键点: 与运行时几何检测不同，Project Acoustics 更像静态光照烘焙：离线做波动声学模拟，再把结果压缩成运行时可查询的声学参数。
   - 重点: 说明它适合讲 occlusion、portaling、reverb、diffraction 等效果如何由离线物理模拟生成基础数据。
   - 案例: GAD 旧文《Microsoft Project Acoustics 声波物理模拟测试》及 Microsoft / GDC 相关材料。

10. HRTF：空间计算结果如何变成耳机里的方向感？
   - 关键点: ITD、ILD、耳廓滤波、前后 / 上下判断、外化感、个体化差异。
   - 重点: HRTF 在本课中是从空间音频系统到 binaural rendering 的桥接，不展开 SOFA 数据、测量方法或插件细节；Steam Audio 在这里作为 HRTF / spatializer 案例，不作为前面传播方案主例。

11. 回到听声辨位：一次完整的空间听觉拆解
   - 关键点: 玩家如何综合利用方向、距离、遮挡、混响、材质和 HRTF 线索判断声音来源。
   - 案例: 使用开头的游戏片段或另一个更清晰的 gameplay clip 进行回收分析。

## Page Plan

Stage B 正在展开。逐页计划需要为每页确认 purpose、visible title、key text、media、layout intent 和 speaker notes；未确认内容保留 placeholder。

| # | Purpose | Visible title | Key text | Media | Layout intent | Speaker notes | Status |
|---|---------|---------------|----------|-------|---------------|---------------|--------|
| 1 | 建立专题身份和主题范围 | 音频空间化 / Audio Spatialization | “听声辨位”是如何实现的？ | none | cover | 开场说明本课会从玩家体验倒推游戏如何重建可玩的空间听觉 | confirmed |
| 2 | 进入第一章：讲解音频空间化的原理、抽象和实现流程 | 从声音传播到空间化系统 | none | none | section | 第一章不是具体案例，而是从声音传播现象推到游戏音频空间化系统 | confirmed |
| 3 | 用游戏视频 hook 吸引注意 | TBD: 等游戏视频素材确定后命名 | 只用 callout class 放视频标题，不额外放提问 | Placeholder: gameplay clip showing player locating sound by listening | full-media / video + callout title | 不先解释技术，让学生先形成直觉问题 | placeholder |
| 4 | 从现实声音传播引出复杂性 | 现实中的声音传播 | 定位、直达声 / 距离衰减、遮挡 / 透射、衍射 / 绕射、反射、混响 | Missing: real-world sound propagation clip | video + key points | 视频之外露出声音传播关键点，为后续“游戏如何近似实现”铺垫 | placeholder |
| 5 | 把现实传播现象转译成游戏音频空间化目标 | 游戏里要重建哪些空间线索？ | 方向、距离、遮挡、环境、路径 | TBD: simple mapping diagram or text-only | question / mapping | 从“真实声音怎么传播”转向“游戏需要计算和控制哪些线索” | placeholder |
| 6 | 建立空间音频计算的两个基本对象 | Listener / Emitter | 谁在听？谁在发声？位置、朝向、距离和相对关系 | TBD: neutral listener-emitter diagram | diagram / two-object model | 强调这是后续定位、衰减和路径检测的基础 | placeholder |
| 7 | 说明场景中哪些对象和属性会影响声音传播 | Scene Geometry | 阻挡物、墙体、房间 / 区域、门窗通路、材质、动态几何 / 状态变化 | TBD: neutral scene geometry diagram | diagram / labeled scene | Material 放在 geometry 这一页，作为几何对象的声学属性；房间、区域和通路先作为中性几何组织方式，不提前使用 Wwise Rooms / Portals 术语 | confirmed |
| 8 | 说明路径检测如何把 Listener / Emitter 与 Scene Geometry 联系起来 | Propagation Path | 直达路径、遮挡检测、绕射路径、反射路径、多段路径；具体实现可能是 raycast、ray tracing、pathing 或 probe lookup | TBD: path detection diagram | diagram / step-by-step | 不把传播路径简化成一条直线；强调不同方案会用不同方式估计声音如何到达听者 | confirmed |
| 9 | 说明路径检测结果如何交给音频侧继续处理 | Parameter Mapping | 距离、可见性 / 遮挡程度、路径长度、路径方向、反射 / 绕射信息、所在环境 -> 音量、LPF / EQ、reverb send、wet / dry、virtual source position、spread | TBD: input-output mapping diagram | mapping / table-like | 这是从几何计算到可听结果的转译层，为后续 Wwise 和 Project Acoustics 案例铺垫 | confirmed |
| 10 | 用 Wwise Spatial Audio 官方术语对应前面的通用原理 | Wwise Spatial Audio | Geometry; Diffraction & Transmission; Obstruction / Occlusion; Rooms & Portals; Early Reflections / Reflect; Reverb / Aux Sends | User-provided Wwise overview diagram / official reference screenshots TBD | keyword overview + diagram | 作为方案案例组第一例；关键词来自 Wwise Spatial Audio 官方文档和 Audiokinetic blog；配合图示讲解，不展开成操作教程 | confirmed |
| 11 | 用自己的项目说明自研 propagation 如何落到音频侧处理 | 自研射线检测 / Propagation | 自研射线检测 / propagation -> 参数映射 -> 音频侧处理 | Need project name, debug capture, and parameter chain diagram | pipeline diagram / case study | 本页不引入 HRTF 或 Steam Audio；只讲传播计算与音频参数处理链路 | confirmed |
| 12 | 用 Snowdrop 展示大型自研引擎里的 GPU raytracing sound propagation | Snowdrop GPU Raytracing for Audio | Hardware-accelerated raytracing; raytracing query system; sound propagation; hybrid system; hand-placed data / design control | Need GDC / Massive article screenshots or text-only summary | case study / keyword overview | 重点不是把它说成“纯物理自动解决一切”，而是说明 raytracing 可减少手工规则，但大型项目仍会结合手工数据和可控设计 | confirmed |
| 13 | 用 Project Acoustics 展示不同于实时几何检测的波动声学路线 | Project Acoustics | Wave-based simulation; Bake; Probe / acoustic data; Occlusion / Portaling / Reverb parameter lookup; Design controls | User-prepared Project Acoustics video; legacy references `triton.gif` and GDC screenshots | video + keyword overview | 说明它不是实时 raycast，而是离线波动声学模拟 / 烘焙，再在运行时查询并映射为传统音频参数 | confirmed |
| 14 | 进入 HRTF 章节，承接“空间计算结果如何被听见” | 从空间计算到双耳听感 | TBD: section subtitle | none | section | 前面讲的是传播和参数；这里开始讲耳机里的方向感如何被渲染出来 | confirmed |
| 15 | 解释 HRTF 提供哪些双耳定位线索 | HRTF | ITD; ILD; pinna filtering; front-back / up-down cues; externalization; individual differences | TBD: simple head / ear filtering diagram | concept diagram | 不展开 SOFA 数据、测量方法或插件参数；重点是为什么同一个方向需要经过头部和耳廓相关滤波才能形成双耳空间感 | confirmed |
| 16 | 用 Steam Audio 说明项目中 HRTF / binaural rendering 的工具角色 | Steam Audio HRTF | HRTF-based binaural rendering; Spatializer; custom HRTF / SOFA support; used here as final rendering, not propagation | Steam Audio docs / own project routing diagram TBD | case study / pipeline | 作为 HRTF 案例；其他 HRTF/spatializer 方案可在备注中提到 Meta XR Audio, Oculus Spatializer, Resonance Audio, atmoky Ears | confirmed |
| 17+ | 用已有“听声辨位”案例综合回收本课主线 | 听声辨位 | Placeholder: 根据已有案例拆解方向、距离、遮挡、空间环境、HRTF 等线索 | User has existing case material; exact assets TBD | section + case analysis, page count TBD | 具体页数等写作时根据案例素材决定；Stage C 可先用 placeholder 实现 | placeholder |

## Media Assets

| Need | Existing asset | Placeholder | Status |
|------|----------------|-------------|--------|
| 游戏听声辨位开场视频 |  | Gameplay clip showing player locating sound by listening | missing |
| 现实声音传播复杂性视频 |  | Real-world clip showing occlusion, reflection, diffraction, or room transition | missing |
| 基础空间化要点图示 | Legacy deck references several SVG / drawio assets | Recreate or verify before reuse | replace later |
| Wwise Spatial Audio demo / 3D Viewer 素材 | Legacy deck references Wwise screenshots and demo placeholders | Verify file paths and licensing | replace later |
| 自己项目案例素材 |  | Need project name, gameplay/debug capture, and propagation-to-audio parameter chain diagram; do not introduce HRTF here | missing |
| Snowdrop GPU Raytracing for Audio 资料 |  | Need GDC / Massive article screenshots or text-only summary | missing |
| Project Acoustics / Triton 资料图 | Legacy deck references `triton.gif` and GDC screenshots | Verify existing assets and source links | replace later |
| HRTF / binaural rendering 图示 |  | Need simple perceptual diagram, not deep technical chart | missing |
| Steam Audio HRTF 案例素材 |  | Use as HRTF / spatializer example only, not full propagation-system example; optional comparison: Meta XR Audio, Oculus Spatializer, Resonance Audio, atmoky Ears | missing |
| 综合听声辨位案例素材 |  | Could reuse opening gameplay clip if it supports final analysis | missing |

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

- [ ] 开场游戏“听声辨位”视频选哪个？是否和结尾综合案例使用同一个片段？
- [ ] 现实声音传播视频选哪个？需要突出遮挡、门洞、拐角、混响，还是多个现象的综合？
- [ ] 第 5-9 页的通用原理图是否自制中性示意图：空间线索映射、Listener / Emitter、Scene Geometry、Propagation Path、Parameter Mapping。
- [ ] Wwise Spatial Audio 章节使用用户自备图示、官方截图、旧稿素材，还是组合使用？
- [ ] 自己项目案例可公开展示哪些素材：项目名、视频、debug overlay、参数链路、伪代码或架构图。
- [ ] Snowdrop GPU Raytracing for Audio 可使用哪些公开素材：GDC 截图、Massive 文章截图，还是纯文字关键词页。
- [ ] Project Acoustics 使用用户准备的视频；是否补充 legacy `triton.gif` / GDC 截图作为辅助。
- [ ] HRTF 是否需要补一个耳机双耳渲染的简化信号流图。
- [ ] Steam Audio HRTF 章节使用哪些素材：官方 spatializer/HRTF 图、自己的项目 routing 图，还是两者结合。
- [ ] 最终听声辨位案例：用户已有部分案例；具体素材、页数和拆解粒度待写作时确认。
