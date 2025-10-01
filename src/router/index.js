import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import PaymentStatus from '../components/PaymentStatus.vue'

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../components/HeroSection.vue')
      }
    ]
  },
  {
    path: '/fallback',
    name: 'fallback',
    component: PaymentStatus
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router