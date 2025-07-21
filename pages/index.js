import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>THIRAWAT Portfolio</title>
        <meta name="description" content="Portfolio ของ ถิรวัฒน์ เตียนเนตร" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src="/logo.png" alt="Thirawat Logo" className={styles.logoTop} />
          <nav className={styles.nav}>
            <a href="#" className={styles.navItem}>หน้าแรก</a>
            <a href="#" className={styles.navItem}>ประวัติส่วนตัว</a>
            <a href="#" className={styles.navItem}>ผลงาน</a>
          </nav>
        </header>

        <main className={styles.main}>
          <img src="/logo.png" alt="Thirawat Main Logo" className={styles.mainLogo} />
          <p className={styles.intro}>สวัสดีครับ ถิรวัฒน์ เตียนเนตร นี่คือเว็บ Portfolio ของผมเองหรือ เอาไว้โชว์ผลงานของผมนะครับ</p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>ติดต่อเรา</button>
            <button className={styles.secondaryButton}>ดูผลงานของผม</button>
          </div>
        </main>
      </div>
    </>
  )
}
