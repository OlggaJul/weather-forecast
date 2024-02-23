import { FC, ReactNode } from 'react'

import styles from './input.module.scss'

//interface
interface IInput {
  value?: string
  label?: string
  placeholder?: string
  onChange: (value: any) => void
  errorMessage?: string
  iconComponent?: ReactNode
}

//component
export const InputComponent: FC<Readonly<IInput>> = ({
  value,
  label,
  placeholder,
  onChange,
  errorMessage,
  iconComponent,
}) => {
  //return
  return (
    <div className={styles.input}>
      <p className={styles.input__label}>{label}</p>

      <div className={`${styles.input__wrapper} ${value && styles.filled}`}>
        <div className={`${styles.input__icon}`}>{iconComponent}</div>

        <input
          onChange={onChange}
          value={value}
          className={styles.input__inner}
          type='text'
          placeholder={placeholder}
        />
      </div>

      {errorMessage && <p className={styles.input__error}>{errorMessage}</p>}
    </div>
  )
}
export default InputComponent
