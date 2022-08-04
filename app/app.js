const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();


const Paciente = require('./routes/paciente');
const Doctor = require('./routes/doctor');
const User = require('./routes/user');
const Login = require('./routes/login');


App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());
 

App.use('/paciente',Paciente);
App.use('/doctor',Doctor);
App.use('/user', User);
App.use('/login', Login);
 

module.exports = App;