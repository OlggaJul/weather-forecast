import { FC, ReactNode } from 'react'

import styles from './button.module.scss'

//interface
interface IButton {
  variant?: 'outlined' | 'filled' | 'text' | 'icon'
  children?: string | ReactNode
  onClick?: (value: any) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

//component
export const ButtonComponent: FC<Readonly<IButton>> = ({
  variant = 'outlined',
  children,
  onClick,
  type = 'button',
}) => {
  //return
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${variant === 'filled' && styles.filled} ${variant === 'text' && styles.text} ${variant === 'icon' && styles.icon}`}
    >
      {children}
    </button>
  )
}
export default ButtonComponent
