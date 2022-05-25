import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'
import about from '../components/about.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // children: [
      //   {
      //     path: 'about',
      //     component: about
      //   }
      // ]
    }
  ]
})

export default router
