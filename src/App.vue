<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { onBeforeMount } from "vue";
import { useDataStore } from "./store/DataStore";


onBeforeMount(async () => {
  const data = useDataStore();
  await data.callApi();
  let apps = data.apps;
  console.log(apps);
});
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main  class="main">
    <RouterView />
  </main>
</template>

<style></style>
