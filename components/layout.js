import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';

const name = 'Mark Brooks';
const shortBio = 'Hi, I am Mark, A software Engineer out of Colorado';
export const siteTitle = 'Marks Blog';

export default function Layout({ children, home}) {
  return (
    <div className={styles.container}>
    <Navbar />
      <Head>
        <link rel="icon" href="/images/profile.jpg" />
        <meta
          name="description"
          content="The personal blog for Mark Brooks a developer out of Colorado."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h2 className={utilStyles.headingMd}>{shortBio}</h2>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
