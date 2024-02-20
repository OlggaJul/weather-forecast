// import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'

// import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherForecastApi } from '@/app/shared/stores/redux/weather-forecast-api'

const rootReducer = {
  [weatherForecastApi.reducerPath]: weatherForecastApi.reducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat([weatherForecastApi.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store

// setupListeners(store.dispatch)
//
// const makeStore = () => store
//
// export type AppStore = ReturnType<typeof makeStore>
//
// export const wrapper = createWrapper<AppStore>(makeStore, { debug: false })
