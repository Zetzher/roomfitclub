var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import axios from "axios";

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);

    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true
    });
  }

  _createClass(Auth, [{
    key: "signup",
    value: function signup(_ref) {
      var email = _ref.email,
          password = _ref.password,
          nombre = _ref.nombre,
          apellidos = _ref.apellidos,
          username = _ref.username,
          provincia = _ref.provincia,
          edad = _ref.edad;

      return this.auth.post("/signup", { email: email, password: password, nombre: nombre, apellidos: apellidos, username: username, provincia: provincia, edad: edad }).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      });
    }
  }, {
    key: "login",
    value: function login(_ref3) {
      var email = _ref3.email,
          password = _ref3.password;

      return this.auth.post("/login", { email: email, password: password }).then(function (_ref4) {
        var data = _ref4.data;
        return data;
      });
    }
  }, {
    key: "users",
    value: function users() {
      return this.auth.get("/users").then(function (_ref5) {
        var data = _ref5.data;
        return data;
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      return this.auth.post("/logout", {}).then(function (_ref6) {
        var data = _ref6.data;
        return data;
      });
    }
  }, {
    key: "default",
    value: function _default() {
      return this.auth.get("/").then(function (_ref7) {
        var data = _ref7.data;
        return data;
      });
    }
  }]);

  return Auth;
}();

var axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;