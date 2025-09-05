<template>
  <div class="card" :style="{ width: width, height: height }">
    <slot />
  </div>
</template>

<script setup lang="ts">

export interface CardProps {
  width?: string;
  height?: string;
}

withDefaults(defineProps<CardProps>(), {
  width: '180px',
  height: '230px'
});

</script>

<style lang="scss" scoped>
.card {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 2px 10px 16px 10px;
  box-shadow: 4px 2px 7px rgba(0, 0, 0, 0.4);
}
</style>
