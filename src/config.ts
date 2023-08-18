import AllComponents from '@arco-design/web-vue'
import * as AllIcons from '@arco-design/web-vue/es/icon'
import type { Options } from './types'

export const libraryName = '@arco-design/web-vue'

export const iconLibraryName = '@arco-design/web-vue/es/icon'

export const allIcons = Object.keys(AllIcons).filter(name =>
  name !== 'install',
)

// locale
export const allLocales = [
  'addI18nMessages',
  'useLocale',
  'getLocale',
]

export const allHooks = [
  'useFormItem',
]

export const allImportsWithStyle: string[] = [
  'Notification',
  'Message',
]

export const allComponents = Object.keys(AllComponents).filter(name =>
  !allLocales.includes(name)
  && !allHooks.includes(name)
  && !allImportsWithStyle.includes(name)
  && name !== 'install',
)

const allNoStylesComponents: string[] = [
  'ConfigProvider',
  'Icon',
]

const allSubComponents: Record<string, string[]> = {
  Anchor: ['AnchorLink'],
  Avatar: ['AvatarGroup'],
  Breadcrumb: ['BreadcrumbItem'],
  Button: ['ButtonGroup'],
  Card: ['CardGrid', 'CardMeta'],
  Carousel: ['CarouselItem'],
  Cascader: ['CascaderPanel'],
  Checkbox: ['CheckboxGroup'],
  Collapse: ['CollapseItem'],
  DatePicker: ['MonthPicker', 'QuarterPicker', 'WeekPicker', 'YearPicker', 'RangePicker'],
  Descriptions: ['DescriptionsItem'],
  Dropdown: ['Dgroup', 'Doption', 'DropdownButton', 'Dsubmenu'],
  Form: ['FormItem'],
  Grid: ['Col', 'Row', 'GridItem'],
  Image: ['ImagePreviewAction', 'ImagePreview', 'ImagePreviewGroup'],
  Input: ['InputGroup', 'InputPassword', 'InputSearch'],
  Layout: ['LayoutContent', 'LayoutFooter', 'LayoutHeader', 'LayoutSider'],
  List: ['ListItem', 'ListItemMeta'],
  Menu: ['MenuItem', 'MenuItemGroup', 'SubMenu'],
  Radio: ['RadioGroup'],
  Select: ['Optgroup', 'Option'],
  Skeleton: ['SkeletonLine', 'SkeletonShape'],
  Statistic: ['Countdown'],
  Steps: ['Step'],
  Table: ['Thead', 'Td', 'Th', 'Tr', 'Tbody', 'TableColumn'],
  Tabs: ['TabPane'],
  Timeline: ['TimelineItem'],
  Typography: ['TypographyParagraph', 'TypographyText', 'TypographyTitle'],
}

const defaultInclude: RegExp[] = [
  /\.vue$/,
  /\.vue\?vue/,
  /\.vue\?v=/,
  /\.((c|m)?j|t)sx?$/,
]

const defaultExclude: RegExp[] = [
  /[\\/]node_modules[\\/]/,
  /[\\/]\.git[\\/]/,
  /[\\/]\.nuxt[\\/]/,
]

export const defaults: Options = {
  components: allComponents,
  icons: allIcons,
  subComponents: allSubComponents,
  imports: allImportsWithStyle,
  locales: false,
  hooks: allHooks,
  importStyle: 'css',
  noStylesComponents: allNoStylesComponents,
  include: defaultInclude,
  exclude: defaultExclude,
}
