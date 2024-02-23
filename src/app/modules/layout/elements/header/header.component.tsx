import { signIn, useSession } from 'next-auth/react'

import { FC } from 'react'

import { InputComponent, SelectComponent } from '@/app/shared/components'
import { sort_options } from '@/app/shared/constants'
import { IconGoogle, IconHeader, IconSearch } from '@/app/shared/icons'
import { useGlobalStore } from '@/app/shared/stores'

import styles from './header.module.scss'

//interface
interface IHeader {}

//component
export const HeaderComponent: FC<Readonly<IHeader>> = () => {
  const handleChangeGlobalStore = useGlobalStore((state) => state.handleChangeGlobalStore)
  const searchRequest = useGlobalStore((state) => state.searchRequest)
  const selectedSortOrder = useGlobalStore((state) => state.selectedSortOrder)
  const userName = useGlobalStore((state) => state.userName)
  const { data: session } = useSession()

  //return
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__inner}>
        <div className={styles.header__setting_panel}>
          <div className={styles.header__search}>
            <InputComponent
              label={'Search your trip'}
              placeholder={'Search'}
              onChange={(e) => handleChangeGlobalStore({ searchRequest: e.target.value })}
              value={searchRequest}
              iconComponent={<IconSearch />}
            />
          </div>

          <div className={styles.header__sort}>
            <SelectComponent
              value={selectedSortOrder}
              onChange={(e) => handleChangeGlobalStore({ selectedSortOrder: e })}
              label={'Sort by'}
              placeholder={'Select sort type'}
              options={sort_options}
            />
          </div>

          {session?.user?.name ? (
            <>
              <div className={styles.header__greet}>
                Hello, <br />
                {session?.user?.name}!
              </div>
            </>
          ) : (
            <div className={styles.header__sign_in} onClick={() => signIn('google')}>
              Sign in with
              <IconGoogle />
            </div>
          )}

          <div>{userName}</div>
        </div>

        <div className={styles.header__decor}>
          <IconHeader />
        </div>
      </div>
    </header>
  )
}
export default HeaderComponent
