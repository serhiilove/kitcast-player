<script setup lang="ts">
import { defineProps } from 'vue';

type VideoContentProps = {  
    src: string;   
}

const props = defineProps<VideoContentProps>();
</script>

<template>
    <video  
        ref="videoPlayer"
        width="854" 
        height="480"    
        autoplay
        muted
    >
        <source :src="props.src" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</template>

<style lang="scss" scoped>
    video {
        object-fit: cover;
    }
</style>