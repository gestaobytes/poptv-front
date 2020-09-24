import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | POPTVNEWS',
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

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/auth'
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
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

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
