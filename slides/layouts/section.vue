<template>
  <div class="slidev-layout section relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-20">
    <template v-if="$slots.backdrop">
      <div class="layout-backdrop" aria-hidden="true">
        <slot name="backdrop" />
      </div>
    </template>
    <div class="section-content">
      <template v-if="$slots.eyebrow">
        <div class="eyebrow-slot">
          <slot name="eyebrow" />
        </div>
      </template>
      <slot name="title" />
      <template v-if="$slots.subtitle">
        <div class="subtitle-slot">
          <slot name="subtitle" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.section-content {
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
}

.eyebrow-slot {
  width: fit-content;
  margin: 0 auto 1.25rem;
  border-bottom: 1px solid var(--color-accent);
  padding-bottom: 0.5rem;
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

.subtitle-slot {
  margin-top: 0.9rem;
}

.subtitle-slot :deep(p) {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
}
</style>
