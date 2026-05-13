# Reference — Slide deck authoring (Game-Audio-Design)

**设计规范单一真源**：[`slidev/README.md`](../../../slidev/README.md)。**标准实现参考**：[`slidev/pages/EXAMPLE.md`](../../../slidev/pages/EXAMPLE.md)。视觉与槽位以 README 指向的实现文件为准。

## 开场澄清清单（Phase A 前）

与用户对齐或自行推断前，逐项确认或标注「待定」：

- **受众与场景**：面授 / 线上自学 / 混合；是否含非中文听众。
- **时长与节奏**：单次课总时长、是否含演示与答疑、大致页数预期。
- **学习目标与先修**：课后可观察的产出；学生已具备的知识。
- **产出形态**：是否仅 `slidev/pages/` 讲义，或还要配套 `docs/` 长文等。
- **约束**：版权素材范围、是否必须可离线播放、视频体积与格式上限。

## 本仓库默认语境（可覆盖）

用户**未说明**时，agent 可先按下列假设开场，并在第一轮提问中邀请用户纠正：

- **语言**：中文叙述为主；幻灯上重点概念保留或并列 **英文**（与 `AGENTS.md` 术语习惯一致）。
- **时长**：单专题约 **60–90 分钟**（用于控制信息密度与页数）。
- **用途**：同一套 deck 面向 **课堂讲授**，并可在 **gad.soundoer.com** 在线展示；页表阶段兼顾「口播可略」与「自读能懂」。
- **文件与资产**：正文 `slidev/pages/<stem>.md`；该套用到的静态文件放入 **`slidev/public/<stem>/`**（与 stem 同名目录，见 `slidev/README.md` §6）。

## Phase B：页表何时必须（与 SKILL 一致）

- **必须先给出页表**（再改 md）：新建 `pages/<stem>.md`；或本轮 **新增 / 重写幻灯合计超过约 10 页**；或 **大段重排**（章节顺序、批量改 layout、整结构替换）。
- **可跳过页表**：单页文案微调、错字、个别 `public` 路径或 frontmatter、纯样式小改。

## 主题 → 实现文件（摘自 README §1 表格）

| 主题 | 实现文件 |
|------|----------|
| 颜色、标题字号、正文与列表、页码、工具类 | `slidev/styles/base.css` |
| 画布、字体栈、过渡、主题、MDC 等 | `slidev/deck-entry-header.in.yaml` |
| 各页版式（槽位、局部样式） | `slidev/layouts/*.vue` |
| 单套讲义正文 | `slidev/pages/<stem>.md` |
| 构建入口与顺序 | `scripts/build-slidev-decks.mjs`、`slidev/deck-order.txt` |
| 每套构建时的 `public` 子集 | `scripts/prepare-slidev-public-subset.mjs`（由 build 调用） |

## 构建、索引与排除项（摘要）

- **产物**：`npm run slidev:build` → `static/slides/<slug>/`；全站 `npm run build` 会先跑 Slidev 再 Astro（见根 `package.json`）。
- **`EXCLUDED_STEMS`**（`slidev/deck-pages-shared.mjs`，当前 **`cover`**、**`intro`**、**`fin`**）：对应 `pages/*.md` **不参与**构建与 `/slides/` 索引；要发布须从常量移除并视情况写入 `deck-order.txt`。
- **构建期 `public` 子集**：每套 deck 构建前脚本会临时收窄 `slidev/public`，避免整库打进单套输出；详见 README §1「构建期 public 子集」。

## Layout 与正文片段

- **槽位、标题层级、class、字体字号颜色、资源路径与边界情况**：**[`slidev/README.md`](../../../slidev/README.md)**。
- **可复制 Markdown 写法与页面组织**：**[`slidev/pages/EXAMPLE.md`](../../../slidev/pages/EXAMPLE.md)**。

**本地 layout 名速记**：`cover` · `section` · `header-body` · `statement` · `end` · `custom`；全屏底图优先 Slidev 内置 **`layout: image`**（无本地同名 `layouts/*.vue` 时）。

## 校验与本地预览

**默认门槛**：仅改 `slidev/`（及对应 `static/slides/` 产物预期）时，以 **`npm run slidev:build`** 为完成验证即可。

**加码条件**：同 PR / 同次任务若还修改 **`src/`**、**`astro.config.*`**、或全站构建链相关脚本，在 `slidev:build` 之外补跑 **`npm run check`**；发布前或与 CI 对齐时再 **`npm run build`**（根 `package.json`：`build` 会先 Slidev 再 Astro）。

```bash
npm run slidev:build
```

单套预览（`<stem>` 为 `pages/<stem>.md` 文件名不含 `.md`）：

```bash
npm run slidev:dev -- <stem>
```

资源同步（旧仓迁移场景）：`npm run slidev:sync-public`（参数见 README §2）。

线上目录索引：<https://gad.soundoer.com/slides/>。

## 与 AGENTS.md 的关系

- `AGENTS.md`：站点文章（`docs/`）语言、术语表、字数与风格；幻灯 **可视文案** 建议遵守术语表；**讲者备注**可更口语。
- README §8：幻灯与文章语气可不同，术语表建议一致。

## 极简示例：从大纲到页表（片段）

**大纲（片段）**

1. 空间音频导论（~8 页）— `section` + 若干 `header-body`
2. 距离衰减与 HRTF（~10 页）— `header-body`，`::body::` 内两栏 `grid`

**页表（片段）**

| # | layout | 中文标题 | 要点 |
|---|--------|----------|------|
| 1 | `cover` | 空间音频导论 | 可选 `::eyebrow::`；`::title::` 内 `#` |
| 2 | `section` | 从立体声到对象音频 | `::title::` 内 `##` + 一行 `**Object-Based Audio**` |
| 3 | `header-body` | 为什么游戏中「位置」是设计问题 | 可选 `::eyebrow::`；`::title::` 内 `###`；`::body::` 内 3 bullets + 图占位 |

确认页表后再把每一 `---` 分隔块写进 `slidev/pages/<stem>.md`。

## 反模式 / 易踩坑（检查用）

- **Layout**：不使用 `slidev/README.md` §4 未列出的本地 layout 名；不假设已删除的历史 layout；`section` **不要**使用不存在的 `::subtitle::` 槽。
- **资产路径**：某 stem 的专用素材优先进 **`slidev/public/<stem>/`**，避免为该套新建的文件长期散落在 `public/` 根目录（历史路径除外，见 README §6）。
- **构建与索引**：不擅自修改 **`EXCLUDED_STEMS`**（`slidev/deck-pages-shared.mjs`）或从 `deck-order.txt` 增删 stem，除非用户明确要求「纳入构建 / 上 `/slides/` 索引」或「排除」。
- **全局配置**：不把 `deck-entry-header.in.yaml` 里已统一的系统级键（字体、画布、过渡等）复制到每一页 frontmatter「以防万一」。
- **真源**：不引用仓库外或过期的版式说明；与实现冲突时以 **`slidev/README.md`** + **`base.css`** + **`layouts/*.vue`** 为准。

## 完成前验证（与声称一致）

- 若在对话中声称「已通过构建 / 检查 / 全站构建」，须**已实际执行**对应命令且结果为成功；未执行则**不要**那样表述（与仓库内「先验证再断言完成」的习惯一致）。
- 具体应跑哪些命令，见上文 **「校验与本地预览」** 的分层约定与 **Phase D**（`SKILL.md`）。
