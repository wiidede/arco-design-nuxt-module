import { addImportsSources } from '@nuxt/kit'
import { libraryName } from '../config'
import type { Options } from '../types'

export function resolveImports(config: Options) {
  const { imports, locales, hooks } = config
  const allImports = imports || []
  const allLocales = locales || []
  const allHooks = hooks || []

  addImportsSources({
    from: libraryName,
    imports: [...allImports, ...allLocales, ...allHooks],
  })
}
