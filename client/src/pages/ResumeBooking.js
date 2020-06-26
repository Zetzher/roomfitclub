import React, { useState, useEffect } from 'react'
import Logo from '../images/signin.png';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import ReservaConfirmada from "../pages/ReservaConfirmada";

const ConfirmBooking = (props) => {
  let history = useHistory();

  let [numberAssistence, setNumberAssistence] = useState(10);

    let evento = props.location.state.evento
    let isLoggedin = props.isLoggedin

 
 
 


  let cambiarNumeroString = () => {
    switch(evento.asistencia.length){
      case 0:
       setNumberAssistence(10);
       numberAssistence.toString();
        break;
       
        case 1:
         setNumberAssistence(9);
         numberAssistence.toString();
          break;

          case 2:
           setNumberAssistence(8);
           numberAssistence.toString();
        break;
       
        case 3:
         setNumberAssistence(7);
         numberAssistence.toString();
          break;

          case 4:
           setNumberAssistence(6);
           numberAssistence.toString();
        break;
       
        case 5:
         setNumberAssistence(5);
         numberAssistence.toString();
          break;

          case 6:
           setNumberAssistence(4);
           numberAssistence.toString();
        break;
       
        case 7:
         setNumberAssistence(3);
         numberAssistence.toString();
          break;

          case 8:
           setNumberAssistence(2);
           numberAssistence.toString();
        break;
       
        case 9:
         setNumberAssistence(1);
         numberAssistence.toString();
          break;

          default:
            break;
    }}

    useEffect(() => {
      cambiarNumeroString()
    });

    let reservar = async (e) => {
        
         history.push("/perfil")
         
         
      }
    
       
      
    
        return (
            <>
                <div className="ficha-entrenamiento">
                    <img src={Logo} className="logo-roomfit-confirmar" alt="Logo RoomfitClub"/>
                    <h1 className="title-ficha">{evento.entrenamiento}</h1>
                    <h3 className="title-asistencia">{numberAssistence} plazas disponibles</h3>
                    <h2 className="title-embajador"><span style={{color: 'darkorange', fontSize: 25}}>Embajador:</span><br /> {evento.embajador}</h2>
                    <h4 className="title-duracion"><span style={{color: 'darkorange', fontSize: 25}}>Duración:</span><br /> {evento.duracion}</h4>
                    <h3 className="title-descripcion"><span style={{color: 'darkorange', fontSize: 25}}>Descripción:</span><br /> {evento.descripcion}</h3>
                    <div className="title-herramientas"><span style={{color: 'darkorange', fontSize: 25}}>Herramientas:</span><br /> {evento.herramientas.map((data) => <img src={data} className="tools-ficha" alt="Iconos herramientas" /> )}</div>
                    <button onClick={(e) => reservar(e)} className="button-reservar">Volver al perfil</button>
                </div>
            </>
        )
    
}

export default withAuth(ConfirmBooking)
