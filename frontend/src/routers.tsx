import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';
import Perfil from './pages/Perfil/index';
import Filmes from './pages/Filmes/index';
import Genero from './pages/Genero/index';
import ListarFilmes from './pages/ListarFilmes/index';

function Routers() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/cadastro" component={Cadastro}/>
      <Route path="/perfil" component={Perfil}/>
      <Route path="/filmes" component={Filmes}/>
      <Route path="/genero" component={Genero}/>
      <Route path="/listarfilmes" component={ListarFilmes}/>
    </BrowserRouter>
  );
}

export default Routers;