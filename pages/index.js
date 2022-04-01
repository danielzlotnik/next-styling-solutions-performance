import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS styling solutions benchmark</title>
        <meta
          name="description"
          content="SSR performance benchmarks for CSS modules VS styled-components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> styling solutions benchmarks
        </h1>

        <div className={styles.grid}>
          <a href="/styled-components" className={styles.card}>
            <h2>Styled components &rarr;</h2>
          </a>

          <a href="/css-modules" className={styles.card}>
            <h2>CSS modules &rarr;</h2>
          </a>

          <a href="/comparison?count=30" className={styles.card}>
            <h2>Run performance tests &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
