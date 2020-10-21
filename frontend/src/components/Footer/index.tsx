import React from 'react';
import '../../assets/global.css';
import './style.css';
import logo from '../../assets/images/logonegativo.png';

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Logotipo de Filmes"/>
      <hr/>
      <div>
        <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
        <br/>
        <p>Call us now toll free: (800)2345-6789</p>
        <br/>
        <p>Customer support: support@demolink.org</p>
        <br/>
        <p>Skype: sample-username</p>
      </div>
    </div>
  );
}

export default Footer;