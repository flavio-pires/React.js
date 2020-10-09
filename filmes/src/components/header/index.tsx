import React from 'react';
import '../../assets/style/global.css';
import './style.css';
import logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';

interface HeaderProps{
  description: string;
}

const Header:React.FunctionComponent<HeaderProps> =(props) => {
  return (
    <div className="principal">
      <div className="header">
        <div className="align">
          <nav>
            <Link to="/"><img src={logo} alt="logo da coletanea"/></Link>
            <ul className="menu">
              <li><Link to="/" className="Link">Home</Link></li>
              <li><Link to="/login" className="link">Login</Link></li>
              <li><Link to="/cadastro" className="link">Cadastro</Link></li>
            </ul>
          </nav>
          <h3>{props.description}</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;