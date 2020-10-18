import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css'

function Cadastro() {
  return (
    <div>
      <Header description="Faça o Cadastro para o acesso"/>
      <div className="centro">
        <div className="login">
          <h1>Cadastro</h1>
          <Input type="text" label="Nome" name="nome"/>
          <Input type="email" label="E-mail" name="email"/>
            <label>Permissão</label> 
            <br/>
            <select id="permissao">
                <option value="" disabled selected>Selecione</option>
                <option value="adm">Administrador</option>
                <option value="usuario">Usuário</option>
            </select>
          <Input type="password" label="Senha" name="senha"/>
          <Button value="Enviar"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Cadastro;