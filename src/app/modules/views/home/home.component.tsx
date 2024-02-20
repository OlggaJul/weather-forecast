'use client'
import { FC, useEffect } from 'react'

import { ForecastComponent, SelectedCardComponent, ToursComponent } from '@/app/shared/components'
import { initTour } from '@/app/shared/constants'
import { useGlobalStore } from '@/app/shared/stores'

import styles from './home.module.scss'

//interface
interface IHome {}

//component
export const HomeComponent: FC<Readonly<IHome>> = () => {
  const handleChangeGlobalStore = useGlobalStore((state) => state.handleChangeGlobalStore)

  useEffect(() => {
    handleChangeGlobalStore({ tours: [initTour] })
  }, [])

  //return
  return (
    <section className={`${styles.home} container`}>
      <div className={styles.home__trip_list}>
        <ToursComponent />
        <ForecastComponent />
      </div>

      <div className={styles.home__selected_trip}>
        <SelectedCardComponent cityName={'Abu Dhabi'} startDate={'12.03.2024'} />
      </div>
    </section>
  )
}
export default HomeComponent
