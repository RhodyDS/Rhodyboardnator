<script setup>
import HeaderBar from "../components/HeaderBar.vue";
import Slide from "../components/Slide.vue";
import { useDataStore } from "../store/DataStore";
import { ref } from "vue";

const API_URL = "http://localhost:3000";
const buttonName = ref("Atualizar Dados");

let data = useDataStore();
let applicativos = data.apps;
console.log(applicativos);

//api
async function atualizarMetricas() {
  const loading = document.getElementById("loading");
  loading.style.display = "inline-block";
  buttonName.value = "Loading...";
  try {
    const response = await fetch(API_URL + "/atualizar", { method: "POST" });

    if (response.ok) {
      console.log("deu tudo certo");
    } else {
      console.error("Erro ao atualizar no servidor");
    }
    window.location.reload();
  } catch (err) {
    console.error("Erro ao enviar solicitação para o servidor", err);
  }
}
</script>

<template>
  <div class="header">
    <HeaderBar :name="'RhodyBoardNator'" />
    <button
      class="btn btn-outline-info"
      type="button "
      @click="atualizarMetricas"
    >
      <div class="spinner-border" role="status" id="loading"></div>
      {{ buttonName }}
    </button>
  </div>

  <div class="graficos">
    <div class="appChart" v-for="(app, index) in applicativos" :key="index">
      <Slide :label="app.name" :app="app" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.graficos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--bg-gradient);
  gap: 0.5rem;
  border-radius: 4rem 4rem 0 0;
  margin: 2rem 1rem 0 1rem;
  padding-top: 2rem;
  padding: 2rem 1rem;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}

.appChart {
  min-width: 70%;
}
.btn {
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  margin: 2rem;
  border: 2px solid #01fb02;
  color: #01fb02;
}
.btn:hover {
  background: var(--bg-gradient);
  color: #fff;
}

.spinner-border {
  display: none;
}

@media only screen and (max-width: 600px) {

.graficos {
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
}

.btn {
  padding: 1rem;
  gap: 0.2rem;
  margin: 0  2rem;
  text-align: center;
  

}

.header{
  display: flex;
  flex-direction: column;
  align-items: center;
}


}
</style>
