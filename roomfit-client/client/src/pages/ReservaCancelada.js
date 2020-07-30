import React, { useEffect } from 'react'
import axios from 'axios'
import { withAuth } from '../lib/AuthProvider';
import { useHistory } from "react-router-dom";

 const ReservaCancelada = (props) => {
    let evento = props.location.state.evento;
    let idUser = props.user._id;
    let isLoggedin = props.isLoggedin;
    let email = props.user.email;
    let name = props.user.nombre;
    let history = useHistory();

    let pullId = async () => {
        history.push({
            pathname: '/'
       })
        await axios.post(`${process.env.REACT_APP_API_URI}/infosendit/pullit`, {idUser, evento, email, name})
    }

        return (
            <>
                <div className="reserva-envio" style={{paddingTop: 200, marginLeft: 50, marginRight: 50}}>
                    <h1 style={{marginBottom: 5}}>¿Estás seguro de cancelar tu reserva?</h1> 
                    <span>Lamentamos que hayas decidido no asistir, no obstante,</span>
                    <span>te invitamos a que te apuntes a otros de nuestros entrenamientos</span>
                    <span>y disfrutar del deporte junto a otros usuarios de ROOMFIT.</span>
                
                <button onClick={(e) => {pullId(e)}} style={{marginTop: 20, borderRadius: 20, width: 150, height: 50, backgroundColor: "orange", color: "white", fontSize: 20, fontWeight: "bold"}}>Cancelar reserva</button>
                    
                </div>
                
            </>
        )
    
}

export default withAuth(ReservaCancelada)
