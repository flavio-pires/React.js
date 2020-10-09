import React from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import '../../assets/style/global.css';
import Input from '../../components/input/index';
import Button from '../../components/button/index';

function Login() {
  return (
    <div>
      <Header description="Faça o login e acesse a Coletanea"/>
        <div className="centro">
          <div className="login">
            <h3>Login</h3>
            <Input type="text" name="email" label="Email"/>
            <Input type="password" name="senha" label="Senha"/>
            <Button value="Entrar"/>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Login;