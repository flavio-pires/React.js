import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/global.css';
import './style.css';
import {Link, useHistory} from 'react-router-dom';

// description = props obrigatoria
// text = props não obrigatoria (é a ?)
// children = tudo oq é escrito dentro das tags do header na página
interface HeaderProps {
  description: string;
  // text?: string
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {

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
    else{
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
          {/* {props.children}
          {props.text && <p>{props.text}</p>} */}
        </div>
      </div>
    </div>
  );
}

export default Header;