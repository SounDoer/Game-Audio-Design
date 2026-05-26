<script setup lang="ts">
function resolveAssetUrl(url?: string) {
  if (!url)
    return ''
  if (/^https?:\/\//.test(url))
    return url
  if (url.startsWith('/'))
    return `${import.meta.env.BASE_URL}${url.slice(1)}`
  return `${import.meta.env.BASE_URL}${url}`
}

function objectFitClass(backgroundSize?: string) {
  return backgroundSize === 'contain' ? 'object-contain' : 'object-cover'
}

function mediaSizeStyle(backgroundSize?: string) {
  if (!backgroundSize || backgroundSize === 'cover' || backgroundSize === 'contain')
    return {}

  const [width, height = 'auto'] = backgroundSize.split(/\s+/)
  return {
    width,
    height,
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  }
}
</script>

<template>
  <div class="slidev-layout fullscreen-media relative h-full w-full overflow-hidden">
    <img
      v-if="$frontmatter.image"
      class="absolute inset-0 m-auto h-full w-full"
      :class="objectFitClass($frontmatter.backgroundSize)"
      :style="mediaSizeStyle($frontmatter.backgroundSize)"
      :src="resolveAssetUrl($frontmatter.image)"
      :alt="$frontmatter.alt || ''"
    >
    <div v-else class="absolute inset-0 flex items-center justify-center bg-[var(--color-surface)]">
      <span class="badge">Media Missing</span>
    </div>
    <div class="relative z-1 h-full w-full">
      <slot />
    </div>
  </div>
</template>
