import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  const handleOnBannerBtnClick = () =>{
    console.log("Banner button clicked!!")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Find your nearby coffee shops!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage}>
         <Image src="/static/coffee.png" alt="coffee" width={800} height={380} />
        </div>
        <Card name="DarkHorse Coffee" imgUrl="/static/coffee.png" href="/coffee-store/darkhorse-coffee" />
      </main>

      <footer className={styles.footer}>
      rodotechnology &copy; 2022  
      </footer>
    </div>
  )
}
