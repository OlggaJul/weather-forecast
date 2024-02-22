'use client'

import { SessionProvider } from 'next-auth/react'

import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { mainFont } from '@/app/fonts'
import { RootLayoutComponent } from '@/app/modules'
import store from '@/app/shared/stores/redux/store'

import '@/app/styles/globals.scss'

interface IRootLayout {
  children: ReactNode
  pageProps: any
}

// component
const RootLayout: FC<any> = async ({ children, pageProps }) => {
  // return
  return (
    <SessionProvider session={pageProps}>
      <Provider store={store}>
        <html lang={'en'} className={mainFont.className}>
          <RootLayoutComponent>{children}</RootLayoutComponent>
        </html>
      </Provider>
    </SessionProvider>
  )
}

export default RootLayout
