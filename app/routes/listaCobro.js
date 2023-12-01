const express = require('express');

const ListaCobroCtrl = require('../controllers/ListaCobroController');

const Router = express.Router();

Router.get('/',ListaCobroCtrl.index) //api.com/ListaCobro/
        .get('/ver/:value', ListaCobroCtrl.verListaCobro)
        .get('/ultimo', ListaCobroCtrl.UltimoCarnetPaciente)
        .post('/', ListaCobroCtrl.create)
        .get('/:key/:value', ListaCobroCtrl.find, ListaCobroCtrl.show) 
        .put('/:key/:value', ListaCobroCtrl.find,ListaCobroCtrl.update)
        .delete('/:key/:value', ListaCobroCtrl.find,ListaCobroCtrl.remove);

module.exports = Router; 