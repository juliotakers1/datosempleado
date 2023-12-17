const express = require('express');

const OrdenCtrl = require('../controllers/OrdenController');

const Router = express.Router();

Router.get('/',OrdenCtrl.index) //api.com/Orden/
        .get('/ver/:value', OrdenCtrl.verOrden)
        .get('/ultimo', OrdenCtrl.UltimoCarnetPaciente)
        .post('/', OrdenCtrl.create)
        .get('/:key/:value', OrdenCtrl.find, OrdenCtrl.show) 
        .put('/:key/:value', OrdenCtrl.find,OrdenCtrl.update)
        .delete('/:key/:value', OrdenCtrl.find,OrdenCtrl.remove);

module.exports = Router; 