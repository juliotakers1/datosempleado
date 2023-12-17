const express = require('express');

const ListaExamenCtrl = require('../controllers/ListaExamenController');

const Router = express.Router();

Router.get('/',ListaExamenCtrl.index) //api.com/ListaExamen/
        .get('/ver/:value', ListaExamenCtrl.verListaExamen)
        .get('/ultimo', ListaExamenCtrl.UltimoCarnetPaciente)
        .post('/', ListaExamenCtrl.create)
        .get('/:key/:value', ListaExamenCtrl.find, ListaExamenCtrl.show) 
        .put('/:key/:value', ListaExamenCtrl.find,ListaExamenCtrl.update)
        .delete('/:key/:value', ListaExamenCtrl.find,ListaExamenCtrl.remove);

module.exports = Router; 