
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/Pages/Dashboard.vue'),
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
