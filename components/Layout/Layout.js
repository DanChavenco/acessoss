import Head from 'next/head';
import styles from './Layout.module.css';

import LoginButton from '../Login/LoginButton'

const Layout = ({children, title = '', session}) => {
  return(
  <div className={styles.container}>
    <Head>
      <title>Sistema Acessoss - {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img className={styles.headerLogo} src="./logoAcessoss.png"></img>
        <LoginButton />
      </div>
      <div className={styles.headerDetail}></div>
    </header>

    <main className={styles.main}>
      {children}
    </main>

    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        2021 © DanC
      </div>
    </footer>
  </div>
  )
};

export default Layout;