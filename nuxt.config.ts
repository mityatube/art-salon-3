// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL: '/art-salon-3/',
        head: {
            title: "Художественный салон",
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/logoVyatkaArt.svg'
                }
            ]
        },
    },
    build: {
        transpile: ['vuetify'],
    },

    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['vuetify-nuxt-module'],
    css: ['~/assets/main.scss']
})
