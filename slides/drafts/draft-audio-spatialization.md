# Draft - Audio Spatialization 音频空间化

## 目标

- Stem: `audio-spatialization`
- Slide 文件: `slides/pages/audio-spatialization.md`
- 标准资源文件夹: `slides/public/audio-spatialization/`
- 当前阶段: A

## 仓库状态

- `slides/pages/audio-spatialization.md`: exists / to rewrite from new outline
- `slides/public/audio-spatialization/`: missing
- 已有来源文档:
  - `slides/drafts/legacy/audio-spatialization.md`: legacy reference only; do not edit directly
  - `slides/public/src/audio-spatialization/`: legacy asset references found; verify before reuse
  - `website/docs/...`: none confirmed
  - 其他参考:
    - GAD article: Microsoft Project Acoustics 声波物理模拟测试
    - Wwise Spatial Audio documentation and blog posts
    - Steam Audio documentation
    - Microsoft Project Acoustics / Project Triton materials

## 专题主线

现实空间中的声音传播非常复杂。游戏音频空间化要做的不是完整复刻物理世界，而是用一套可实时计算、可设计控制的工程近似，让玩家在虚拟空间里听见方向、距离、遮挡、环境和空间关系。

这套 deck 的核心问题是：游戏如何把真实声学空间抽象成可计算的系统，并最终服务玩家的空间判断，尤其是“听声辨位”这类玩法体验。

## 已确认的结构决策

- 新建 `slides/drafts/draft-audio-spatialization.md` 作为 active draft，legacy 草稿只作为参考。
- 开场使用“双引子”：
  - 先放一个游戏“听声辨位”视频吸引注意。
  - 再放一个现实声音传播视频，展示真实声音传播的复杂性。
- HRTF 放在“环境声学建模之后、最终听感渲染之前”，作为空间计算结果到双耳听感的桥接。
- “听声辨位”游戏案例放在最后做综合分析；开头可先使用同一类 gameplay clip 作为 hook。
- Raycast 章节讲到“可理解的工程原理和参数映射”，不深入数学算法或引擎源码。
- Project Acoustics 作为区别于常规运行时几何检测路线的对照方案，篇幅暂按 1-2 页控制。

## 术语边界

- 第 3、4 节不把 `Room / Portal` 作为通用基础术语提前突出。
- 更中性的基础抽象使用：
  - 听者 Listener
  - 声源 Emitter / Source
  - 场景几何 Geometry
  - 声学区域 Acoustic environment / zone
  - 传播路径 Propagation path
  - 材质与障碍物 Material / obstacle
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
   - 关键点: Listener、Emitter、Geometry、Acoustic environment、Propagation path、Material / obstacle。
   - 案例: 使用中性示意图说明“游戏并不直接模拟所有空气振动，而是抽象出少量可计算关系”。

5. 基于几何的路径检测与声学参数映射
   - 关键点: 直达声路径、可见性 / 遮挡检测、绕射或间接路径近似、早期反射、参数映射。
   - 参数映射: 音量、低通滤波、距离衰减、wet/dry、reverb send、early reflection level、virtual source position 等。
   - 边界: 不深入数学算法或引擎源码。

6. 现成方案主例：Wwise Spatial Audio
   - 关键点: Wwise Spatial Audio 不是单纯 raycast，而是几何传播、diffraction、early reflection、Rooms/Portals 和混响路由的组合方案。
   - 重点: 到这里再引入 Rooms and Portals，说明它们如何把声学区域和开口关系产品化给设计师使用。
   - 案例: 旧稿中的 Wwise demo、Wwise 3D Viewer 或 Room/Portal 图示可作为候选素材，需重新核验资源。

7. 对照方案：Project Acoustics / Triton
   - 关键点: 与运行时几何检测不同，Project Acoustics 更像静态光照烘焙：离线做波动声学模拟，再把结果压缩成运行时可查询的声学参数。
   - 重点: 说明它适合讲 occlusion、portaling、reverb、diffraction 等效果如何由离线物理模拟生成基础数据。
   - 案例: GAD 旧文《Microsoft Project Acoustics 声波物理模拟测试》及 Microsoft / GDC 相关材料。

8. HRTF：空间计算结果如何变成耳机里的方向感？
   - 关键点: ITD、ILD、耳廓滤波、前后 / 上下判断、外化感、个体化差异。
   - 重点: HRTF 在本课中是从空间音频系统到 binaural rendering 的桥接，不展开 SOFA 数据、测量方法或插件细节。

9. 回到听声辨位：一次完整的空间听觉拆解
   - 关键点: 玩家如何综合利用方向、距离、遮挡、混响、材质和 HRTF 线索判断声音来源。
   - 案例: 使用开头的游戏片段或另一个更清晰的 gameplay clip 进行回收分析。

## Page Plan

Stage B 待展开。进入 Stage B 前，需要把上面大纲拆成逐页 slide，并为每页确认 purpose、visible title、key text、media、layout intent 和 speaker notes。

| # | Purpose | Visible title | Key text | Media | Layout intent | Speaker notes | Status |
|---|---------|---------------|----------|-------|---------------|---------------|--------|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## Media Assets

| Need | Existing asset | Placeholder | Status |
|------|----------------|-------------|--------|
| 游戏听声辨位开场视频 |  | Gameplay clip showing player locating sound by listening | missing |
| 现实声音传播复杂性视频 |  | Real-world clip showing occlusion, reflection, diffraction, or room transition | missing |
| 基础空间化要点图示 | Legacy deck references several SVG / drawio assets | Recreate or verify before reuse | replace later |
| Wwise Spatial Audio demo / 3D Viewer 素材 | Legacy deck references Wwise screenshots and demo placeholders | Verify file paths and licensing | replace later |
| Project Acoustics / Triton 资料图 | Legacy deck references `triton.gif` and GDC screenshots | Verify existing assets and source links | replace later |
| HRTF / binaural rendering 图示 |  | Need simple perceptual diagram, not deep technical chart | missing |
| 综合听声辨位案例素材 |  | Could reuse opening gameplay clip if it supports final analysis | missing |

## 开放问题

- [ ] 开场游戏“听声辨位”视频选哪个？是否和结尾综合案例使用同一个片段？
- [ ] 现实声音传播视频选哪个？需要突出遮挡、门洞、拐角、混响，还是多个现象的综合？
- [ ] 第 4、5 节是否需要自制中性示意图，避免过早看起来像 Wwise 教程？
- [ ] Wwise Spatial Audio 章节使用哪些官方图、demo 或旧稿素材？
- [ ] Project Acoustics 章节控制在 1 页还是 2 页？
- [ ] HRTF 是否需要补一个耳机双耳渲染的简化信号流图？
- [ ] 最终听声辨位案例绑定具体游戏，还是保持更通用的“竞技游戏 / 潜行游戏 / FPS”情境？
