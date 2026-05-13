---
name: game-audio-slide-deck-authoring
description: Co-develops Slidev course decks for game audio teaching and gad.soundoer.com online slides—locks target `slidev/pages/*.md` when missing, then grill-me style single-question interview (first asks if user already has ideas; if not, agent-led opening questions) until shared understanding, then per-slide plans and Markdown per slidev/README.md. Use when the user is preparing classroom slides, teaching decks, Slidev files under slidev/pages, or asks to turn a topic into slides for this repo. 中文触发：游戏音频备课幻灯、课程 Slidev 讲稿、slidev/pages、gad 在线展示幻灯。
---

# Game-Audio Slide Deck Authoring

## Session entry（必须先做）

1. **锁定目标文稿**  
   - 若用户已给出具体路径或文件（例如 `slidev/pages/<stem>.md`、某篇 `docs/*.md` 要改编为幻灯），直接进入后续流程。  
   - **若未提供**：不要假设、不要起草；**先问一句**：本轮要改 / 新建的是哪一个 md（或是否从某篇长文改编），请用户指明路径或 stem。

2. **讨论方式（与 grill-me 对齐）**  
   在达成共同理解之前，**不要**一上来就输出你自己的完整想法、大纲或页表。  
   改为持续访谈，直到双方在受众、主线、产出与约束上对齐。

   **访谈的第一题（须在已锁定目标文稿之后；若上一节刚问过「改哪一个 md」，下一题即本条）：** 用**单独一条消息里的一个问题**问用户：当前对这套幻灯是否已有初步想法（想讲透的主线、必须出现的案例、想避开的误区、对听众的先验假设等）。  
   - **若对方有想法**：后续问题**顺着其叙述往下拆**——补齐依赖、澄清含糊处、对将与 Slidev 落地相关的约束做推敲；仍保持 **一题一问**，每题给出你的推荐答案。  
   - **若对方没有或想法很空**：再据你对题材与仓库语境的理解，**仍以一题一问**抛出你认为合适的切入问题（每题附带推荐答案），展开 design tree；**不要**在未问清「有无想法」之前就先抛一串你自己的方案。

   Interview the user relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. **For each question, provide your recommended answer.**

   **Ask the questions one at a time.**

   **If a question can be answered by exploring the codebase, explore the codebase instead**（例如现有 deck 的 stem、`deck-order.txt`、layout 约定、同主题已有页），不要为可自查的信息反复追问用户。

3. 对齐后再进入 **一级大纲 → 二级要点 → 每节建议页型**（可由你整理成文，但须在用户确认或迭代后再写 Slidev）。

## Quick start（在 Session entry 之后）

1. 在已锁定文件或 stem 的前提下，按 **Session entry §2** 完成「有无想法」首题与后续单题访谈；其间自然覆盖 **audience**、**时长**、**学习目标**与先修假设（见 [REFERENCE.md](REFERENCE.md) 开场清单）；若用户未说明，先按 REFERENCE **「本仓库默认语境」** 假设，并用**单题**方式确认是否覆盖。
2. 访谈与对齐完成后，再产出结构化大纲；确认后再写 Slidev。
3. 在 `slidev/pages/<stem>.md` 中实现；遵守 **[`slidev/README.md`](../../../slidev/README.md)**（设计系统、layout、资源与构建命令的单一真源）；收尾验证见 **Phase D**（默认 `npm run slidev:build`）。

## Workflows

### Phase A — 大纲（讨论优先）

- 先定 **一个核心问题** 或 **一条方法论主线**，避免知识点堆砌；通过**单题访谈**推进，而非一次性抛整份草案。
- 追问：学生课后能 **做出什么** 或 **解释什么**（可观察产出）。
- 仅在双方对齐后输出：树状大纲 + 每章 **预估页数** + 建议 **layout**（本地 6 个：`cover` / `section` / `header-body` / `statement` / `end` / `custom`；全屏底图可用 Slidev 内置 `image`；多栏与居中一律在 `header-body` 的 `::body::` 内用 `grid` / `flex`，见 README §4.3、§5.1）。

