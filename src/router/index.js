import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import MainView from '../views/MainView.vue'
import ProfileView from '../views/ProfileView.vue'
import RegisterView from '../views/RegisterView.vue'
import store from '@/store'
const isLogged = function(to, from ,next){

  if (!store.state.auth.isAuth) next()
  else next({name: 'profile'})
}
const needAuth = function(to,from,next){

  if(store.state.auth.isAuth) next()
  else next({name: 'auth'})
}

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    beforeEnter: isLogged
  },
  {
    path: '/registration',
    name: 'register',
    component: RegisterView,
    beforeEnter: isLogged
  },
  {
    path: '/',
    name: 'main',
    component: MainView,
    beforeEnter: needAuth
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    beforeEnter: needAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
