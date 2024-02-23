import {
  ImageAbuDhabi,
  ImageAmsterdam,
  ImageCairo,
  ImageLondon,
  ImageParis,
  ImageRome,
  ImageTokyo,
} from '@/app/shared/images'

export const getCityPhoto = (cityName: string) => {
  switch (cityName) {
    case 'Rome':
      return ImageRome
    case 'London':
      return ImageLondon
    case 'Abu Dhabi':
      return ImageAbuDhabi
    case 'Cairo':
      return ImageCairo
    case 'Tokyo':
      return ImageTokyo
    case 'Amsterdam':
      return ImageAmsterdam
    case 'Paris':
      return ImageParis
    default:
      return ImageRome
  }
}
