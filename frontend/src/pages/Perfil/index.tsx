import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import '../../assets/global.css'
import './style.css'

function Perfil() {

  const [idUsuario, setIdUsuario] = useState(0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [permissao, setPermissao] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    listar();
  }, [])

  const listar = () => {
    fetch('http://localhost:5000/api/usuarios',{
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(response => response.json())
    .then(dados => {
      setUsuarios(dados);
    })
    .catch(erro => console.error(erro))
  }

  const update = (id:number) => {
    fetch('http://localhost:5000/api/usuarios/' + id, {
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(response => response.json())
    .then(dados => {
      setIdUsuario(dados.idUsuario);
      setIdUsuario(dados.nome);
      setIdUsuario(dados.email);
      setIdUsuario(dados.senha);
      setIdUsuario(dados.permissao);
    })
    .catch(erro => console.error(erro))
  }

  const salvar = () => {
    const form = {
      nome: nome,
      email: email,
      senha: senha,
      permissao: permissao,
    };

    fetch('http://localhost:5000/api/usuarios/' + idUsuario, {
      method: 'PUT',
      body:JSON.stringify(form),
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(() => {
      setIdUsuario(0);
      setNome('');
      setEmail('');
      setSenha('');
      setPermissao('');
      listar()
    })
    .catch(erro => console.error(erro))
  }

  return (
    <div className="Perfil">
      <Header description="Edite seu perfil"/>
      <div className="centro">
        <div className="perfil">
          <h1>Perfil</h1>
          <form onSubmit={ event => {
            event.preventDefault();
            salvar();
          }}>
            <Input type="text" label="Nome" name="nome" value={nome} onChange={e => setNome(e.target.value)}/>
            <Input type="email" label="E-mail" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
              <label>Permissão</label> 
              <br/>
              <select id="permissao" value={permissao} onChange={e => setPermissao(e.target.value)}>
                  <option value="" disabled selected>Selecione</option>
                  <option value="adm">Administrador</option>
                  <option value="usuario">Usuário</option>
              </select>
            <Input type="password" label="Senha" name="senha" value={senha} onChange={e => setSenha(e.target.value)}/>
            <Button value="Enviar"/>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Perfil;