import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Logado from './logado';
import Logado2 from './logado2';
/* */
function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/logado2" component={Logado2}/>
            <Route path="/logado" component={Logado}/>
            
            
        </BrowserRouter>
    )
}
export default Routes;