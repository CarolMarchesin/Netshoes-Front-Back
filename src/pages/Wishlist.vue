<template>
  <div class="container">
    <Loading v-if="isLoading" />

    <div v-else-if="!isLoading && wishlist.length > 0" class="header">
      <div class="wishlist" v-if="wishlist.length > 0">
        <div v-for="item in wishlist" :key="item?.code">
          <CardProduct :title="item?.name" :image="item?.image" :rating="item?.rating"
            :priceInCents="item?.priceInCents" :salePriceInCents="item?.salePriceInCents">
            <template #button>
              <ButtonIcon icon="close" :class="'custom-button'" iconSize="20px"
                :handleClick="() => removeFromWishlist(item)" />
            </template>
          </CardProduct>
        </div>
      </div>
    </div>

    <div class="empty-state" v-else>
      <span class="material-symbols-outlined favorite-icon">favorite_border</span>
      <p class="text">Você ainda não possui itens salvos na sua Lista de Desejos.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import CardProduct from '@/components/CardProduct/CardProduct.vue';
import ButtonIcon from '@/components/ButtonIcon/ButtonIcon.vue';
import { API_BASE_URL } from '@/utils/api';
import type { Product } from '@/types/interfaces';
import Loading from '@/components/Loading/Loading.vue';

const wishlist = ref<Product[]>([]);
const isLoading = ref<boolean>(false);

onMounted(() => {
  start();
});

const start = async () => {
  try {
    isLoading.value = true;
    const payload = getLocalStorage('wishlist') || [];

    const response = await fetch(`${API_BASE_URL}/products/codes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ codes: payload }),
    });

    if (response?.status === 200) {
      const data = await response.json();
      wishlist.value = data;
    }
  } catch (err) {
    console.error('Error fetching favorite products:', err);
  }
  finally {
    isLoading.value = false;
  }
};

const removeFromWishlist = (item: Product): void => {
  wishlist.value = wishlist.value.filter(product => product.code !== item.code);
  removeLocalStorageWishlist(item.code);
};

const removeLocalStorageWishlist = (code: string): void => {
  let itemsWishlist: string[] = getLocalStorage('wishlist') || [];
  itemsWishlist = itemsWishlist.filter((item: string) => item !== code);
  setLocalStorage('wishlist', itemsWishlist);
};

</script>

<style lang="scss" scoped>
.wishlist {
  margin: 20px auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  justify-content: center;

  .custom-button {
    position: absolute;
    right: -6px;
    z-index: 2;
    cursor: pointer;
    color: #999898;
    transition: background 0.2s;
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  width: 100%;

  .text {
    color: $font-color;
    font-size: 24px;
    font-weight: bold;
    max-width: 70vh;
  }

  .favorite-icon {
    font-size: 30px;
  }
}

@media (max-width: 900px) {
  .wishlist {
    grid-template-columns: repeat(2, 1fr);
    max-width: 400px;
    margin: 10px auto;
    gap: 1rem;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .wishlist {
    grid-template-columns: 1fr;
    max-width: 220px;
    margin: 10px auto;
    gap: 1rem;
    justify-content: center;
  }

  .empty-state-text {
    font-size: 18px;
  }
}
</style>
