import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import RutaPrivada from './components/rutas/RutaPrivada';

import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/TareaState';
import AlertasState from './context/alertas/AlertasState';
import AuthState from './context/autenticacion/AuthState';

import tokenAuth from './config/tokenAuth';



const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {

  console.log(process.env.REACT_APP_URL);

  return (
    <ProyectoState>
      <TareaState>
        <AlertasState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertasState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
