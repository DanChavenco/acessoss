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
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
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
                        <label>
                            <p>Usuário</p>
                            <input type="text" name="username"/>
                        </label>
                        </tr>
                    <tr>
                        <input type="submit" value="Entrar" />
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

                input {
                    height: 30px;
                }

                type {
                    color: red;
                }
            `}</style>
        </div>
    )
}




/*

      <style jsx>{`


        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }



        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      
    </div>
  )
}
*/