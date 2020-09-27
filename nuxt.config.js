import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s POPTVNEWS',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: 'Gestão Bytes | MACEDO, Gerisvaldo' },
      { name: 'robots', content: 'index,follow' },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@ogirassol' },
      { property: 'twitter:creator', content: '@ogirassol' },
      { property: 'article:section', content: 'Facebook' },
      { property: 'fb:app_id', content: '164759580914460' },
      { property: 'article:publisher', content: 'https://www.facebook.com/JornalGirassol' },
      { property: 'og:image:type', content: 'image/jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'fb:app_id', content: '12873892173892' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:site_name', content: 'POPTVNEWS' },
      { property: 'og:type', content: 'article' },

      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'twitter:title', name: 'twitter:title', content: '' },
      { hid: 'og:url', name: 'og:url', content: '' },
      { hid: 'og:title', name: 'og:title', content: '' },
      { hid: 'og:description', name: 'og:description', content: '' },
      { hid: 'twitter:description', name: 'twitter:description', content: '' },
      { hid: 'twitter:url', name: 'twitter:url', content: '' },
      { hid: 'article:tag', name: 'article:tag', content: '' },
      { hid: 'og:image', name: 'og:image', content: '' },
      { hid: 'twitter:image', name: 'twitter:image', content: '' }
    ],
    // <link rel='canonical' href='<%= htmlWebpackPlugin.options.canonical %>' />
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/styles/main.css'
  ],

  plugins: [
    "./plugins/axios.js"
    // "./plugins/mixins/user.js",
    // "./plugins/mixins/validation.js"
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome'
  ],

  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/fontawesome',
    'nuxt-material-design-icons'
  ],


  // axios: {
  //   baseURL: 'http://poptvnews.local/api'
  // },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/auth/signin', method: 'post', propertyName: 'token' },
  //         logout: { url: '/auth/logout', method: 'post' },
  //         user: { url: '/auth/me', method: 'get', propertyName: 'user' }
  //       },
  //       // tokenRequired: true,
  //       // tokenType: 'bearer',
  //       // globalToken: true,
  //       // autoFetchUser: true
  //     }
  //   }
  // },




  toast: {
    position: 'top-right',
    duration: 2000
  },

  loading: {
    name: 'chasing-dots',
    color: '#ff5638',
    background: 'white',
    height: '4px'
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  }
}
