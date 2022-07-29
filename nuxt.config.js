export default {
  head: {
    title: 'Enaza Music',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: [
    '~/assets/style/fonts.scss',
    '~/assets/style/mystyle-bulma.scss'
  ],
  styleResources: {
    scss: ['./assets/style/global-variables.scss']
  },

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/image'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/style-resources'
  ],

  axios: {
    baseURL: '/',
  },
}
