import React from 'react'

const Entrenador = () => {

        return (
            
            <div className="landing-page-about" style={{paddingTop: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center'}}>
                <h4 className="cuadro-info">
                    ¿Te interesa un entrenamiento más personalizado?<br></br> ¿Quieres seguir progresando de la mano de los mejores profesionales?<br></br> Ellos saben exactamente lo que necesitas para mejorar y cumplir tus metas. Si te interesa hacer un entrenamiento personal con alguno de nuestros entrenadores profesionales, mándanos un email con tu disponibilidad, el tipo de entrenamiento que te interesa practicar y con qué profesional. Si no tienes claro el tipo de entrenamiento que necesitas, haznos saber tus objetivos y te asignaremos a un entrenador que te ayude a conseguirlos. 
                </h4>
                <h2>Te presentamos a nuestros <span style={{textDecoration: 'underline'}}>entrenadores</span></h2>
                <div className="entrenadores-info">
                    <img src="https://res.cloudinary.com/dg9s4kl26/image/upload/v1593642745/Room%20fit%20club/Sabrina_T_utdhom.jpg" alt="sabrina_fitness" className="sabrina-fitness"></img><br></br>
            
                        ¡Hola a todos!

                        Mi nombre es Sabrina y soy profesora de Pilates.<br></br> Pilates no es solo un entrenamiento fisico como cualquier otro, es mucho más.<br></br> Conectas tu mente con el cuerpo y eso hace que trabajes de una manera muy profunda. Este trabajo del cuerpo no lo puedes ver,<br></br> <h4>¡Tienes que sentirlo!</h4><br></br> <h4>¡Pilates es para vivirlo!</h4><br></br>

                        Me encanta enseñar este método y ayudar a cada uno de vosotros a vivir una vida más equilibrada, sana y feliz.<br></br>

                        Pero lo más importante para mi es que salgas con una gran sonrisa de mi clase.<br></br>

                        ¡Te veo en breve!<br></br>

                        <h4>Sabrina</h4>
                </div>
                <div className="entrenadores-info">
                    <img src="https://res.cloudinary.com/dg9s4kl26/image/upload/v1593644219/Room%20fit%20club/pose_l8bbyj.jpg" alt="Maria_baile" className="maria-baile"></img><br></br>
                    Soy bailarina profesional, me dedico a dar clases colectivas (Zumba, Pilates, GAP, HIIT, entrenos funcionales...) desde hace mucho tiempo.<br></br> 
                    Mis estudios realizados en INEF y el máster de educación física me han ayudado a mejorar los conocimientos en el mundo de deporte. <br></br>
                    Y no olvides..., todo lo que quieras, conseguir está en tu cabeza! Con el trabajo y consistencia se logran cosas bonitas.<br></br>
                    <h4>Maria</h4>
                </div>
            </div>
        )
    
}

export default Entrenador
