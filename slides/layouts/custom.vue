<template>
  <div class="slidev-layout custom relative h-full w-full overflow-hidden">
    <template v-if="$slots.backdrop">
      <div class="layout-backdrop" aria-hidden="true">
        <slot name="backdrop" />
      </div>
    </template>
    <div class="relative z-1 h-full w-full">
      <slot />
    </div>
  </div>
</template>
