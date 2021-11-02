import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Bmi from '@/views/bmi.vue'
import BmiVmodel from '@/views/v-model.vue'
import BmiVbind from '@/views/v-bind.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmi',
    name: 'Bmi',
    component: Bmi
  },
  {
    path: '/v-model',
    name: 'BmiVmodel',
    component: BmiVmodel
  },
  {
    path: '/v-bind',
    name: 'BmiVbind',
    component: BmiVbind
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
