<script setup>
import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";
import VanillaTilt from "vanilla-tilt";

const dadosApp = defineProps(["app", "label", "metricName"]);
let app = dadosApp.app["metricas"];
console.log(app);

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

var atual = dadosApp.metricName;
console.log(atual);
for (const data in app) {
  const atributos = app[data];

  for (const atributo in atributos) {
    if (!(atributo in dataMetrics)) {
      dataMetrics[atributo] = [];
    }

    dataMetrics[atributo].push(parseInt(atributos[atributo]));
  }
}
console.log(dataMetrics);

const colors = [
  "#FF5733", // Vermelho
  "#00A6E8", // Azul
  "#FF33A1", // Rosa
  "#A100E8", // Roxo
  "#33FF57", // Verde
  "#E800D1", // Magenta
  "#57FF33", // Verde claro
  "#00E8D1", // Azul claro
  "#D100E8", // Roxo claro
  "#FF9D00", // Laranja
];
const finalCor = colors[Math.floor(Math.random() * colors.length)];


onMounted(() => {
  const data = {
    labels: diasRegistrados,
    datasets: [
      {
        label: atual,
        data: dataMetrics[atual],
        fill: false,
        tension: 0.1,
      },
    ],
  };
  const ctx = document.getElementById(dadosApp.label);

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
            weight: "bold",
          },
          color: finalCor,
        },
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 0.3,
        to: 0,
        loop: true,
      },
    },
    elements: {
      line: {
        backgroundColor: finalCor,
        borderColor: finalCor,
      },
      point: {
        backgroundColor: finalCor,
        hoverRadius: 5,
      },
    },
    scales: {
      x: {
        grid: {
          tickColor: "grey",
          color: "grey",
        },
        ticks: {
          color: "grey",
        },
      },
      y: {
        grid: {
          tickColor: "grey",
          color: "grey",
        },
        ticks: {
          color: finalCor,
        },
      },
    },
  };
  const myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: chartOptions,
  });
  myChart;

  VanillaTilt.init(document.querySelectorAll(".chart-card"), {
    max: 4,
    speed: 400,
  });
});



</script>

<template>
  

  <div class="chart-card" data-tilt data-tilt-glare data-tilt-max-glare="0.1">
    <canvas :id="dadosApp.label"></canvas>
  </div>
</template>

<style scoped></style>
