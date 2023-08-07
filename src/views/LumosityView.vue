<script setup>

import GraficBoard from "../components/GraficBoard.vue";
import HeaderBar from "../components/HeaderBar.vue";



</script>

<template>
    <HeaderBar :name="'Lumosity'" />
    <GraficBoard :index="3" :name="lumosity" />
</template>

<style scoped></style>
