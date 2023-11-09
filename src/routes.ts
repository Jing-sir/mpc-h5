import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ './Main.vue'),
        meta: { requiresAuth: false, role: 'home', title: 'home', hidden: true },
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Index.vue'),
                meta: { title: '首页', requiresAuth: false },
            },
        ],
    },
];

export default routes;
