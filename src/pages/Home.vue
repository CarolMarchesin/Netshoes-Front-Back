<template>
    <div class="container">
        <Navbar :title="'Home'" link="/"></Navbar>
        <div class="home">
            <div v-for="value in products" :key="value?.code">
                <CardProduct :title="value?.name" :image="value?.image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CardProduct from '@/components/CardProduct/CardProduct.vue';
import Navbar from '@/components/Navbar/Navbar.vue';
import { onMounted, ref } from 'vue';

const products = ref([]);

const start = async () => {
    try {
        const response = await fetch('http://localhost:3000/products');

        if (response?.status === 200) {
            const data = await response.json();
            products.value = data.products;
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

onMounted(() => {
    start();
});

</script>

<style scoped>
.home {
    margin: 20px auto;
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    justify-content: center;
}

@media (max-width: 900px) {
    .home {
        grid-template-columns: repeat(2, 1fr);
        max-width: 400px;
        margin: 10px auto;
        gap: 0.5rem;
        justify-content: center;
    }
}

@media (max-width: 600px) {
    .home {
        grid-template-columns: 1fr;
        max-width: 220px;
        margin: 10px auto;
        gap: 0.5rem;
        justify-content: center;
    }
}
</style>
