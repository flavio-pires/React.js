import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/global.css';
import './style.css';
import {Link, useHistory} from 'react-router-dom';

interface HeaderProps {
  description: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  
  const [Usuario, setUsuario] = useState('');

  const refresh = () => {
    fetch('http://localhost:5000/api/Usuarios/BuscarPorId', {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token-filmes')
      }
    })
      .then(response => response.json())
      .then(dados => {
        setUsuario(dados.permissao);
      })
      .catch(erro => console.error(erro));
  }

  useEffect(() => {
    refresh();
  });

  let history = useHistory()

  const logout = () => {
    localStorage.removeItem('token-filmes');
    history.push('/')
  }

  const menu = () => {
    const token = localStorage.getItem('token-filmes');

    if (token === undefined || token === null) {
      return(
        <ul className="menu">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/login" className="link">Login</Link></li>
          <li><Link to="/cadastro" className="link">Cadastro</Link></li>
        </ul>
      )
    }
    else if(Usuario == 'Administrador'){ 
      return(
        <ul className="menu">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/perfil" className="link">Perfil</Link></li>
        <li><Link to="/filmes" className="link">Filmes</Link></li>
        <li><Link to="/genero" className="link">Gêneros</Link></li>
        <li><Link to="" onClick={event => {event.preventDefault(); logout()}}>Logout</Link></li>
      </ul>
      )
    }
    else{
      return (
        <div className="menu">
          <a><Link to="/" className="link">Home</Link></a>
          <a><Link to="/listarfilmes" className="link">Filmes</Link></a>
          <a><Link to='' onClick={(event) => {
            event.preventDefault();
            logout();
          }}>Logout</Link></a> <br />
        </div>
      )
    }
  }

  return (
    <div className="principal">
      <div className="header">
        <div className="align">
          <nav>
            <Link to="/"><img src={logo} alt="logo da coletânea"/></Link>
            {menu()}
          </nav>
          <h3>{props.description}</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;