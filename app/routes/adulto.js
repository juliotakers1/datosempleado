const express = require('express');

const AdultoCtrl = require('../controllers/AdultoController');

const Router = express.Router();

Router.get('/',AdultoCtrl.index) //api.com/Adulto/
        .get('/ver/:value', AdultoCtrl.verAdulto)
        .post('/', AdultoCtrl.create)
        .get('/:key/:value', AdultoCtrl.find, AdultoCtrl.show) 
        .put('/:key/:value', AdultoCtrl.find,AdultoCtrl.update)
        .delete('/:key/:value', AdultoCtrl.find,AdultoCtrl.remove);

module.exports = Router; 