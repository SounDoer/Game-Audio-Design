---
layout: cover
slug: example
deckListTitle: Slidev Layout Example
description: 展示 GAD Slidev 布局、组件与写法约定的参考样张。
slidesOrder: 9998
---

::backdrop::

EXAMPLE

::eyebrow::

GAD Design Reference

::title::

# GAD 设计参考

::subtitle::

如何使用页面布局和设计元素

::info::

xichen @ gad.soundoer.com

---
layout: section
---

::backdrop::

01

::eyebrow::

Layouts

::title::

## 页面布局

::subtitle::

各类布局的示例展示

---
layout: header-body
---

::backdrop::

CONTENT

::eyebrow::

Header Body

::title::

### 标准内容页：眉标、标题与正文区

::body::

上方标题区用于建立阅读定位，正文区承担论证、案例与媒体。

<v-clicks>

- <span class="accent">眉标</span> 不是逐页标题翻译，而是页面视角。
- 正文区可以自由组合单栏、双栏、图示、组件与局部强调。
- 右下角页码自动处理。

</v-clicks>

---
layout: header-body
---

::backdrop::

COLUMNS

::eyebrow::

Two Columns

::title::

### 正文区：两栏分布

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="min-h-0 min-w-0">
    <h4>左侧：论证主线</h4>
    <p>适合把判断标准与案例材料并置，在同一页内完成对照阅读。</p>
    <ul>
      <li v-click>先给出页面的核心判断。</li>
      <li v-click>再拆成几个可观察维度。</li>
      <li v-click>避免把两栏都塞满同等密度的信息。</li>
    </ul>
  </div>
  <div v-click class="callout">
    <span class="callout-title">右侧</span>
    <p>右侧适合放案例、图示说明、操作步骤或关键限制。它服务左侧论点，不另起一条主线。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

COLUMNS

::eyebrow::

Three Columns

::title::

### 正文区：三栏分布

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-4">
  <div v-click class="min-h-0 min-w-0">
    <span class="step-index">COLUMN 01</span>
    <h4>左栏：并列信息</h4>
    <p>三栏结构适合承载同一层级的分类、步骤或观察维度。</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">COLUMN 02</span>
    <h4>中栏：并列信息</h4>
    <p>栏位之间用留白和细分隔线区分。</p>
  </div>
  <div v-click class="min-h-0 border-l hairline pl-4">
    <span class="step-index">COLUMN 03</span>
    <h4>右栏：并列信息</h4>
    <p>当信息颗粒足够短，也可以扩展到更多栏位，但要优先保证可读性。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

RATIO

::eyebrow::

Image and Text

::title::

### 正文区：左图右文

::body::

<div class="grid h-full min-h-0 grid-cols-[1.3fr_0.7fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">Main Visual</span>
  </div>
  <div class="min-h-0 min-w-0">
    <h4>右侧：解释与判断</h4>
    <p>左图右文适合把截图、频谱、流程图或游戏画面作为主材料，右侧只解释观察点。</p>
    <ul>
      <li v-click>左侧优先放需要被观察的视觉材料。</li>
      <li v-click>右侧用短句说明看哪里、为什么看。</li>
      <li v-click>比例可以按内容调整，同时主视觉应保持清晰。</li>
    </ul>
  </div>
</div>

---
layout: header-body
---

::backdrop::

MEDIA

::eyebrow::

Media

::title::

### 正文区：主图

::body::

<div class="flex h-full min-h-0 flex-col gap-4">
  <div class="figure-frame flex min-h-0 flex-1 items-center justify-center">
    <span class="badge">Media</span>
  </div>
  <div class="shrink-0 text-center text-[1rem] leading-tight text-[var(--color-text-body)]">上方用于主图内容的展示，下方为居中的文字说明。</div>
</div>

---
layout: header-body
---

::backdrop::

NOTE

::eyebrow::

COMPONENTS

::title::

### 强调、重点与信息卡片

::body::

