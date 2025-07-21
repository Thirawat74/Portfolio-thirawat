import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>THIRAWAT Portfolio</title>
        <meta name="description" content="Portfolio ของ ถิรวัฒน์ เตียนเนตร" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" alt="Thirawat Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        <h1 className={styles.title}>
          สวัสดีครับ ถิรวัฒน์ เตียนเนตร
        </h1>
        <p className={styles.description}>
          นี่คือเว็บ Portfolio ของผมเองหรือ เอาไว้โชว์ผลงานของผมนะครับ
        </p>
        <div className={styles.buttons}>
          <button>ติดต่อเรา</button>
          <button>ดูผลงานของผม</button>
        </div>
      </main>
    </div>
  )
}
