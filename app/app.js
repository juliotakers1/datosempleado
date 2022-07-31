const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();


const Producto = require('./routes/producto');
const Categoria = require('./routes/categoria');
const User = require('./routes/user');
const Login = require('./routes/login');
const Venta = require('./routes/venta');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use(cors());
 

App.use('/producto',Producto);
App.use('/categoria',Categoria);
 App.use('/user', User);
 App.use('/login', Login);
 App.use('/venta', Venta);

module.exports = App;