import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useDataStore = defineStore("data", {
  state: () => {
    return {
      apps: reactive([]),
    }
  },
  actions: {
    async callApi() {
      try {
        const response = await fetch('http://localhost:3000/metricas');
        const data = await response.json();
        this.apps = data;
      }catch (error) {
        console.error('Erro ao buscar dados:', error);
      }

    },
  },
});
