import moment from 'moment/moment'

import { FC } from 'react'

import { secondaryFont } from '@/app/fonts'
import { CountdownComponent } from '@/app/shared/components'
import { ITourInfo } from '@/app/shared/interfaces'
import { getWeatherIcon } from '@/app/shared/services'
import { getCityIcon } from '@/app/shared/services/getCityIcon'
import { useGetCurrentWeatherQuery } from '@/app/shared/stores/redux/current-weather-api'

import styles from './selected-card.module.scss'

//interface
interface ISelectedCard {
  selectedTour: ITourInfo
}

//component
export const SelectedCardComponent: FC<Readonly<ISelectedCard>> = ({ selectedTour }) => {
  const { data, isLoading } = useGetCurrentWeatherQuery({
    city: selectedTour.city.name,
  })

  //return
  return (
    <div className={styles.selected_card}>
      <div
        className={`${styles.selected_card__bg} ${(selectedTour.city.name === 'Amsterdam' || selectedTour.city.name === 'Abu Dhabi') && styles.special}`}
      >
        {getCityIcon(selectedTour.city.name)}
      </div>

      <div className={styles.selected_card__content}>
        <p className={styles.selected_card__title}>{moment().format('dddd')}</p>

        <div className={`${styles.selected_card__weather} ${secondaryFont.className}`}>
          {getWeatherIcon(data?.days[0]?.icon)}

          {isLoading ? (
            <p>loader</p>
          ) : (
            <p className={styles.selected_card__temp}>{data?.days[0]?.temp}</p>
          )}
        </div>

        <div className={styles.selected_card__title}>{selectedTour?.city.name}</div>

        <div className={styles.selected_card__countdown}>
          <CountdownComponent targetDate={selectedTour.start_date} />
        </div>
      </div>
    </div>
  )
}
export default SelectedCardComponent
