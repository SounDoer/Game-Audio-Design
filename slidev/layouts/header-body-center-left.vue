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
    <main :class="props.class" class="flex justify-start items-center">
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

main img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>