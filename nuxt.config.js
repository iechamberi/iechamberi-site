import { CustomIcons, CustomTheme } from './chakra.config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iechamberi-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

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
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Runtime configuration: https://nuxtjs.org/api/configuration-runtime-config
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
  },
}
