import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';

function Routers(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
        </BrowserRouter>
    );
}

export default Routers;