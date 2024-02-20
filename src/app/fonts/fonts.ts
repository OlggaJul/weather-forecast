import { Nunito } from 'next/font/google'

export const mainFont = Nunito({
  weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic-ext'],
  display: 'swap',
  preload: true,
  variable: '--montserrat',
})
