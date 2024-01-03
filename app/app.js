const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();



const Servicio = require('./routes/servicio');
const Ingreso = require('./routes/ingreso');
const Gasto = require('./routes/gasto');
const User = require('./routes/user');
const Login = require('./routes/login');


App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());

App.use('/gasto',Gasto);
App.use('/ingreso',Ingreso);
App.use('/servicio',Servicio);
App.use('/user', User);
App.use('/login', Login);

module.exports = App;