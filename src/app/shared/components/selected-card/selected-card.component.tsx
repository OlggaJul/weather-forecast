import { FC } from 'react'

import { IconSydney } from '@/app/shared/icons'

import styles from './selected-card.module.scss'

//interface
interface ISelectedCard {
  cityName: string
  startDate: string
}

//component
export const SelectedCardComponent: FC<Readonly<ISelectedCard>> = ({ cityName, startDate }) => {
  //return
  return (
    <div className={styles.selected_card}>
      <div className={styles.selected_card__bg}>
        <IconSydney />
      </div>
      <div className={styles.selected_card__blur} />

      <div className={styles.selected_card__content}>
        <div className={styles.selected_card__weather}></div>
        <div className={styles.selected_card__title}>{cityName}</div>
        <div className={styles.selected_card__countdown}>{startDate}</div>
      </div>
    </div>
  )
}
export default SelectedCardComponent
