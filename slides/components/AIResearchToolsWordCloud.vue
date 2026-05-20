<template>
  <div class="ai-tools-word-cloud">
    <div ref="panelRef" class="word-cloud-panel">
      <canvas ref="canvasRef" aria-label="AI 工具学生调研词云"></canvas>
      <div ref="legendRef" class="word-cloud-legend" aria-label="工具类型图例">
        <span v-for="item in legendItems" :key="item.key">
          <i :style="{ backgroundColor: item.color, color: item.color }"></i>
          {{ item.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const panelRef = ref(null)
const legendRef = ref(null)
const canvasRef = ref(null)

const data = [
  { t: 'Gemini', n: 6, c: 'llm' },
  { t: 'DeepSeek', n: 5, c: 'llm' },
  { t: '豆包', n: 5, c: 'llm' },
  { t: 'Suno', n: 4, c: 'audio' },
  { t: 'Nano Banana', n: 4, c: 'image' },
  { t: '即梦', n: 3, c: 'video' },
  { t: 'ChatGPT', n: 3, c: 'llm' },
  { t: 'Cursor', n: 3, c: 'coding' },
  { t: 'GPT Image 2', n: 3, c: 'image' },
  { t: 'Seedance', n: 2, c: 'video' },
  { t: 'Midjourney', n: 2, c: 'image' },
  { t: '可灵', n: 2, c: 'image' },
  { t: 'ComfyUI', n: 2, c: 'image' },
  { t: 'Stable Diffusion', n: 2, c: 'image' },
  { t: 'Claude', n: 2, c: 'llm' },
  { t: 'Codex', n: 2, c: 'llm' },
  { t: 'LibTV', n: 1, c: 'video' },
  { t: 'updream', n: 1, c: 'video' },
  { t: 'TapNow', n: 1, c: 'video' },
  { t: 'Topaz Video', n: 1, c: 'video' },
  { t: 'LTX-2.3', n: 1, c: 'video' },
  { t: 'GPT-SoVITS', n: 1, c: 'audio' },
  { t: 'Sony Woosh', n: 1, c: 'audio' },
  { t: 'Cyanite', n: 1, c: 'audio' },
  { t: 'ACE-Step', n: 1, c: 'audio' },
  { t: 'Qwen3-TTS', n: 1, c: 'audio' },
  { t: 'VoxCPM2', n: 1, c: 'audio' },
  { t: 'GitHub Copilot', n: 1, c: 'coding' },
  { t: 'Windsurf', n: 1, c: 'coding' },
  { t: 'Trae', n: 1, c: 'coding' },
  { t: '千问', n: 1, c: 'llm' },
  { t: 'WorkBuddy', n: 1, c: 'other' },
  { t: 'TapTap Maker', n: 1, c: 'other' },
  { t: 'AstrBot', n: 1, c: 'other' },
  { t: 'OpenClaw', n: 1, c: 'other' },
  { t: 'Holopix', n: 1, c: 'image' },
  { t: 'Tripo', n: 1, c: 'image' },
  { t: 'FLUX.2', n: 1, c: 'image' },
  { t: 'Seedream', n: 1, c: 'image' },
  { t: 'ima', n: 1, c: 'image' },
]

const palette = {
  llm: '#7DB9FF',
  image: '#B89CFF',
  video: '#FF8A5C',
  audio: '#62E6BF',
  coding: '#B4E65A',
  other: '#F0BD5E',
}

const labels = {
  llm: '大语言模型',
  image: '图像生成',
  video: '视频/动画',
  audio: '音频/音乐',
  coding: '编程工具',
  other: '其他平台',
}

const legendItems = computed(() =>
  Object.entries(labels).map(([key, label]) => ({
    key,
    label,
    color: palette[key],
  })),
)

const getBaseSize = n => (n >= 6 ? 50 : n >= 5 ? 42 : n >= 4 ? 35 : n >= 3 ? 28 : n >= 2 ? 21 : 15)

const toolLinks = {
  Gemini: 'https://gemini.google.com',
  DeepSeek: 'https://chat.deepseek.com',
  豆包: 'https://www.doubao.com',
  Suno: 'https://suno.com',
  'Nano Banana': 'https://deepmind.google/models/gemini-image/',
  即梦: 'https://jimeng.jianying.com',
  ChatGPT: 'https://chatgpt.com',
  Cursor: 'https://cursor.com',
  'GPT Image 2': 'https://developers.openai.com/api/docs/models/gpt-image-2',
  Seedance: 'https://github.com/bytedance-seedance/seedance-2.0',
  Midjourney: 'https://www.midjourney.com',
  可灵: 'https://klingai.com',
  ComfyUI: 'https://github.com/Comfy-Org/ComfyUI',
  'Stable Diffusion': 'https://stability.ai',
  Claude: 'https://claude.ai',
  Codex: 'https://openai.com/codex/',
  LibTV: 'https://www.liblib.tv',
  updream: 'https://www.updream.cn',
  TapNow: 'https://www.tapnow.ai',
  'Topaz Video': 'https://www.topazlabs.com/topaz-video',
  'LTX-2.3': 'https://ltx.io/model/ltx-2-3',
  'GPT-SoVITS': 'https://github.com/RVC-Boss/GPT-SoVITS',
  'Sony Woosh': 'https://sonyresearch.github.io/Woosh/',
  Cyanite: 'https://cyanite.ai',
  'ACE-Step': 'https://ace-step.github.io',
  'Qwen3-TTS': 'https://github.com/QwenLM/Qwen3-TTS',
  VoxCPM2: 'https://huggingface.co/openbmb/VoxCPM2',
  'GitHub Copilot': 'https://github.com/features/copilot',
  Windsurf: 'https://windsurf.com',
  Trae: 'https://www.trae.ai',
  千问: 'https://tongyi.aliyun.com',
  WorkBuddy: 'https://www.codebuddy.cn/home/',
  'TapTap Maker': 'https://maker.taptap.cn',
  AstrBot: 'https://github.com/AstrBotDevs/AstrBot',
  OpenClaw: 'https://github.com/openclaw/openclaw',
  Holopix: 'https://holopix.cn',
  Tripo: 'https://www.tripo3d.ai',
  'FLUX.2': 'https://bfl.ai/models/flux-2',
  Seedream: 'https://seed.bytedance.com/en/blog/seedream-4-0-officially-released-beyond-drawing-into-imagination',
  ima: 'https://share.ima.qq.com',
}

const getToolLink = text => toolLinks[text] || `https://www.google.com/search?q=${encodeURIComponent(text)}`

let resizeObserver
let rafId = null
let hoveredIndex = -1
let words = []
let panelScale = 1

function drawWordCloud() {
  const panel = panelRef.value
  const legend = legendRef.value
  const canvas = canvasRef.value
  if (!panel || !legend || !canvas) return

  const baseWidth = 680
  const baseHeight = 440
  const panelStyle = window.getComputedStyle(panel)
  const legendStyle = window.getComputedStyle(legend)
  const panelPaddingX = parseFloat(panelStyle.paddingLeft) + parseFloat(panelStyle.paddingRight)
  const panelPaddingY = parseFloat(panelStyle.paddingTop) + parseFloat(panelStyle.paddingBottom)
  const legendMarginY = parseFloat(legendStyle.marginTop) + parseFloat(legendStyle.marginBottom)
  const legendTotalHeight = legend.offsetHeight + legendMarginY
  const contentWidth = panel.clientWidth - panelPaddingX
  const contentHeight = panel.clientHeight - panelPaddingY
  const availableWidth = Math.max(contentWidth, 320)
  const availableHeight = Math.max(contentHeight - legendTotalHeight - 8, 220)
  const scale = Math.min(availableWidth / baseWidth, availableHeight / baseHeight)
  panelScale = scale
  const width = Math.round(baseWidth * scale)
  const height = Math.round(baseHeight * scale)
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = width * dpr
  canvas.height = height * dpr
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  const setFont = size => {
    ctx.font = `600 ${size}px "Noto Sans SC", ui-sans-serif, system-ui, sans-serif`
  }
  const measureWidth = (text, size) => {
    setFont(size)
    return ctx.measureText(text).width
  }

  const sorted = [...data].sort((a, b) => b.n - a.n)
  const placed = []
  const gap = 10 * scale
  const centerX = width / 2
  const centerY = height / 2

  const collides = (x, y, w, h) =>
    placed.some(
      p =>
        x < p.baseX + p.w + gap &&
        x + w + gap > p.baseX &&
        y < p.baseY + p.h + gap &&
        y + h + gap > p.baseY,
    )

  for (const word of sorted) {
    const fontSize = getBaseSize(word.n) * scale
    const textWidth = measureWidth(word.t, fontSize) + 6 * scale
    const textHeight = fontSize * 1.35
    let done = false
    let t = 0

    while (!done && t < 5000) {
      const angle = 0.13 * t
      const radius = (5.5 * scale * t) / (2 * Math.PI)
      const x = centerX + radius * Math.cos(angle) - textWidth / 2
      const y = centerY + radius * Math.sin(angle) - textHeight / 2

      if (
        x >= 8 * scale &&
        y >= 8 * scale &&
        x + textWidth <= width - 8 * scale &&
        y + textHeight <= height - 8 * scale &&
        !collides(x, y, textWidth, textHeight)
      ) {
        placed.push({
          baseX: x,
          baseY: y,
          w: textWidth,
          h: textHeight,
          text: word.t,
          fontSize,
          color: palette[word.c],
          phase: (t % 360) * 0.03 + placed.length * 0.4,
          link: getToolLink(word.t),
          hitX: 0,
          hitY: 0,
        })
        done = true
      }
      t += 1
    }
  }

  words = placed
  cancelAnimationFrame(rafId)
  renderFrame(performance.now())
}

function renderFrame(timestamp) {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const width = canvas.width / (Math.min(window.devicePixelRatio || 1, 2))
  const height = canvas.height / (Math.min(window.devicePixelRatio || 1, 2))

  ctx.clearRect(0, 0, width, height)

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i]
    const isHovered = i === hoveredIndex
    const floatX = Math.sin(timestamp * 0.0013 + word.phase) * 1.2 * panelScale
    const floatY = Math.cos(timestamp * 0.0011 + word.phase) * 1.1 * panelScale
    const scaleUp = isHovered ? 1.12 : 1
    const drawX = word.baseX + floatX
    const drawY = word.baseY + floatY
    const drawFontSize = word.fontSize * scaleUp

    ctx.font = `600 ${drawFontSize}px "Noto Sans SC", ui-sans-serif, system-ui, sans-serif`
    ctx.fillStyle = word.color
    if (isHovered) {
      ctx.shadowColor = word.color
      ctx.shadowBlur = 16
    } else {
      ctx.shadowBlur = 0
    }
    ctx.textBaseline = 'top'
    ctx.fillText(word.text, drawX + 3, drawY + word.h * 0.08)
    ctx.shadowBlur = 0

    word.hitX = drawX
    word.hitY = drawY
    word.hitW = word.w * scaleUp
    word.hitH = word.h * scaleUp
  }

  rafId = requestAnimationFrame(renderFrame)
}

