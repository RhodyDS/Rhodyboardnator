<script setup>
import { onBeforeMount, ref } from "vue";

const headerApp = defineProps(["name"]);

const imageUrlPromise = import(`@/components/icons/${headerApp.name}.png`);

let imageUrl = null;
let ofUrl = ref(null);

onBeforeMount(async () => {
  try {
    imageUrl = await imageUrlPromise;
    ofUrl.value = imageUrl.default;
  } catch (error) {
    console.error("Erro ao carregar a imagem:", error);
  }
});
</script>

<template>
  <div class="header">
    <img class="icon" :src="ofUrl" :alt="headerApp.name" />
    <h1 class="titulo">{{ headerApp.name }}</h1>
  </div>
</template>

<style scoped>
.icon {
  width: 4rem;
  border-radius: 0.5rem;
}

.header {
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
}

@media only screen and (max-width: 600px) {

.icon{
  width: 2rem;
}

.header {
  padding: 1rem;
  gap: 0.3rem;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2ch;

}

}
</style>
