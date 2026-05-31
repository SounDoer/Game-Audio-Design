# Draft - Ambience Sound Design 环境声设计

## 目标

- Stem: `ambience-sound-design`
- Slide 文件: `slides/pages/ambience-sound-design.md`
- 资源文件夹: `slides/public/ambience-sound-design/`
- 当前阶段: B（进行中 — Part 1 完成，Part 2 停在 section 页）

## 仓库状态

- `slides/pages/ambience-sound-design.md`: missing
- `slides/public/ambience-sound-design/`: missing
- 已有来源文档:
  - `slides/drafts/legacy/ambience-sound-design.md`: legacy reference only; do not edit
  - 其他参考: none

## 专题主线

以一个实际参与过的开放世界自然场景项目为案例主线，从篝火这一个局部小系统切入，逐步拉远到全场景的环境声设计：资产的三种基本形态（random / loop / blend）→ 2D/3D 空间拆分 → Reaper 制作实操 → 地图摆放方式 → 动态系统（ToD / Weather / 玩家行为驱动）→ 最终上升到设计思辨（authentic 边界、与其他模块的关系、频段管理、性能、情感叙事、可测试性）。

叙事节奏为「微观资产 → 场景系统 → 设计理念」。

## 大纲

### Part 1 — 资产制作基础

以一个营地篝火（属于后面自然场景的一部分）为切入口，讲解环境声资产最基础的三种形态。

1. **篝火：random / loop / blend**
   - 关键点:
     - loop：持续燃烧的底噪，可无缝循环
     - random：间歇的噼啪爆裂声，单次触发 + 随机间隔
     - blend 纵向：不同强度的火焰素材层之间的叠加与混音（小火 / 旺火 / 残焰等多层同时播放，按比例混合）
     - blend 横向：不同状态或时间阶段之间的交叉渐变过渡（如从旺火渐变为残焰、从燃起到熄灭的完整过程），通过 RTPC 或时间线驱动层与层之间的权重变化
   - 案例: 营地篝火，用户准备截图或视频

### Part 2 — 场景实战

以自然场景项目展开完整的环境声设计链路。

2. **2D / 3D 声音拆分**
   - 关键点:
     - 2D Bed：全场景的背景氛围层（风、远处虫鸣、环境底噪），不参与空间定位
     - 3D 声源：具体可定位的环境事件（近处水流、特定位置的鸟叫、树木摇晃），参与空间化
     - 为什么要这么拆分：性能、空间感层次、设计可控性
   - 案例: 用户准备的项目截图

3. **Reaper 制作实操**
   - 关键点:
     - 根据上述 2D/3D 拆分，在 Reaper 中制作的具体素材和 session 结构
     - 提供试听音频和操作视频
   - 案例: 用户准备的 Reaper 截图、音频和视频

4. **地图摆放方式**
   - 关键点:
     - 点声源：固定位置的单点 3D 声源
     - 线声源：沿路径分布的连续声源（如河流）
     - 体声源：区域内的体积声源（如森林区域）
     - 随机声源：在区域内随机 scatter 的触发点
     - 3D 化的 2D Bed：在 2D 背景层上叠加 3D 位置信息
     - 每种类型配合图例和视频
   - 案例: 用户准备的项目图例和视频

5. **动态系统：ToD + Weather**
   - 关键点:
     - 昼夜循环：不同时段的声景切换（清晨鸟鸣 → 正午蝉噪 → 黄昏虫鸣 → 夜间静谧 + 夜行动物）
     - 天气变化：晴天 / 阴天 / 雨天 / 风暴的声景差异（雨声、雷声、风声增强、生物行为变化）
     - 空间上的差异：同一时刻不同区域（山顶 / 山谷 / 洞穴 / 水边）的 ToD/Weather 表现不同
     - 参数映射：RTPC 驱动的过渡和平滑
   - 案例: 用户准备的项目截图或视频

6. **动态系统：玩家行为驱动**
   - 关键点: TBD — 用户后续补充具体例子
   - 案例: 用户后续决定

### Part 3 — 设计思辨

从具体案例中抽离出通用设计原则。

7. **Authentic 的边界**
   - 关键点:
     - 游戏环境声不需要 1:1 还原现实
     - 什么该保留、什么该放大、什么该去掉
     - 「真实感」服务于玩家体验，不是服务于声学测量
   - 案例: 结合前面的自然场景做对照

8. **环境声与其他声音模块的关系**
   - 关键点:
     - 环境声 vs 语音、脚步、枪声、UI 等模块的相互影响
     - 环境声在混音层级中的位置和退让策略
   - 案例: 用户项目中的实际场景

