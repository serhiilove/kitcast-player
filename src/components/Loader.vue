<script setup lang="ts">
</script>

<template>
    <span class="loader"></span>
</template>

<style lang="scss" scoped>
.loader {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 5px solid black;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>
