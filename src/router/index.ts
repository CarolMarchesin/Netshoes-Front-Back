import { createRouter, createWebHistory } from 'vue-router'

import Wishlist from '@/pages/Wishlist.vue';
import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist,
    },
  ],
})

export default router
