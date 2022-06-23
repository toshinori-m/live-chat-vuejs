import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/WelcomePage'

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: Welcome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router