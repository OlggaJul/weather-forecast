import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services',
  headers: {
    accept: 'application/json',
  },
})

export default baseQuery
