<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 300 200" class="w-full h-full">
      <defs>
        <radialGradient id="pointGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="var(--color-accent)" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="var(--color-accent)" stop-opacity="0"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g v-if="type === 'point'">
        <circle cx="150" cy="95" r="90" fill="url(#pointGradient)"/>
        <circle cx="150" cy="95" r="90" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="8,8" opacity="0.4"/>
        <circle cx="150" cy="95" r="70" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="6,6" opacity="0.5"/>
        <circle cx="150" cy="95" r="50" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
        <circle cx="150" cy="95" r="30" fill="none" stroke="var(--color-accent)" stroke-width="2" opacity="0.8"/>
        <circle cx="150" cy="95" r="8" fill="var(--color-accent)" filter="url(#glow)"/>
        <text x="150" y="195" text-anchor="middle" fill="#666666" font-size="6" font-weight="700">衰减范围</text>
      </g>
      
      <g v-else-if="type === 'line'">
        <polyline points="40,150 100,150 160,50 260,50" fill="none" stroke="var(--color-accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="40" cy="150" r="4" fill="var(--color-accent)" filter="url(#glow)"/>
        <circle cx="260" cy="50" r="4" fill="var(--color-accent)" filter="url(#glow)"/>
        
        <circle cx="200" cy="120" r="6" fill="#666666"/>
        <text x="200" y="150" text-anchor="middle" fill="#666666" font-size="6" font-weight="700">Listener</text>
        
        <line x1="200" y1="120" x2="140" y2="84" stroke="#999999" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
        
        <circle cx="140" cy="84" r="5" fill="var(--color-accent)" filter="url(#glow)"/>
        <text x="50" y="75" fill="var(--color-accent)" font-size="6" font-weight="700">Emitter</text>
      </g>
      
      <g v-else-if="type === 'volume'">
        <rect x="20" y="-10" width="260" height="170" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="8,8" opacity="0.5"/>
        <rect x="45" y="7" width="210" height="136" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="6,6" opacity="0.6"/>
        <rect x="70" y="25" width="160" height="100" fill="var(--color-accent)" fill-opacity="0.15" stroke="var(--color-accent)" stroke-width="2"/>
        
        <circle cx="150" cy="125" r="5" fill="var(--color-accent)" filter="url(#glow)"/>
        <text x="150" y="110" text-anchor="middle" fill="var(--color-accent)" font-size="6" font-weight="700">Emitter</text>
        
        <circle cx="150" cy="190" r="5" fill="#666666"/>
        <text x="150" y="215" text-anchor="middle" fill="#666666" font-size="6" font-weight="700">Listener</text>
        
        <line x1="150" y1="130" x2="150" y2="190" stroke="#999999" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
      </g>
      
      <g v-else-if="type === 'scatter'">
        <polygon points="30,150 230,150 230,50 30,50" fill="var(--color-accent)" fill-opacity="0.05" stroke="#999999" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
        <polygon points="30,50 70,20 270,20 230,50" fill="var(--color-accent)" fill-opacity="0.08" stroke="#999999" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
        <polygon points="230,50 270,20 270,120 230,150" fill="var(--color-accent)" fill-opacity="0.1" stroke="#999999" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
        
        <circle cx="80" cy="100" r="4" fill="var(--color-accent)" filter="url(#glow)"/>
        <circle cx="160" cy="80" r="3" fill="var(--color-accent)" opacity="0.7" filter="url(#glow)"/>
        <circle cx="120" cy="120" r="5" fill="var(--color-accent)" filter="url(#glow)"/>
        <circle cx="200" cy="90" r="3" fill="var(--color-accent)" opacity="0.6" filter="url(#glow)"/>
        <circle cx="60" cy="70" r="4" fill="var(--color-accent)" opacity="0.8" filter="url(#glow)"/>
        <circle cx="180" cy="110" r="3" fill="var(--color-accent)" opacity="0.5" filter="url(#glow)"/>
        <circle cx="100" cy="60" r="4" fill="var(--color-accent)" opacity="0.7" filter="url(#glow)"/>
        <circle cx="140" cy="95" r="3" fill="var(--color-accent)" opacity="0.6" filter="url(#glow)"/>
      </g>
      
      <g v-else-if="type === 'spatialized-bed'">
        <path d="M 250 30 L 250 170 L 80 170 L 80 130" fill="none" stroke="var(--color-accent)" stroke-width="2"/>
        <path d="M 80 70 L 80 30 L 250 30" fill="none" stroke="var(--color-accent)" stroke-width="2"/>
        
        <circle cx="80" cy="100" r="5" fill="var(--color-accent)" filter="url(#glow)"/>
        
        <path d="M 80 70 Q 40 100 80 130" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="8,8" opacity="0.4"/>
        <path d="M 80 60 Q 20 100 80 140" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="6,6" opacity="0.5"/>
        <path d="M 80 50 Q 0 100 80 150" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
        <path d="M 80 40 Q -20 100 80 160" fill="none" stroke="#999999" stroke-width="1" stroke-dasharray="2,2" opacity="0.7"/>
        
        <text x="165" y="105" text-anchor="middle" fill="#666666" font-size="6" font-weight="700">Room Tone</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['point', 'line', 'volume', 'scatter', 'spatialized-bed'].includes(value)
  }
})

const scatterPoints = computed(() => {
  return [
    { x: 80, y: 60, r: 4, active: true },
    { x: 120, y: 100, r: 3, active: false },
    { x: 180, y: 70, r: 5, active: true },
    { x: 220, y: 120, r: 4, active: false },
    { x: 150, y: 140, r: 3, active: true },
    { x: 90, y: 130, r: 4, active: false },
    { x: 200, y: 90, r: 3, active: false },
    { x: 130, y: 50, r: 4, active: true }
  ]
})
</script>
