<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useMediaStore } from '../store/media.module.ts';
import ImageContent from './ImageContent.vue';
import VideoContent from './VideoContent.vue';
import { toMillis } from '../../../utils.ts';

const store = useMediaStore();
const { currentIndex, runSlider } = useSlider();

const media = computed(() => store.getMediaByIndex(currentIndex.value));
const isImageContent = computed(() => media.value?.type === 'image');
const isVideoContent = computed(() => media.value?.type === 'video');

function useSlider() {
    const currentIndex = ref(0);

    function incrementIndex(): void {
        if (currentIndex.value < store.mediaLength - 1) {
            currentIndex.value++;
        } else {
            currentIndex.value = 0;
        }
    }

    function runSlider(delay: number): void {
        setTimeout(() => {
            incrementIndex();        
            runSlider(toMillis(media.value!.duration));
        }, delay);
    }

    return {
        currentIndex,
        runSlider,
    }
}

onMounted(() => {
    if (store.mediaLength) {
        runSlider(toMillis(media.value!.duration));
    }
});

</script>

<template>
    <div 
        v-if="store.mediaLength"
        class="content-wrap"
    >
        <ImageContent 
            v-if="isImageContent" 
            :src="media!.src"
        />
        <VideoContent 
            v-else-if="isVideoContent"
            :src="media!.src"
        />
    </div>
    <p v-else>
        No content
    </p>
</template>

<style lang="scss" scoped>
    .content-wrap {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }
</style>