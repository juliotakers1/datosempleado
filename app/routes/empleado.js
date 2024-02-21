const express = require('express');

const EmpleadoCtrl = require('../controllers/EmpleadoController');

const Router = express.Router();

Router.get('/',EmpleadoCtrl.index) //api.com/Empleado/
        .post('/', EmpleadoCtrl.create)
        .get('/:key/:value', EmpleadoCtrl.find, EmpleadoCtrl.show) 
        .put('/:key/:value', EmpleadoCtrl.find,EmpleadoCtrl.update)
        .delete('/:key/:value', EmpleadoCtrl.find,EmpleadoCtrl.remove);

module.exports = Router; 