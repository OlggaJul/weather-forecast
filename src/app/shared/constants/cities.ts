import moment from 'moment/moment'
import { uid } from 'uid'

import { ITourInfo } from '@/app/shared/interfaces/interfaces'

export const cities = [{ city: 'London' }, { city: 'Abu Dhabi' }]

export const initTour: ITourInfo = {
  city: {
    name: 'Berlin',
    id: uid(),
  },
  start_date: moment('12.09.24', 'DD.MM.YYYY'),
  end_date: moment('18.09.24', 'DD.MM.YYYY'),
}
