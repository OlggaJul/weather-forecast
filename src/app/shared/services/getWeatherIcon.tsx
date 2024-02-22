import {
  IconCloud,
  IconFog,
  IconPartlyCloudy,
  IconRain,
  IconSnow,
  IconSun,
  IconWind,
} from '@/app/shared/icons'

export type iconType =
  | 'snow'
  | 'rain'
  | 'fog'
  | 'wind'
  | 'cloudy'
  | 'partly-cloudy-day'
  | 'clear-day'

export const getWeatherIcon = (iconType: iconType) => {
  switch (iconType) {
    case 'snow':
      return <IconSnow />
    case 'rain':
      return <IconRain />
    case 'fog':
      return <IconFog />
    case 'wind':
      return <IconWind />
    case 'cloudy':
      return <IconCloud />
    case 'partly-cloudy-day':
      return <IconPartlyCloudy />
    case 'clear-day':
      return <IconSun />
    default:
      return <IconCloud />
  }
}
