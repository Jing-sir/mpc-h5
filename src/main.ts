import App from './App.vue';
import 'amfe-flexible';
import vant, { Lazyload } from 'vant';
import { createApp } from 'vue';
import pinia from './store/Index';
import i18n from './setup/i18n-setup';
import router from './setup/router-setup';
import dateFormat from '@/filters/dateFormat';
import dataThousands from '@/filters/dataThousands';
import numberOperation from '@/filters/numberOperation';

import 'vant/lib/index.css';
import './assets/stylesheet/global.scss';
import './assets/stylesheet/reset.scss';
import './assets/stylesheet/cover.scss';

createApp(App)
    .use(vant)
    .use(i18n)
    .use(pinia)
    .use(router)
    .use(dateFormat)
    .use(Lazyload, { lazyComponent: true })
    .use(dataThousands)
    .use(numberOperation)
    .mount('#app');
