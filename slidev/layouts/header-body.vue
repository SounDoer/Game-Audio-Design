<script setup lang="ts">
import { useNav } from '@slidev/client'
const { currentPage } = useNav()
</script>

<template>
  <div class="slidev-layout header-body relative flex h-full w-full flex-col">
    <header class="header-area px-6 pt-2 pb-4">
      <template v-if="$slots.eyebrow">
        <div class="eyebrow-slot">
          <slot name="eyebrow" />
        </div>
      </template>
      <slot name="title" />
    </header>
    <main class="flex-1 overflow-hidden px-6 pb-6 pt-3">
      <slot name="body" />
    </main>
    <span class="page-number">{{ currentPage }}</span>
  </div>
</template>

<style scoped>
.header-area {
  display: flex;
  flex-direction: column;
}

.eyebrow-slot {
  width: fit-content;
  border-bottom: 1px solid var(--color-accent);
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;
}

.eyebrow-slot :deep(p) {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.4;
}
</style>
