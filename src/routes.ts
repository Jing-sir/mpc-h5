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
            }, { // 商业详情
                path: '/trade-details',
                name: 'trade-details',
                component: () => import(/* webpackChunkName: "trade-details" */ '@/views/Trade/Details.vue'),
                meta: { title: '商业详情', requiresAuth: false },
            }, { // 专题
                path: '/topics',
                name: 'topics',
                component: () => import(/* webpackChunkName: "topics" */ '@/views/Topics/Index.vue'),
                meta: { title: '专题', requiresAuth: false },
            }, { // 专题详情
                path: '/topics-details',
                name: 'topics-details',
                component: () => import(/* webpackChunkName: "topics-details" */ '@/views/Topics/Details.vue'),
                meta: { title: '专题详情', requiresAuth: false },
            }, { // 专题
                path: '/study',
                name: 'study',
                component: () => import(/* webpackChunkName: "study" */ '@/views/Study/Index.vue'),
                meta: { title: '学习', requiresAuth: false },
            }, { // 活动
                path: '/activity',
                name: 'activity',
                component: () => import(/* webpackChunkName: "activity" */ '@/views/Activity/Index.vue'),
                meta: { title: '活动', requiresAuth: false },
            }, { // 活动详情
                path: '/activity-details',
                name: 'activity-details',
                component: () => import(/* webpackChunkName: "activity-details" */ '@/views/Activity/Details.vue'),
                meta: { title: '活动详情', requiresAuth: false },
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
