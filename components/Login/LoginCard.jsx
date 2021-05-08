import React, { useState } from 'react'
import axios from 'axios'
import styles from './LoginCard.module.css'

export default function LoginCard() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault() //para nao recarregar pagina
    
    if (!username || !password) {
      console.log("preencha os campos")
      return;
    }
    
    axios.get('/api/user', {
      params: {
        username: username,
        password: password
      }
    }).then(function (response){
      console.log("Resposta:", response)
    }).catch(function (error) {
      console.log(error);
    })
  }

  return(
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <img src="./logoAcessoss.png"></img>
        <h2>Plataforma Acessoss</h2>
      </div>
      <div className={styles.cardForm}>
        <form method="post" onSubmit={handleSubmit}>
          <table>
            <tr><h3>Login</h3></tr>
            <tr>
              <input 
                type="username"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
                placeholder="Usuário" 
                name="username"/>
            </tr>
            <tr>
              <input 
                type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                placeholder="Senha" 
                name="password"/>
            </tr>
            <tr>
              <input 
                type="submit" 
                value="Entrar"/>
            </tr>
          </table>
        </form>
      </div>
    </div>
  )
}