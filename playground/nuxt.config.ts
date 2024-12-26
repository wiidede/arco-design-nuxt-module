export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },

  modules: ['../src/module'],

  arco: {
    importPrefix: 'A',
    hookPrefix: 'Arco',
    locales: ['getLocale'],
    localePrefix: 'Arco',
    theme: '@arco-themes/vue-digitforce',
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-12-26',
})