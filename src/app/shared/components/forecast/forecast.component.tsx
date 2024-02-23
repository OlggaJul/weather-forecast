import moment from 'moment/moment'

import { FC } from 'react'

import { ITourInfo } from '@/app/shared/interfaces'
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
    start_date: moment(selectedTour.start_date)?.toISOString(),
    end_date: moment(selectedTour.end_date)?.toISOString(),
  })

  //return
  return (
    <section className={styles.forecast}>
      <h2 className={styles.forecast__title}>{`Weather forecast for ${selectedTour.city.name}`}</h2>

      {isLoading ? (
        <p>loading</p>
      ) : (
        <div className={styles.forecast__cards}>
          {data?.days?.map((day: any) => (
            <WeatherCardComponent
              key={day.datetime}
              date={day.datetime}
              icon={day.icon}
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
