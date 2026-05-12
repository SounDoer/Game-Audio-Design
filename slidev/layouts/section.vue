<template>
  <div class="slidev-layout section flex h-full w-full flex-col items-center justify-center px-20">
    <div class="section-content">
      <template v-if="$slots.eyebrow">
        <div class="eyebrow-slot">
          <slot name="eyebrow" />
        </div>
      </template>
      <slot name="title" />
    </div>
  </div>
</template>

<style scoped>
.section-content {
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
</style>
