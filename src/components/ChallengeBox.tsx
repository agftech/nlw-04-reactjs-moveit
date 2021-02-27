import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext)
  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body | eye" />
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Failed
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finish a cycle to receive a challenge</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Advance a level by completing challenges
          </p>
        </div>
      )}
    </div>
  )
}
