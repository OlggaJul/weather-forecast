import moment from 'moment/moment'

import { FC } from 'react'

import { getWeatherIcon, iconType } from '@/app/shared/services'

import styles from './weather-card.module.scss'

//interface
interface IWeatherCard {
  date: string
  icon: iconType
  tempMax: number
  tempMin: number
}

//component
export const WeatherCardComponent: FC<Readonly<IWeatherCard>> = ({
  date,
  icon,
  tempMax,
  tempMin,
}) => {
  //return
  return (
    <div className={styles.weather_card}>
      <p className={styles.weather_card__weekday}>
        <span>{moment(date, 'YYYY-MM-DD').format('dddd')}</span> <br />
        {moment(date, 'YYYY-MM-DD').format('MMM DD')}
      </p>

      <div className={styles.weather_card__icon}>{getWeatherIcon(icon)}</div>

      <div className={styles.weather_card__forecast}>
        {tempMin}&#176;C / {tempMax}&#176;C
      </div>
    </div>
  )
}
export default WeatherCardComponent