### Phase B — 逐页内容表（不写 Slidev 之前）

- **何时必须先产出页表**（对话里 Markdown 表格即可，见 [REFERENCE.md](REFERENCE.md) 示例）：**新建** `slidev/pages/<stem>.md`；或本轮改动预计 **新增 / 重写合计超过约 10 页**；或 **大段重排**（章节顺序调整、批量改 layout、整段替换结构）。**可跳过页表**：单页文案微调、错字、个别路径 / frontmatter、纯样式小改。
- 为每一页填：**标题（中文）**、可选 **英文眉标**（对应 `::eyebrow::`）、**要点 bullets**、**媒体需求**（图/音/视频路径占位）；`section` 的英文副标写在 **`::title::` 内主标题下**一行，**无** `::subtitle::` 槽（README §4.2）。
- 标 **演讲者备注**（`<!-- ... -->`）里要写什么（案例、时间、演示步骤）。
- 与用户对齐 **信息密度**：课堂可更口语、线上版宜更自洽。

### Phase C — 正式 Slidev 实现

- **新建 deck**：在 `slidev/pages/<stem>.md` 建文件；静态资源放 `slidev/public/<stem>/`（与 md **同名目录**）；若需目录排序，把 stem 加入 `slidev/deck-order.txt`；需要可改首张 frontmatter 的 `slug:`、`deckListTitle:`、`slidesOrder:`（见 README §1）。**默认不参与构建的 stem**（`cover`、`intro`、`fin`）见 `slidev/deck-pages-shared.mjs` 的 `EXCLUDED_STEMS`；若要上线该套，需从常量中移除并视情况写入 `deck-order.txt`。
- **系统级配置**不复制进每页：字体、过渡等以 `slidev/deck-entry-header.in.yaml` 为准。
- **版式**：优先 `class`（UnoCSS），少用行内 `style`；跨页版式进 `slidev/styles/base.css` 且选择器挂在 `.slidev-layout` 下。
- **长文站点**：正文写作规范见仓库根目录 `AGENTS.md`；幻灯口播/备注可与文章语气区分，但术语表仍建议一致。

### Phase D — 收尾

- **默认（仅幻灯 / Slidev 相关）**：`npm run slidev:build`；修复断链与 layout 槽位错误（`cover` / `section` / `header-body`：`::eyebrow::` 可选，`::title::` + `header-body` 另需 `::body::`）。
- **同次会话还改了** `src/`、`astro.config.*`、或会影响站点的脚本 / 类型时：在 `slidev:build` 之外补跑 **`npm run check`**；合并前若需与线上一致，可再跑 **`npm run build`**（见根目录 `package.json`）。
- 本地单套预览：`npm run slidev:dev -- <stem>`（见 README §2）。
- 若从旧仓同步 `public` 资源，按 README 使用 `npm run slidev:sync-public`（如工作流需要）。

## Advanced / deep reference

- 流程与路径摘要、Phase B 门槛、**反模式 / 易踩坑**、**完成前验证**：[REFERENCE.md](REFERENCE.md)
- **可复制版式片段**（本地 layout、`h1`–`h6`、token 表）：[EXAMPLES.md](EXAMPLES.md)
- **唯一真源**（目录、设计系统、layout、正文写法、`public`、构建与产物）：[`slidev/README.md`](../../../slidev/README.md)；实现与文档有出入时以 **`slidev/styles/base.css`** 与 **`slidev/layouts/*.vue`** 为准（README §3 起）。

## Collaboration notes

- 三阶段常 **回退迭代**：新页可能倒逼大纲调整，在 skill 流程里属正常。
- 需要发散创意时，可并行使用仓库或个人的 **brainstorming** 类 skill；本 skill 在 **未对齐前** 仍以单题访谈为主，对齐后再由本 skill **落到 Slidev 结构与规范**。
