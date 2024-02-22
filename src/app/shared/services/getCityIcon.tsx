import {
  IconAbuDhabi,
  IconAmsterdam,
  IconCairo,
  IconLondon,
  IconMountain,
  IconParis,
  IconRome,
  IconTokyo,
} from '@/app/shared/icons'

export const getCityIcon = (iconType: string) => {
  switch (iconType) {
    case 'London':
      return <IconLondon />
    case 'Abu Dhabi':
      return <IconAbuDhabi />
    case 'Tokyo':
      return <IconTokyo />
    case 'Cairo':
      return <IconCairo />
    case 'Amsterdam':
      return <IconAmsterdam />
    case 'Paris':
      return <IconParis />
    case 'Rome':
      return <IconRome />
    default:
      return <IconMountain />
  }
}
