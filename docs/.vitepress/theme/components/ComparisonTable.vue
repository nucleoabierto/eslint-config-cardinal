<template>
  <div class="comparison-table">
    <div class="table-header">
      <h3>{{ title }}</h3>
      <div class="table-controls">
        <button 
          @click="toggleView" 
          class="view-toggle"
          :class="{ 'detailed': detailedView }"
        >
          {{ detailedView ? '📋 Simple' : '📊 Detallado' }}
        </button>
      </div>
    </div>
    
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>{{ firstColumnTitle }}</th>
            <th v-for="config in configs" :key="config.name">
              <div class="config-header">
                <span class="config-name">{{ config.name }}</span>
                <span v-if="config.recommended" class="recommended-badge">⭐</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="feature in features" :key="feature.name">
            <td class="feature-name">
              <div class="feature-info">
                <span>{{ feature.name }}</span>
                <div v-if="detailedView && feature.description" class="feature-description">
                  {{ feature.description }}
                </div>
              </div>
            </td>
            <td v-for="config in configs" :key="config.name" class="feature-cell">
              <div class="feature-status" :class="getStatusClass(config, feature)">
                <span class="status-icon">{{ getStatusIcon(config, feature) }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="table-footer">
      <div class="legend">
        <div class="legend-item">
          <span class="status-icon">✅</span>
          <span>Incluido</span>
        </div>
        <div class="legend-item">
          <span class="status-icon">⚠️</span>
          <span>Parcial</span>
        </div>
        <div class="legend-item">
          <span class="status-icon">❌</span>
          <span>No incluido</span>
        </div>
      </div>
      <div v-if="recommendation" class="recommendation">
        💡 <strong>Recomendación:</strong> {{ recommendation }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Feature {
  name: string
  description?: string
  configs: Record<string, 'included' | 'partial' | 'excluded'>
}

interface Config {
  name: string
  recommended?: boolean
}

interface Props {
  title: string
  firstColumnTitle: string
  configs: Config[]
  features: Feature[]
  recommendation?: string
}

const props = defineProps<Props>()
const detailedView = ref(false)

const toggleView = () => {
  detailedView.value = !detailedView.value
}

const getStatusClass = (config: Config, feature: Feature) => {
  const status = feature.configs[config.name]
  return {
    included: status === 'included',
    partial: status === 'partial',
    excluded: status === 'excluded'
  }
}

const getStatusIcon = (config: Config, feature: Feature) => {
  const status = feature.configs[config.name]
  switch (status) {
    case 'included': return '✅'
    case 'partial': return '⚠️'
    case 'excluded': return '❌'
    default: return '❓'
  }
}
</script>

<style scoped>
.comparison-table {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  margin: 2rem 0;
  background: var(--vp-c-bg);
}

.table-header {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-bottom: 1px solid var(--vp-c-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-header h3 {
  margin: 0;
  color: var(--vp-c-brand);
}

.view-toggle {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-toggle:hover {
  background: var(--vp-c-bg-soft);
}

.view-toggle.detailed {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid var(--vp-c-border);
}

.config-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.config-name {
  font-weight: 600;
}

.recommended-badge {
  font-size: 0.875rem;
}

.feature-name {
  padding: 1rem;
  font-weight: 600;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-border);
  width: 200px;
}

.feature-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.feature-description {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-weight: normal;
}

.feature-cell {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-border);
}

.feature-status {
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-status.included .status-icon {
  color: var(--vp-c-tip);
}

.feature-status.partial .status-icon {
  color: var(--vp-c-warning);
}

.feature-status.excluded .status-icon {
  color: var(--vp-c-danger);
}

.status-icon {
  font-size: 1.25rem;
}

.table-footer {
  background: var(--vp-c-bg-soft);
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--vp-c-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.legend {
  display: flex;
  gap: 1.5rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.recommendation {
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
}

@media (max-width: 768px) {
  .table-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .table-footer {
    flex-direction: column;
    text-align: center;
  }
  
  .legend {
    justify-content: center;
  }
  
  .feature-name {
    width: 150px;
  }
}
</style>
