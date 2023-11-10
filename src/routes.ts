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
            }, { // 快讯
                path: '/news',
                name: 'news',
                component: () => import(/* webpackChunkName: "news" */ '@/views/News/Index.vue'),
                meta: { title: '快讯', requiresAuth: false },
            }, { // 商业
                path: '/trade',
                name: 'trade',
                component: () => import(/* webpackChunkName: "trade" */ '@/views/Trade/Index.vue'),
                meta: { title: '商业', requiresAuth: false },
            }, { // 专题
                path: '/topics',
                name: 'topics',
                component: () => import(/* webpackChunkName: "topics" */ '@/views/Topics/Index.vue'),
                meta: { title: '专题', requiresAuth: false },
            }
        ],
    }, {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ '@/views/Search/Index.vue'),
        meta: { title: '搜索', requiresAuth: false },
    }
];

export default routes;
