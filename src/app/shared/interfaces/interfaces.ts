import { Moment } from 'moment/moment'

export interface ITourInfo {
  city: {
    name: string
  }
  id: string
  start_date: Moment
  end_date: Moment
}

export interface ISelectOptions {
  value: string
  key: string
}
