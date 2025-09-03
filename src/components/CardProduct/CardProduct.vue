<template>
    <Card>
        <template #default>
            <div class="content-image">
                <img :src="image" alt="Product Image" class="image" />
            </div>

            <div class="title">{{ title }}</div>

        </template>
    </Card>
</template>

<script setup lang="ts">
import Card from '../Card/Card.vue';

defineProps<{
  title: string;
  image: string;
}>();

</script>

<style lang="scss" scoped>
.content-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.image {
    width: 8rem;
    height: auto;
}

.title {
    font-weight: bold;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
}

</style>
