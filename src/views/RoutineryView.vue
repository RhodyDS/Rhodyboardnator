<script setup>
import GraficBoard from '../components/GraficBoard.vue';
import HeaderBar from '../components/HeaderBar.vue';

</script>

<template>

    <HeaderBar :name="'Routinery'" />
    <GraficBoard :index="0" :name="routinery" />

</template>

<style scoped>

</style>
