import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/education',
    name: 'Education',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Education.vue')
  },
  // {
  //   path: '/experience',
  //   name: 'Experience',
  //   component: () => import('../views/Experience.vue')
  // },
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

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
