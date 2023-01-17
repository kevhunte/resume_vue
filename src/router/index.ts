import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/education',
        name: 'Education',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Education.vue')
      },
      {
        path: '/experience',
        name: 'Experience',
        component: () => import('../views/Experience.vue')
      },
      {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Projects.vue')
      },
      {
        path: '/services',
        name: 'Services',
        component: () => import('../views/Services.vue')
      }
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router
