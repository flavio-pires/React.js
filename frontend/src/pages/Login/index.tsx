import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css'

function Login() {

  let history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    const login ={
      email: email,
      senha: senha
    }
  

    fetch('http://localhost:5000/api/conta/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'content-type': 'application/json'
      },
    })

    .then (response => response.json())
    .then (dados => {
      if (dados.token !== undefined) {
        localStorage.setItem('token-filmes', dados.token)
        history.push('/')
      }
      else{
        alert('Senha ou e-mail inválido');
      }
    })
    .catch(erro => console.error(erro))
  }

  return (
    <div>
      <Header description="Faça o Login e acesse a coletânea"/>
      <div className="centro">
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={ event => {
            event.preventDefault();
            login();
          }}>
            <Input type="email" label="E-mail" name="email" onChange={e => setEmail(e.target.value)}/>
            <Input type="password" label="Senha" name="senha" onChange={e => setSenha(e.target.value)}/>
            <Button value="Enviar"/>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;