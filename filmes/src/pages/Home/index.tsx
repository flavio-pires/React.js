import React from 'react';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import '../../assets/style/global.css';
import filmes from '../../assets/images/cinema.png';
import categoria from '../../assets/images/theater.png';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header description="Conheça nossa Coletanea"/>
      <div className="centro">
        <div className="home">
          <div className="titulo">
            <h1>Monte sua coletânea de filmes...</h1>
          </div>
          <div className="texto">
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing, elit nulla libero blandit hendrerit tortor</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit nulla libero blandit hendrerit tortor nostra, 
              facilisi ridiculus montes vehicula aliquet. Velit quisque mattis nulla etiam nisl pellentesque, finibus 
              uam lobortis aenean eros, sapien habitant ipsum montes et. Libero scelerisque dui porta sagittis molestie 
              montes, convallis urna pulvinar enim efficitur fames, laoreet posuere netus sem donec.
              </p>
          </div>
          <div className="conteudo">
            <div className="filmes">
              <Link to="/"><img src={filmes} alt="logo de filmes"/></Link>
                <h3>Filmes</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit nulla libero blandit hendrerit tortor nostra, 
                  facilisi ridiculus montes vehicula aliquet. Velit quisque mattis nulla etiam nisl pellentesque, finibus 
                  uam lobortis aenean eros, sapien habitant ipsum montes et. Libero scelerisque dui porta sagittis molestie 
                  montes, convallis urna pulvinar enim efficitur fames, laoreet posuere netus sem donec.
                </p>
            </div>
            <div className="categoria">
              <Link to="/"><img src={categoria} alt="logo de categoria"/></Link>
                <h3>Categoria</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit nulla libero blandit hendrerit tortor nostra, 
                  facilisi ridiculus montes vehicula aliquet. Velit quisque mattis nulla etiam nisl pellentesque, finibus 
                  uam lobortis aenean eros, sapien habitant ipsum montes et. Libero scelerisque dui porta sagittis molestie 
                  montes, convallis urna pulvinar enim efficitur fames, laoreet posuere netus sem donec.
                </p>
            </div>
          </div>
        </div>
      </div> 
      <Footer/>
    </div>
  );
}

export default Home;
