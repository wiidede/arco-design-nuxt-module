/** Used to filter files that need to automatically import styles and other functions */
export interface TransformOptions {
  include: RegExp[]
  exclude: RegExp[]
}

export interface Options extends TransformOptions {
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
   *  ['Notification', 'Message', 'Modal']
   * ```
   */
  imports: false | ('Notification' | 'Message' | 'Modal')[]

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
  theme: string | undefined

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

export interface InnerOptions extends Options {
  subComponentsMap: Record<string, string>
}
