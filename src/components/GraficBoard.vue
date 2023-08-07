<script setup>
import OverViewCard from "../components/OverViewCard.vue";
import Chart from "../components/Chart.vue";
import { useDataStore } from "../store/DataStore";
import { onMounted,ref } from "vue";
import VanillaTilt from "vanilla-tilt";
const propApp = defineProps(["name", "index"]);

const data = useDataStore();

let app = data.apps[propApp.index]["metricas"];
console.log(app);

// fields chart
let diasRegistrados = Object.keys(app);
console.log(diasRegistrados);
let lastDay = diasRegistrados[diasRegistrados.length - 1];
let atributes = Object.keys(app[lastDay]);
console.log(atributes);

const dataMetrics = {};

for (const data in app) {
  const atributos = app[data];

  for (const atributo in atributos) {
    if (!(atributo in dataMetrics)) {
      dataMetrics[atributo] = [];
    }
    
    dataMetrics[atributo].push(atributos[atributo]);
  }
}

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll(".charts"), {
    max: 4,
    speed: 400,
  });
});
</script>

<template>
  <div class="dashboard">
    <div class="botoes">
      <OverViewCard
        v-for="(atributo, index) in atributes"
        :key="index"
        :name="atributo"
        :metric="dataMetrics[atributo][0]"
      />
    </div>
    <div class="graficos">
      <Chart
        class="charts"
        v-for="(atributo, index) in atributes"
        :key="index"
        :datalabels="diasRegistrados"
        :label="atributo"
        :datametrics="dataMetrics[atributo]"
      />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid; /* Usando Grid Layout para organizar cards e gráficos */
  grid-template-columns: 1fr 3fr; /* Dois elementos por linha (dois columns) */
  grid-gap: 1rem;
}
.botoes {
  padding: 1rem;
}

.graficos {
  display: flex;
  flex-wrap: wrap; /* Flexbox: empilhando gráficos quando necessário */
  justify-content: space-around;
  background: var(--bg-gradient);
  gap: 0.5rem;
  border-radius: 4rem 4rem 0 0;
  margin-top: 1rem;
  padding-top: 2rem;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}

.charts {
  min-width: 80%;
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  border-left: 1px solid rgba(255, 255, 255, 0.6);
  background-color: #161623;
}


@media only screen and (max-width: 600px) {

.dashboard {
  display: block;
  margin-bottom: 5rem;
}


}
</style>
