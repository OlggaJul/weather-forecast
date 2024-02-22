'use client'
import { NextPage } from 'next'

import { Provider } from 'react-redux'

import { HomeComponent } from '@/app/modules'
import store from '@/app/shared/stores/redux/store'

const HomePage: NextPage = () => {
  return (
    <Provider store={store}>
      <HomeComponent />
    </Provider>
  )
}

export default HomePage
