import type { TransformOptions } from '../types'
import MagicString from 'magic-string'
import { createUnplugin } from 'unplugin'
import { allImportsWithStyle, libraryName } from '../config'
import {
  camelize,
  genSideEffectsImport,
  toRegExp,
} from '../utils'

interface PluginOptions extends TransformOptions {
  sourcemap?: boolean
  transformStyles: (name: string) => undefined | string
}

const componentsRegExp = /(?<=[ (])_?resolveComponent\(\s*["'](lazy-|Lazy)?([^'"]*)["'][^)]*\)/g
const importsRegExp = toRegExp(allImportsWithStyle || [], 'g')

export const transformPlugin = createUnplugin((options: PluginOptions) => {
  const { include, exclude, transformStyles } = options

  return {
    name: `${libraryName}:transform`,
    enforce: 'post',
    transformInclude(id) {
      if (exclude.some(pattern => id.match(pattern)))
        return false

      if (include.some(pattern => id.match(pattern)))
        return true
    },
    transform(code, id) {
      const imports = new Set<string>()
      const s = new MagicString(code)

      const addStyles = (styles?: string) => {
        styles && imports.add(genSideEffectsImport(styles))
      }

      s.replace(componentsRegExp, (full, lazy, name) => {
        addStyles(transformStyles(camelize(name)))
        return full
      })

      s.replace(importsRegExp, (full, name) => {
        addStyles(transformStyles(camelize(name)))
        return full
      })

      if (imports.size)
        s.prepend([...imports, ''].join('\n'))

      if (s.hasChanged()) {
        return {
          code: s.toString(),
          map: options.sourcemap
            ? s.generateMap({ source: id, includeContent: true })
            : undefined,
        }
      }
    },
  }
})
