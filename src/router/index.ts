import { createRouter, createWebHistory } from 'vue-router'

import WishlistPage from '@/pages/WishlistPage.vue';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: WishlistPage,
    },
  ],
})

export default router