<div class="grid h-full min-h-0 grid-cols-2 gap-5">
  <div class="min-h-0 min-w-0">
    <h4>使用原则</h4>
    <p>这些元素都用于提升阅读层级，但语义和强调程度不同。</p>
    <ul>
      <li v-click>强调承载一句短判断，仍然从属于当前正文。</li>
      <li v-click>重点面板标出本页常驻的主观察对象。</li>
      <li v-click>信息卡片承载定义、原则等需要被重点提示的判断。</li>
    </ul>
  </div>
  <div v-click class="flex min-h-0 flex-col gap-3">
    <div class="quote-accent">
      <p>强调的任务是告诉观众哪里是当前结构的支点。</p>
    </div>
    <div class="active-panel p-4">
      <p>重点面板不随点击状态更新。</p>
    </div>
    <div class="callout">
      <span class="callout-title">信息卡片</span>
      <p>当一句话承载的是判断标准，而不是普通项目符号，就适合从列表中抬出来。</p>
    </div>
  </div>
</div>

---
layout: header-body
---

::backdrop::

9

::eyebrow::

METRICS

::title::

### 关键数字、步骤号与短标签

::body::

<div class="grid h-full min-h-0 grid-cols-3 gap-5">
  <div v-click>
    <div class="metric">3</div>
    <div class="metric-label">source types</div>
    <p><code>metric</code> 与 <code>metric-label</code> 成组使用，用于数量、阈值、阶段总数等关键数字。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <span class="step-index">STEP 02</span>
    <h4>步骤号</h4>
    <p><code>step-index</code> 用于流程、检查项或卡片内的小号步骤编号。</p>
  </div>
  <div v-click class="border-l hairline pl-4">
    <div>
      <span class="badge">Badge</span>
      <span class="badge ml-2">Wwise</span>
      <span class="badge ml-2">CASE</span>
    </div>
    <h4 class="mt-4">短标签</h4>
    <p><code>badge</code> 标记工具、媒体类型、案例属性或示范状态，不承载完整判断。</p>
  </div>
</div>

---
layout: header-body
---

::backdrop::

LINKS

::eyebrow::

Links

::title::

### 链接

::body::

<v-clicks>

- 链接用于交代来源和延伸阅读。
- 正文链接使用明确名称，例如 <a href="https://gad.soundoer.com/" target="_blank" rel="noreferrer">Game Audio Design - SounDoer</a>。
- 资料来源可放在图注、说明牌或信息卡片中，不抢主标题层级。
- 外部资料只标出可识别的标题或站点名称，完整 URL 留在 Markdown 链接目标中。
- 避免使用裸链接、二维码堆叠或「点击这里」这类无语义文本。

</v-clicks>

---
layout: header-body
---

::backdrop::

MEDIA

::eyebrow::

MEDIA

::title::

### 媒体框

::body::

<div class="grid h-full min-h-0 grid-cols-[1.3fr_0.7fr] gap-5">
  <div class="figure-frame flex min-h-0 items-center justify-center">
    <span class="badge">MEDIA</span>
  </div>
  <div class="callout self-start">
    <span class="callout-title">使用规则</span>
    <p>所有多媒体内容默认都需要。</p>
  </div>
</div>

---
layout: fullscreen-media
image: intro/FarCryPrimal_Title.jpg
backgroundSize: cover
---

<div class="relative h-full w-full">
  <span class="badge absolute left-6 top-6">Fullscreen Media</span>
  <div class="caption-plate absolute bottom-8 left-6 max-w-[34rem]">
    <p class="caption">全屏媒体页适合展示游戏画面、界面截图或参考图；说明牌只解释观察点，不替代标题区。</p>
  </div>
</div>


---
layout: custom
---

::default::

<div class="relative h-full w-full p-12">
  <span class="badge absolute left-12 top-10">Custom Layout</span>
  <div class="grid h-full grid-cols-[0.9fr_1.1fr] gap-6 pt-14">
    <div class="self-center bg-[var(--color-surface)] p-5">
      <div class="mb-4 w-full border-t border-[var(--color-accent)]"></div>
      <h4>自定义布局</h4>
      <ul>
        <li>匹配具体内容按需设计</li>
        <li>使用同一套视觉系统</li>
      </ul>
    </div>
    <div class="grid self-center grid-cols-2 gap-3">
      <div class="border hairline p-3">Grid A</div>
      <div class="border hairline p-3">Grid B</div>
      <div class="border hairline p-3">Grid C</div>
      <div class="border hairline p-3">Grid D</div>
    </div>
  </div>
</div>

---
layout: statement
---

::backdrop::

STATEMENT

::title::

### 这套视觉系统的重点不是更多装饰，
### 而是让结构被看见。

::subtitle::

The point is not more decoration, but making structure visible.

---
layout: end
---

::backdrop::

FIN

::default::

Thanks & Questions?

xichen@soundoer.com
