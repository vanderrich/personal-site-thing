import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/Projects.vue')
        },
        {
            path: '/tools',
            name: 'tools and languages',
            component: () => import('../views/Tools.vue')
        }
    ]
})

export default router