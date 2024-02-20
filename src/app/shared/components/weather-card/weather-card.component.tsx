import { FC } from 'react'

import { IconWeatherCloud } from '@/app/shared/icons'

import styles from './weather-card.module.scss'

//interface
interface IWeatherCard {}

//component
export const WeatherCardComponent: FC<Readonly<IWeatherCard>> = () => {
  //return
  return (
    <div className={styles.weather_card}>
      <p className={styles.weather_card__weekday}>
        <span>Saturday</span> <br />
        Feb 23th
      </p>

      <div className={styles.weather_card__icon}>
        <IconWeatherCloud />
      </div>

      <div className={styles.weather_card__forecast}>24*/27*</div>
    </div>
  )
}
export default WeatherCardComponent
