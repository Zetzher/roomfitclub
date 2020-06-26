import React, { Component } from 'react'
import "./stylesheets/index.css";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import Anonroute from "./components/Anonroute";
import PrivateRoute from "./components/Privateroute";
import Sidenav from './components/navbar/Sidenav';
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Embajador from "./pages/Embajador";
import Entrenador from "./pages/Entrenador";
import RetoSemanal from "./pages/RetoSemanal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ConfirmBooking from "./pages/ConfirmBooking";
import ReservaConfirmada from "./pages/ReservaConfirmada";
import ReservaCancelada from "./pages/ReservaCancelada";
import Perfil from "./pages/Perfil";
import ResumeBooking from "./pages/ResumeBooking";

class App extends Component {
  
    render() {
        return (
          <>
            <AuthProvider>
              <Sidenav />
                <Switch>
                  <Route exact={true} path="/" component={Homepage} />
                  <Route path="/about" component={About} />
                  <Route path="/embajador" component={Embajador} />
                  <Route path="/entrenadores" component={Entrenador} />
                  <Route path="/retosemanal" component={RetoSemanal} />
                  <Route path="/info-entrenamiento/" component={ConfirmBooking} />
                  <Route path="/info/:id" component={ResumeBooking} />
                  <PrivateRoute path="/reserva-confirmada" component={ReservaConfirmada} />
                  <PrivateRoute path="/reserva-cancelada" component={ReservaCancelada} />
                  <Anonroute path="/login" component={Login} />
                  <Anonroute path="/signup" component={Signup} />
                  <PrivateRoute path="/perfil" component={Perfil} />
                </Switch>
              </AuthProvider>
          </>
        )
    }
}

export default App
