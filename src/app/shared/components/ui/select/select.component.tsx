'use client'

import { FC, useState } from 'react'

import { IconArrowDown } from '@/app/shared/icons'

import styles from './select.module.scss'

//interface
interface ISelect {
  value: any
  onChange: (value: any) => void
  label?: string
  placeholder?: string
  errorMessage?: string
  options: { value: string; key: string }[]
}

//component
export const SelectComponent: FC<Readonly<ISelect>> = ({
  value,
  onChange,
  placeholder,
  errorMessage,
  label,
  options,
}) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)

  //return
  return (
    <div className={styles.select}>
      <p className={styles.select__label}>{label}</p>

      <div className={styles.select__container}>
        <div
          className={`${styles.select__field} ${value && styles.filled} ${isOptionsVisible && styles.opened}`}
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
        >
          <p className={styles.select__selectedItem}>{value ? value?.value : placeholder}</p>

          <div className={`${styles.select__icon} ${isOptionsVisible && styles.opened}`}>
            <IconArrowDown />
          </div>
        </div>

        {errorMessage && <p className={styles.select__error}>{errorMessage}</p>}

        <div
          className={`${styles.select__options_container} ${isOptionsVisible && styles.visible}`}
        >
          <div className={styles.select__options_inner}>
            {options?.map((option) => (
              <div
                onClick={() => {
                  onChange(option)
                  setIsOptionsVisible(false)
                }}
                className={styles.select__option}
                key={option.key}
              >
                {option.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectComponent
