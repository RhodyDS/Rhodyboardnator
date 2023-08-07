<script setup>
import GraficBoard from "../components/GraficBoard.vue"
import HeaderBar from '../components/HeaderBar.vue';

</script>

<template>
    
    <HeaderBar :name="'Flip'" />
    <GraficBoard :index="0" :name="flip" />

</template>

<style scoped>

</style>
