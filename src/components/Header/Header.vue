<template>
    <div class="header container">
        <img :src="Logo" alt="Logo" class="logo" />

        <div class="buttons">
            <ButtonIcon icon="favorite" label="Wishlist" />
            <ButtonIcon icon="account_circle" />
        </div>
    </div>
</template>

<script setup lang="ts">

import ButtonIcon from '../ButtonIcon/ButtonIcon.vue';
import Logo from '../../assets/images/logo.svg';

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
</style>