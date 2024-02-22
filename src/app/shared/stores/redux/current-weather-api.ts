import { createApi } from '@reduxjs/toolkit/query/react'

import baseQuery from '@/app/shared/stores/redux/baseQuery'

export const currentWeatherApi = createApi({
  reducerPath: 'currentWeather',
  baseQuery,
  tagTypes: ['current-weather'],
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: ({ city }) => ({
        url: `/timeline/${city}/today?unitGroup=metric&include=days%2Chours&key=JVE3PZWGLACW4P7KZPAVR5F9N&contentType=json`,
      }),
    }),
  }),
})

export const {
  useGetCurrentWeatherQuery,
  util: { getRunningQueriesThunk: getRunningQueriesTrunkCurrentWeather },
} = currentWeatherApi

export const { getCurrentWeather } = currentWeatherApi.endpoints
