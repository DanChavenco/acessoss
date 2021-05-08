import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ session, loading ] = useSession()

  return (
    <div>
      <Layout title="Home">
        {!session && (<>
          Not signed in
        </>)}
        {session && (<>
          Signed in as {session.user.email} in proj {session.user.project}.<br/>
          User role: {session.user.role} <br/>
        </>)}
        {session && session.user.role && session.user.role.includes('acessoss') && <>
        {RedirectPage('acessoss')}
        <button id="doSomething">Admin Only</button>
        </>}
        {loading && (
          <div>
            Carregando...
          </div>
        )}
        <div>
          o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/>
          o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/> o<br/>
        </div>
      </Layout>
    </div>
  )
}

function RedirectPage(url) {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push(url)
  }
}