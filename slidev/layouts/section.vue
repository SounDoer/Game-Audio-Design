<!--
  Title slot: use ## in markdown → h2.
  Subtitle slot: one line, e.g. **English**.
  !important below overrides slidev/styles/base.css global h* (same specificity tie-breaker).
-->
<template>
  <div
    class="slidev-layout section flex h-full min-h-0 w-full flex-col items-center justify-center px-8 py-12 text-center"
  >
    <div class="section__stack flex max-w-[90vw] flex-col items-center">
      <div class="section__line section__line--primary">
        <slot name="title" />
      </div>
      <div class="section__line section__line--secondary">
        <slot name="subtitle" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section__stack {
  gap: 0.5rem;
}

.section__line--primary :deep(h1),
.section__line--primary :deep(h2),
.section__line--primary :deep(h3) {
  margin: 0 !important;
  line-height: 1.2 !important;
  font-size: clamp(2.5rem, 6.5vw, 3.75rem) !important;
  font-weight: 700 !important;
  letter-spacing: 0.03em !important;
  color: rgb(255 255 255 / 0.96) !important;
}

.section__line--secondary {
  font-size: clamp(1rem, 2.2vw, 1.35rem) !important;
  font-weight: 600 !important;
  letter-spacing: 0.06em !important;
  color: rgb(255 255 255 / 0.72) !important;
}

.section__line--secondary :deep(p) {
  margin: 0 !important;
  line-height: 1.25 !important;
  font-size: inherit !important;
  color: inherit !important;
}

.section__line--secondary :deep(strong) {
  font-weight: inherit;
  color: inherit;
}
</style>
