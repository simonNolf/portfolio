import { createRouter, createWebHistory } from 'vue-router'
import CurriculumView from '../views/CvView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      name: 'cv',
      component:  CurriculumView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    
  ],
  linkActiveClass:'active'
})

export default router
