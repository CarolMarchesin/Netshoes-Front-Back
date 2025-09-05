<template>
    <div class="loading">
        <p class="text"> Carregando... </p>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    width: 100%;

    .text {
        color: $font-color;
        font-size: 24px;
        font-weight: bold;
    }
}
</style>
