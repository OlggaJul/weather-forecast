'use client'
import { FC, ReactNode } from 'react'

import { HeaderComponent } from '@/app/modules/layouts/root-layout/elements'
import { BaseModalComponent } from '@/app/shared/components'
import { useModalStore } from '@/app/shared/stores'

import styles from './root-layout.module.scss'

interface IRootLayoutComponent {
  children: ReactNode
}

// component
const RootLayoutComponent: FC<Readonly<IRootLayoutComponent>> = ({ children }) => {
  const modalComponent = useModalStore((state) => state.modalComponent)

  // return
  return (
    <body id={'body'} className={styles.root_layout}>
      <div className={styles.root_layout__header}>
        <HeaderComponent />
      </div>

      <main className={styles.root_layout__inner}>{children}</main>

      {modalComponent && <BaseModalComponent />}
    </body>
  )
}

export default RootLayoutComponent
