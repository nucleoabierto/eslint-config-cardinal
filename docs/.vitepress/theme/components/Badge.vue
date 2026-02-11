<template>
  <span class="badge" :class="type">
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  type?: 'tip' | 'warning' | 'danger' | 'info'
}

defineProps<Props>()
</script>
