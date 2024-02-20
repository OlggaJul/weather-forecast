'use client'
// import type { Metadata } from 'next'

import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { mainFont } from '@/app/fonts'
import { RootLayoutComponent } from '@/app/modules'
import store from '@/app/shared/stores/redux/store'

// import { store } from '@/app/shared/stores/redux'
import '@/app/styles/globals.scss'

// export const metadata: Metadata = {
//   title: 'Weather forecast',
//   description: 'Created mby OlggaJul',
// }

interface IRootLayout {
  children: ReactNode
}

// component
const RootLayout: FC<Readonly<IRootLayout>> = ({ children, ...rest }) => {
  // const { store } = wrapper.useWrappedStore(rest)

  // return
  return (
    <Provider store={store}>
      <html lang={'en'} className={mainFont.className}>
        <RootLayoutComponent>{children}</RootLayoutComponent>
      </html>
    </Provider>
  )
}

export default RootLayout
