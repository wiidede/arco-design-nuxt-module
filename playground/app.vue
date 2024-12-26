<script setup lang="ts">
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'

useHead({
  title: 'Arco Design Nuxt Module Playground',
})
</script>

<template>
  <AConfigProvider :locale="enUS">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </AConfigProvider>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
