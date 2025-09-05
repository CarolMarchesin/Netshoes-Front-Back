<template>
  <Header />

  <div class="container">
    <Navbar :links="links" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Header from './components/Header/Header.vue';
import Navbar from './components/Navbar/Navbar.vue';
import { ref, watch } from 'vue';

const router = useRoute();
let links = ref([
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
