var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import auth from "./auth-service"; // Importamos funciones para llamadas axios a la API

var _React$createContext = React.createContext(),
    Consumer = _React$createContext.Consumer,
    Provider = _React$createContext.Provider;

// HOC para crear Consumer
// el componente withAuth recibe un componente como argumento y nos devuelve un componente con el mismo componente dentro de un <Consumer /> con las propiedades user e isLoggedin (state), y los métodos login, signup y logout (this)


var withAuth = function withAuth(WrappedComponent) {
  return function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(
          Consumer,
          null,
          function (_ref) {
            var login = _ref.login,
                signup = _ref.signup,
                user = _ref.user,
                logout = _ref.logout,
                isLoggedin = _ref.isLoggedin;

            return React.createElement(WrappedComponent, Object.assign({
              login: login,
              signup: signup,
              user: user,
              logout: logout,
              isLoggedin: isLoggedin
            }, _this2.props));
          }
        );
      }
    }]);

    return _class;
  }(React.Component);
};

// Provider

var AuthProvider = function (_React$Component2) {
  _inherits(AuthProvider, _React$Component2);

  function AuthProvider() {
    var _ref2;

    var _temp, _this3, _ret;

    _classCallCheck(this, AuthProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref2 = AuthProvider.__proto__ || Object.getPrototypeOf(AuthProvider)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = { isLoggedin: false, user: null, isLoading: true }, _this3.signup = function (user) {
      var email = user.email,
          password = user.password,
          username = user.username,
          nombre = user.nombre,
          apellidos = user.apellidos,
          provincia = user.provincia,
          edad = user.edad;


      auth.signup({ email: email, password: password, username: username, nombre: nombre, apellidos: apellidos, provincia: provincia, edad: edad }).then(function (user) {
        _this3.setState({ isLoggedin: true, user: user });
      }).catch(function (_ref3) {
        var response = _ref3.response;
        return _this3.setState({ message: response.data.statusMessage });
      });
    }, _this3.login = function (user) {
      var email = user.email,
          password = user.password;


      auth.login({ email: email, password: password }).then(function (user) {
        return _this3.setState({ isLoggedin: true, user: user });
      }).catch(function (err) {
        return console.log(err);
      });
    }, _this3.logout = function () {
      auth.logout().then(function () {
        return _this3.setState({ isLoggedin: false, user: null });
      }).catch(function (err) {
        return console.log(err);
      });
    }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  _createClass(AuthProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      auth.users().then(function (user) {
        return _this4.setState({ isLoggedin: true, user: user, isLoading: false });
      }).catch(function (err) {
        return _this4.setState({ isLoggedin: false, user: null, isLoading: false });
      });
    }
  }, {
    key: "render",
    value: function render() {
      // destructuramos isLoading, isLoggedin y user de this.state y login, logout y signup de this
      var _state = this.state,
          isLoading = _state.isLoading,
          isLoggedin = _state.isLoggedin,
          user = _state.user;
      var login = this.login,
          logout = this.logout,
          signup = this.signup;


      return isLoading ?
      // si está loading, devuelve un <div> y sino devuelve un componente <Provider> con un objeto con los valores: { isLoggedin, user, login, logout, signup}
      // el objeto pasado en la prop value estará disponible para todos los componentes <Consumer>
      React.createElement(
        "div",
        null,
        "Loading"
      ) : React.createElement(
        Provider,
        { value: { isLoggedin: isLoggedin, user: user, login: login, logout: logout, signup: signup } },
        this.props.children
      ); /*<Provider> "value={}" datos que estarán disponibles para todos los componentes <Consumer> */
    }
  }]);

  return AuthProvider;
}(React.Component);

export { Consumer, withAuth }; //  <--	RECUERDA EXPORTAR  ! ! !

export default AuthProvider; //	<--	RECUERDA EXPORTAR  ! ! !