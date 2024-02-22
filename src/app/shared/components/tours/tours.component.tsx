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
  const searchRequest = useGlobalStore((state) => state.searchRequest)

  console.log('tours', tours)

  const getPreparedList = () => {
    const preparedTours = tours.filter((item) =>
      item.city.name.toLowerCase().includes(searchRequest.toLowerCase()),
    )

    return preparedTours.length ? preparedTours : []
  }

  //return
  return (
    <div className={styles.tours}>
      <h2 className={styles.tours__title}>Planned trips</h2>

      <div className={styles.tours__cards}>
        {searchRequest.length ? (
          getPreparedList().length ? (
            getPreparedList().map((item) => <TripCardComponent key={item.city.id} trip={item} />)
          ) : (
            <p className={styles.tours__no_result}>
              No trips found for this request. It&apos;s time to plan one!
            </p>
          )
        ) : (
          tours?.map((item) => <TripCardComponent key={item.city.id} trip={item} />)
        )}
      </div>

      <button
        onClick={() => handleChangeModalStore({ modalComponent: <NewTripFormComponent /> })}
        className={styles.tours__create_btn}
      >
        <span>+</span>
        add trip
      </button>
    </div>
  )
}
export default ToursComponent
