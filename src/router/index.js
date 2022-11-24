import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import MainView from '../views/MainView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/registration',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/',
    name: 'main',
    component: MainView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
