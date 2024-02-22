import { FC, useState } from 'react'

import { InputComponent, SelectComponent } from '@/app/shared/components'
import { sort_options } from '@/app/shared/constants'
import { IconHeaderBg, IconSearch } from '@/app/shared/icons'
import { useGlobalStore } from '@/app/shared/stores'

import styles from './header.module.scss'

//interface
interface IHeader {}

//component
export const HeaderComponent: FC<Readonly<IHeader>> = () => {
  const [sortRequest, setSortRequest] = useState('')

  const handleChangeGlobalStore = useGlobalStore((state) => state.handleChangeGlobalStore)
  const searchRequest = useGlobalStore((state) => state.searchRequest)

  //return
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__inner}>
        <div className={styles.header__setting_panel}>
          <div className={styles.header__search}>
            <InputComponent
              label={'enter search request'}
              placeholder={'search'}
              onChange={(e) => handleChangeGlobalStore({ searchRequest: e.target.value })}
              value={searchRequest}
              iconComponent={<IconSearch />}
            />
          </div>

          <div className={styles.header__sort}>
            <SelectComponent
              value={sortRequest}
              onChange={setSortRequest}
              label={'Sort by'}
              placeholder={'Select sort type'}
              options={sort_options}
            />
          </div>
        </div>

        <div className={styles.header__decor}>
          <div className={`${styles.header__decor_icon}`}>
            <IconHeaderBg />
          </div>
        </div>
      </div>
    </header>
  )
}
export default HeaderComponent
