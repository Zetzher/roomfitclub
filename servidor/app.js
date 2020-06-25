require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bcrypt = require('bcrypt');
const multer = require('multer');
const favicon = require('serve-favicon')
const cors = require('cors')


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(x => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    });
const app = express()

app.use(
    session({
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60, // 1 day
      }),
      secret: process.env.SECRET_SESSION,
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
      },
    })
  );

  // CORS MIDDLEWARE SETUP
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://roomfitclub.com/', 'https://roomfitclub.com/'],
  })
);


   app.use((req, res, next) => {
    
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST OPTIONS, DELETE');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.header('Access-Control-Allow-Credentials', true);
   next();
 });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var index = require('./routes/index');
var signup = require ('./routes/signup');
var login = require ('./routes/login');
var logout = require ('./routes/logout');
var entrenamientos = require ('./routes/entrenamientos');
var ocio = require ('./routes/ocio');
var users = require ('./routes/users');
var entreUsers = require('./routes/entreUsers');
//var chat = require ('./routes/chat');



app.use('/', index);
app.use ('/signup', signup);
app.use ('/login', login);
app.use ('/logout', logout);
app.use ('/users', users);
app.use ('/entrenamientos', entrenamientos);
app.use ('/ocio', ocio);
app.use ('/infosendit', entreUsers)






module.exports = app;