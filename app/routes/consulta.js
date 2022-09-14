const express = require('express');

const ConsultaCtrl = require('../controllers/ConsultaController');

const Router = express.Router();

        Router.get('/',ConsultaCtrl.index) //api.com/Consulta/
        .get('/:value', ConsultaCtrl.verConsulta)
        .post('/', ConsultaCtrl.create)
        .get('/:key/:value', ConsultaCtrl.find, ConsultaCtrl.show) 
        .put('/:key/:value', ConsultaCtrl.find,ConsultaCtrl.update)
        .delete('/:key/:value', ConsultaCtrl.find,ConsultaCtrl.remove);

module.exports = Router; 