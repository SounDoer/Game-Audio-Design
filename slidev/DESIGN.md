# Slidev Design System

> 本文档记录幻灯片模板的完整设计规范，用于开发实现与日后维护的参考依据。

---

## 视觉风格

**定位**：黑色刊物（Black Editorial）
- 以专业音频工具界面的精密感（A）为底盘
- 融合高端印刷刊物的排版张力（C）
- 黑白灰为主基调，单一强调色点睛

---

## 配色系统

```
背景（最深）    #0A0A0A
卡片 / 分层     #141414
边框 / 分隔     #2A2A2A
次要文字        #666666
正文            #B0B0B0
主文字          #F0F0F0
强调色          #D45A2A  （暖赤陶）
```

**强调色使用规则**：
- 用于装饰横线（标题区分隔线）
- 用于正文关键词 / 数字高亮
- 用于列表标记
- 不用于主标题本身（标题保持白色以保证对比度）

---

## 字体系统

| 角色 | 字体 | 说明 |
|------|------|------|
| 中文标题 | Noto Sans SC Black | 幻灯片主标题、章节标题 |
| 英文眉标 | Cormorant Garamond Light Italic | 全大写，`letter-spacing: 0.15em` |
| 正文 | Noto Sans SC Regular | 段落、列表 |
| 代码 | Fira Code | 代码块 |

**英文眉标设计意图**：小字、细笔画，与粗体中文主标题形成「细/粗、衬线/黑体」的强烈视觉对比，呼应高端刊物的排版手法。

---

## 字号体系

| 层级 | 大小 | 字重 / 颜色 | 备注 |
|------|------|------------|------|
| 英文眉标 | 0.6rem | Light / `#666666` | 全大写，字间距 0.15em |
| 封面主标题 | 4.5rem | Black / `#F0F0F0` | 仅 cover layout |
| 内容主标题（h1） | 2.8rem | Black / `#F0F0F0` | header-body、section |
| 内容标题（h2） | 1.6rem | Bold / `#F0F0F0` | body 区内使用 |
| 内容子标题（h3） | 1.15rem | Medium / `#B0B0B0` | body 区内使用 |
| 正文 / li | 1rem | Regular / `#B0B0B0` | line-height: 1.75 |
| 注释 / caption | 0.7rem | Regular / `#666666` | |
| 代码 | 0.875rem | — / — | Fira Code |
| 页码 | 0.55rem | — / `#444444` | 右下角 |

---

## 标题结构规范

每张幻灯片标题区由三个元素组成，**从上到下**：

```
ENGLISH EYEBROW LABEL          ← Cormorant，全大写，灰色，小字
────────────────────────       ← 1px 赤陶横线（#D45A2A）
中文主标题                      ← Noto Black，白色，大字
```

英文眉标通过 `::eyebrow::` MDC slot 传入，**可选**，不填则不渲染。

**设计意图**：英文眉标在上方形成「分类标签」，视觉上先扫英文定位 context，再落到中文大字获取重点——来自杂志栏目 / 博物馆说明牌的排版逻辑。

---

## 装饰元素规范

| 元素 | 规格 | 位置 |
|------|------|------|
| 标题区分隔线 | 1px solid `#D45A2A` | 英文眉标与中文标题之间 |
| 页码 | 0.55rem，`#444444` | 右下角 |
| 列表标记 | 颜色改为 `#D45A2A` | 所有 ul / ol |
| 英文眉标字间距 | `letter-spacing: 0.15em` | 全局统一 |

---

## Layout 体系

画布尺寸：`1080 × 607px`，16:9，深色主题。

共 6 个 layout：

### `cover` — Deck 封面

```
EYEBROW LABEL                  ← ::eyebrow:: slot（可选）
──────────────────────────     ← 赤陶横线
Deck 主标题                    ← # heading，4.5rem
                  [info]       ← ::info:: slot，右下角，次要颜色（可选）
```

- 左对齐，垂直居中偏上
- 右半幅留白，制造排版张力
- 背景：纯 `#0A0A0A`

### `section` — 章节分隔页

```
EYEBROW LABEL（章节标题英文）   ← ::eyebrow:: slot（可选）
──────────────────────────     ← 赤陶横线
章节主标题                     ← # heading，2.8rem
```

- 左对齐，垂直居中

### `header-body` — 标准内容页（主力布局）

```
┌──────────────────────────────────────┐  ← Header 区，约 140px
│  EYEBROW LABEL                        │  ← ::eyebrow:: slot（可选）
│  ────────────────────────────────    │  ← 赤陶横线
│  幻灯片主标题                          │  ← # heading，2.8rem
├──────────────────────────────────────┤
│  Body 自由画布（约 467px）             │  ← ::body:: slot
│  用 UnoCSS class 控制排版             │
│  （单栏、两栏、三栏、居中等均在此处理） │
└──────────────────────────────────────┘
                                    [页码]
```

**Body 区排版示例**：

```markdown
::body::
<div class="grid grid-cols-2 gap-8 h-full">
  <div>左侧内容</div>
  <div>右侧图片</div>
</div>
```

### `statement` — 居中陈述页

- 全屏居中，默认 slot
- 适用于金句、论点、反问
- 无 header 区，无页码

### `end` — 结尾页

```
Thanks & Questions?            ← 第一段，Noto Black，3rem，#F0F0F0
──────────────────────────     ← 赤陶横线（自动插入）
xichen@soundoer.com            ← 第二段，0.75rem，#666666
```

- 左对齐，垂直居中
- MD 里按顺序写两段即可，layout 自动处理样式

### `custom` — 空白画布

- 无任何预设结构，完全自定义
- 用于特殊版式、带背景图的幻灯片等

---

## Frontmatter 约定

系统级配置（theme、transition、fonts 等）放在 `deck-entry-header.in.yaml`，内容级的东西（眉标文字、body 内容）写在 Markdown 里。

**Slidev 全局配置（deck-entry-header.in.yaml 相关项）**：

```yaml
theme: default          # 待确认是否改为自定义主题
colorSchema: dark
canvasWidth: 1080
aspectRatio: 16/9
fonts:
  sans: Noto Sans SC
  serif: Cormorant Garamond
  mono: Fira Code
transition: slide-left
```

---

## 背景图处理

现阶段带背景图的幻灯片使用 `layout: custom` 临时处理，后续视实际效果决定是否统一规范。

---

## 待办 / 未决事项

- [ ] 决定是否创建自定义 Slidev theme package，还是在 default theme 基础上覆盖样式
- [ ] 确认带背景图幻灯片的长期处理方案
- [ ] `SPLDiagram.vue` 组件样式适配新设计系统
