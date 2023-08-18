import { defineNuxtModule } from '@nuxt/kit'
import { defaults } from './config'
import {
  resolveComponents,
  resolveImports,
  resolveStyles,
  transformPlugin,
} from './core/index'
import type { Options } from './types'
import { computeOptions } from './utils'

export default defineNuxtModule<Options>({
  meta: {
    name: 'Arco Design Nuxt Module',
    configKey: 'arco',
  },
  defaults,
  setup(_options, nuxt) {
    const options = computeOptions(_options)

    nuxt.options.imports.autoImport !== false && resolveImports(options)
    nuxt.options.components !== false && resolveComponents(options)

    nuxt.hook('vite:extendConfig', (config, { isClient }) => {
      const mode = isClient ? 'client' : 'server'

      config.plugins = config.plugins || []
      config.plugins.push(transformPlugin.vite({
        include: options.include,
        exclude: options.exclude,
        sourcemap: nuxt.options.sourcemap[mode],
        transformStyles: name => resolveStyles(options, name),
      }))
    })

    nuxt.hook('webpack:config', (configs) => {
      configs.forEach((config) => {
        const mode = config.name === 'client' ? 'client' : 'server'

        config.plugins = config.plugins || []
        config.plugins.push(transformPlugin.webpack({
          include: options.include,
          exclude: options.exclude,
          sourcemap: nuxt.options.sourcemap[mode],
          transformStyles: name => resolveStyles(options, name),
        }))
      })
    })
  },
})
