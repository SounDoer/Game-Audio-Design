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