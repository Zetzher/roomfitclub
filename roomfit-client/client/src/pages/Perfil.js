import React, {useEffect, useState} from 'react';
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import { useHistory } from "react-router-dom";


let Perfil = (props) => {

    let history = useHistory();

    let entrenamientos = props.user.entrenamientos;

    let info = (e, idEvento, evento) => {
        try {
            history.push({
            pathname: `/info/${idEvento}`,
            state: {evento}
       })
     
     } catch (error) {
       console.log(error)
     }
    }

   


// nombre: entrenamiento, tiempo: duracion, entrenador: embajador, dia: fecha, hora: hora
    
        return (
            <>
                <div>
                {entrenamientos.map((datos) => <div className="entrenos-perfil"><h1>{datos.entrenamiento}</h1><span>{datos.duracion}</span> <span>{datos.embajador}</span> <span>{datos.fecha}</span> <span>{datos.hora}</span> <button onClick={(e) => info(e, datos._id, datos)}>Más información</button></div>)}</div>



            </>
        )
    }


export default withAuth(Perfil)