import React, { useState } from 'react';
import Julian from '../images/Julian.jpeg';
import Tolo from '../images/Tolo.jpeg';
import Pilar from '../images/Pilar.jpeg';

const About = () => {

   const [tolo, setTolo] = useState(true);
   const [julian, setJulian] = useState(true);
   const [pilar, setPilar] = useState(true);
   

    let infoTolo = (e) => {
        if(pilar && julian){
        setTolo(!tolo)
        } else {
            setTolo(true)
        }
    }

    let infoPilar = () => {
        if(tolo && julian){
            setPilar(!pilar)
            } else {
                setPilar(true)
            }
    }

    let infoJulian = () => {
        if(tolo && pilar){
            setJulian(!julian)
        } else {
            setJulian(true)
        }
    }

    let DynamicText = () => {
        if(pilar == false){
            return <h4></h4>
        } else if(julian == false) {
            return <h4 style={{textAlign: 'center', marginLeft: 20, marginRight: 20}}></h4>
        } else if(tolo == false) {
            return <h4></h4>
        } else {
            return null
        }
       
    }

    

    console.log('julian', julian, 'pilar', pilar, 'tolo', tolo)

        return (
            
            <div className="landing-page-about" style={{paddingTop: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
            <h1>¿Quiénes somos?</h1>
            <h4 className="about-info">
<h4>¿Sabes que entrenar solo hace que te fatigues antes que si lo haces acompañado?</h4><br></br> <h4>Estar acompañado incrementa los receptores opioides y la cantidad de dopamina y endorfinas, que aumentan la sensación de bienestar y reducen la sensación de dolor.  

Por eso, queremos que te sientas acompañado aunque estés entrenando solo en el salón de tu casa. ROOMFIT te acerca a personas con tus mismos hábitos deportivos.</h4><br></br> <h4>Todos los entrenamientos se harán a través de Zoom. Los grupos de entrenamiento son reducidos (no más de 10 personas) para fomentar la interacción entre todos los miembros del grupo.</h4><br></br>

<h4>Reserva desde nuestro calendario la hora y el entrenamiento que mejor se adapte a ti.</h4><br></br> <h4>Todos los ejercicios son adaptables a cualquier condición física. Serán entrenamientos funcionales que podrás realizar con cualquier material que tengas en casa o con el mismo peso corporal.</h4><br></br> <h4>Pasa un buen rato con tus amigos y conociendo gente mientras haces ejercicio.</h4><br></br>

<h4 style={{marginTop:13, marginBottom:13}}>Roomfit también dispone de entrenadores certificados que os acompañarán adaptándose a vuestras necesidades con un entrenamiento personalizado.</h4> <br></br>

No te lo pienses, únete a nuestra comunidad y haz ejercicio con gente como tú. <br></br>



Mientras nosotros seguimos trabajando para lanzar al mercado la aplicación Roomfit, donde encontrarás grandes sorpresas. </h4>
            <h4 style={{fontSize: 20, fontWeight: 'bold', textDecoration: 'underline', paddingBottom: 50, textAlign: 'center'}}></h4>
            


            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
		<div class="front">
        <img src={Julian} className="julian-foto" />
		</div>
		<div class="back">
jajajajjajajajjajajajajja
		</div>
	</div>
</div>

<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
		<div class="front">
        <img src={Tolo} className="julian-foto" />
		</div>
		<div class="back">
jajajajjajajajjajajajajja
		</div>
	</div>
</div>

<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
		<div class="front">
        <img src={Pilar} className="julian-foto" />
		</div>
		<div class="back">
jajajajjajajajjajajajajja
		</div>
	</div>
</div>


</div>
        )
    
}

export default About
