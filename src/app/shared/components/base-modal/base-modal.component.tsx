'use client'
import { FC } from 'react'

import { IconClose } from '@/app/shared/icons'
import { useModalStore } from '@/app/shared/stores/zustand'

import styles from './base-modal.module.scss'

//interface
interface IBaseModal {}

//component
export const BaseModalComponent: FC<Readonly<IBaseModal>> = () => {
  const modalComponent = useModalStore((state) => state.modalComponent)
  const handleChangeModalStore = useModalStore((state) => state.handleChangeModalStore)

  //return
  return (
    <div className={styles.base_modal}>
      <div className={styles.base_modal__box}>
        <div className={styles.base_modal__header}>
          <p>Create a new trip</p>

          <div
            onClick={() => handleChangeModalStore({ modalComponent: null })}
            className={styles.base_modal__close_btn}
          >
            <IconClose />
          </div>
        </div>

        <div className={styles.base_modal__main}>{modalComponent}</div>
      </div>

      <div
        className={styles.base_modal__background}
        onClick={() => handleChangeModalStore({ modalComponent: null })}
      />
    </div>
  )
}
export default BaseModalComponent
