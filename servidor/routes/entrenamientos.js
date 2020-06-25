const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Entrenamiento = require("../models/entrenamientos");
const nodemailer = require("nodemailer");
const { restart } = require("nodemon");

//GET
router.get('/', (req, res, next) => {
    Entrenamiento
        .find()
        .populate('asistencia')
        .then(dbResponse => {
            res.status(200)
                .json(dbResponse)

        })
        .catch(err => console.log('En metodo GET de Eventos ha ocurrido:', err))
})


//POST CURRENT USER ID
router.post("/", async (req, res, next) => {
    try {
    

        const eventId = req.body.id;
        const asistencia = req.body.idUser;
        const email = req.body.userEmail;
        const evento = req.body.evento;
        const name = req.body.userName;
        
        
      

        await Entrenamiento.findByIdAndUpdate( eventId, {$push:{ asistencia }});   
        res.status(200)


    } catch (error) {
        console.log(error);
    }



});

//DELETE CURRENT USER ID FROM EVENT
router.post('/userDelete', async (req, res, next) => {
   
        try {
            const eventId = req.body.id;
            const asistencia = req.body.idUser;
            const email = req.body.userEmail;
            const name = req.body.userName;

            
            
    await Entrenamiento.findByIdAndUpdate( eventId, {$pull:{ asistencia }
    });   
            res.status(200)
   
        } catch (error) {
            console.log(error);
        }
    })



module.exports = router;