9. **频段管理与混音**
   - 关键点:
     - 环境声容易在低频和中频堆积，如何与其他模块分配频段
     - sidechain / ducking / 静态混音层级等策略
   - 案例: 可结合频谱分析图示

10. **性能与预算**
    - 关键点:
      - 环境声常是 asset 数量大户：voice count、streaming、距离剔除、LOD 策略
      - 随机声源的实例数量管理
    - 案例: 用户项目中的实际预算分配

11. **情感叙事**
    - 关键点:
      - 环境声不只是背景，同一场景在不同时间 / 天气 / 叙事节点下的声景承载不同的情感温度
      - 黄昏的虫鸣和清晨的鸟叫在叙事上的差异
    - 案例: 用户项目中的具体例子

12. **可测试性**
    - 关键点:
      - 设计师如何验证环境声在游戏中的表现没有盲区
      - 遍历测试、观察点跑图、debug overlay 等实践
    - 案例: 用户项目中的测试经验

## Page Plan

| # | Purpose | Visible title | Key text | Media | Layout intent | Speaker notes | Status |
|---|---------|---------------|----------|-------|---------------|---------------|--------|
| 1 | 建立专题身份和主题范围 | 环境声设计 / Ambience Sound Design | 从一个项目案例展开环境声设计的完整链路 | none | cover | 开场说明本课以实际项目为线索，从资产制作到场景系统到设计理念 | confirmed |
| 2 | 进入 Part 1：以营地篝火为切入口讲解资产制作基础 | 篝火的声音 | Random、Loop & Blend | none | section | 篝火是后面自然场景的一部分，先拆局部再拉全场景 | confirmed |
| 3 | 建立篝火场景的第一印象 | TBD | TBD | 营地篝火截图 | fullscreen-media | 用项目中的实际篝火画面先让观众建立感性认知 | confirmed |
| 4 | 讲解 loop 的制作特点 | 无缝循环的声音片段 | TBD（左侧三层行式结构：Loop / Random / Blend，当前高亮 Loop；右侧固定图片区） | loop 层资产截图 | header-body（左文右图） | TBD | confirmed |
| 5 | 讲解 random 的制作特点 | 间歇触发的随机片段 | TBD（同模板，当前高亮 Random） | random 层资产截图 | header-body（左文右图） | TBD | confirmed |
| 6 | 讲解 blend 纵向：素材层叠加 | 纵向层叠：多层的混合 | TBD（同模板，当前高亮 Blend 纵向） | blend 纵向资产截图 | header-body（左文右图） | TBD | confirmed |
| 7 | 讲解 blend 横向：状态/时间过渡 | 横向过渡：状态的渐变 | TBD（同模板，当前高亮 Blend 横向） | blend 横向资产截图 | header-body（左文右图） | TBD | confirmed |

## Media Assets

| Need | Existing asset | Placeholder | Status |
|------|----------------|-------------|--------|
| 营地篝火全屏截图 |  | 用户后续准备（第 3 页 fullscreen-media） | missing |
| loop 层资产截图或音频 |  | 用户后续准备（第 4 页） | missing |
| random 层资产截图或音频 |  | 用户后续准备（第 5 页） | missing |
| blend 纵向资产截图 |  | 用户后续准备（第 6 页） | missing |
| blend 横向资产截图 |  | 用户后续准备（第 7 页） | missing |
| 自然场景项目截图 |  | 用户后续准备 | missing |
| Reaper session 截图 |  | 用户后续准备 | missing |
| 试听音频 |  | 用户后续准备 | missing |
| Reaper 操作视频 |  | 用户后续准备 | missing |
| 点声源 / 线声源 / 体声源 / 随机声源 / 3D Bed 图例 |  | 用户后续准备 | missing |
| 地图摆放视频 |  | 用户后续准备 | missing |
| ToD / Weather 截图或视频 |  | 用户后续准备 | missing |
| 玩家行为驱动素材 |  | TBD 等用户确定具体例子 | missing |
| 频段管理频谱图 |  | 用户后续准备或自制 | missing |
| 性能预算相关截图 |  | 用户后续准备 | missing |

## 开放问题

- [ ] 玩家行为驱动的具体例子（用户自己决定，后续补充）
- [ ] Part 3 设计思辨节是否需要回到案例做一个完整的 walkthrough 收束
- [ ] 第 7 点之后是否还有未想到的章节（用户说还没想好）
