import moment from 'moment'

import { FC } from 'react'

import { ITourInfo } from '@/app/shared/interfaces/interfaces'
import { useGetWeatherForecastQuery } from '@/app/shared/stores/redux/weather-forecast-api'

import WeatherCardComponent from '../weather-card/weather-card.component'

import styles from './forecast.module.scss'

//interface
interface IForecast {
  selectedTour: ITourInfo
}

//component
export const ForecastComponent: FC<Readonly<IForecast>> = ({ selectedTour }) => {
  const { data, isLoading } = useGetWeatherForecastQuery({
    city: selectedTour.city.name,
    start_date: selectedTour.start_date,
    end_date: selectedTour.end_date,
  })

  //return
  return (
    <section className={styles.forecast}>
      <div className={styles.forecast__title}>
        {`Weather forecast for ${selectedTour.city.name}`}
      </div>

      {isLoading ? (
        <p>loading</p>
      ) : (
        <div className={styles.forecast__cards}>
          {data.days.map((day: any) => (
            <WeatherCardComponent
              key={day}
              date={day.datetime}
              iconType={day.icon}
              tempMax={day.tempmax}
              tempMin={day.tempmin}
            />
          ))}
        </div>
      )}
    </section>
  )
}
export default ForecastComponent
