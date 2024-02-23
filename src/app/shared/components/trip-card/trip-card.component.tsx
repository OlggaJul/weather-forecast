import Image from 'next/image'

import moment from 'moment/moment'

import { FC } from 'react'

import { ITourInfo } from '@/app/shared/interfaces'
import { getCityPhoto, shimmer } from '@/app/shared/services'
import { useGlobalStore } from '@/app/shared/stores/zustand'

import styles from './trip-card.module.scss'

// interface
interface ITripCard {
  trip: ITourInfo
}

//component
export const TripCardComponent: FC<Readonly<ITripCard>> = ({ trip }) => {
  const handleChangeGlobalStore = useGlobalStore((state) => state.handleChangeGlobalStore)
  const selectedTourId = useGlobalStore((state) => state.selectedTourId)

  //return
  return (
    <div
      className={`${styles.trip_card} ${selectedTourId === trip.id ? styles.active : ''}`}
      onClick={() => {
        handleChangeGlobalStore({ selectedTourId: trip.id })
      }}
    >
      <div className={styles.trip_card__photo_wrapper}>
        <Image
          className={`${styles.trip_card__photo} ${selectedTourId === trip.id ? styles.active : ''}`}
          src={trip.city.image ? trip.city.image : getCityPhoto(trip.city.name)}
          alt={trip.city.name}
          fill
          sizes={'25vw'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          placeholder={'blur'}
          blurDataURL={`${shimmer(100, 100)}`}
        />
      </div>

      <div
        className={`${styles.trip_card__content} ${selectedTourId === trip.id ? styles.active : ''}`}
      >
        <p className={styles.trip_card__title}>{trip.city.name}</p>

        <p className={styles.trip_card__dates}>
          {moment(trip?.start_date)?.format('DD.MM.YYYY')}-
          {moment(trip?.end_date)?.format('DD.MM.YYYY')}
        </p>
      </div>
    </div>
  )
}
export default TripCardComponent
