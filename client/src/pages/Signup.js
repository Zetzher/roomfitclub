import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { Form, TextField, SubmitField, NumberField } from 'react-components-form';
import Schema from 'form-schema-validation';

const min = (minLength, message) => ({
  validator: (value) => {
      return value.length > minLength;
  },
  errorMessage: message
});

const loginSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
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
    required: true,
  },
  provincia: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true
  },
});

class Signup extends Component {

  

  handleFormSubmit = async (event) => {
    const { email, password, username, nombre, apellidos, provincia, edad } = event;
    await this.props.signup({ email, password, username, nombre, apellidos, provincia, edad });
    };

    
    render(){
      
     

    return (
      
        <div className="register-form">
          <h1>Regístrate</h1>

          <Form schema={loginSchema} 
          onSubmit={formulario => this.handleFormSubmit(formulario)} 
          onError={(errors, data) => console.log('error', errors, data)}>

            <div className="text-fields">

            <div className="container-textfields">
            <label>Nombre</label>
            <TextField
              name="nombre"
              placeholder="Tu nombre"
              className="input-textfield"
            />
            </div>

            <div className="container-textfields">
            <label>Apellidos</label>
            <TextField
              name="apellidos"
              placeholder="Tus apellidos"
              className="input-textfield"
            />
            </div>

            <div className="container-textfields">
            <label>Provincia</label>
            <TextField
              name="provincia"
              placeholder="Tu provincia"
              className="input-textfield"
            />
            </div>

            <div className="container-textfields">
            <label>Edad</label>
            <NumberField
              name="edad"
              placeholder="24"
              className="input-textfield"
            />
            </div>

            <div className="container-textfields">
            <label>Email</label>
            <TextField
              name="email"
              placeholder="mequieroponerenforma@gmail.com"
              className="input-textfield"
            />
            </div>

            <div className="container-textfields">
            <label>Usuario</label>
            <TextField
              name="username"
              placeholder="Nickname"
              className="input-textfield"
            />
            </div>

            <div className="container-textfields">
            <label>Contraseña</label>
            <TextField
              type="password"
              name="password"
              placeholder="**************"
              className="input-textfield"
            />
            </div>

            
            <SubmitField value="Submit" className="submit-button" />
            </div>
          </Form>
         
        </div>
    );
  }
}


export default withAuth(Signup);
