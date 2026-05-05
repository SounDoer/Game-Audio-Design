---
layout: section
---

## 环境声设计
**Ambience Sound Design**

<!--  -->

---
layout: image
image: aigc-forest-cabin.png
---

<!--  -->

---
layout: header-body-bg
background: aigc-forest-cabin.png
---

### 这个场景包含了哪些声音元素

::body::

- 森林中的风
- 树叶摇晃
- 树枝断裂
- 溪流
- 篝火
- 夜晚虫鸣
- 夜行鸟类
- 其他生物
- ……

<!--  -->

---
layout: header-body-bg
background: aigc-forest-cabin.png
---

### 需要考虑哪些因素

::body::

<div class="grid grid-cols-4 gap-4" v-clicks>

<div>

- 世界观
  - 时代背景
  - 地理区域
  - 类型与风格
  - …

</div>

<div>

- 声音种类
  - 风
  - 水
  - 植被
  - 生物
  - ……

</div>

<div>

- 资产规格
  - 可循环的 / 单次触发的
  - 声道数目
    - Quad
    - Stereo
    - Mono
  - 2D / 3D 声源
    - 点声源
    - 线声源
    - 体声源
    - 随机声源
    - ……

</div>

<div>

- 其他
  - 风的强度和方向
  - 水流缓急
  - 昼夜交替
  - 平面和高度上的考量
  - ……

</div>

</div>

<!--
- 空间上的分布，近中远
- 时间上的分布，大响度声音之后的鸟和虫的声音如何变化
-->

---
layout: header-body-bg
background: aigc-forest-cabin.png
---

### 规划声音资产

::body::

<div class="table-auto border-collapse border border-gray-400 text-sm">

| Name | Quantity | Duration | Asset Type | Emitter Type |
|-|-:|-:|-:|-:|
| AMB_Forest_2D_Wind_Gentle | 1 | 30s | Quad / Loop | 2D |
| AMB_Forest_2D_Insect_Group_Night | 1 | 30s | Quad / Loop | 2D |
| AMB_Forest_3D_Tree_Rustle | 9 | | Stereo / One-Shot | 3D_Scatter |
| AMB_Forest_3D_Tree_Crack | 9 | | Mono / One-Shot | 3D_Scatter |
| AMB_Forest_3D_Water_Stream | 1 | 15s | Stereo / Loop | 3D_Spot |
| AMB_Forest_3D_Insect_Cricket | 7 | | Mono / One-Shot | 3D_Scatter |
| AMB_Forest_3D_Insect_Grasshopper | 5 | | Mono / One-Shot | 3D_Scatter |
| AMB_Forest_3D_Bird_Owl_Hoot | 5 | | Stereo / One-Shot | 3D_Scatter |
| AMB_Forest_3D_Wolf_Howl | 5 | | Stereo / One-Shot | 3D_Scatter |

</div>

<!--
- 后续补充有关 Quad、Stere、Mono
-->