import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/web/LwHome.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/web/LwAbout.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../pages/web/LwProduct.vue')
  },
  {
    path: '/price',
    name: 'Price',
    component: () => import('../pages/web/LwPrice.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/web/LwLogin.vue')
  },
  {
    path: '/app',
    name: '/app',
    component: () => import('../pages/app/LaDashboard.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../pages/app/Error.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  const allRoutes = routes.map(route => route.name)
  const allowedRoutes = ['Home', 'About', 'Product', 'Price', 'Login']
  // make sure the user is authenticated
  if (allRoutes.indexOf(to.name) < 0) {
    return { name: 'Error' }
  }
  if (!store.state.userLogged && allowedRoutes.indexOf(to.name) < 0) {
    return { name: 'Login' }
  }
})

export default router