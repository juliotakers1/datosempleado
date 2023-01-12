const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();


const Embarazo = require('./routes/embarazo');
const Pediatria = require('./routes/pediatria');
const Adulto = require('./routes/adulto');
const Doctor = require('./routes/doctor');
const User = require('./routes/user');
const Login = require('./routes/login');
const Documenta = require('./routes/documenta');
const Cembarazo = require('./routes/cembarazo');
const Cediatria = require('./routes/cediatria');
const Cadulto = require('./routes/cadulto');

const Documento = require('./routes/documento');
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());
 

App.use('/embarazo',Embarazo);
App.use('/pediatria',Pediatria);
App.use('/adulto',Adulto);
App.use('/doctor',Doctor);
App.use('/user', User);
App.use('/login', Login);
App.use('/documento', Documento);
App.use('/documenta', Documenta);
App.use('/cembarazo', Cembarazo);
App.use('/cadulto', Cadulto);
App.use('/cediatria', Cediatria);
 

module.exports = App;