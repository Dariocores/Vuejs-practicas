// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'

import loginPage from '@/views/loginPage.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
