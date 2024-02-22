import moment from 'moment/moment'
import { uid } from 'uid'

import { ITourInfo } from '@/app/shared/interfaces'

export const cities = ['London', 'Abu Dhabi', 'Tokyo', 'Cairo', 'Amsterdam', 'Paris', 'Rome']

export const initTour: ITourInfo = {
  city: {
    name: 'Tokyo',
    id: uid(),
  },
  start_date: moment('27.02.24', 'DD.MM.YYYY'),
  end_date: moment('01.03.24', 'DD.MM.YYYY'),
}
