const express = require('express');

const Cadulto = require('../controllers/CadultoController');

const Router = express.Router();

        Router.get('/',Cadulto.index) //api.com/Consulta/
        .get('/ver/:key/:value', Cadulto.verCadulto)
        .post('/', Cadulto.create)
        .get('/:key/:value', Cadulto.find, Cadulto.show) 
        .put('/:key/:value', Cadulto.find,Cadulto.update)
        .delete('/:key/:value', Cadulto.find,Cadulto.remove);

module.exports = Router; 