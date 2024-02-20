import { createApi } from '@reduxjs/toolkit/query/react'

import baseQuery from '@/app/api/baseQuery'

export const weatherForecastApi = createApi({
  reducerPath: 'weatherForecast',
  baseQuery,
  tagTypes: ['weather-forecast'],
  endpoints: (builder) => ({
    getWeatherForecast: builder.query({
      query: ({ city, start_date, end_date }) => ({
        url: `/timeline/${city}/${start_date}/${end_date}?unitGroup=metric&include=days%2Chours&key=JVE3PZWGLACW4P7KZPAVR5F9N&contentType=json`,
      }),
    }),
  }),
})

export const { useGetWeatherForecastQuery } = weatherForecastApi
