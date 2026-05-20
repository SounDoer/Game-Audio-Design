<template>
  <div class="ai-scenarios-chart">
    <div class="chart-shell">
      <div class="chart-card" aria-label="AI 工具使用场景分布图">
        <div v-for="item in primaryItems" :key="item.label" class="chart-row">
          <span class="category">{{ item.label }}</span>
          <div class="track">
            <div class="bar primary" :style="{ width: `${(item.count / maxCount) * 100}%` }"></div>
          </div>
          <span class="count">{{ item.count }}</span>
        </div>

        <div class="chart-row aigc-row">
          <span class="category">AIGC 创作</span>
          <div class="track">
            <div class="stacked" :style="{ width: `${(aigcTotal / maxCount) * 100}%` }">
              <div
                v-for="segment in aigcSegments"
                :key="segment.label"
                :style="{ flex: segment.count, backgroundColor: segment.color }"
              ></div>
            </div>
          </div>
          <span class="count">{{ aigcTotal }}</span>
        </div>

        <div class="aigc-legend">
          <span v-for="segment in aigcSegments" :key="segment.label">
            <i :style="{ backgroundColor: segment.color }"></i>
            {{ segment.label }} {{ segment.count }}
          </span>
        </div>
      </div>

      <p class="note">
        共计 25 位同学，AIGC 创作条显示 12 位独立受访者，内部按各子类原始计数比例分段。
      </p>
    </div>
  </div>
</template>

<script setup>
const maxCount = 18
const aigcTotal = 12

const primaryItems = [
  { label: '编程辅助', count: 18 },
  { label: '学习辅助', count: 17 },
  { label: '文字处理', count: 11 },
  { label: '日常生活', count: 8 },
]

const aigcSegments = [
  { label: '图像生成', count: 9, color: '#7F77DD' },
  { label: '视频生成', count: 7, color: '#D85A30' },
  { label: '音频生成', count: 5, color: '#1D9E75' },
  { label: '其他资产', count: 2, color: '#BA7517' },
]
</script>

<style scoped>
.ai-scenarios-chart {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: var(--color-text-primary);
}

.chart-shell {
  width: min(920px, 100%);
}

.chart-card {
  border: 1px solid var(--color-border);
  background: rgba(20, 20, 20, 0.86);
  padding: 28px 30px 24px;
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
}

.chart-row {
  display: grid;
  grid-template-columns: 6.4rem minmax(0, 1fr) 2.2rem;
  align-items: center;
  gap: 14px;
  margin: 10px 0;
}

.category {
  text-align: right;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.track {
  height: 30px;
  overflow: hidden;
  border-radius: 4px;
  background: #242424;
}

.bar,
.stacked {
  height: 100%;
  border-radius: 4px;
}

.bar.primary {
  background: #378ADD;
}

.stacked {
  display: flex;
  overflow: hidden;
}

.count {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.aigc-row {
  margin-top: 22px;
}

.aigc-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  padding: 10px 0 0 7.35rem;
  font-size: 0.78rem;
  color: var(--color-text-body);
}

.aigc-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.aigc-legend i {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 2px;
}

.note {
  margin: 12px 2px 0;
  text-align: right;
  font-size: 0.78rem;
  color: var(--color-text-muted);
}
</style>
