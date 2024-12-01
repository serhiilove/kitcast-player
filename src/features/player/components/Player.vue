<script setup lang="ts">
import { onMounted } from 'vue';
import { useMediaStore } from '../store/media.module.ts';
import PlayerContent from './PlayerContent.vue';
import Loader from '../../../components/Loader.vue';

const store = useMediaStore();

onMounted(() => {
    store.fetchMediaData();
});
</script>

<template>
    <div class="player">
        <Loader v-if="store.isLoading" />
        <PlayerContent v-else />
    </div>
</template>

<style lang="scss" scoped>
    .player {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 854px;
        height: 480px;
        overflow: hidden;
        background-color: white;
        color: black;
    }
</style>