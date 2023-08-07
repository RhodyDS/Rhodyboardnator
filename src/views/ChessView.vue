<script setup>
import GraficBoard from "../components/GraficBoard.vue";
import HeaderBar from "../components/HeaderBar.vue";
</script>

<template>
  <HeaderBar :name="'Chess'" />
  <GraficBoard :index="1" :name="chess" />
</template>

<style scoped></style>
