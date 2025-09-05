<template>
    <div v-if="visible" class="popover">
        <div class="popover-arrow"></div>
        <slot name="item"></slot>
    </div>
</template>

<script setup lang="ts">
export interface PopoverProps {
    visible: boolean;
}

defineProps<PopoverProps>();

</script>

<style lang="scss" scoped>
.popover {
    position: absolute;
    top: 55px;
    background-color: white;
    transform: translateX(-65%);
    border: 1px solid #ccc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 10px;
    z-index: 1000;

    .popover-arrow {
        position: absolute;
        top: -8px;
        right: 3px;
        width: 0;
        height: 0;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        border-bottom: 18px solid white;
        filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.08));
    }
}
</style>