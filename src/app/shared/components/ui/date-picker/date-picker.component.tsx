'use client'

import moment from 'moment/moment'

import { FC, useEffect, useRef, useState } from 'react'

import { ButtonComponent, InputComponent } from '@/app/shared/components'
import { IconArrowDown, IconCalendar } from '@/app/shared/icons'

import styles from './date-picker.module.scss'

interface IDatePicker {
  value: any
  onChange: (value: any) => void
  errorMessage?: string
  label?: string
  placeholder?: string
}

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
})

// component
const DatePicker: FC<IDatePicker> = ({ value, onChange, errorMessage, label, placeholder }) => {
  const pickerRef = useRef<HTMLDivElement>(null)

  const [currentDate, setCurrentDate] = useState(moment())
  const [activeOptions, setActiveOptions] = useState(false)

  // const [selectedDate, setsSelectedDate] = useState<Moment | null>(null)

  const firstDayOfMonth = currentDate.clone().startOf('month')

  const daysOfMonth = Array.from({ length: firstDayOfMonth.daysInMonth() }, (_, i) => {
    const day = firstDayOfMonth.clone().add(i, 'days')
    const weekNumber = day.weekday()
    return { day, weekNumber }
  })

  const daysOfWeek = moment.weekdays(true)

  const changePeriod = (amount: number, period: 'month' | 'year') => {
    setCurrentDate(currentDate.clone().add(amount, period))
  }

  const handlePickDate = (e: any) => {
    onChange(moment(e.target.value))
  }

  const closeOptions = (e: string) => {
    if (e === 'Escape' && activeOptions) {
      setActiveOptions(false)
    }
  }

  // return
  return (
    <div onKeyDown={(event) => closeOptions(event.key)} className={styles.date_picker}>
      <p className={styles.date_picker__label}>{label}</p>

      <div
        className={`${styles.date_picker__field} ${value && styles.filled} ${activeOptions && styles.opened}`}
        ref={pickerRef}
        onClick={() => setActiveOptions(!activeOptions)}
      >
        <p className={styles.date_picker__selectedItem}>
          {value ? value.format('DD.MM.YYYY') : placeholder}
        </p>

        <div className={`${styles.date_picker__icon} ${activeOptions && styles.opened}`}>
          <IconCalendar />
        </div>
      </div>

      {errorMessage && <p className={styles.date_picker__error}>{errorMessage}</p>}

      {activeOptions && (
        <div onClick={(e) => e.stopPropagation()} className={styles.date_picker__dropdown}>
          <div className={styles.date_picker__actions_top}>
            <div className={styles.date_picker__period_select}>
              <button
                type='button'
                onClick={(e) => {
                  e.stopPropagation()
                  changePeriod(-1, 'month')
                }}
                className={`${styles.date_picker__arrow} ${styles.arrow_prev}`}
              >
                <IconArrowDown />
              </button>

              <p>{currentDate.format('MMMM')}</p>

              <button
                type='button'
                onClick={(e) => {
                  e.stopPropagation()
                  changePeriod(-1, 'month')
                }}
                className={`${styles.date_picker__arrow} ${styles.arrow_next}`}
              >
                <IconArrowDown />
              </button>
            </div>

            <div className={styles.date_picker__period_select}>
              <button
                type='button'
                onClick={() => changePeriod(-1, 'year')}
                className={`${styles.date_picker__arrow} ${styles.arrow_prev}`}
              >
                <IconArrowDown />
              </button>

              <p>{currentDate.format('YYYY')}</p>

              <button
                type='button'
                onClick={() => changePeriod(1, 'year')}
                className={`${styles.date_picker__arrow} ${styles.arrow_next}`}
              >
                <IconArrowDown />
              </button>
            </div>
          </div>

          <div className={styles.date_picker__calendar}>
            <div className={styles.date_picker__week_days}>
              {daysOfWeek.map((dayOfWeek) => (
                <div
                  key={dayOfWeek}
                  className={`${styles.date_picker__day_of_week} ${
                    moment().format('ddd') === dayOfWeek ? styles.active : ''
                  }`}
                >
                  {dayOfWeek.slice(0, 1)}
                </div>
              ))}
            </div>

            {daysOfMonth?.map(({ day, weekNumber }) => (
              <button
                type='button'
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  handlePickDate({ target: { value: day.format('YYYY-MM-DD') } })
                }}
                key={day.format('YYYY-MM-DD')}
                className={`${styles.date_picker__day}
                   ${moment(value)?.isSame(day, 'day') && styles.selected}
                   ${moment().isSame(day, 'day') && styles.today}
                   ${moment(day).isBefore(moment(), 'day') && styles.disabled}
                   `}
                style={{ gridColumn: `${weekNumber + 1}/${weekNumber + 2}` }}
              >
                {day.format('DD')}
              </button>
            ))}
          </div>

          <div className={styles.date_picker__actions_bottom}>
            <ButtonComponent onClick={() => setActiveOptions(false)}>Cancel</ButtonComponent>

            <ButtonComponent onClick={() => setActiveOptions(false)} variant={'filled'}>
              Select
            </ButtonComponent>
          </div>
        </div>
      )}
    </div>
  )
}

export default DatePicker
