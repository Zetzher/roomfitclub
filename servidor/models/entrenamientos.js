const mongoose = require('mongoose')
const Schema = mongoose.Schema
const entrenamiento = new Schema({
fecha: String,
hora: String,
embajador: String,
entrenamiento: String,
duracion: String,
herramientas: Array,
descripcion: String,
asistencia:[{type: Schema.Types.ObjectId, ref: "User"}],
} 
)
const Entrenamiento = mongoose.model ("Entrenamiento", entrenamiento)

module.exports = Entrenamiento