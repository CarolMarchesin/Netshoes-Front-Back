<template>
    <nav class="nav">
        <ul>
            <li><router-link :to="link">{{title}}</router-link></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    title: String,
    link: String,
});

</script>

<style scoped>
.nav {
    padding: 20px 0px;
    border-bottom: 1px solid #999898;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    li {
        margin-right: 16px;
        font-size: 14px;
        color: #30006b;
        font-weight: bold;
    }
}
.nav a {
    text-decoration: none;
}
</style>