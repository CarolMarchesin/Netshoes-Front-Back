<template>
    <div class="container">
        <AppLoading v-if="isLoading" />

        <div class="home" v-else>
            <div v-for="value in products" :key="value?.code">
                <CardProduct :title="value?.name" :image="value?.image" :rating="value?.rating"
                    :priceInCents="value?.priceInCents" :salePriceInCents="value?.salePriceInCents">
                    <template #button>
                        <ButtonIcon icon="favorite"
                            :class="'custom-button' + (isCheckWishlist[value?.code] ? ' active' : '')" iconSize="18px"
                            :handleClick="() => handleFavoriteClick(value?.code)" />
                    </template>
                </CardProduct>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import ButtonIcon from '@/components/ButtonIcon/ButtonIcon.vue';
import CardProduct from '@/components/CardProduct/CardProduct.vue';
import { onMounted, ref } from 'vue';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage';
import { API_BASE_URL } from '@/utils/api';
import type { Product } from '@/types/interfaces';
import AppLoading from '@/components/AppLoading/AppLoading.vue';

export interface WishlistState {
    [code: string]: boolean;
}

const products = ref<Product[]>([]);
const isCheckWishlist = ref<WishlistState>({});
const isLoading = ref<boolean>(false);

const start = async (): Promise<void> => {
    try {
        isLoading.value = true;
        const response = await fetch(`${API_BASE_URL}/products`);
        if (response?.status === 200) {
            const data = await response.json();
            products.value = data.products as Product[];
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        isLoading.value = false;
    }
};

const validateWishlist = (): void => {
    const itemsWishlist: string[] = getLocalStorage('wishlist') || [];
    itemsWishlist.forEach(item => {
        isCheckWishlist.value[item] = true;
    });
};

onMounted(() => {
    start();
    validateWishlist();
});

const handleFavoriteClick = (code: string): void => {
    isCheckWishlist.value[code] = !isCheckWishlist.value[code];

    let itemsWishlist: string[] = getLocalStorage('wishlist') || [];

    if (isCheckWishlist.value[code]) {
        if (!itemsWishlist.includes(code)) {
            itemsWishlist.push(code);
            setLocalStorage('wishlist', itemsWishlist);
        }
    } else {
        itemsWishlist = itemsWishlist.filter(item => item !== code);
        setLocalStorage('wishlist', itemsWishlist);
    }
};
</script>

<style lang="scss" scoped>
.home {
    margin: 20px auto;
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    justify-content: center;

    .custom-button {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgba(150, 150, 150, 1);
        position: absolute;
        top: 5px;
        right: 1px;
        z-index: 2;
        cursor: pointer;
        transition: background 0.2s;
    }

    .active {
        background-color: $active-color;
    }
}

@media (max-width: 900px) {
    .home {
        grid-template-columns: repeat(2, 1fr);
        max-width: 400px;
        margin: 10px auto;
        gap: 1rem;
        justify-content: center;
    }
}

@media (max-width: 600px) {
    .home {
        grid-template-columns: 1fr;
        max-width: 220px;
        margin: 10px auto;
        gap: 1rem;
        justify-content: center;
    }
}
</style>
