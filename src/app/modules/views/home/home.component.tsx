'use client'
import { FC } from 'react'

import { ForecastComponent, SelectedCardComponent, ToursComponent } from '@/app/shared/components'
import { useGlobalStore } from '@/app/shared/stores/zustand'

import styles from './home.module.scss'

//interface
interface IHome {}

//component
export const HomeComponent: FC<Readonly<IHome>> = () => {
  const tours = useGlobalStore((state) => state.tours)
  const selectedTourId = useGlobalStore((state) => state.selectedTourId)

  const selectedTourData = tours.find((item) => item.id === selectedTourId)
  //return
  return (
    <section className={`${styles.home} container`}>
      <div className={styles.home__trip_list}>
        <ToursComponent />
        {selectedTourData && <ForecastComponent selectedTour={selectedTourData} />}
      </div>

      {selectedTourData && (
        <div className={styles.home__selected_trip}>
          <SelectedCardComponent selectedTour={selectedTourData} />
        </div>
      )}
    </section>
  )
}
export default HomeComponent
