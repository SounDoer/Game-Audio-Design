<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  background: {
    type: String,
    default: '',
  },
})

const style = computed(() => ({
  backgroundImage: props.background ? `url(${props.background})` : '',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}))
</script>

<template>
  <div class="slidev-layout header-body w-full h-full relative">
    <div class="absolute inset-0" :style="style" style="opacity: 0.08; z-index: -1;"></div>
    <header>
      <slot />
    </header>
    <main :class="props.class">
      <slot name="body" />
    </main>
  </div>
</template>

<style scoped>
.header-body {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 1rem;
}
</style>