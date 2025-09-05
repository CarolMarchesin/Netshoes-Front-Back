<template>
  <button class="button-icon" @click="handleClick">
    <span class="material-symbols-outlined" :style="{ fontSize: iconSize }">{{ icon }}</span>
    <div v-if="label" class="label">{{ label }}</div>
  </button>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

export interface ButtonIconProps {
  icon: string;
  label?: string;
  iconSize?: string;
  handleClick?: () => void;
}

defineProps<ButtonIconProps>();

</script>

<style lang="scss" scoped>
.button-icon {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
}

.label {
  margin-left: 0.5rem;
}

@media (max-width: 320px) {
  .label {
    display: none;
  }
}

</style>