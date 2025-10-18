// import serveStatic from 'serve-static'

// npm i cookie-universal-nuxt --legacy-peer-deps

export default {

  ssr: true,
  target: 'server',

  // ssr: false,
  // target: 'static',

  ignorePaths: [
    "/eco"
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Voron black',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/mobile.css',
    '@/assets/fa/css/all.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/filters',
    '~/plugins/vue-agile',
    '~/plugins/functions',
    '~/plugins/device',
    // '~/plugins/facebook-pixel'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    // '@nuxtjs/yandex-metrika',


    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: '45891591',
        webvisor: true,
        clickmap: true,
        debug: false,
        noJS: false,
        disabled: false,

        trackLinks: true,
        accurateTrackBounce: true,
        trackHash: true,
      },
    ],

    // With options
    // ['nuxt-facebook-pixel-module', {
    //   /* module options */
    //   track: 'PageView',
    //   pixelId: '1114923232613760',
    //   autoPageView: true,
    //   disabled: false
    // }],

  ],


  // yandexMetrika: {
  //   id: '45891591',
  //   webvisor: true,
  //   clickmap: true,
  //   trackLinks: true,
  //   accurateTrackBounce: true,
  //   trackHash: true,
  // },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://i.voron.io',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
    transpile: ['vue-agile']
  },

  loading: false,

  serverMiddleware: [
    '~/serverMiddleware/seo.js'
  ],

  router: {
    middleware: ["utm"],
  },


  // router: {
  //   scrollBehavior: async (to, from, savedPosition) => {
  //     if (savedPosition) {
  //       return savedPosition
  //     }

  //     // const findEl = async (hash, x) => {
  //     //   return document.querySelector(hash) ||
  //     //     new Promise((resolve, reject) => {
  //     //       if (x > 50) {
  //     //         return resolve()
  //     //       }
  //     //       setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 500)
  //     //     })
  //     // }

  //     if (to.hash) {
  //       let el = await findEl(to.hash)
  //       if ('scrollBehavior' in document.documentElement.style) {
  //         // return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  //         return window.scrollTo({ top: 100, behavior: 'smooth' })
  //       } else {
  //         return window.scrollTo(0, el.offsetTop)
  //       }
  //     }

  //     return { x: 0, y: 0 }
  //   }
  // },

}
