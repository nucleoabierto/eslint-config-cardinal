<template>
  <div class="config-card" :class="{ featured }">
    <h3>{{ title }}</h3>
    <p><strong>{{ description }}</strong></p>
    <slot></slot>
    <div class="includes">
      <strong>Incluye:</strong> {{ includes }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  includes: string
  featured?: boolean
}

defineProps<Props>()
</script>
