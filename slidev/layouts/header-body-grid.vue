<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  cols: {
    type: [Number, String],
    default: 2,
  },
})

const isThreeCols = computed(() => Number(props.cols) === 3)
</script>

<template>
  <div class="slidev-layout header-body w-full h-full">
    <header>
      <slot />
    </header>
    <main
      :class="[
        props.class,
        'grid gap-4 p-4',
        isThreeCols ? 'grid-cols-3' : 'grid-cols-2',
      ]"
    >
      <template v-if="isThreeCols">
        <div>
          <slot name="left" />
        </div>
        <div>
          <slot name="mid" />
        </div>
        <div>
          <slot name="right" />
        </div>
      </template>
      <template v-else>
        <div>
          <slot name="left" />
        </div>
        <div>
          <slot name="right" />
        </div>
      </template>
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
