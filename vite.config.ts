import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import dotenv from 'dotenv';
import path from 'path';

const env = dotenv.config().parsed;
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        postcss: {
            plugins: [
                require('postcss-pxtorem')({
                    rootValue: 37.5, // 你的设计稿根字体大小，例如 37.5 表示 1rem 等于 37.5px
                    propList: ['*'], // 哪些 CSS 属性需要转换成 rem
                })
            ]
        }
    },
    plugins: [
        vue(),
        vueI18n({
            // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
            // compositionOnly: false,

            // you need to set i18n resource including paths !
            // include: resolve(__dirname, './path/to/src/locales/**'),
            compositionOnly: false
        })
    ],
    define: {
        'process.env': env,
    },
    server: {
        port: 3008,
        proxy: {
            '/api': {
                target: 'http://16.162.109.156:8081',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
