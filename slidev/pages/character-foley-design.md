---
layout: section
---

## 角色拟音设计
**Character Foley Design**

<!--
- 解释什么是 Foley？
- 解释角色 Foley 一般都包含哪些声音？
-->

---
layout: header-body-center
---

### Character Locomotion Foley

::body::

<video controls width="85%">
  <source src="/SOP_Foley_FS_Demo_FIN.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!--  -->

---
layout: header-body
---

### 需要考虑哪些因素

::body::

- 角色：性别、体型、性格……
- 部位：**脚步**、手部、衣物……
- 配饰：武器、背包、装饰……
- **动作类型**：走、跑、起跳、落地……
- **鞋子种类**：球鞋、皮鞋、靴子、高跟鞋……
- **地面材质**：泥土、岩石、草地、木头……
- 衣服种类：布料、皮料、盔甲……

<!--  -->

---
layout: header-body-center
---

### 角色动画结构

::body::

![](/char-anim-struct.png)

<!--  -->

---
layout: header-body
---

### Footstep

::body::

<div class="grid grid-cols-3 gap-4" v-clicks>

<div>

- 动作类型
  - Walk
  - Run
  - Sprint
  - Jump
  - Land
  - ……

</div>

<div>

- 鞋子种类
  - Highheel
  - Boot
  - Sneaker
  - Leather
  - Barefoot
  - ……

</div>

<div>

- 地面材质
  - Dirt
  - Rock
  - Wood
  - Grass
  - Metal
  - Sand
  - Water
  - ……

</div>

</div v-clicks>

<!--
- 对动作类型进行抽象归类
- 通过地面材质展开讲解材质系统
-->

---
layout: header-body
---

### 动作类型

::body::

<div class="grid grid-cols-3 gap-4">

<div>

![](/src/char-foley/SOP_Anim_FS_Walk_F.png){style="height: 140px"}

![](/src/char-foley/SOP_Anim_FS_Run_B.png){style="height: 140px"}

![](/src/char-foley/SOP_Anim_FS_CrouchIdleToAds.png){style="height: 140px"}

</div>

<div>

![](/src/char-foley/SOP_Anim_FS_Walk_B.png){style="height: 140px"}

![](/src/char-foley/SOP_Anim_FS_Crouch_F.png){style="height: 140px"}

![](/src/char-foley/SOP_Anim_FS_Turn_RT150.png){style="height: 140px"}

</div>

<div>

![](/src/char-foley/SOP_Anim_FS_Run_F.png){style="height: 140px"}

![](/src/char-foley/SOP_Anim_FS_Crouch_B.png){style="height: 140px"}

![](/src/char-foley/SOP_Anim_FS_SuperHit_L.png){style="height: 140px"}

</div>

</div>

<!--  -->

---
layout: header-body
---

### 材质映射 Material Mapping

::body::

<div class="grid grid-cols-4 gap-4" v-clicks>

<div>

**材质 Material**

![](/src/char-foley/SOP_Material.png){style="height: 90px"}

![](/src/char-foley/ue-material-m.png)

![](/src/char-foley/ue-material-mi.png)

</div>

<div>

**物理材质 Physical Material**

![](/src/char-foley/ue-physical-material.png){style="height: 120px"}

![](/src/char-foley/ue-phymat-detail.png)

</div>

<div>

**表面类型 Surface Type**

![](/src/char-foley/ue-surface-type.png)

</div>

<div>

**Material Switch**

![](/src/char-foley/ue-switch-material.png){style="height: 150px"}

![](/src/char-foley/wwise-switch-material.png)

</div>

</div v-clicks>

<!--  -->

---
layout: header-body
---

### 射线检测 Raycast

::body::

<div class="grid grid-cols-2 gap-4" v-clicks>

<div>

![](/src/char-foley/footstep-raycast.png)

</div>

<div>

![](/src/char-foley/ue-raycast-line-trace.png)

</div>

</div v-clicks>

<!--
- https://dev.epicgames.com/documentation/en-us/unreal-engine/using-a-single-line-trace-raycast-by-channel-in-unreal-engine
-->

---
layout: header-body
---

### Data Struct
Switch Container in Wwise

::body::

- Player_Foley
  - Player_Foley_Cloth
  - Player_Foley_FS
    - **Player_Foley_FS_Run** ------------------------------------ Switch on Shoe Type
      - Player_Foley_FS_Run_Highheel ------------------ Switch on Material
        - FOL_FS_Run_Highheel_Dirt_01
        - FOL_FS_Run_Highheel_Dirt_02
        - FOL_FS_Run_Highheel_Dirt_03
        - FOL_FS_Run_Highheel_Dirt_04
        - FOL_FS_Run_Highheel_Dirt_05
      - Player_Foley_FS_Run_Sneaker
      - ...
    - ...

<!--  -->