<script setup lang="ts">
import { defineProps } from 'vue';

type ImageContentProps = {  
    src: string;   
}

const props = defineProps<ImageContentProps>()
</script>

<template>
    <img :src="props.src" alt="">
</template>

<style lang="scss" scoped>
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>