'use client'
import moment, { Moment } from 'moment/moment'

import { FC, useEffect, useState } from 'react'

import { secondaryFont } from '@/app/fonts'

import styles from './countdown.module.scss'

//interface
interface ICountdown {
  targetDate: Moment
}

//component
export const CountdownComponent: FC<Readonly<ICountdown>> = ({ targetDate }) => {
  const [countdown, setCountdown] = useState<string>('')

  const updateCountdown = () => {
    const duration = moment.duration(moment(targetDate).diff(moment()))

    setCountdown(
      moment().isAfter(moment(targetDate))
        ? 'past'
        : moment.utc(duration.asMilliseconds()).format('DD-HH-mm-ss'),
    )
  }

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000)

    return () => clearInterval(countdownInterval)
  }, [targetDate])

  // return
  return (
    <div className={styles.countdown}>
      {countdown === 'past' ? (
        <p className={styles.countdown__past_text}>
          It seems your journey has already begun, <br /> have a good weather!
        </p>
      ) : (
        <div className={`${styles.countdown__clock} ${secondaryFont.className}`}>
          <div className={styles.countdown__clock_item}>
            <div className={styles.countdown__clock_value}>{countdown.slice(0, 2)}</div>
            <span>days</span>
          </div>

          <div className={styles.countdown__clock_item}>
            <div className={styles.countdown__clock_value}>{countdown.slice(3, 5)}</div>
            <span>hours</span>
          </div>

          <div className={styles.countdown__clock_item}>
            <div className={styles.countdown__clock_value}>{countdown.slice(6, 8)}</div>
            <span>minutes</span>
          </div>

          <div className={styles.countdown__clock_item}>
            <div className={styles.countdown__clock_value}>{countdown.slice(9, 11)}</div>
            <span>seconds</span>
          </div>
        </div>
      )}
    </div>
  )
}
export default CountdownComponent
