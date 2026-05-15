<template>
  <div class="slidev-layout statement relative flex h-full w-full items-center justify-center overflow-hidden px-20">
    <template v-if="$slots.backdrop">
      <div class="layout-backdrop" aria-hidden="true">
        <slot name="backdrop" />
      </div>
    </template>
    <div class="relative z-1 w-full">
      <template v-if="$slots.title">
        <div class="statement-quote">
          <slot name="title" />
          <template v-if="$slots.subtitle">
            <div class="subtitle-slot">
              <slot name="subtitle" />
            </div>
          </template>
        </div>
      </template>
      <div v-else class="text-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.statement-quote {
  max-width: 48rem;
  margin: 0 auto;
  border-left: 1px solid var(--color-accent);
  padding-left: 1rem;
  text-align: left;
}

.subtitle-slot {
  margin-top: 0.85rem;
}

.subtitle-slot :deep(p) {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
}
</style>
