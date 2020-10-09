import React from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import '../../assets/style/global.css';
import Input from '../../components/input/index';
import Button from '../../components/button/index';

function Cadastro() {
  return (
    <div>
      <Header description="Faça o cadastro para o acesso"/>
        <div className="centro">
          <div className="cadastro">
            <h3>Cadastro</h3>
            <Input type="text" name="nome" label="Nome"/>
            <Input type="text" name="email" label="Email"/>
            <Input type="" name="permissao" label="Permissão"/>
            <Input type="password" name="senha" label="Senha"/>
            <Button value="Entrar"/>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Cadastro;