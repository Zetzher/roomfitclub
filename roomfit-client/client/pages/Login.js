var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';

var loginSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.handleFormSubmit = function (event) {
      var isLoggedin = _this.props.isLoggedin;
      var email = event.email,
          password = event.password;

      _this.props.login({ email: email, password: password });
      if (isLoggedin === true) {
        _this.props.history.push("/");
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "login-form" },
        React.createElement(
          "h1",
          null,
          "Iniciar sesi\xF3n"
        ),
        React.createElement(
          Form,
          { schema: loginSchema,
            onSubmit: function onSubmit(formulario) {
              return _this2.handleFormSubmit(formulario);
            },
            onError: function onError(errors, data) {
              return console.log('error', errors, data);
            } },
          React.createElement(TextField, {
            name: "email",
            label: "Email",
            placeholder: "Escribe aqu\xED tu email"
          }),
          React.createElement(TextField, {
            type: "password",
            name: "password",
            label: "Password",
            placeholder: "********"
          }),
          React.createElement(SubmitField, { value: "Submit" })
        ),
        React.createElement(
          "div",
          { className: "registerlink" },
          React.createElement(
            "label",
            null,
            "\xBFQuieres registrarte?"
          ),
          React.createElement(
            Link,
            { to: "/signup" },
            "Signup"
          )
        )
      );
    }
  }]);

  return Login;
}(Component);

export default withAuth(Login);