const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();


const Paciente = require('./routes/paciente');
const Doctor = require('./routes/doctor');
const User = require('./routes/user');
const Login = require('./routes/login');
const Consulta = require('./routes/consulta');
const Documento = require('./routes/documento');
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());
 

App.use('/paciente',Paciente);
App.use('/doctor',Doctor);
App.use('/user', User);
App.use('/login', Login);
App.use('/documento', Documento);
App.use('/consulta', Consulta);
 

module.exports = App;