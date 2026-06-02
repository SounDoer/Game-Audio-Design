<script setup lang="ts">
defineProps<{
  layer: 'loop' | 'random' | 'blend' | 'blend-horizontal'
}>()

const BURN_BLOCKS   = [{ x: 172, w: 400 }, { x: 582, w: 400 }, { x: 992, w: 400 }, { x: 1402, w: 400 }]
const SIZZLE_BLOCKS = [{ x: 280, w: 109 }, { x: 500, w: 109 }, { x: 880, w: 109 }, { x: 1100, w: 109 }, { x: 1500, w: 109 }]
const CRACK_BLOCKS  = [{ x: 220, w: 119 }, { x: 560, w: 119 }, { x: 770, w: 119 }, { x: 1120, w: 119 }, { x: 1320, w: 119 }, { x: 1620, w: 119 }]
</script>

<template>
  <svg viewBox="0 0 1830 350" class="w-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blendGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D45A2A" stop-opacity="0.12" />
        <stop offset="100%" stop-color="#D45A2A" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="hFade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#0A0A0A" stop-opacity="1" />
        <stop offset="10%" stop-color="#0A0A0A" stop-opacity="0" />
        <stop offset="90%" stop-color="#0A0A0A" stop-opacity="0" />
        <stop offset="100%" stop-color="#0A0A0A" stop-opacity="1" />
      </linearGradient>
    </defs>

    <!-- Timeline -->
    <line x1="9" y1="325" x2="1821" y2="325" stroke="#555555" stroke-width="1.5" stroke-dasharray="6 6" />
    <polygon points="1826,325 1818,321 1818,329" fill="#555555" />
    <text x="1826" y="342" fill="#666666" font-size="10" text-anchor="end">time</text>

    <!-- LAYER 1: Burn -->
    <g v-if="layer === 'blend-horizontal'" />
    <g v-else-if="layer === 'random'">
      <text x="10" y="245" fill="#555555" font-size="12" font-weight="700" dominant-baseline="central">Burn</text>
      <rect v-for="b in BURN_BLOCKS" :key="b.x"
        :x="b.x" y="210" :width="b.w" height="70" rx="10"
        fill="#555555" opacity="0.6" />
    </g>
    <g v-else>
      <text x="10" y="245" fill="#D45A2A" font-size="12" font-weight="700" dominant-baseline="central">Burn</text>
      <rect v-for="b in BURN_BLOCKS" :key="b.x"
        :x="b.x" y="210" :width="b.w" height="70" rx="10"
        fill="#D45A2A" opacity="0.85" />
    </g>

    <!-- LAYER 2: Crack + Sizzle -->
    <g v-if="layer !== 'loop' && layer !== 'blend-horizontal'">
      <text x="10" y="31" fill="#D4A52A" font-size="10" font-weight="700" dominant-baseline="central">Crack</text>
      <rect v-for="s in SIZZLE_BLOCKS" :key="'s'+s.x"
        :x="s.x" y="10" :width="s.w" height="42" rx="6"
        fill="#D4A52A" opacity="0.75" />
      <text x="10" y="130" fill="#D4782A" font-size="11" font-weight="700" dominant-baseline="central">Sizzle</text>
      <rect v-for="c in CRACK_BLOCKS" :key="'c'+c.x"
        :x="c.x" y="105" :width="c.w" height="50" rx="7"
        fill="#D4782A" opacity="0.8" />
    </g>

    <!-- LAYER 3: Blend Vertical -->
    <g v-if="layer === 'blend'">
      <rect x="0" y="0" width="1830" height="290" fill="url(#blendGrad)" />
    </g>

    <!-- LAYER 3b: Blend Horizontal — three-phase timeline -->
    <g v-if="layer === 'blend-horizontal'">

      <!-- Ignition -->
      <text x="145" y="70" fill="#666666" font-size="10" font-weight="700" text-anchor="middle">Ignition</text>
      <rect x="30" y="95" width="230" height="70" rx="10" fill="#D45A2A" opacity="0.3" />

      <!-- Burning (combined) -->
      <text x="915" y="55" fill="#D45A2A" font-size="12" font-weight="700" text-anchor="middle">Burn + Sizzle + Crack</text>
      <rect x="295" y="80" width="1240" height="100" rx="10" fill="#D45A2A" opacity="0.85" />

      <!-- Extinguish -->
      <text x="1690" y="70" fill="#666666" font-size="10" font-weight="700" text-anchor="middle">Extinguish</text>
      <rect x="1570" y="95" width="230" height="70" rx="10" fill="#D45A2A" opacity="0.3" />
    </g>
  </svg>
</template>
