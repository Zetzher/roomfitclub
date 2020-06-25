const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");

// HELPER FUNCTIONS
const {
    isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middleware");

router.post(
    "/",
    // revisamos si el user no está ya logueado usando la función helper (chequeamos si existe req.session.currentUser)
    //isNotLoggedIn(),
    // revisa que se hayan completado los valores de username y password usando la función helper
    //validationLoggin(),
    async (req, res, next) => {
      const { nombre, apellidos, provincia, edad, email, password, username } = req.body;
      try {
        // chequea si el username ya existe en la BD
        const emailExists = await User.findOne({ email }, "email");
        const usernameExists = await User.findOne({ username }, "username")
        // si el usuario ya existe, pasa el error a middleware error usando next()
        if (emailExists || usernameExists) return next(createError(400));
        else {
          // en caso contratio, si el usuario no existe, hace hash del password y crea un nuevo usuario en la BD
          const salt = bcrypt.genSaltSync(saltRounds);
          const hashPass = bcrypt.hashSync(password, salt);
          const newUser = await User.create({ nombre, apellidos, provincia, edad, email, username, password: hashPass });
          // luego asignamos el nuevo documento user a req.session.currentUser y luego enviamos la respuesta en json
          req.session.currentUser = newUser;
          res
            .status(200) //  OK
            .json(newUser);
        }
        
      } catch (error) {
        next(error);
      }
    }
  );  

  module.exports = router;
