<div align="center">
<img height="100px" width="100px" src='https://github.com/wiidede/arco-design-nuxt-module/raw/main/arco-design-nuxt-module.svg' alt="Arco Design Nuxt Module Logo">
<h1>Arco Design Nuxt Module</p>
</div>

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Nuxt Module for Arco Design Vue. Automatically import components, icons and more.

## Features

<!-- Highlight some of the features your module provide here -->
- ✨ auto import components
- ✨ auto import icons
- ✨ auto import Message, Notification
- ✨ auto import hooks
- ✨ auto import locale hooks
- 🔹 support custom prefix above

## Quick Setup

1. Add `arco-design-nuxt-module` dependency to your project

```bash
npx nuxi@latest module add arco-design-nuxt-module
```

> [!NOTE]
> If you do not have `@arco-design/web-vue` installed, please install it first
>
> `pnpm install @arco-design/web-vue`

2. Add `arco-design-nuxt-module` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'arco-design-nuxt-module'
  ]
})
```

## Options

If you need to customize the module, you can set `arco` in `nuxt.config.ts`

### Example

```ts
export default defineNuxtConfig({
  arco: {
    importPrefix: 'A',
    hookPrefix: 'Arco',
    locales: ['getLocale'],
    localePrefix: 'Arco',
  },
})
```

### Full Type

```ts
interface Options {
  /**
   * A list of components that need to be automatically imported.
   *
   * @default * all component from '@arco-design/web-vue/'
   *
   * @example
   * ```ts
   *  ['Button']
   * ```
   */
  components: false | string[]

  /**
   * Prefix of the component name.
   *
   * @default 'A'
   */
  componentPrefix: string

  /**
   * A list of icons component that need to be automatically imported.
   *
   * @default * all icons from '@arco-design/web-vue/(es|lib)/icon'
   *
   * @example
   * ```ts
   *  ['IconArrowDown']
   * ```
   */
  icons: false | string[]

  /**
   * Prefix of the icon component name.
   *
   * @default ''
   */
  iconPrefix: string

  /**
   * A map of components that the definition file of subComponent is in its parent component.
   * Normally, you don't need to set it.
   */
  subComponents: Record<string, string[]>

  /**
   * A list of imports(with style auto import) that need to be automatically imported.
   *
   * @default
   * ```ts
   *  ['Notification', 'Message']
   * ```
   */
  imports: false | ('Notification' | 'Message')[]

  /**
   * Prefix of the import name.
   *
   * @default ''
   */
  importPrefix: string

  /**
   * When you need to add automatically import locale function from Arco Design Vue, you can add it here.
   *
   * @default false
   *
   * @example
   * ```ts
   *  ['useLocale', 'getLocale', 'addI18nMessages']
   * ```
   *
   */
  locales: false | ('useLocale' | 'getLocale' | 'addI18nMessages')[]

  /**
   * Prefix of the locale name.
   *
   * @default ''
   *
   * @example
   * 'A' -> 'useALocale'
   */
  localePrefix: string

  /**
   * When you need to add automatically import hooks from Arco Design Vue, you can add it here.
   *
   * @default
   * ```ts
   * ['useFormItem']
   * ```
   *
   */
  hooks: false | ('useFormItem')[]

  /**
   * Prefix of the hook name.
   *
   * @default ''
   *
   * @example 'A' -> 'useAFormItem'
   */
  hookPrefix: string

  /**
   * import style css or less with components
   *
   * @default 'css'
   *
   * Disable automatically import styles with `false`
   */
  importStyle: 'css' | 'less' | boolean

  /**
   * use arco design theme.
   *
   * @default undefined
   *
   * @example '@arco-themes/vue-digitforce'
   *
   * It will full import the theme style file(index.less or css/arco.css)
   *
   * Recommended just directly import index.less or css/arco.css in your project and disable `importStyle` rather than using this option
   *
   * for more detail about theme, see https://arco.design/docs/designlab/use-theme-package
   */
  theme: string

  /**
   * A list of component names that have no styles, so resolving their styles file should be prevented
   *
   * @default
   * ```ts
   * ['ConfigProvider', 'Icon']
   * ```
   */
  noStylesComponents: string[]

  /**
   * import from es or lib
   *
   * @default 'es'
   *
   */
  importFrom: 'es' | 'lib'
}
```

That's it! You can now use Arco Design Nuxt Module in your Nuxt app ✨

## Other

- [Release Notes](https://github.com/wiidede/arco-design-nuxt-module/releases)
- [Demo](https://github.com/wiidede/arco-nuxt-demo)
- [Online playground](https://stackblitz.com/github/wiidede/arco-nuxt-demo?file=pages%2Findex.vue)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Credits

Thanks to:

- heavily inspired by [element-plus-nuxt](https://github.com/element-plus/element-plus-nuxt)
- [Arco Design](https://arco.design)
- [Nuxt][nuxt-href]

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/arco-design-nuxt-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/arco-design-nuxt-module

[npm-downloads-src]: https://img.shields.io/npm/dm/arco-design-nuxt-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/arco-design-nuxt-module

[license-src]: https://img.shields.io/npm/l/arco-design-nuxt-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/arco-design-nuxt-module

[nuxt-href]: https://nuxt.com
