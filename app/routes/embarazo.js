const express = require('express');

const EmbarazoCtrl = require('../controllers/EmbarazoController');

const Router = express.Router();

Router.get('/',EmbarazoCtrl.index) //api.com/Embarazo/
        .get('/ver/:value', EmbarazoCtrl.verEmbarazo)
        .post('/', EmbarazoCtrl.create)
        .get('/:key/:value', EmbarazoCtrl.find, EmbarazoCtrl.show) 
        .put('/:key/:value', EmbarazoCtrl.find,EmbarazoCtrl.update)
        .delete('/:key/:value', EmbarazoCtrl.find,EmbarazoCtrl.remove);

module.exports = Router; 