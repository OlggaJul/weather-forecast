import moment from 'moment/moment'
import { uid } from 'uid'

import { ISelectOptions, ITourInfo } from '@/app/shared/interfaces'

export const cities: ISelectOptions[] = [
  { value: 'London', key: 'london' },
  { value: 'Abu Dhabi', key: 'abu-dhabi' },
  { value: 'Tokyo', key: 'tokyo' },
  { value: 'Cairo', key: 'Cairo' },
  { value: 'Amsterdam', key: 'Amsterdam' },
  { value: 'Paris', key: 'Paris' },
  { value: 'Rome', key: 'Rome' },
]

export const initTour: ITourInfo = {
  city: {
    name: 'Tokyo',
  },
  id: uid(),
  start_date: moment('27.02.24', 'DD.MM.YYYY'),
  end_date: moment('01.03.24', 'DD.MM.YYYY'),
}
