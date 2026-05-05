<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
})

function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

function handleBackground(background?: string, dim = false, backgroundSize = 'cover'): CSSProperties {
  const isColor = background && (background[0] === '#' || background.startsWith('rgb'))

  const style: CSSProperties = {
    background: isColor
      ? background
      : undefined,
    color: (background && !isColor)
      ? 'white'
      : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
          : `url("${resolveAssetUrl(background)}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize,
  }

  if (!style.background)
    delete style.background

  return style
}

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>
  <div class="slidev-layout w-full h-full" :style="style">
    <slot />
  </div>
</template>
