import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue';
import Withlist from '../pages/Withlist.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/withlist',
      name: 'Withlist',
      component: Withlist,
    },
  ],
})

export default router
