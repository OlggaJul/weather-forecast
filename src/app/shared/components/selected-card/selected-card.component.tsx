import moment from 'moment/moment'

import { FC } from 'react'

import { IconSydney } from '@/app/shared/icons'
import { ITourInfo } from '@/app/shared/interfaces/interfaces'

import styles from './selected-card.module.scss'

//interface
interface ISelectedCard {
  selectedTour: ITourInfo
}

//component
export const SelectedCardComponent: FC<Readonly<ISelectedCard>> = ({ selectedTour }) => {
  //return
  return (
    <div className={styles.selected_card}>
      <div className={styles.selected_card__bg}>
        <IconSydney />
      </div>
      <div className={styles.selected_card__blur} />

      <div className={styles.selected_card__content}>
        <div className={styles.selected_card__weather}></div>
        <div className={styles.selected_card__title}>{selectedTour?.city.name}</div>
        <div className={styles.selected_card__countdown}>
          {moment(selectedTour?.start_date).format('DD.MM.YYYY')}
        </div>
      </div>
    </div>
  )
}
export default SelectedCardComponent
