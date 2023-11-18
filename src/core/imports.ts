import { addImportsSources } from '@nuxt/kit'
import type { PresetImport } from 'unimport'
import { libraryName } from '../config'
import type { Options } from '../types'
import { insertPrefix } from '../utils'

export function resolveImports(config: Options) {
  const { imports, locales, hooks } = config
  const allImports = imports || []
  const allLocales = locales || []
  const allHooks = hooks || []

  addImportsSources({
    from: `${libraryName}/${config.importFrom}`,
    imports: [
      ...allImports.map(i => [i, config.importPrefix + i] as PresetImport),
      ...allLocales.map(i => [i, insertPrefix(i, config.localePrefix)] as PresetImport),
      ...allHooks.map(i => [i, insertPrefix(i, config.hookPrefix)] as PresetImport),
    ],
  })
}
