const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  provincia: {
    type: String,
    required: true,
  },
  nombre: { 
    type: String,
    required: true,
  },
  apellidos: { 
    type: String,
    required: true,
  },
  edad: { 
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  entrenamientos: [{ type: Schema.Types.ObjectId, ref: "Entrenamiento" }],
});
const User = mongoose.model("User", user);

module.exports = User;
