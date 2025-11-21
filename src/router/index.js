import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue'),
    },
    {
      path: '/anime',
      name: 'Anime',
      component: () => import('../pages/Anime.vue'),
    },
    {
      path: '/HollyWood',
      name: 'HollyWood',
      component: () => import('../pages/HollyWood.vue'),
    },
    {
      path: '/BollyWood',
      name: 'BollyWood',
      component: () => import('../pages/BollyWood.vue'),
    },

    {
      path: '/tv',
      name: 'tv',
      component: () => import('../pages/TvSeries.vue'),
    },
    {
      path: '/Kdrama',
      name: 'Kdrama',
      component: () => import('../pages/Kdrama.vue'),
    },
    {
      path: '/:categoryName/:id',
      name: 'MovieDetail',
      component: () => import('../pages/MovieDetail.vue'),
    },
  ],
})

export default router
