import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/lumosity',
      name: 'lumosity',
      component: () => import('../views/LumosityView.vue')
    },
    {
      path: '/duolingo',
      name: 'duolingo',
      component: () => import('../views/DuolingoView.vue')
    },
    {
      path: '/flip',
      name: 'flip',
      component: () => import('../views/FlipView.vue')
    },
    {
      path: '/chess',
      name: 'chess',
      component: () => import('../views/ChessView.vue')
    },
  ]
})

export default router
