import { Montserrat, Nunito } from 'next/font/google'

export const mainFont = Nunito({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--montserrat',
})
export const secondaryFont = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--montserrat',
})
