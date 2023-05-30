const express = require('express');

const ExamenCtrl = require('../controllers/ExamenController');

const Router = express.Router();

Router.get('/',ExamenCtrl.index) //api.com/Examen/
        .get('/ver/:value', ExamenCtrl.verExamen)
        .post('/', ExamenCtrl.create)
        .get('/:key/:value', ExamenCtrl.find, ExamenCtrl.show) 
        .put('/:key/:value', ExamenCtrl.find,ExamenCtrl.update)
        .delete('/:key/:value', ExamenCtrl.find,ExamenCtrl.remove);

module.exports = Router; 