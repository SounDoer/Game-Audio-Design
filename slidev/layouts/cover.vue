<template>
  <div class="slidev-layout cover relative h-full w-full overflow-hidden px-20">
    <template v-if="$slots.backdrop">
      <div class="layout-backdrop" aria-hidden="true">
        <slot name="backdrop" />
      </div>
    </template>
    <span class="cover-accent-rail" aria-hidden="true" />
    <div class="cover-content">
      <template v-if="$slots.eyebrow">
        <div class="eyebrow-slot">
          <slot name="eyebrow" />
        </div>
      </template>
      <slot name="title" />
    </div>
    <!-- Keep a stable footnote region; optional ::info:: content is easy to miss at 0.65rem in the corner. -->
    <div class="info-area">
      <slot name="info" />
    </div>
  </div>
</template>

<style scoped>
/* Override default theme's display:grid on .slidev-layout.cover */
.slidev-layout.cover {
  display: flex;
  align-items: center;
}

.cover-content {
  position: relative;
  z-index: 1;
  width: 100%;
}

.cover-content :deep(h1) {
  font-size: 4.5rem;
  line-height: 1.1;
  margin: 0;
}

.cover-accent-rail {
  position: absolute;
  top: 4rem;
  bottom: 4rem;
  left: 2rem;
  width: 1px;
  background: var(--color-accent);
  z-index: 1;
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

.info-area {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  z-index: 2;
  text-align: right;
  max-width: min(42rem, 55vw);
}

.info-area:not(:empty)::before {
  content: "";
  display: block;
  width: 2.5rem;
  border-top: 1px solid var(--color-accent);
  margin: 0 0 0.65rem auto;
}

.info-area :deep(p) {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.6;
}
</style>
