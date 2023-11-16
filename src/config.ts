import * as AllComponents from '@arco-design/web-vue'

// FIXME: Directory import 'node_modules\@arco-design\web-vue\es\icon' is not supported resolving ES modules imported from dist\module.mjs
// import * as AllIcons from '@arco-design/web-vue/es/icon'
import type { Options } from './types'

export const libraryName = '@arco-design/web-vue'

export const iconLibraryName = '@arco-design/web-vue/es/icon'

// export const allIcons = Object.keys(AllIcons).filter(name =>
//   !['install', 'default'].includes(name),
// )

const allIcons = ['IconArrowDown', 'IconArrowFall', 'IconArrowLeft', 'IconArrowRight', 'IconArrowRise', 'IconArrowUp', 'IconCaretDown', 'IconCaretLeft', 'IconCaretRight', 'IconCaretUp', 'IconDoubleDown', 'IconDoubleLeft', 'IconDoubleRight', 'IconDoubleUp', 'IconDownCircle', 'IconDown', 'IconDragArrow', 'IconExpand', 'IconLeftCircle', 'IconLeft', 'IconMenuFold', 'IconMenuUnfold', 'IconRightCircle', 'IconRight', 'IconRotateLeft', 'IconRotateRight', 'IconShrink', 'IconSwap', 'IconToBottom', 'IconToLeft', 'IconToRight', 'IconToTop', 'IconUpCircle', 'IconUp', 'IconCheckCircleFill', 'IconCloseCircleFill', 'IconExclamationCircleFill', 'IconExclamationPolygonFill', 'IconInfoCircleFill', 'IconMinusCircleFill', 'IconPlusCircleFill', 'IconQuestionCircleFill', 'IconCheckCircle', 'IconCheckSquare', 'IconCheck', 'IconClockCircle', 'IconCloseCircle', 'IconClose', 'IconExclamationCircle', 'IconExclamation', 'IconInfoCircle', 'IconInfo', 'IconMinusCircle', 'IconMinus', 'IconPlusCircle', 'IconPlus', 'IconQuestionCircle', 'IconQuestion', 'IconStop', 'IconHeartFill', 'IconStarFill', 'IconThumbDownFill', 'IconThumbUpFill', 'IconAt', 'IconCloudDownload', 'IconCodeBlock', 'IconCodeSquare', 'IconCode', 'IconCustomerService', 'IconDownload', 'IconExport', 'IconEyeInvisible', 'IconEye', 'IconHeart', 'IconHistory', 'IconHome', 'IconImport', 'IconLaunch', 'IconList', 'IconMessageBanned', 'IconMessage', 'IconMoreVertical', 'IconMore', 'IconPoweroff', 'IconRefresh', 'IconReply', 'IconSave', 'IconScan', 'IconSearch', 'IconSelectAll', 'IconSend', 'IconSettings', 'IconShareAlt', 'IconShareExternal', 'IconShareInternal', 'IconStar', 'IconSync', 'IconThumbDown', 'IconThumbUp', 'IconTranslate', 'IconUpload', 'IconVoice', 'IconAlignCenter', 'IconAlignLeft', 'IconAlignRight', 'IconAttachment', 'IconBgColors', 'IconBold', 'IconBrush', 'IconCopy', 'IconDelete', 'IconEdit', 'IconEraser', 'IconFilter', 'IconFindReplace', 'IconFontColors', 'IconFormula', 'IconH1', 'IconH2', 'IconH3', 'IconH4', 'IconH5', 'IconH6', 'IconH7', 'IconHighlight', 'IconItalic', 'IconLineHeight', 'IconLink', 'IconObliqueLine', 'IconOrderedList', 'IconOriginalSize', 'IconPaste', 'IconQuote', 'IconRedo', 'IconScissor', 'IconSortAscending', 'IconSortDescending', 'IconSort', 'IconStrikethrough', 'IconUnderline', 'IconUndo', 'IconUnorderedList', 'IconZoomIn', 'IconZoomOut', 'IconMuteFill', 'IconPauseCircleFill', 'IconPlayArrowFill', 'IconPlayCircleFill', 'IconSkipNextFill', 'IconSkipPreviousFill', 'IconSoundFill', 'IconBackward', 'IconForward', 'IconFullscreenExit', 'IconFullscreen', 'IconLiveBroadcast', 'IconMusic', 'IconMute', 'IconPauseCircle', 'IconPause', 'IconPlayArrow', 'IconPlayCircle', 'IconRecordStop', 'IconRecord', 'IconSkipNext', 'IconSkipPrevious', 'IconSound', 'IconBytedanceColor', 'IconLarkColor', 'IconTiktokColor', 'IconXiguaColor', 'IconFaceBookCircleFill', 'IconFacebookSquareFill', 'IconGoogleCircleFill', 'IconQqCircleFill', 'IconTwitterCircleFill', 'IconWeiboCircleFill', 'IconAlipayCircle', 'IconCodeSandbox', 'IconCodepen', 'IconFacebook', 'IconGithub', 'IconGitlab', 'IconGoogle', 'IconQqZone', 'IconQq', 'IconTwitter', 'IconWechat', 'IconWechatpay', 'IconWeibo', 'IconChineseFill', 'IconEnglishFill', 'IconFaceFrownFill', 'IconFaceMehFill', 'IconFaceSmileFill', 'IconMoonFill', 'IconPenFill', 'IconSunFill', 'IconApps', 'IconArchive', 'IconBarChart', 'IconBook', 'IconBookmark', 'IconBranch', 'IconBug', 'IconBulb', 'IconCalendarClock', 'IconCalendar', 'IconCamera', 'IconCloud', 'IconCommand', 'IconCommon', 'IconCompass', 'IconComputer', 'IconCopyright', 'IconDashboard', 'IconDesktop', 'IconDice', 'IconDragDotVertical', 'IconDragDot', 'IconDriveFile', 'IconEar', 'IconEmail', 'IconEmpty', 'IconExperiment', 'IconFileAudio', 'IconFileImage', 'IconFilePdf', 'IconFileVideo', 'IconFile', 'IconFire', 'IconFolderAdd', 'IconFolderDelete', 'IconFolder', 'IconGift', 'IconIdcard', 'IconImageClose', 'IconImage', 'IconInteraction', 'IconLanguage', 'IconLayers', 'IconLayout', 'IconLoading', 'IconLocation', 'IconLock', 'IconLoop', 'IconMan', 'IconMenu', 'IconMindMapping', 'IconMobile', 'IconMoon', 'IconMosaic', 'IconNav', 'IconNotificationClose', 'IconNotification', 'IconPalette', 'IconPen', 'IconPhone', 'IconPrinter', 'IconPublic', 'IconPushpin', 'IconQrcode', 'IconRelation', 'IconRobotAdd', 'IconRobot', 'IconSafe', 'IconSchedule', 'IconShake', 'IconSkin', 'IconStamp', 'IconStorage', 'IconSubscribeAdd', 'IconSubscribe', 'IconSubscribed', 'IconSun', 'IconTag', 'IconTags', 'IconThunderbolt', 'IconTool', 'IconTrophy', 'IconUnlock', 'IconUserAdd', 'IconUserGroup', 'IconUser', 'IconVideoCamera', 'IconWifi', 'IconWoman']

// locale
export const allLocales = [
  'addI18nMessages',
  'useLocale',
  'getLocale',
]

export const allHooks: Options['hooks'] = [
  'useFormItem',
]

export const allImportsWithStyle: Options['imports'] = [
  'Notification',
  'Message',
]

export const allComponents = Object.keys(AllComponents).filter(name =>
  !allLocales.includes(name)
  && !allHooks.includes(name as any)
  && !allImportsWithStyle.includes(name as any)
  && !['install', 'default'].includes(name),
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
  componentPrefix: 'A',
  icons: allIcons,
  iconPrefix: '',
  subComponents: allSubComponents,
  imports: allImportsWithStyle,
  importPrefix: '',
  locales: false,
  localePrefix: '',
  hooks: allHooks,
  hookPrefix: '',
  importStyle: 'css',
  theme: undefined,
  noStylesComponents: allNoStylesComponents,
  include: defaultInclude,
  exclude: defaultExclude,
}
