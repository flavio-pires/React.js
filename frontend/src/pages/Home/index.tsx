import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import cinema from '../../assets/images/cinema.png';
import theater from '../../assets/images/theater.png';
import '../../assets/global.css';
import './style.css';

function Home() {
  return (
    <div className="Home">
      <Header description="Conheça nossa coletânea"/>
      <div className="centro">
        <div className="home">
          <h1>Monte sua coletânea de filmes...</h1>
          <div className="texto">
            <h2>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</h2>
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod 
              tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit.
            </p>
          </div>

          <div className="conteudo">
            <div className="filme">
              <img id="filme" src={cinema} alt="icone de filme"/>
              <div className="text">
                <h2>Filmes</h2>
                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="categoria">
              <img id="theater" src={theater} alt="icone de categoria"/>
              <div className="text">
                <h2>Categoria</h2>
                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;