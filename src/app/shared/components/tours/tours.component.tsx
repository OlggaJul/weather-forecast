'use client'
import { FC } from 'react'

import { NewTripFormComponent, TripCardComponent } from '@/app/shared/components'
import { useGlobalStore, useModalStore } from '@/app/shared/stores/zustand'

import styles from './tours.module.scss'

//interface
interface ITours {}

//component
export const ToursComponent: FC<Readonly<ITours>> = () => {
  const handleChangeModalStore = useModalStore((state) => state.handleChangeModalStore)
  const tours = useGlobalStore((state) => state.tours)

  console.log('tours', tours)

  //return
  return (
    <div className={styles.tours}>
      <h2 className={styles.tours__title}>Planned trips</h2>

      {/*<div className={styles.tours__list}>*/}
      <div className={styles.tours__cards}>
        {tours?.map((item) => <TripCardComponent key={item.city.id} trip={item} />)}
      </div>
      {/*</div>*/}

      <button
        onClick={() => handleChangeModalStore({ modalComponent: <NewTripFormComponent /> })}
        className={styles.tours__create_btn}
      >
        add trip
      </button>
    </div>
  )
}
export default ToursComponent
