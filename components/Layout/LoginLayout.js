import Head from 'next/head';
import styles from './LoginLayout.module.css';

const LoginLayout = ({children, title = '', session}) => {
  return(
  <div className={styles.container}>
    <Head>
      <title>Sistema Acessoss - {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      {children}
    </main>

    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        2021 © DanC + Acessoss
      </div>
    </footer>
  </div>
  )
};

export default LoginLayout;