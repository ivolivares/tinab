import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import WorkingOnIt from '/public/working-on-it.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Iván Olivares Rojas</title>
        <meta name="description" content="This is not a blog, yet." />
      </Head>

      <main className={styles.main}>
        <Image
        src={WorkingOnIt}
        alt="Trust me, I'm working on it"
        width={500}
        height={500} />
      </main>
    </div>
  )
}
