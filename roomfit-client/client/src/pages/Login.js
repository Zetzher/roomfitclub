import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { Form, TextField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';

const loginSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

class Login extends Component {
       
   

  handleFormSubmit = (event) => {
    const { isLoggedin } = this.props;
    const { email, password } = event;
    this.props.login({ email, password });
    if(isLoggedin === true){
      this.props.history.push("/")
    }
    
  };

  

  render() {
    
 
    return (
     
        <div className="login-form">
          <h1>Iniciar sesión</h1>

          <Form schema={loginSchema}
          onSubmit={formulario => this.handleFormSubmit(formulario)}
          onError={(errors, data) => console.log('error', errors, data)}>
            <div className="text-fields">
            <div className="container-textfields">
            <label>Email</label>
            <TextField
              name="email"
              placeholder="Escribe aquí tu email"
              className="input-textfield"
            />
            </div>

            <div className="container-textfields">
            <label>Password</label>
            <TextField
              type="password"
              name="password"
              placeholder="********"
              className="input-textfield"
            />
            </div>

            <SubmitField value="Submit" className="submit-button" />
            </div>
          </Form>
          <div className="registerlink">
          <h4>¿Quieres registrarte?</h4>
          <Link to={"/signup"}><h4 style={{textAlign: 'center'}}>Regístrate</h4></Link>
          </div>
        </div>
     
    );
  }
}

export default withAuth(Login);
