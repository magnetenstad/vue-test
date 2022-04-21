import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../components/Counter.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
