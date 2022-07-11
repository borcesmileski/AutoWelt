import Vue from 'vue'
import VueRouter from 'vue-router'
import AutoWelt from '../views/autoWeltPage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/autoWelt',
    name: 'AutoWelt',
   component: AutoWelt
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
