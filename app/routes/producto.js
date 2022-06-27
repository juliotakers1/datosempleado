const express = require('express');
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion.js');
const ProductoCtrl = require('../controllers/ProductoController');

const Router = express.Router();

Router.get('/',verificarAuth,ProductoCtrl.index) //api.com/Producto/
        .post('/', verificarAuth,ProductoCtrl.create)
        .get('/:key/:value', verificarAuth,ProductoCtrl.find, ProductoCtrl.show) 
        .put('/:key/:value', verificarAuth,ProductoCtrl.find,ProductoCtrl.update)
        .delete('/:key/:value', verificarAuth,ProductoCtrl.find,ProductoCtrl.remove);

module.exports = Router; 