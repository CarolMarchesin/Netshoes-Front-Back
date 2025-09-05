<template>
  <AppHeader />

  <div class="container">
    <AppNavbar :links="links" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import AppHeader from './components/AppHeader/AppHeader.vue';
import AppNavbar from './components/AppNavbar/AppNavbar.vue';

const router = useRoute();
const links = ref([
  { id: 0, title: 'Home', link: '/' }
]);

watch(router, (to) => {
  if (to.path !== '/') {
    links.value = [
      { id: 0, title: 'Home', link: '/' },
      { id: 1, title: String(to.name || to.path), link: to.path }
    ];
  } else {
    links.value = [
      { id: 0, title: 'Home', link: '/' }
    ];
  }
});
</script>
