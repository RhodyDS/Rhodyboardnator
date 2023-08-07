<template>
  <div
    class="card-body"
    data-tilt
    data-tilt-startX="-20"
    data-tilt-startY="-20"
    data-tilt-reset-to-start="true"
  >
    
    <div class="card-content">
      <h3 class="card-title">{{ dataCard.name }}</h3>
      <h4 class="card-metric">{{ dataCard.metric }}</h4>
    </div>
  </div>
</template>

<script setup>
const dataCard = defineProps(["name", "metric"]);
import VanillaTilt from "vanilla-tilt";
import { onMounted } from "vue";

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll(".card-body"), {
    max: 25,
    speed: 400,
    glare: true,
  });
});
</script>

<style>


.card-body {
  display: flex;
  align-items: center;
  background: var(--bg-gradient);
  padding: 1rem;
  margin: 0 1rem 1rem 1rem;
  gap: 0.5rem;
  border-radius: var(--border-radius) 0 var(--border-radius)
    var(--border-radius);
  box-shadow: var(--box-shadow);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}



.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: medium;
  font-weight: 800;
  color: #2a2a2a;
  margin: 0;
  font-family: var(--font-primary);
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-metric {
  font-size: medium;
  color:  black;
  margin: 0;
  font-family: var(--font-primary);
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
