import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Paginas
import Landingpage from './Views/page/Landingpage'
import Notfound from './Views/NotFound/NotFound'
import Home from './Views/home/Home'
import SelecionarPaciente from './Views/Agendamento/SelecionarPaciente';
import ConfirmarAgendamento from './Views/confirmarAgendamento/ConfirmarAgendamento';
import Sucesso from './Views/sucesso'
import Login from './Views/login/Login'
import Cadastro from './Views/login/Cadastro'
import Detalhes from './Views/detalhar/index'
import Perfil from './Views/perfil/perfil'
const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path='/sucesso/detalhes' component={Detalhes}></Route>
            <Route exact path='/perfil' component={Perfil}></Route>
            <Route exact path="/agendamento" component={Landingpage}></Route>
            <Route path="/agendamento/paciente" component={SelecionarPaciente} ></Route>
            <Route path="/agendamento/confirmar" component={ConfirmarAgendamento} ></Route>
            <Route exact path="/sucesso" component={Sucesso} ></Route>
            <Route path="/login" component={Login} ></Route>
            <Route path="/cadastro" component={Cadastro}></Route>
            <Route path="*" component={Notfound}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;


