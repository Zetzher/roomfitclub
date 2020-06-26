const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/user");
const Entrenamiento = require("../models/entrenamientos");



router.post("/", async (req, res, next) => {
  
   
    const idUser = req.body.idUser;
    const entrenamientos = req.body.evento._id;
    const evento = req.body.evento;
    const email = req.body.email;
    const name = req.body.name;


    try {
      await User.findByIdAndUpdate(idUser, {$push: {entrenamientos}});
      res.status(200)
    } catch (error) {
      console.log(error);
  }

  let transporter = nodemailer.createTransport({
    host: "smtp.buzondecorreo.com",
    post: 465,
    secure: false,
    auth: {
        user: "info@roomfitclub.com",
        pass: "Ironhack123"
    },
    tls: {
        rejectUnauthorized: false
    }
});

let mailOptions = {
    from: "info@roomfitclub.com",
    to: email,
    subject: "¡Tu reserva está confirmada!",
    
    text: `¡Bienvenido a Room Fit!`,
    html: `<h2>Hola ${name},<h2>

    <h3>¿List@ para dar lo mejor de tí?<h3>

    <h3>Te esperamos el ${evento.fecha} a las ${evento.hora} para el entrenamiento de ${evento.entrenamiento} con ${evento.embajador}.</h3>

    <h3>¡Prepara una esterilla, un peso lígero, una silla y muchas ganas de pasarlo bien!</h3>

    <h3>Entra en el siguiente enlace para acceder a la sala: https://us04web.zoom.us/j/4069356381?pwd=QW9nemM4QXpLMkt1cVM1Rkc5YWNaZz09</h3>

    <h3>Apuntate a todos los entrenamientos que quieras y compartelos con tus amigos en www.roomfitclub.com</h3>

    <h3>Haz deporte con tus amigos, haz amigos con el deporte.</h3>
    
    <h3>Equipo de ROOMFIT</h3>
    
    <img src="https://res.cloudinary.com/dg9s4kl26/image/upload/v1592848015/Room%20fit%20club/signin_xf4wpu.png">`,
    
    
}

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        res.status(500). send(error.message);
        console.log(error.message)
        } else {
            console.log("Email enviado")
            res.status(200).json(req.body)
        }
})

});

router.post('/pullit', async (req, res, next) => {
    const idUser = req.body.idUser;
    const entrenamientos = req.body.evento._Id;
    const email = req.body.email;
    const name = req.body.name;

    try {
      await User.findByIdAndUpdate(idUser, {$pull: {entrenamientos}});
      res.status(200)

      let transporter = nodemailer.createTransport({
        host: "smtp.buzondecorreo.com",
        post: 465,
        secure: false,
        auth: {
            user: "info@roomfitclub.com",
            pass: "Ironhack123"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    let mailOptions = {
        from: "info@roomfitclub.com",
        to: email,
        subject: "¡Tu reserva está cancelada!",
        
        text: `¡Bienvenido a Room Fit!`,
        html: `<h2>Hola ${name},<h2>

        <h3>Lamentamos que hayas decidido no hacer el entrenamiento.<h3>

        <h3>No obstante, nos gustaría que echaras un vistazo a otros que tenemos en la página web y divertirte junto a otros usuarios.</h3>

                        
        <h3>Equipo de ROOMFIT</h3>
        
        <img src="https://res.cloudinary.com/dg9s4kl26/image/upload/v1592848015/Room%20fit%20club/signin_xf4wpu.png">`,
        
        
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500). send(error.message);
            console.log(error.message)
            } else {
                console.log("Email enviado")
                res.status(200).json(req.body)
            }
    })
    } catch (error) {
      console.log(error);
  }
})



module.exports = router