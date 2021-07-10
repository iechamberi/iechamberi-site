import { CustomIcons, CustomTheme } from './chakra.config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Iglesia Evangélica de Chamberí',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'IE Chamberí' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    // https://i18n.nuxtjs.org/es
    'nuxt-i18n',
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
    // https://github.com/nuxt-community/markdownit-module
    '@nuxtjs/markdownit',
  ],

  // Chakra UI module configuration: https://vue.chakra-ui.com/plugin-options
  chakra: {
    config: {
      autoImport: true,
    },
    icons: {
      extend: CustomIcons,
    },
    extendTheme: CustomTheme,
  },

  // Apollo module configuration: https://github.com/nuxt-community/apollo-module#setup
  apollo: {
    clientConfigs: {
      default: '@/plugins/apollo-config.js',
    },
  },

  // i18n module configuration: https://i18n.nuxtjs.org/es/setup
  i18n: {
    baseUrl: ({ $config }) => $config.baseUrl,
    locales: [
      { code: 'es', iso: 'es-ES', file: 'es.js' },
      { code: 'en', iso: 'en-GB', file: 'en.js' },
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: 'locales/',
  },

  // Dayjs module configuration: https://github.com/nuxt-community/dayjs-module#usage
  dayjs: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    defaultTimeZone: 'Europe/Madrid',
    plugins: ['utc', 'timezone'],
  },

  // Markdownit module configuration: https://github.com/nuxt-community/markdownit-module#setup
  markdownit: {
    runtime: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Runtime configuration: https://nuxtjs.org/api/configuration-runtime-config
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
  },
}
