import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/School',
    name: 'School',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'Personal',
    component: () => import('../views/Tarefas.vue')
  },
  {
    path: '/Design',
    name: 'Design',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
