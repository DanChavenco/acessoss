import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import LoginButton from '../../components/Login/LoginButton'

export default function Acessoss() {
  const [ session, loading ] = useSession()
  const delay = ms => new Promise(res => setTimeout(res, ms));

  return (
    <div>
      <Layout title="Gerenciador de Projetos" session={session}>
        {!session && <>
          É necessário estar logado para acessar essa página. <br/>
          <div>Redirecionando... {
            WaitAndRedirectPage(3000, '/')
          }</div>
        </>}
        {session && session.user.role && !session.user.role.includes('acessoss') && <>
        Essa página só pode ser acessada por administradores da Acessoss. <br/>
          <div>Redirecionando... {
            WaitAndRedirectPage(3000, '/')
          }</div>
        </>}
        {session && session.user.role && session.user.role.includes('acessoss') && <>
        <button id="doSomething">Admin Only</button>
        </>}
      </Layout>
    </div>
  )
}

function WaitAndRedirectPage(time, url) {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    setTimeout(function(){router.push(url)}, time)
  }
}