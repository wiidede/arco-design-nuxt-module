import { allImportsWithStyle, libraryName } from '../config'
import { hyphenate } from '../utils'
import type { InnerOptions } from '../types'

export function getStyleDir(config: InnerOptions, name: string) {
  if (config.importStyle === false)
    return undefined

  const dir = hyphenate(config.subComponentsMap[name] || name)
  const type = config.importStyle

  if (type === 'less')
    return `${libraryName}/es/${dir}/style/index.js`
  if (type === 'css' || type)
    return `${libraryName}/es/${dir}/style/css.js`
}

export function resolveStyles(config: InnerOptions, name: string) {
  const { components, noStylesComponents, imports } = config

  if ((imports || []).includes(name) && allImportsWithStyle.includes(name))
    return getStyleDir(config, name)

  if (!/^A[A-Z]/.test(name))
    return undefined

  const componentName = name.slice('A'.length)

  if (!(components || []).includes(componentName) || noStylesComponents.includes(name))
    return undefined

  return getStyleDir(config, componentName)
}
