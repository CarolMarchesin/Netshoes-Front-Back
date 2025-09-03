<template>
  <button class="button-icon">
    <span class="material-symbols-outlined">{{ props.icon }}</span>
    <span>{{ props.label }}</span>
  </button>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps<{
  icon: string;
  label?: string;
}>();

</script>

<style lang="scss" scoped>
.button-icon {
  background: none;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  gap: 0.3rem;
}

.button-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>