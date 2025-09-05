import { createRouter, createWebHistory } from 'vue-router'
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
      component: () => import('@/pages/WishlistPage.vue'),
    },
  ],
})

export default router
