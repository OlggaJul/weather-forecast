import { getIconCode } from 'next/dist/compiled/@vercel/og/emoji'

import moment from 'moment/moment'

import { FC } from 'react'

import { IconWeatherCloud } from '@/app/shared/icons'

import styles from './weather-card.module.scss'

//interface
interface IWeatherCard {
  date: string
  iconType: string
  tempMax: number
  tempMin: number
}

type iconType = 'snow' | 'rain' | 'fog' | 'wind' | 'cloudy' | 'partly-cloudy-day' | 'clear-day'

//component
export const WeatherCardComponent: FC<Readonly<IWeatherCard>> = ({
  date,
  iconType,
  tempMax,
  tempMin,
}) => {
  const getIcon = (type: string) => {
    console.log(type, 'TYPE')
    return <IconWeatherCloud />
  }

  //return
  return (
    <div className={styles.weather_card}>
      <p className={styles.weather_card__weekday}>
        <span>{moment(date, 'YYYY-MM-DD').format('dddd')}</span> <br />
        {moment(date, 'YYYY-MM-DD').format('MMM DD')}
      </p>
      <div className={styles.weather_card__icon}>{getIcon(iconType)}</div>

      <div className={styles.weather_card__forecast}>
        {tempMin}&#176; / {tempMax}&#176;
      </div>
    </div>
  )
}
export default WeatherCardComponent
