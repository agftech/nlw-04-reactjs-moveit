import Head from 'next/head';

import styles from "../styles/pages/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home | move.it</title>
            </Head>
            Hello NLW#4.0 - Move.it App with next.js
        </div>
    )
}
