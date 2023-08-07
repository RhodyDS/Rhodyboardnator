<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";


function formatTime(minutes) {
  // if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return (hours + remainingMinutes / 60).toFixed(2);
  // } else {
  //   return (minutes).toFixed(2);
  // }
}


const infos = defineProps(["datalabels", "label", "datametrics"]);
var dataMetric = infos.datametrics;
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

console.log('aqui')
console.log(infos.datametrics)
if ( infos.label === 'Semanal' || infos.label === 'Mensal' || infos.label === 'Diária' ){
  const dataMetrics = infos.datametrics.map((metric) => {
    const [hours, minutes, seconds] = metric.split(":").map(Number);
    return hours * 60 + minutes + seconds / 60;
  });
  console.log(dataMetrics);
  const formattedDataMetrics = dataMetrics.map((value) => formatTime(value));
  console.log(formattedDataMetrics);

  dataMetric = formattedDataMetrics;
}

onMounted(() => {
  const ctx = document.getElementById(infos.label);

  const data = {
    labels: infos.datalabels,
    datasets: [
      {
        label: infos.label,
        data: dataMetric,
        fill: false,
        tension: 0.1,
      },
    ],
  };
  const myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
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
    },
  });
  myChart;
});
</script>

<template>
  <div class="chart-card" data-tilt data-tilt-glare data-tilt-max-glare="0.1">
    <canvas :id="infos.label"></canvas>
  </div>
</template>

<style scoped></style>
