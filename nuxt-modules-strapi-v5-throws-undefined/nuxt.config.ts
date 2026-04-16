export default defineNuxtConfig({
  modules: [
    '@nuxtjs/strapi'
  ],

  compatibilityDate: '2026-04-16',

  strapi: {
    version: 'v5', // v3 and v4 are working fine
    url: 'http://localhost:1337', // use an invalid Strapi URL to trigger the error
  },
})
