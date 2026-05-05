<!--
  Title slot: use ## in markdown → h2.
  Subtitle slot: one line, e.g. **English**.
  Typography: same as other slides — slidev/styles/base.css (.slidev-layout h*, p).
-->
<template>
  <div
    class="slidev-layout section flex h-full min-h-0 w-full flex-col items-center justify-center px-8 py-12 text-center"
  >
    <div class="flex max-w-[90vw] flex-col items-center gap-2">
      <div>
        <slot name="title" />
      </div>
      <div>
        <slot name="subtitle" />
      </div>
    </div>
  </div>
</template>
