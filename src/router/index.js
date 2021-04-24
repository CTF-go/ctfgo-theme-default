import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Index',
    component: Index,
    children: [
      {
        path: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'notices',
        component: () => import('../views/Notices.vue')
      },
      {
        path: 'users',
        component: () => import('../views/Users.vue')
      },
      {
        path: 'scoreboard',
        component: () => import('../views/ScoreBoard.vue')
      },
      {
        path: 'challenges',
        component: () => import('../views/Challenges.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

