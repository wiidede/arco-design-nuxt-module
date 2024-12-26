import type { InnerOptions } from '../types'
import { allImportsWithStyle, libraryName } from '../config'
import { hyphenate } from '../utils'

export function getStyleDir(config: InnerOptions, name: string) {
  if (config.importStyle === false)
    return undefined

  const dir = hyphenate(config.subComponentsMap[name] || name)
  const type = config.importStyle

  if (config.theme) {
    if (type === 'less')
      return `${config.theme}/theme.less`
    if (type === 'css' || type)
      return `${config.theme}/css/arco.css`
  }

  if (type === 'less')
    return `${libraryName}/${config.importFrom}/${dir}/style/index.js`
  if (type === 'css' || type)
    return `${libraryName}/${config.importFrom}/${dir}/style/css.js`
}

export function resolveStyles(config: InnerOptions, name: string) {
  const { components, noStylesComponents, imports } = config

  if ((imports || []).includes(name as any) && (allImportsWithStyle || []).includes(name as any))
    return getStyleDir(config, name)

  const nameReg = new RegExp(`^${config.componentPrefix}[A-Z]`)
  if (!nameReg.test(name))
    return undefined

  const componentName = name.slice(config.componentPrefix.length)

  if (!(components || []).includes(componentName) || noStylesComponents.includes(name))
    return undefined

  return getStyleDir(config, componentName)
}