function getPointerPosition(event) {
  const canvas = canvasRef.value
  if (!canvas) return null
  const rect = canvas.getBoundingClientRect()
  return {
    x: ((event.clientX - rect.left) * canvas.width) / rect.width / (Math.min(window.devicePixelRatio || 1, 2)),
    y: ((event.clientY - rect.top) * canvas.height) / rect.height / (Math.min(window.devicePixelRatio || 1, 2)),
  }
}

function handlePointerMove(event) {
  const canvas = canvasRef.value
  if (!canvas) return
  const pos = getPointerPosition(event)
  if (!pos) return

  let hit = -1
  for (let i = words.length - 1; i >= 0; i -= 1) {
    const word = words[i]
    if (pos.x >= word.hitX && pos.x <= word.hitX + word.hitW && pos.y >= word.hitY && pos.y <= word.hitY + word.hitH) {
      hit = i
      break
    }
  }

  hoveredIndex = hit
  canvas.style.cursor = hit >= 0 ? 'pointer' : 'default'
}

function handlePointerLeave() {
  const canvas = canvasRef.value
  hoveredIndex = -1
  if (canvas) canvas.style.cursor = 'default'
}

function handleClick() {
  if (hoveredIndex < 0) return
  const target = words[hoveredIndex]
  if (!target?.link) return
  window.open(target.link, '_blank', 'noopener')
}

