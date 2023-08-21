export default defineNuxtConfig({
  imports: {
    autoImport: true, // TODO default false ???
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
