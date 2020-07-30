import _regeneratorRuntime from "babel-runtime/regenerator";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { Form, TextField, SubmitField, NumberField } from 'react-components-form';
import Schema from 'form-schema-validation';

var min = function min(minLength, message) {
  return {
    validator: function validator(value) {
      return value.length > minLength;
    },
    errorMessage: message
  };
};

var loginSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    validators: [min(6, 'La contraseña debe contener más de 6 carácteres')]
  },
  nombre: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  provincia: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  }
});

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.handleFormSubmit = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
        var email, password, username, nombre, apellidos, provincia, edad;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = event.email, password = event.password, username = event.username, nombre = event.nombre, apellidos = event.apellidos, provincia = event.provincia, edad = event.edad;
                _context.next = 3;
                return _this.props.signup({ email: email, password: password, username: username, nombre: nombre, apellidos: apellidos, provincia: provincia, edad: edad });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "register-form" },
        React.createElement(
          "h1",
          null,
          "Reg\xEDstrate"
        ),
        React.createElement(
          Form,
          { schema: loginSchema,
            onSubmit: function onSubmit(formulario) {
              return _this3.handleFormSubmit(formulario);
            },
            onError: function onError(errors, data) {
              return console.log('error', errors, data);
            } },
          React.createElement(
            "div",
            { className: "text-fields" },
            React.createElement(
              "div",
              { className: "container-textfields" },
              React.createElement(
                "label",
                null,
                "Nombre"
              ),
              React.createElement(TextField, {
                name: "nombre",
                placeholder: "Tu nombre",
                className: "input-textfield"
              })
            ),
            React.createElement(
              "div",
              { className: "container-textfields" },
              React.createElement(
                "label",
                null,
                "Apellidos"
              ),
              React.createElement(TextField, {
                name: "apellidos",
                placeholder: "Tus apellidos",
                className: "input-textfield"
              })
            ),
            React.createElement(
              "div",
              { className: "container-textfields" },
              React.createElement(
                "label",
                null,
                "Provincia"
              ),
              React.createElement(TextField, {
                name: "provincia",
                placeholder: "Tu provincia",
                className: "input-textfield"
              })
            ),
            React.createElement(
              "div",
              { className: "container-textfields" },
              React.createElement(
                "label",
                null,
                "Edad"
              ),
              React.createElement(NumberField, {
                name: "edad",
                placeholder: "24",
                className: "input-textfield"
              })
            ),
            React.createElement(
              "div",
              { className: "container-textfields" },
              React.createElement(
                "label",
                null,
                "Email"
              ),
              React.createElement(TextField, {
                name: "email",
                placeholder: "mequieroponerenforma@gmail.com",
                className: "input-textfield"
              })
            ),
            React.createElement(
              "div",
              { className: "container-textfields" },
              React.createElement(
                "label",
                null,
                "Usuario"
              ),
              React.createElement(TextField, {
                name: "username",
                placeholder: "Nickname",
                className: "input-textfield"
              })
            ),
            React.createElement(
              "div",
              { className: "container-textfields" },
              React.createElement(
                "label",
                null,
                "Contrase\xF1a"
              ),
              React.createElement(TextField, {
                type: "password",
                name: "password",
                placeholder: "**************",
                className: "input-textfield"
              })
            ),
            React.createElement(SubmitField, { value: "Submit", className: "submit-button" })
          )
        )
      );
    }
  }]);

  return Signup;
}(Component);

export default withAuth(Signup);