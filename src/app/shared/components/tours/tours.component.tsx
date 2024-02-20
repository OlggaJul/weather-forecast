import { FC } from 'react'

import { NewTripFormComponent, TripCardComponent } from '@/app/shared/components'
import { useGlobalStore, useModalStore } from '@/app/shared/stores'

import styles from './tours.module.scss'

//interface
interface ITours {}

//component
export const ToursComponent: FC<Readonly<ITours>> = () => {
  const handleChangeModalStore = useModalStore((state) => state.handleChangeModalStore)
  const tours = useGlobalStore((state) => state.tours)

  //return
  return (
    <div className={styles.tours}>
      <h2
        className={styles.tours__title}
        onClick={() => handleChangeModalStore({ modalComponent: <NewTripFormComponent /> })}
      >
        Create +
      </h2>

      <div className={styles.home__trip_cards}>
        {tours?.map((item) => <TripCardComponent key={item.city.id} trip={item} />)}
      </div>
    </div>
  )
}
export default ToursComponent
