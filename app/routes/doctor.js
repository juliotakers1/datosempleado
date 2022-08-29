const express = require('express');

const DoctorCtrl = require('../controllers/DoctorController');


const Router = express.Router();

Router.get('/',   DoctorCtrl.index)
        .post('/ver/:value', DoctorCtrl.verDoctor)
        .post('/',    DoctorCtrl.create)
        .get('/:key/:value',  DoctorCtrl.find, DoctorCtrl.show) 
        .put('/:key/:value',   DoctorCtrl.find,DoctorCtrl.update)
        .delete('/:key/:value',  DoctorCtrl.find,DoctorCtrl.remove);

module.exports = Router; 