'use client'
import moment from 'moment/moment'

import { FC } from 'react'

import { NewTripFormComponent, TripCardComponent } from '@/app/shared/components'
import { ITourInfo } from '@/app/shared/interfaces'
import { useGlobalStore, useModalStore } from '@/app/shared/stores/zustand'

import styles from './tours.module.scss'

//interface
interface ITours {}

//component
export const ToursComponent: FC<Readonly<ITours>> = () => {
  const handleChangeModalStore = useModalStore((state) => state.handleChangeModalStore)
  const tours = useGlobalStore((state) => state.tours)
  const searchRequest = useGlobalStore((state) => state.searchRequest)
  const sortOrder = useGlobalStore((state) => state.selectedSortOrder)

  const sortBySelectedOrder = (toursList: ITourInfo[]) => {
    return toursList.sort((item_1, item_2) => {
      const firstItemStart = moment(item_1.start_date)
      const secondItemStart = moment(item_2.start_date)

      return sortOrder.key === 'asc'
        ? firstItemStart.diff(secondItemStart)
        : secondItemStart.diff(firstItemStart)
    })
  }
  const filterBySearchRequest = (toursList: ITourInfo[]) => {
    return toursList.filter((item: ITourInfo) =>
      item.city.name.toLowerCase().includes(searchRequest.toLowerCase()),
    )
  }
  const getPreparedList = () => {
    let preparedCardsList = JSON.parse(JSON.stringify(tours))

    if (searchRequest.length) {
      preparedCardsList = filterBySearchRequest(preparedCardsList)
    }

    if (sortOrder.key !== 'created_time') {
      preparedCardsList = sortBySelectedOrder(preparedCardsList)
    }

    return preparedCardsList
  }

  //return
  return (
    <div className={styles.tours}>
      <h2 className={styles.tours__title}>Planned trips</h2>

      <div className={styles.tours__cards}>
        {getPreparedList().length ? (
          getPreparedList()?.map((item: ITourInfo) => (
            <TripCardComponent key={item.id} trip={item} />
          ))
        ) : (
          <p className={styles.tours__no_result}>
            No trips found for this request. It&apos;s time to plan one!
          </p>
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
