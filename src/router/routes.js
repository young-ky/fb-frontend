import { createRouter, createWebHistory } from 'vue-router'
import landingPageRoutes from './landing_page_routes'

const NotFound = () => import('@/views/error/NotFound.vue')

let routes = []

routes = routes.concat(
  landingPageRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: '404-not-found',
    component: NotFound
  }
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
