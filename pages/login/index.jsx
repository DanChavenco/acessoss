import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import LoginLayout from '../../components/Layout/LoginLayout'
import LoginButton from '../../components/Login/LoginButton'
import LoginCard from '../../components/Login/LoginCard'

export default function Acessoss() {
  const [ session, loading ] = useSession()
  const delay = ms => new Promise(res => setTimeout(res, ms));

  return (
    <div>
      <LoginLayout title="Gerenciador de Projetos" session={session}>
        {!session && <>
          <LoginCard />
        </>}
        {session && session.user.role && !session.user.role.includes('acessoss') && <>
          {WaitAndRedirectPage(0, '/acessoss')}
        </>}
        {session && session.user.role && session.user.role.includes('acessoss') && <>
          {WaitAndRedirectPage(0, '/')}
        </>}
      </LoginLayout>
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

/*
function LoginCard() {
  return(
    <div>
      <div className="cardHeader">
        <img src="./logoAcessoss.png"></img>
        <h2>Plataforma Acessoss</h2>
      </div>
      <div className="card">
        <form method="post">
          <table>
            <tr><h3>Login</h3></tr>
            <tr>
              <input type="username" placeholder="Usuário" name="username"/>
            </tr>
            <tr>
                <input type="password" placeholder="Senha" name="password"/>
            </tr>
            <tr>
              <input type="submit" value="Entrar" onClick={console.log("foi")}/>
            </tr>
          </table>
        </form>

        <style jsx>{`
            .card {
              display: flex;
              flex-direction: column;
              margin: 1rem;
              flex-basis: 45%;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              background-color: white;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              max-width: 300px;
              height: 222px;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
            }

            .card h3 {
              margin: 0;
              font-size: 1.2rem;
              line-height: 1.5;
              font-weight: bold;
              margin: 0px 0px 10px 0px;
            }
    
            .card p {
              margin: 0;
              font-size: 1.0rem;
              line-height: 1.5;
              font-weight: bold;
            }
            
            table {
              width: 100%;
            }

            tr {
              height: 40px;
              margin: 10px 0px 10px 0px;
            }
            
            table td {
              padding: 50px;
              vertical-align: bottom;
            }

            input {
              height: 30px;
              width: 100%;
              border-radius: 4px;
              border: 1px;
              border-style: solid;
              border-color: #dddddd;
            }

            input[type=submit] {
              width: 100%;
              background-color: var(--primary-color);
              margin-top: 10px;
              color: white;
              border: none;
              outline: none;
              cursor: pointer;
            }

            input[type=username],
            input[type=password] {
              font-size: 0.8rem;
              padding: 10px;
            }
            
            input[type=submit]:hover {
              background-color: rgb(0, 100, 20);
            }
        `}</style>
      </div>
    </div>
  )
}
*/