<script setup>
import HeaderAppBar from "./HeaderAppBar.vue";
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";
import Chart from "./Chart.vue";
import VanillaTilt from "vanilla-tilt";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const dadosApp = defineProps(["app", "label"]);
let app = dadosApp.app["metricas"];
console.log(app);

const capitalized =
  dadosApp.app.nome[0].toUpperCase() + dadosApp.app.nome.substr(1);
// campos das metricas
const dataMetrics = {};

let diasRegistrados = Object.keys(app);
console.log(diasRegistrados);
let lastDay = diasRegistrados[diasRegistrados.length - 1];
console.log(lastDay);
let atributes = Object.keys(app[lastDay]).map((metrica, index) => ({
  name: metrica,
  index: index,
}));
console.log(atributes);

var atual = atributes[0]["name"];
console.log(atual);
for (const data in app) {
  const atributos = app[data];

  for (const atributo in atributos) {
    if (!(atributo in dataMetrics)) {
      dataMetrics[atributo] = [];
    }

    dataMetrics[atributo].push(atributos[atributo]);
  }
}

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};

console.log(atributes[0]["name"]);
console.log(dataMetrics[atributes[0]["name"]]);

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll(".header-slide"), {
    max: 4,
    speed: 400,
  });
});
</script>

<template>
  <div>
    <HeaderAppBar
      class="header-slide"
      :name="capitalized"
      data-tilt
      data-tilt-glare
      data-tilt-max-glare="0.8"
    />
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="[EffectCards]"
      effect="cards"
      :loop="true"
    >
      <swiper-slide
        class="cardChart"
        v-for="(app, index) in atributes"
        :key="index"
      >
        <Chart
          class="charts"
          :datalabels="diasRegistrados"
          :label="app.name"
          :datametrics="dataMetrics[app.name]"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.cardChart {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;

  border-top: 1px solid rgba(255, 255, 255, 0.6);
  border-left: 1px solid rgba(255, 255, 255, 0.6);
  background-color: #161623;
}

.header-slide {
  background-color: #161623;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem 1rem 0 1rem;
  margin-bottom: 0.3rem;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  border-left: 1px solid rgba(255, 255, 255, 0.6);
}
</style>
