import { FC, ReactNode } from 'react'

import styles from './input.module.scss'

//interface
interface IInput {
  value?: string
  label?: string
  placeholder?: string
  iconPosition?: 'start' | 'end'
  onChange: (value: any) => void
  errorMessage?: string
  iconComponent?: ReactNode
}

//component
export const InputComponent: FC<Readonly<IInput>> = ({
  value,
  label,
  placeholder,
  iconPosition = 'end',
  onChange,
  errorMessage,
  iconComponent,
}) => {
  //return
  return (
    <div className={styles.input}>
      <p className={styles.input__label}>{label}</p>

      <div className={styles.input__wrapper}>
        {iconPosition === 'start' && <div className={`${styles.input__icon}`}>{iconComponent}</div>}

        <input
          onChange={onChange}
          value={value}
          className={styles.input__inner}
          type='text'
          placeholder={placeholder}
        />

        {iconPosition === 'end' && <div className={`${styles.input__icon}`}>{iconComponent}</div>}
      </div>

      {errorMessage && <p className={styles.input__error}>{errorMessage}</p>}
    </div>
  )
}
export default InputComponent
