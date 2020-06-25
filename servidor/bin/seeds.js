const mongoose = require('mongoose');
const Entrenamientos = require('../models/entrenamientos');


mongoose.connect("mongodb+srv://zetzher:RoomFitClubDB@cluster0-wv5ji.mongodb.net/RoomfitWeb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
Entrenamientos.collection.drop();


const entrenamientos = [
//fecha: Date,
//hora: String,
//embajador: String,
//entrenamiento: String,
//duracion: String,
//asistencia:[{type: Schema.Types.ObjectId, ref: "User"}],

{
    fecha: "Lunes",
    hora: "08:00",
    embajador: "Pilar Moreno",
    entrenamiento: "Cardio",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Mantendremos las pulsaciones a un nivel alto para favorecer la quema de grasa y calorías combinando ejercicios de alta y media intensidad. ',
    asistencia: []
},{
    fecha: "Lunes",
    hora: "10:00",
    embajador: "Tolo Pons",
    entrenamiento: "Full Body",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Trabajaras todas las partes de tu cuerpo  con tu propio peso corporal o materiales que tengas por casa (mochila/garrafa de agua/libros...). Todos los movimientos pueden modificarse según las necesidades y objetivos.',
    asistencia: []
},{
    fecha: "Lunes",
    hora: "18:30",
    embajador: "Tolo Pons",
    entrenamiento: "Cardio",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Mantendremos las pulsaciones a un nivel alto para favorecer la quema de grasa y calorías combinando ejercicios de alta y media intensidad. ',
    asistencia: []
},{
    fecha: "Lunes",
    hora: "20:30",
    embajador: "Pilar Moreno",
    entrenamiento: "Tronco inferior",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Ejercicios basados en la musculación de la parte inferior de nuestro cuerpo (piernas, glúteos y parte baja del abdomen...)',
    asistencia: []
},

{
    fecha: "Martes",
    hora: "08:00",
    embajador: "Pilar Moreno",
    entrenamiento: "GAP",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Rutina de glúteos abdomen y piernas. Centraremos todos nuestros esfuerzos en tonificar y eliminar la grasa que por naturaleza suele acumularse en esas zonas.',
    asistencia: []
},{
    fecha: "Martes",
    hora: "10:00",
    embajador: "Tolo Pons",
    entrenamiento: "Fuerza - Tronco superior",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Ejercicios basados en la musculación de la parte superior de nuestro cuerpo  (hombros, brazos, pecho, espalda...)',
    asistencia: []
},{
    fecha: "Martes",
    hora: "18:30",
    embajador: "Tolo Pons",
    entrenamiento: "Tronco inferior",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Ejercicios basados en la musculación de la parte inferior de nuestro cuerpo (piernas, glúteos y parte baja del abdomen...)',
    asistencia: []
},{
    fecha: "Martes",
    hora: "19:30",
    embajador: "Pilar Moreno",
    entrenamiento: "Cuida tu cuerpo",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Trabajaras todo tu cuerpo con movimientos de pilates de forma muy controlada.',
    asistencia: []
},{
    fecha: "Martes",
    hora: "20:30",
    embajador: "Pilar Moreno",
    entrenamiento: "Full Body",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Trabajaras todas las partes de tu cuerpo  con tu propio peso corporal o materiales que tengas por casa (mochila/garrafa de agua/libros...). Todos los movimientos pueden modificarse según las necesidades y objetivos.',
    asistencia: []
},

{
    fecha: "Miercoles",
    hora: "08:00",
    embajador: "Pilar Moreno",
    entrenamiento: "Full Body",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Trabajaras todas las partes de tu cuerpo  con tu propio peso corporal o materiales que tengas por casa (mochila/garrafa de agua/libros...). Todos los movimientos pueden modificarse según las necesidades y objetivos.',
    asistencia: []
},{
    fecha: "Miercoles",
    hora: "10:00",
    embajador: "Tolo Pons",
    entrenamiento: "Cardio",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Mantendremos las pulsaciones a un nivel alto para favorecer la quema de grasa y calorías combinando ejercicios de alta y media intensidad. ',
    asistencia: []
},{
    fecha: "Miercoles",
    hora: "18:30",
    embajador: "Tolo Pons",
    entrenamiento: "Full Body",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Trabajaras todas las partes de tu cuerpo  con tu propio peso corporal o materiales que tengas por casa (mochila/garrafa de agua/libros...). Todos los movimientos pueden modificarse según las necesidades y objetivos.',
    asistencia: []
},{
    fecha: "Miercoles",
    hora: "20:30",
    embajador: "Pilar Moreno",
    entrenamiento: "Core",
    duracion: "30 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: ' Ejercicios únicamente enfocados en el abdomen. ',
    asistencia: []
},

{
    fecha: "Jueves",
    hora: "08:00",
    embajador: "Pilar Moreno",
    entrenamiento: "Brazos, gluteos y abdomen",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Rutina de glúteos, abdomen y brazos. Centraremos todos nuestros esfuerzos en tonificar y eliminar la grasa que por naturaleza suele acumularse en esas zonas.',
    asistencia: []
},{
    fecha: "Jueves",
    hora: "10:00",
    embajador: "Tolo Pons",
    entrenamiento: "Core",
    duracion: "30 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: ' Ejercicios únicamente enfocados en el abdomen. ',
    asistencia: []
},{
    fecha: "Jueves",
    hora: "18:30",
    embajador: "Tolo Pons",
    entrenamiento: "Tronco superior",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Ejercicios basados en la musculación de la parte superior de nuestro cuerpo  (hombros, brazos, pecho, espalda...)',
    asistencia: []
},{
    fecha: "Jueves",
    hora: "19:30",
    embajador: "Pilar Moreno",
    entrenamiento: "Cuida tu cuerpo",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Trabajaras todo tu cuerpo con movimientos de pilates de forma muy controlada. ',
    asistencia: []
},{
    fecha: "Jueves",
    hora: "20:30",
    embajador: "Pilar Moreno",
    entrenamiento: "Cardio",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Mantendremos las pulsaciones a un nivel alto para favorecer la quema de grasa y calorías combinando ejercicios de alta y media intensidad. ',
    asistencia: []
},

{
    fecha: "Viernes",
    hora: "08:00",
    embajador: "Pilar Moreno",
    entrenamiento: "Core",
    duracion: "30 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: ' Ejercicios únicamente enfocados en el abdomen. ',
    asistencia: []
},{
    fecha: "Viernes",
    hora: "10:00",
    embajador: "Tolo Pons",
    entrenamiento: "Full Body",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Trabajaras todas las partes de tu cuerpo  con tu propio peso corporal o materiales que tengas por casa (mochila/garrafa de agua/libros...). Todos los movimientos pueden modificarse según las necesidades y objetivos.',
    asistencia: []
},{
    fecha: "Viernes",
    hora: "18:30",
    embajador: "Tolo Pons",
    entrenamiento: "Full Body",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Trabajaras todas las partes de tu cuerpo  con tu propio peso corporal o materiales que tengas por casa (mochila/garrafa de agua/libros...). Todos los movimientos pueden modificarse según las necesidades y objetivos.',
    asistencia: []
},{
    fecha: "Viernes",
    hora: "20:30",
    embajador: "Pilar Moreno",
    entrenamiento: "GAP",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Rutina de glúteos abdomen y piernas. Centraremos todos nuestros esfuerzos en tonificar y eliminar la grasa que por naturaleza suele acumularse en esas zonas.',
    asistencia: []
},

{
    fecha: "Sábado",
    hora: "09:00",
    embajador: "Pilar Moreno",
    entrenamiento: "Full Body + Cardio",
    duracion: "60 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Trabajaras todas las partes de tu cuerpo  con tu propio peso corporal o materiales que tengas por casa (mochila/garrafa de agua/libros...). Todos los movimientos pueden modificarse según las necesidades y objetivos, mantendremos las pulsaciones a un nivel alto para favorecer la quema de grasa y calorías combinando ejercicios de alta y media intensidad. ',
    asistencia: []
},{
    fecha: "Sábado",
    hora: "10:00",
    embajador: "Tolo Pons",
    entrenamiento: "Extreme",
    duracion: "60 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Entrenamiento de full body y cardio de alta intensidad.',
    asistencia: []
},{
    fecha: "Sábado",
    hora: "18:00",
    embajador: "Pilar Moreno",
    entrenamiento: "Core",
    duracion: "30 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Ejercicios únicamente enfocados en el abdomen.',
    asistencia: []
},

{
    fecha: "Domingo",
    hora: "10:00",
    embajador: "Pilar Moreno",
    entrenamiento: "Estiramientos",
    duracion: "40 minutos",
    herramientas: ['https://res.cloudinary.com/dg9s4kl26/image/upload/v1592479300/Room%20fit%20club/iconoEsterilla_azkjai.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592577579/Room%20fit%20club/silla_iptb28.png', 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1592565493/Room%20fit%20club/pesa_j23lez.png'],
    descripcion: 'Estira todo tu cuerpo  para alargar los músculos, aumentar la flexibilidad y el rango de movimiento de las articulaciones.',
    asistencia: []
}
]




Entrenamientos.create(entrenamientos, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${entrenamientos.length} locales`)
    mongoose.connection.close();
});