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

    let reservar = async (e, id, eventoAsistencia, evento) => {
        try {
          let userEmail = props.user.email
          let userName = props.user.nombre
          
          let eventoId = evento._id
          let idUser = props.user._id;
          
          
         let filtrados = eventoAsistencia.filter((datos) => {
           return datos._id === idUser
         });

         let infoEvento = props.location.state.evento
         
         
         
         
          if(infoEvento.asistencia === 10){
            window.alert('Lamentamos que no puedas partitipar, no obstante, ¿No te gustaría ver otro de nuestros entrenamientos?')
          } else {
           if(filtrados.length === 0){
           
             history.push({
              pathname: '/reserva-confirmada',
              state:{evento}
         })
         
             await axios.post(`${process.env.REACT_APP_API_URI}/entrenamientos`, {idUser, id, userEmail, evento, userName, idUser})
            
            
            

         } else if (filtrados.length === 1) {
           history.push({
            pathname: '/reserva-cancelada',
            state:{evento}
       })
        await axios.post(`${process.env.REACT_APP_API_URI}/entrenamientos/userDelete`, {idUser, id, userEmail, userName})
        
        
        }
      }
        } catch (error) {
          console.log(error)
        }
        
      }

      let TextDynamic = (asistencia) => {
        let idUser = props.user._id;
        if(asistencia.length === 10){
          return <h3>No quedan más plazas disponibles</h3>
        } else {
          return asistencia.find((id) => id._id == idUser) ? <h3>Cancela tu reserva</h3> : <h3>Reserva tu plaza</h3> 
        }
       
        
        
    }
       let DynamicResponse = ({asistencia}) => {
        return (isLoggedin ? TextDynamic(asistencia) : <Link to="/login"><h4>Necesitas tener una cuenta para poder reservar</h4></Link>)
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
                    <button onClick={(e) => reservar(e, evento._id, evento.asistencia, evento)} className="button-reservar"><DynamicResponse asistencia={evento.asistencia}/></button>
                </div>
            </>
        )
    
}

export default withAuth(ConfirmBooking)
