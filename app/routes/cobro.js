const express = require('express');

const CobroCtrl = require('../controllers/CobroController');

const Router = express.Router();

Router.get('/',CobroCtrl.index) //api.com/Cobro/
        .get('/ver/:value', CobroCtrl.verCobro)
        .post('/', CobroCtrl.create)
        .get('/:key/:value', CobroCtrl.find, CobroCtrl.show) 
        .put('/:key/:value', CobroCtrl.find,CobroCtrl.update)
        .delete('/:key/:value', CobroCtrl.find,CobroCtrl.remove);

module.exports = Router; 