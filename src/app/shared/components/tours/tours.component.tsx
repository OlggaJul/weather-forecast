'use client'
import moment from 'moment/moment'

import { FC, useRef } from 'react'

import { secondaryFont } from '@/app/fonts'
import { NewTripFormComponent, TripCardComponent } from '@/app/shared/components'
import { IconArrowDown } from '@/app/shared/icons'
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

  const scrollBoxRef = useRef<HTMLDivElement | null>(null)

  const sortBySelectedOrder = (toursList: ITourInfo[]) => {
    return toursList.sort((item_1, item_2) => {
      const firstItemStart = moment(item_1.start_date)
      const secondItemStart = moment(item_2.start_date)

      return sortOrder?.key === 'asc'
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

    if (sortOrder && sortOrder?.key !== 'created_time') {
      preparedCardsList = sortBySelectedOrder(preparedCardsList)
    }

    return preparedCardsList
  }

  const handleScroll = (direction: 'forward' | 'back') => {
    scrollBoxRef.current &&
      (direction === 'forward'
        ? (scrollBoxRef.current.scrollLeft += 250)
        : (scrollBoxRef.current.scrollLeft -= 250))
  }

  //return
  return (
    <div className={styles.tours}>
      <div className={styles.tours__header}>
        <h2 className={styles.tours__title}>Planned trips</h2>

        <div className={styles.tours__buttons}>
          <button
            className={`${styles.tours__btn} ${styles.btn_prev}`}
            type={'button'}
            onClick={() => handleScroll('back')}
          >
            <IconArrowDown />
          </button>
          <button
            className={styles.tours__btn}
            type={'button'}
            onClick={() => handleScroll('forward')}
          >
            <IconArrowDown />
          </button>
        </div>
      </div>

      <div ref={scrollBoxRef} className={styles.tours__cards}>
        {getPreparedList().length ? (
          getPreparedList()?.map((item: ITourInfo) => (
            <TripCardComponent key={item.id} trip={item} />
          ))
        ) : (
          <p className={`${styles.tours__no_result} ${secondaryFont.className}`}>
            No trips found for this request. <br />
            It&apos;s time to plan one!
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
