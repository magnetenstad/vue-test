import {
  createRouter as createVueRouter,
  createWebHistory,
  Router,
} from 'vue-router';

export { createRouter };
export type { Router };

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../pages/Counter.vue'),
  },
];

const createRouter = (): Router =>
  createVueRouter({
    history: createWebHistory(),
    routes: routes,
  });
