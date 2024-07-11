// import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home => import('@/components/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: About => import('@/components/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router