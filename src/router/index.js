import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'home',
        redirect: '/',
        component: Home
      },
      {
        path: 'notifications',
        component: () => import('../views/Notifications.vue')
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
      },

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

