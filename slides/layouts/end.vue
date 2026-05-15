<template>
  <div class="slidev-layout end relative flex h-full w-full items-center overflow-hidden px-20">
    <template v-if="$slots.backdrop">
      <div class="layout-backdrop" aria-hidden="true">
        <slot name="backdrop" />
      </div>
    </template>
    <div class="end-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.end-content {
  position: relative;
  z-index: 1;
}

.end-content :deep(p:first-child) {
  font-size: 3rem;
  font-weight: 900;
  color: var(--color-text-primary);
  line-height: 1.15;
  margin: 0 0 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-accent);
}

.end-content :deep(p + p) {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.5;
  margin: 0;
}
</style>
