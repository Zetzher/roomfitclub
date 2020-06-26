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
            
            <TextField
              name="email"
              label="Email"
              placeholder="Escribe aquí tu email"
            />

            
            <TextField
              type="password"
              name="password"
              label="Password"
              placeholder="********"
            />

            <SubmitField value="Submit" />
          </Form>
          <div className="registerlink">
          <label>¿Quieres registrarte?</label>
          <Link to={"/signup"}>Signup</Link>
          </div>
        </div>
     
    );
  }
}

export default withAuth(Login);
