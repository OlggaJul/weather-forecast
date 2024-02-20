import moment from 'moment'

import { FC } from 'react'

import WeatherCardComponent from '../weather-card/weather-card.component'

import styles from './forecast.module.scss'

//interface
interface IForecast {}

//component
export const ForecastComponent: FC<Readonly<IForecast>> = () => {
  //return
  return (
    <section className={styles.forecast}>
      <div className={styles.forecast__title}>Weather forecast</div>

      <div className={styles.forecast__cards}>
        {moment.weekdays(true).map((day) => (
          <WeatherCardComponent key={day} />
        ))}
      </div>
    </section>
  )
}
export default ForecastComponent
