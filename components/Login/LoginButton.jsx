import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './LoginButton.module.css';

const LoginButton = () => {
  const [ session, loading ] = useSession()

  if (session) {
    return (
      <button className={styles.logoutBtn} onClick={handleLogout}>{session.user.name}</button>
    )
  } else {
    return (
      <button className={styles.loginBtn} onClick={handleLogin}>Entrar</button>
    )
  }

  function handleLogin() {
    signIn('credentials', { username: 'daniel', password: 'dpassword', callbackUrl: 'http://localhost:3000/' })
  }

  function handleLogout() {
    signOut()
  }
}

export default LoginButton