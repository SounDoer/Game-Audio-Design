<script setup lang="ts">
/**
 * Slidev: play each URL in `sources` when advancing v-clicks (same order; see clicksOffset).
 */
import { onMounted, onUnmounted, shallowRef, watch } from 'vue'
import { useIsSlideActive, useSlideContext } from '@slidev/client'

const props = withDefaults(
  defineProps<{
    /** One file per click step after offset; index 0 = first v-click reveal */
    sources: string[]
    /** Subtract from $clicks before mapping to indices (extra v-clicks earlier on the slide) */
    clicksOffset?: number
  }>(),
  { clicksOffset: 0, sources: () => [] },
)

const audios = shallowRef<HTMLAudioElement[]>([])
const { $clicksContext } = useSlideContext()
const isSlideActive = useIsSlideActive()

function stopAllAudios() {
  audios.value.forEach((a) => {
    a.pause()
    try {
      a.currentTime = 0
    } catch {
      /* ignore */
    }
  })
}

/** Same rule as layouts/cover.vue — programmatic audio.src must honor Vite `base`. */
function resolveAssetUrl(url: string) {
  if (/^https?:\/\//.test(url))
    return url
  if (url.startsWith('/'))
    return `${import.meta.env.BASE_URL}${url.slice(1)}`
  return url
}

function guessMimeType(url: string): string | undefined {
  const path = url.split('?')[0].split('#')[0].toLowerCase()
  if (path.endsWith('.wav'))
    return 'audio/wav'
  if (path.endsWith('.mp3'))
    return 'audio/mpeg'
  if (path.endsWith('.ogg') || path.endsWith('.oga'))
    return 'audio/ogg'
  if (path.endsWith('.opus'))
    return 'audio/opus'
  if (path.endsWith('.m4a'))
    return 'audio/mp4'
  if (path.endsWith('.aac'))
    return 'audio/aac'
  if (path.endsWith('.flac'))
    return 'audio/flac'
  return undefined
}

function stopOthers(exceptIdx: number) {
  audios.value.forEach((a, i) => {
    if (i !== exceptIdx) {
      a.pause()
      try {
        a.currentTime = 0
      } catch {
        /* ignore */
      }
    }
  })
}

function syncToStep(step: number) {
  const urls = props.sources
  const idx = Number(step) - props.clicksOffset - 1
  if (!audios.value.length)
    return

  if (idx < 0 || idx >= urls.length) {
    stopAllAudios()
    return
  }

  stopOthers(idx)

  void audios.value[idx].play().catch(() => {})
}

watch(
  () => $clicksContext.current,
  (step) => {
    syncToStep(step)
  },
  { flush: 'post' },
)

watch(isSlideActive, (active) => {
  if (!active)
    stopAllAudios()
})

onMounted(() => {
  audios.value = props.sources.map((src) => {
    const audio = document.createElement('audio')
    audio.preload = 'auto'
    audio.playsInline = true
    const source = document.createElement('source')
    source.src = resolveAssetUrl(src)
    const mime = guessMimeType(src)
    if (mime)
      source.type = mime
    audio.appendChild(source)
    return audio
  })
  syncToStep($clicksContext.current)
})

onUnmounted(() => {
  stopAllAudios()
  audios.value.forEach((audio) => {
    audio.src = ''
  })
})
</script>

<template />
