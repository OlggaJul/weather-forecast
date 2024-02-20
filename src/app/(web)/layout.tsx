import type { Metadata } from 'next'

import { FC, ReactNode } from 'react'

import { mainFont } from '@/app/fonts'
import { RootLayoutComponent } from '@/app/modules'

import '@/app/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Weather forecast',
  description: 'Created mby OlggaJul',
}

interface IRootLayout {
  children: ReactNode
}

const RootLayout: FC<Readonly<IRootLayout>> = ({ children }) => {
  return (
    <html lang={'en'} className={mainFont.className}>
      <RootLayoutComponent>{children}</RootLayoutComponent>
    </html>
  )
}

export default RootLayout
