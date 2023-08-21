/** Used to filter files that need to automatically import styles and other functions */
export interface TransformOptions {
  include: RegExp[]
  exclude: RegExp[]
}

export interface Options extends TransformOptions {
  /**
   * A list of components that need to be automatically imported externally.
   *
   * @default 'from @arco-design/web-vue/'
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
   * A list of components that need to be automatically imported externally.
   *
   * @default 'from @arco-design/web-vue/es/icon'
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
   */
  subComponents: Record<string, string[]>

  /**
   * A list of imports that need to be automatically imported externally.
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
   * When you need to add automatically import content from Arco Design Vue, you can add it here.
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
   * When you need to add automatically import content from Arco Design Vue, you can add it here.
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
   * A list of component names that have no styles, so resolving their styles file should be prevented
   *
   * @default
   * ```ts
   * ['ConfigProvider', 'Icon']
   * ```
   */
  noStylesComponents: string[]
}

export interface InnerOptions extends Options {
  subComponentsMap: Record<string, string>
}
