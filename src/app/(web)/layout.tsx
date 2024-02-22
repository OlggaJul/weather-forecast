import { getServerSession } from 'next-auth'

import { FC, ReactNode } from 'react'

import { mainFont } from '@/app/fonts'
import { RootLayoutComponent } from '@/app/modules'
import SessionProvider from '@/app/providers'

import '@/app/styles/globals.scss'

interface IRootLayout {
  children: ReactNode
}

// component
const RootLayout: FC<IRootLayout> = async ({ children }) => {
  const session = await getServerSession()
  // return
  return (
    <SessionProvider session={session}>
      <html lang={'en'} className={mainFont.className}>
        <RootLayoutComponent>{children}</RootLayoutComponent>
      </html>
    </SessionProvider>
  )
}

export default RootLayout
