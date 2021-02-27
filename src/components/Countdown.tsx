import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {

  const { 
    isActive, 
    hasFinished,
    resetCountdown, 
    startCountdown, 
    minutes, 
    seconds
  } = useContext(CountdownContext);
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button type="button" disabled className={styles.countdownButton}>
          Finish cycle
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              onClick={resetCountdown}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Cancel cycle
            </button>
          ) : (
            <button
              type="button"
              onClick={startCountdown}
              className={styles.countdownButton}
            >
              Start a cycle
            </button>
          )}
        </>
      )}
    </div>
  )
}
