---
layout: section
---

## 命名规范
**Naming Convention**

<!--
- 为什么要单独一章拿出来讲:
  - 因为我认为要把工程也当作作品一样来看待
  - 实际开发过程中会遇到很多的坑
- Refer
  - https://en.wikipedia.org/wiki/Naming_convention_(programming)
  - https://github.com/Allar/ue5-style-guide
  - https://universalcategorysystem.com/
  - https://canuzer.com/naming-convention-best-practices/
-->

---
layout: header-body
---

### 重要性

::body::

<v-clicks>

- 命名是**人与人**、**人类与机器**和**机器与机器**之间在开发过程中最频繁的接口
- 命名规范本质上是一种设计行为——将复杂混沌的信息进行归类、压缩和描述
- 命名规范是为了
  - 易读
  - 可维护
  - 便于协作
- 命名规范是**系统工程规范**中最基础和最核心的部分之一
- 项目工程也是某种形式的作品

</v-clicks>

<!--
- Efficient Navigation & Search
- Logical Organization
- Simplified Batch Processing
- Automation Potential
- Satisfies Perfectionism
-->

---
layout: header-body
---

### 命名规范的通用原则

::body::

<v-clicks>

- 命名风格
  - PascalCase
  - camelCase
  - snake_case
  - Upper_Snake_Case --- OBJ_Campfire_Burn_Loop
- 命名需要包含的语义清晰且可扩展的字段
  - OBJ_Campfire_Burn
    - OBJ_Campfire_Burn_Loop
    - OBJ_Campfire_Sizzle_01
    - OBJ_Campfire_Crack_01
- 使用约定的缩写和前后缀
- 避免使用空格、特殊符号、拼音和中文等

</v-clicks>

<!--  -->

---
layout: header-body
---

### Example

::body::

<div class="grid grid-cols-2 gap-4">

<div>

![](/src/naming-convention/wwise-amb-forest-struct.png){style="width: 90%"}

</div>

<div>

![](/src/naming-convention/wwise-player-foley-struct.png){style="width: 85%"}

</div>

</div>

<!--  -->

---
layout: statement
---

#### 无论有多少人参与项目，其结构、资源与代码都应如出自一人之手。
All structure, assets, and code in any project should look like a single person created it, no matter how many people contributed.