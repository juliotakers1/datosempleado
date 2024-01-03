const express = require('express');

const ServicioCtrl = require('../controllers/ServicioController');

const Router = express.Router();

Router.get('/',ServicioCtrl.index) //api.com/Servicio/
        .get('/ver/:value', ServicioCtrl.verServicio)
        .get('/ultimo', ServicioCtrl.UltimoCarnetPaciente)
        .post('/', ServicioCtrl.create)
        .get('/:key/:value', ServicioCtrl.find, ServicioCtrl.show) 
        .put('/:key/:value', ServicioCtrl.find,ServicioCtrl.update)
        .delete('/:key/:value', ServicioCtrl.find,ServicioCtrl.remove);

module.exports = Router; 