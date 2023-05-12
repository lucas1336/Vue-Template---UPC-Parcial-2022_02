import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import Table from '../components/analytics/TableComponent.vue'
import TableView from '../views/TableView.vue'
import EasterEgg from '../components/public/EasterEggComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/analytics/health-checks',
      name: 'TableView',
      component: Table
    },
    {
      path: '/table',
      name: 'Table',
      component: TableView
    },
    {
      path: '/easter-egg',
      name: 'EasterEgg',
      component: EasterEgg
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFoundView
    }
  ]
})

export default router
