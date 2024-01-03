const express = require('express');

const GastoCtrl = require('../controllers/GastoController');

const Router = express.Router();

Router.get('/',GastoCtrl.index) //api.com/Gasto/
        .get('/ver/:value', GastoCtrl.verGasto)
        .get('/ultimo', GastoCtrl.UltimoCarnetPaciente)
        .post('/', GastoCtrl.create)
        .get('/:key/:value', GastoCtrl.find, GastoCtrl.show) 
        .put('/:key/:value', GastoCtrl.find,GastoCtrl.update)
        .delete('/:key/:value', GastoCtrl.find,GastoCtrl.remove);

module.exports = Router; 