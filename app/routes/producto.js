const express = require('express');

const ProductoCtrl = require('../controllers/ProductoController');

const Router = express.Router();

Router.get('/',ProductoCtrl.index) //api.com/Producto/
        .post('/', ProductoCtrl.create)
        .get('/:key/:value', ProductoCtrl.find, ProductoCtrl.show) 
        .put('/:key/:value', ProductoCtrl.find,ProductoCtrl.update)
        .delete('/:key/:value', ProductoCtrl.find,ProductoCtrl.remove);

module.exports = Router; 