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
  },
  devtools: { enabled: true },
})
