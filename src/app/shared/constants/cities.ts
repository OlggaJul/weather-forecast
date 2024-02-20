import moment from 'moment/moment'

import { ITourInfo } from '@/app/shared/interfaces/interfaces'

export const cities = [{ city: 'London' }, { city: 'Abu Dhabi' }]

export const initTour: ITourInfo = {
  city: {
    name: 'Lviv',
    id: '1',
  },
  start_date: moment('12.09.24'),
  end_date: moment('18.09.24'),
}
