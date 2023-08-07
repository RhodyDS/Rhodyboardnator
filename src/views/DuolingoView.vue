<script setup>
import GraficBoard from '../components/GraficBoard.vue';
import HeaderBar from '../components/HeaderBar.vue';

</script>

<template>

    <HeaderBar :name="'Duolingo'" />
    <GraficBoard :index="2" :name="duolingo" />

</template>

<style scoped>

</style>
