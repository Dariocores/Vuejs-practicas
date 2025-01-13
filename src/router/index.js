// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'
import loginPage from '@/views/loginPage.vue'
import knightsPage from '@/views/knightsPage.vue';
import armorsPage from '@/views/armorsPage.vue';
import attacksPage from '@/views/attacksPage.vue';


const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/home',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/knights',
    name: 'knightsPage',
    component: knightsPage,
  },
  {
    path: '/armors',
    name: 'armorsPage',
    component: armorsPage,
  },
  {
    path: '/attacks',
    name: 'attacksPage',
    component: attacksPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
