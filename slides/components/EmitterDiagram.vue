<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 300 200" class="w-full h-full max-h-[200px]">
      <defs>
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
        <circle cx="150" cy="100" r="80" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4"/>
        <circle cx="150" cy="100" r="60" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4"/>
        <circle cx="150" cy="100" r="40" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4"/>
        <circle cx="150" cy="100" r="20" fill="none" stroke="var(--color-accent)" stroke-width="2"/>
        <circle cx="150" cy="100" r="6" fill="var(--color-accent)" filter="url(#glow)"/>
        <text x="150" y="170" text-anchor="middle" fill="var(--color-text)" font-size="12">衰减范围</text>
      </g>
      
      <g v-else-if="type === 'line'">
        <line x1="50" y1="100" x2="250" y2="100" stroke="var(--color-accent)" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="50" cy="100" rx="6" ry="6" fill="var(--color-accent)" filter="url(#glow)"/>
        <ellipse cx="250" cy="100" rx="6" ry="6" fill="var(--color-accent)" filter="url(#glow)"/>
        <path d="M 50 60 Q 150 50 250 60" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4"/>
        <path d="M 50 80 Q 150 75 250 80" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4"/>
        <path d="M 50 120 Q 150 125 250 120" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4"/>
        <path d="M 50 140 Q 150 150 250 140" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4"/>
        <text x="150" y="170" text-anchor="middle" fill="var(--color-text)" font-size="12">沿线传播</text>
      </g>
      
      <g v-else-if="type === 'volume'">
        <rect x="70" y="40" width="160" height="120" fill="url(#fadeGradient)" stroke="var(--color-accent)" stroke-width="2"/>
        <rect x="70" y="40" width="160" height="120" fill="none" stroke="var(--color-accent)" stroke-width="1" stroke-dasharray="4" opacity="0.5"/>
        <circle cx="150" cy="100" r="4" fill="var(--color-accent)" filter="url(#glow)"/>
        <path d="M 30 100 L 70 100" stroke="var(--color-text-muted)" stroke-width="1" stroke-dasharray="4" marker-end="url(#arrow)"/>
        <path d="M 270 100 L 230 100" stroke="var(--color-text-muted)" stroke-width="1" stroke-dasharray="4" marker-end="url(#arrow)"/>
        <text x="30" y="95" text-anchor="middle" fill="var(--color-text-muted)" font-size="10">外部</text>
        <text x="270" y="95" text-anchor="middle" fill="var(--color-text-muted)" font-size="10">内部</text>
        <text x="150" y="175" text-anchor="middle" fill="var(--color-text)" font-size="12">边界区域</text>
      </g>
      
      <g v-else-if="type === 'scatter'">
        <rect x="50" y="30" width="200" height="140" fill="none" stroke="var(--color-border)" stroke-width="1" stroke-dasharray="4"/>
        <circle v-for="(point, index) in scatterPoints" :key="index" 
                :cx="point.x" :cy="point.y" :r="point.r" 
                :fill="point.active ? 'var(--color-accent)' : 'var(--color-text-muted)'"
                :opacity="point.active ? 1 : 0.4"
                filter="url(#glow)"/>
        <text x="150" y="175" text-anchor="middle" fill="var(--color-text)" font-size="12">随机触发</text>
      </g>
      
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-text-muted)"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['point', 'line', 'volume', 'scatter'].includes(value)
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
