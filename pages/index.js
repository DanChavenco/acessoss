import Head from 'next/head'

export default function Home() {
  return(
    <div className="container">
      <Head>
        <title>Sistema Acessoss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            
      <main>
        <h1>Sistema Acessoss</h1>
        <LoginCard/>
      </main>
      
      <footer>
        <a href="mailto:danc@vivaldi.net">Desenvolvido por DC</a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #fafafa;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
  </div>   
  )
}

function LoginCard() {
  return(
    <div className="card">
      <form>
        <table>
          <tr><h3>Login</h3></tr>
          <tr>
            <input type="text" placeholder="Usuário" name="username"/>
          </tr>
          <tr>
              <input type="password" placeholder="Senha" name="password"/>
          </tr>
          <tr>
            <input type="submit" value="Entrar"/>
          </tr>
        </table>
      </form>

      <style jsx>{`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            background-color: white;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
  
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
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
            background-color: #0070f3;
            color: white;
            border: none;
            cursor: pointer;
          }

          input[type=submit]:hover {
            background-color: #0060e3;
          }
      `}</style>
    </div>
  )
}