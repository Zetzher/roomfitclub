import React, { useEffect } from 'react'
import axios from 'axios'
import { withAuth } from '../lib/AuthProvider';
import { useHistory } from "react-router-dom";

 const ReservaConfirmada = (props) => {
    
   
    let evento = props.location.state.evento;
    let idUser = props.user._id;
    let isLoggedin = props.isLoggedin;
    let email = props.user.email;
    let name = props.user.nombre;
    let history = useHistory();
    
    let pushId = async () => {
        history.push({
            pathname: '/'
       })
        await axios.post(`${process.env.REACT_APP_API_URI}/infosendit`,{idUser, evento, email, name})
    }
   


        return (
            <>
            <div className="reserva-envio" style={{paddingTop: 200, marginLeft: 50, marginRight: 50}}>
                    <h1 style={{marginBottom: 5}}>¿Estás seguro?</h1> 
                    <span>Al confirmar, recibirás un email con la confirmación</span>
                    <span>del entrenamiento al que te has inscrito y, además, en tu perfil</span>
                    <span>podrás ver todos los entrenamientos a los que te has apuntado.</span>

                    
                
                <button onClick={(e) => {pushId(e)}} style={{marginTop: 20, borderRadius: 20, width: 150, height: 50, backgroundColor: "orange", color: "white", fontSize: 20, fontWeight: "bold"}}>Confirmar reserva</button>
                    
                </div>
            </>
        )
    
}

export default withAuth(ReservaConfirmada)
