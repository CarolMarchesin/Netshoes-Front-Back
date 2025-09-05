<template>
    <div class="header container">
        <img :src="Logo" alt="Logo" class="logo" />

        <div class="buttons">
            <ButtonIcon icon="favorite" label="Wishlist" :handleClick="handleWishlistClick" />

            <div class="menu-popover" @mouseenter="handlePopoverEnter" @mouseleave="handlePopoverLeave">
                <ButtonIcon icon="account_circle" :handleClick="handleProfileClick" />
                <Popover :visible="isOpenPopover">
                    <template #item>
                        <div class="item-popover">
                            <router-link v-for="item in userMenuItems" :key="item" :to="`/`" class="nav-item-popover">
                                {{ item }}
                            </router-link>
                        </div>
                    </template>
                </Popover>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import ButtonIcon from '../ButtonIcon/ButtonIcon.vue';
import Logo from '../../assets/images/logo.svg';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import Popover from '../Popover/Popover.vue';
import userMenuItems from '../../variables/userMenuItems';

const router = useRouter();
const isOpenPopover = ref(false);

const handleWishlistClick = () => {
    router.push('/wishlist');
}

const handleProfileClick = () => {
    isOpenPopover.value = !isOpenPopover.value;
}

let popoverTimeout: ReturnType<typeof setTimeout> | null = null;

const handlePopoverEnter = () => {
    if (popoverTimeout) clearTimeout(popoverTimeout);
    isOpenPopover.value = true;
};

const handlePopoverLeave = () => {
    popoverTimeout = setTimeout(() => {
        isOpenPopover.value = false;
    }, 100);
};

</script>

<style lang="scss" scoped>
.header {
    background-color: $primary-color;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 130px;
    height: auto;
}

.buttons {
    display: flex;
    gap: 4rem;
    align-items: center;
}

.item-popover {
    display: flex;
    flex-direction: column;
}

.nav-item-popover {
    cursor: pointer;
    color: $font-color;
    font-size: 12px;
    margin: 3px 0px;
    min-width: 85px;
    text-decoration: none;
    display: inline-block;

    &:hover {
        color: $primary-color;
        transition: color 0.3s;
        text-decoration: none;
    }
}

@media (max-width: 640px) {
    .logo {
        width: 110px;
        height: auto;
    }
}

@media (max-width: 320px) {
    .logo {
        width: 100px;
        height: auto;
    }

    .wishlist-label {
        display: block;
    }

    .header {
        display: flex;
        justify-content: start;
    }

    .buttons {
        gap: 1rem;
        margin-left: auto;
    }
}
</style>