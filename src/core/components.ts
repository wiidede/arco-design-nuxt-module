import type { InnerOptions } from '../types'
import { addComponent } from '@nuxt/kit'
import { libraryName } from '../config'
import { hyphenate } from '../utils'

export function resolveComponents(config: InnerOptions) {
  const { components, subComponentsMap, icons } = config

  if (!components)
    return
  const allComponents = new Set(components)
  allComponents.forEach((name) => {
    const componentName = subComponentsMap[name] || name
    const dir = hyphenate(componentName)
    const filePath = `${libraryName}/${config.importFrom}/${dir}/index`

    addComponent({
      export: name === componentName ? 'default' : name,
      name: `${config.componentPrefix}${name}`,
      filePath,
    })
  })

  if (!icons)
    return
  icons.forEach((icon) => {
    addComponent({
      export: icon,
      name: `${config.iconPrefix}${icon}`,
      filePath: `${libraryName}/${config.importFrom}/icon`,
    })
  })
}
