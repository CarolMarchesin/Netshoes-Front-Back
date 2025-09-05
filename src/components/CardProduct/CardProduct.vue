<template>
    <BaseCard class="card">
        <template #default>
            <div class="content-image">
                <slot name="button" />
                <img :src="image" alt="Product Image" class="image" />
            </div>

            <span class="title">{{ title }}</span>

            <RatingIcon :rating="rating" />

            <div class="price-in-cents">{{ formatCurrency(priceInCents) }}</div>
            <div class="sale-price-in-cents">{{ formatCurrency(salePriceInCents) }}</div>
        </template>
    </BaseCard>
</template>

<script setup lang="ts">
import RatingIcon from '../RatingIcon/RatingIcon.vue';
import formatCurrency from '../../utils/formatCurrency';
import BaseCard from '../BaseCard/BaseCard.vue';

export interface CardProductProps {
    title: string;
    image: string;
    rating: number;
    priceInCents: string;
    salePriceInCents: string;
}

defineProps<CardProductProps>();

</script>

<style lang="scss" scoped>
.card {
    cursor: pointer;
}

.content-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
}

.image {
    width: 8rem;
    height: auto;
}

.title {
    font-weight: bold;
    font-size: 12px;
    margin: 4px 0px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: normal;
    line-clamp: 2;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
}

.price-in-cents {
    font-size: 12px;
    color: #646464;
    text-decoration: line-through;
    margin-top: 4px;
}

.sale-price-in-cents {
    font-size: 16px;
    color: $secondary-color;
    font-weight: bold;
}

.custom-button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(150, 150, 150, 1);
    position: absolute;
    top: 5px;
    right: 1px;
    z-index: 2;
    cursor: pointer;
    transition: background 0.2s;
}

.custom-button.active {
    background-color: $active-color;
}
</style>
