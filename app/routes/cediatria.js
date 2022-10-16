const express = require('express');

const Cediatria = require('../controllers/CediatriaController');

const Router = express.Router();

        Router.get('/',Cediatria.index) //api.com/Consulta/
        .get('/ver/:key/:value', Cediatria.verCediatria)
        .post('/', Cediatria.create)
        .get('/:key/:value', Cediatria.find, Cediatria.show) 
        .put('/:key/:value', Cediatria.find,Cediatria.update)
        .delete('/:key/:value', Cediatria.find,Cediatria.remove);

module.exports = Router; 