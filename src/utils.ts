import type { InnerOptions, Options } from './types'
import { libraryName } from './config'

export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}

export function toArray<T extends any | any[]>(
  value: T,
): T extends any[] ? T : T[] {
  return isArray(value) ? value : [value] as any
}

export function toRegExp(arr: string[], flags?: string): RegExp {
  return new RegExp(`\\b(${arr.join('|')})\\b`, flags)
}

function getSubComponents(subComponents: Options['subComponents']) {
  return Object.fromEntries<string>(
    Object.entries(subComponents).reduce((all, [key, values]) => {
      values.forEach((item) => {
        all.push([item, key])
      })
      return all
    }, [] as [string, string][]),
  )
}

export function computeOptions(options: Options): InnerOptions {
  return {
    ...options,
    subComponentsMap: getSubComponents(options.subComponents),
  }
}

export function genLibraryImport(list: string[], options: Options): string {
  return `import {${list.join(',')}} from '${libraryName}/${options.importFrom}';`
}

export function genSideEffectsImport(value: string): string {
  return `import '${value}';`
}

export function camelize(value: string): string {
  return value.replace(/(^|-)(\w)/g, (a, b, c) => c.toUpperCase())
}

export function hyphenate(value: string): string {
  return value.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

export function insertPrefix(value: string, prefix: string): string {
  return value.replace(/^(\w+?)([A-Z])/, (m, a, b) => `${a}${prefix}${b}`)
}
