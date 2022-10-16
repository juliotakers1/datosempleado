const express = require('express');

const Cembarazo = require('../controllers/CembarazoController');

const Router = express.Router();

        Router.get('/',Cembarazo.index) //api.com/Consulta/
        .get('/ver/:key/:value', Cembarazo.verCembarazo)
        .post('/', Cembarazo.create)
        .get('/:key/:value', Cembarazo.find, Cembarazo.show) 
        .put('/:key/:value', Cembarazo.find,Cembarazo.update)
        .delete('/:key/:value', Cembarazo.find,Cembarazo.remove);

module.exports = Router; 