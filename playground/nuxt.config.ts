export default defineNuxtConfig({
  imports: {
    autoImport: true, // TODO default false ???
  },
  modules: ['../src/module'],
  arco: {},
  devtools: { enabled: true },
})
