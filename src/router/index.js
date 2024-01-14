import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Monitoring from '../views/Monitoring/Monitoring.vue';
import Login from '../views/Login/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/monitoring',
          name: 'monitoring',
          component: Monitoring
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
