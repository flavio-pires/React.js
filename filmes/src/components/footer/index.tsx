import React from 'react';
import '../../assets/style/global.css';
import './style.css';
import logo from '../../assets/images/logonegativo.png';

function Footer() {
  return (
    <div className="principal">
      <div className="rodape">
        <footer>
          <img src={logo} alt="logo da coletanea"/>
          <hr/>
          <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
          <p>Call us now toll free: (800)2345-6789</p>
          <p>Customer support: support@demolink.org</p>
          <p>Skype: sample-username</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;