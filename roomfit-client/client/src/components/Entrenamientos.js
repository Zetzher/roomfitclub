import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
import { Link, useHistory } from "react-router-dom";

const Entrenamientos = (props) =>  {
 
    const isLoggedin = props.isLoggedin;
    const [entrenos, guardarEntrenos] = useState("");
    const [filter, guardarFilter] = useState();
    let [numberAssistence, setNumberAssistence] = useState(10);
    
    

      

      let history = useHistory();


      let cambiarNumeroString = (asistencia) => {
        
        switch(asistencia.length){
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
    
        

    let entrenosDB = async () => {
        try {
         let petition = await axios.get(`${process.env.REACT_APP_API_URI}/entrenamientos`)
            let reply = petition.data;
            guardarEntrenos(reply)
        } catch (error) {
             console.log(error)
        }
    }


    let filterType = (e) => {
        let diaSemana = e ? e.target.name : e;
        let copiaEntrenos = [...entrenos];
        let arrayEntrenos = copiaEntrenos.filter((element) => {
            return element.fecha.includes(diaSemana)
        })
        guardarFilter(arrayEntrenos)
             };
             
             let buttonResponse;
             
             let reservar = async (e, id, evento) => {
               try {
                      history.push({
                      pathname: `/info-entrenamiento/`,
                      state: {evento}
                 })
               
               } catch (error) {
                 console.log(error)
               }
             }

             let TextDynamic = (asistencia) => {
              let idUser = props.user._id;
              
            
              return <h4>Más información</h4>
              
          }
             let DynamicResponse = ({asistencia}) => {
              cambiarNumeroString(asistencia)
              if(asistencia.find((data) => data._id === props.user._id)){
                return <h4>¡Has reservado!</h4>
              }
              return (isLoggedin ? TextDynamic(asistencia) : <Link to="/login"><h4>Registrate</h4></Link>)
             }
             useEffect(() => {
              // Update the document title using the browser API
             entrenosDB()
             filterType()
             
            }, []);

      return (
          <>
              <div>
          <button name="Lunes" className="button-entrenos" onClick={(e) => filterType(e)}>
          Lunes
          </button>
          <button name="Martes" className="button-entrenos" onClick={(e) => filterType(e)}>
            Martes
          </button>
          <button name="Miercoles" className="button-entrenos" onClick={(e) => filterType(e)}>
            Miercoles
          </button>
          <button name="Jueves" className="button-entrenos" onClick={(e) => filterType(e)}>
          Jueves
          </button>
          <button name="Viernes" className="button-entrenos" onClick={(e) => filterType(e)}>
          Viernes
          </button>
          <button name="Sábado" className="button-entrenos" onClick={(e) => filterType(e)}>
            Sábado
          </button>
          <button name="Domingo" className="button-entrenos" onClick={(e) => filterType(e)}>
            Domingo
          </button>
        </div>

        <div>
        {filter ? filter.map((data) => 
        <>
        <h4 style={{marginTop: 10, marginBottom: 10}}>{data.dia}</h4>
        <span>{data.hora} {data.embajador} / {data.entrenamiento} {data.duracion}</span><br/>
        
          <button className="button-info" style={{marginBottom: 40, marginTop: 30}} onClick={(e) => reservar(e, data._id, data)}><DynamicResponse asistencia={data.asistencia}/></button><br/>
        
        </>) : <div class="preloader"></div>}
        </div>
            </>
        )
}

export default withAuth(Entrenamientos)
