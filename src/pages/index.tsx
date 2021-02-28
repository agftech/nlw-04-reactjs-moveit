import Head from 'next/head'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'

import { CountdownProvider } from '../contexts/CountdownContext'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <CountdownProvider>
      <main className={styles.container}>
        <Head>
          <title>Home | move.it</title>
        </Head>

        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </main>
    </CountdownProvider>
  )
}
