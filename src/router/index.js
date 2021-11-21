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
        path: 'scoreboard',
        component: () => import('../views/Scoreboard.vue')
      },
      {
        path: 'challenges/:category',
        component: () => import('../views/Challenges.vue')
      },
      {
        path: 'dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/profile',
        component: () => import('../views/Profile.vue')
      },
      {
        path: '/team',
        component: () => import('../views/Team.vue')
      },
      {
        path: '/settings',
        component: () => import('../views/Settings.vue')
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

