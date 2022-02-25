import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'commodity',
        name: 'Commodity',
        component: () => import('@/views/basics/Commodity')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router