import { configureStore } from '@reduxjs/toolkit'

import { currentWeatherApi } from '@/app/shared/stores/redux/current-weather-api'
import { weatherForecastApi } from '@/app/shared/stores/redux/weather-forecast-api'

const rootReducer = {
  [weatherForecastApi.reducerPath]: weatherForecastApi.reducer,
  [currentWeatherApi.reducerPath]: currentWeatherApi.reducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat([weatherForecastApi.middleware, currentWeatherApi.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
