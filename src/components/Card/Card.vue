<template>
  <div class="card" :style="{ width: width, height: height }">
    <slot />
  </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
  width?: string;
  height?: string;
}>(), {
  width: '180px',
  height: '230px'
});

</script>

<style lang="scss" scoped>
.card {
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 4px 2px 7px rgba(0, 0, 0, 0.5);
}
</style>
