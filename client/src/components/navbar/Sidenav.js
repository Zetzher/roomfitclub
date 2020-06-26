import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import Logo from '../../images/signin.png';
import { Link } from 'react-router-dom';
import { withAuth } from "../../lib/AuthProvider";

class Sidenav extends React.Component {
  

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    const {logout, isLoggedin } = this.props;
    return (
      <Menu className="position-sidenav">
      {isLoggedin ? (
        <>
        <div className={"sidenav-apartados"}>
        <img src={Logo} className="logo-roomfit" alt="logo room fit"/>
        
        <a id="home" className="menu-item" href="/">Inicio</a>
        <a id="home" className="menu-item" href="/perfil">Perfil</a>
        <a id="about" className="menu-item" href="/about">Quienes somos</a>
        <a id="embajador" className="menu-item" href="/embajador">Quiero ser embajador</a>
        <a id="reto-semanal" className="menu-item" href="/retosemanal">Clasificación<br/> reto semanal</a>
        <a id="entrenadores" className="menu-item" href="/entrenadores">Entrenadores Profesionales</a>
        
        <Link to="/"><button style={{border: "none"}} onClick={logout}>Logout </button></Link>
        </div>
        </>
      ) : (
        <>
        <div className={"sidenav-apartados"}>
        <img src={Logo} className="logo-roomfit" alt="logo room fit"/>

        <a id="home" className="menu-item" href="/">Inicio</a>
        <a id="about" className="menu-item" href="/about">Quienes somos</a>
        <a id="embajador" className="menu-item" href="/embajador">Quiero ser embajador</a>
        <a id="reto-semanal" className="menu-item" href="/retosemanal">Clasificación<br/> reto semanal</a>
        <a id="entrenadores" className="menu-item" href="/entrenadores">Entrenadores Profesionales</a>
</div>
        <div style={{marginBottom: 50}}>
          
        <h4 style={{marginTop: 20, marginBottom: 5}}>Si tienes una cuenta:</h4>
        <a id="login" className="menu-item" href="/login">Login</a>
        <h4 style={{marginTop: 20, marginBottom: 5}}>Si quieres registrarte</h4>
        <a id="signup" className="menu-item" href="/signup" >Signup</a>
        
              
        </div>
        </>)
        }
      </Menu>
    );
  }
}

export default withAuth(Sidenav);