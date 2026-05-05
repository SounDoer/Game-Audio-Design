<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout header-body w-full h-full">
    <header>
      <slot />
    </header>
    <main :class="props.class" class="grid grid-cols-3 gap-4 p-4">
      <div>
        <slot name="left" />
      </div>
      <div>
        <slot name="mid" />
      </div>
      <div>
        <slot name="right" />
      </div>
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