<template>
    <div class="rating-icon">
        <span v-for="i in 5" :key="i" class="star">
            <!-- Estrela completa -->
            <template v-if="props.rating >= i">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFA500" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            </template>

            <template v-else-if="props.rating >= i - 0.5">
                <!-- Meia estrela -->
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="half-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="50%" stop-color="#FFA500" />
                            <stop offset="50%" stop-color="#e0e0e0" />
                        </linearGradient>
                    </defs>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        fill="url(#half-gradient)" />
                </svg>
            </template>

            <template v-else>
                <!-- Meia estrela -->
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#e0e0e0" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            </template>
        </span>
        <span class="rating-value">{{ props.rating }}</span>
    </div>
</template>

<script setup lang="ts">
export interface RatingIconProps {
    rating: number;
}

const props = defineProps<RatingIconProps>();
</script>

<style lang="scss" scoped>
.rating-icon {
    display: flex;
    align-items: center;

    .star {
        margin-right: 3px;
        display: flex;
    }

    .rating-value {
        margin-left: 2px;
        font-size: 12px;
        font-weight: bold;
        color: #646464;
    }
}
</style>
