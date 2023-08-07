import './assets/global.css'; 
import { createPinia } from 'pinia';
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(MotionPlugin).use(createPinia()).use(router).mount('#app')
 