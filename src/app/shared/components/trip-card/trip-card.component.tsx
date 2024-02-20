import Image from 'next/image'

import { FC } from 'react'

import { ImageBerlin } from '@/app/shared/images'
import { ITourInfo } from '@/app/shared/interfaces/interfaces'
import { useGlobalStore } from '@/app/shared/stores'

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
      className={`${styles.trip_card} ${selectedTourId === trip.city.id && styles.active}`}
      onClick={() => handleChangeGlobalStore({ selectedTourId: trip.city.id })}
    >
      <div className={styles.trip_card__photo_wrapper}>
        <Image
          className={styles.trip_card__photo}
          src={ImageBerlin}
          alt={trip.city.name}
          fill
          sizes={'25vw'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <div className={styles.trip_card__content}>
        <p className={styles.trip_card__title}>{trip.city.name}</p>

        <p className={styles.trip_card__dates}>
          {trip.start_date.format('DD.MM.YYYY')}-{trip.end_date.format('DD.MM.YYYY')}
        </p>
      </div>
    </div>
  )
}
export default TripCardComponent
