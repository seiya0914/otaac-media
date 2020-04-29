import { contentfulClient } from './plugins/contentful.js'
const environment = process.env.NODE_ENV || 'development'
const envSet = require(`./env/${environment}.js`)

export default {
  env: envSet,
  mode: 'universal',
  generate: {
    routes() {
      return contentfulClient
        .getEntries({ content_type: process.env.CTFL_CONTENT_TYPE_POST })
        .then((entries) => {
          return entries.items.map((entry) => {
            return {
              route: '/posts/' + entry.sys.id,
              payload: entry
            }
          })
        })
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/contentful'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
