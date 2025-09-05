<template>
    <nav class="nav">
        <ul>
            <li v-for="value in links" :key="value.id">
                <router-link :to="value.link">{{ value.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

export interface NavbarLink {
    id: number;
    title: string;
    link: string;
}

export interface NavbarProps {
    links: NavbarLink[];
}

defineProps<NavbarProps>();

</script>

<style lang="scss" scoped>
.nav {
    padding: 20px 0px;
    border-bottom: 1px solid #999898;
    display: flex;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;

        li {
            margin-right: 5px;
            font-size: 14px;
            color: $secondary-color;
        }

        li::after {
            content: "/";
            color: $secondary-color;
            margin-left: 5px;
        }

        li:last-child {
            font-weight: bold;
        }

        li:last-child::after {
            content: "";
            margin: 0;
        }

    }
    a {
        text-decoration: none;
    }
}
</style>