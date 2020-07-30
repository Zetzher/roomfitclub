var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import "./stylesheets/index.css";
import { Switch, Route } from "react-router-dom";
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

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        AuthProvider,
        null,
        React.createElement(Sidenav, null),
        React.createElement(
          Switch,
          null,
          React.createElement(Route, { exact: true, path: "/", component: Homepage }),
          React.createElement(Route, { path: "/about", component: About }),
          React.createElement(Route, { path: "/embajador", component: Embajador }),
          React.createElement(Route, { path: "/entrenadores", component: Entrenador }),
          React.createElement(Route, { path: "/retosemanal", component: RetoSemanal }),
          React.createElement(Route, { path: "/info-entrenamiento/", component: ConfirmBooking }),
          React.createElement(Route, { path: "/info/:id", component: ResumeBooking }),
          React.createElement(PrivateRoute, { path: "/reserva-confirmada", component: ReservaConfirmada }),
          React.createElement(PrivateRoute, { path: "/reserva-cancelada", component: ReservaCancelada }),
          React.createElement(Anonroute, { path: "/login", component: Login }),
          React.createElement(Anonroute, { path: "/signup", component: Signup }),
          React.createElement(PrivateRoute, { path: "/perfil", component: Perfil })
        )
      );
    }
  }]);

  return App;
}(Component);

export default App;