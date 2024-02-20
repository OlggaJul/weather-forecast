import { FC } from 'react'

import {
  IconBg1,
  IconBg2,
  IconHeaderBg,
  IconRainbow,
  IconRome,
  IconSydney,
} from '@/app/shared/icons'

import styles from './header.module.scss'

//interface
interface IHeader {}

//component
export const HeaderComponent: FC<Readonly<IHeader>> = () => {
  //return
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__inner}>
        <div className={styles.header__decor}>
          <div className={`${styles.header__decor_icon}`}>
            <IconHeaderBg />
          </div>

          <div className={styles.header__decor_layer_one}>
            <IconBg1 />
          </div>

          <div className={styles.header__decor_layer_two}>
            <IconBg2 />
          </div>
        </div>
        <div className={styles.header__box}></div>
        {/*<div className={styles.header__logo}>*/}
        {/*  <IconRainbow />*/}
        {/*</div>*/}
        <div className={styles.header__box}></div>
      </div>
    </header>
  )
}
export default HeaderComponent
