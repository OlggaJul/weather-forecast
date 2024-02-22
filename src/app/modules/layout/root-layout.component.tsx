'use client'
import { HeaderComponent } from './elements'

import { FC, ReactNode } from 'react'

import { BaseModalComponent } from '@/app/shared/components'
import { useModalStore } from '@/app/shared/stores/zustand'

import styles from './root-layout.module.scss'

interface IRootLayoutComponent {
  children: ReactNode
}

// component
const RootLayoutComponent: FC<Readonly<IRootLayoutComponent>> = ({ children }) => {
  const modalComponent = useModalStore((state) => state.modalComponent)

  // return
  return (
    <body className={styles.root_layout}>
      <HeaderComponent />

      <main className={styles.root_layout__inner}>{children}</main>

      {modalComponent && <BaseModalComponent />}
    </body>
  )
}

export default RootLayoutComponent
