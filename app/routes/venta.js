const express = require('express');

const VentaCtrl = require('../controllers/VentaController');

const Router = express.Router();

Router.get('/',VentaCtrl.index) //api.com/Venta/
        .post('/', VentaCtrl.create)
        .get('/:key/:value', VentaCtrl.find, VentaCtrl.show) 
        .put('/:key/:value', VentaCtrl.find,VentaCtrl.update)
        .delete('/:key/:value', VentaCtrl.find,VentaCtrl.remove);

module.exports = Router; 