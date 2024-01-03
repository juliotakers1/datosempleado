const express = require('express');

const IngresoCtrl = require('../controllers/IngresoController');

const Router = express.Router();

Router.get('/',IngresoCtrl.index) //api.com/Ingreso/
        .get('/ver/:value', IngresoCtrl.verIngreso)
        .get('/ultimo', IngresoCtrl.UltimoCarnetPaciente)
        .post('/', IngresoCtrl.create)
        .get('/:key/:value', IngresoCtrl.find, IngresoCtrl.show) 
        .put('/:key/:value', IngresoCtrl.find,IngresoCtrl.update)
        .delete('/:key/:value', IngresoCtrl.find,IngresoCtrl.remove);

module.exports = Router; 