onMounted(() => {
  drawWordCloud()
  resizeObserver = new ResizeObserver(drawWordCloud)
  if (panelRef.value) resizeObserver.observe(panelRef.value)
  if (legendRef.value) resizeObserver.observe(legendRef.value)
  window.addEventListener('resize', drawWordCloud)
  canvasRef.value?.addEventListener('mousemove', handlePointerMove)
  canvasRef.value?.addEventListener('mouseleave', handlePointerLeave)
  canvasRef.value?.addEventListener('click', handleClick)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  resizeObserver?.disconnect()
  window.removeEventListener('resize', drawWordCloud)
  canvasRef.value?.removeEventListener('mousemove', handlePointerMove)
  canvasRef.value?.removeEventListener('mouseleave', handlePointerLeave)
  canvasRef.value?.removeEventListener('click', handleClick)
})
</script>

<style scoped>
.ai-tools-word-cloud {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  overflow: hidden;
  background: var(--color-bg);
}

.word-cloud-panel {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 16px 12px 16px;
}

canvas {
  display: block;
  max-width: none;
}

.word-cloud-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9px 14px;
  width: min(1000px, 96%);
  margin-top: 12px;
  padding: 4px 0 0;
}

.word-cloud-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1;
  color: #f0f0f0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}

.word-cloud-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

:global(.slidev-layout.custom) {
  padding: 0;
}
</style>
