const express = require('express');

const PacienteCtrl = require('../controllers/PacienteController');

const Router = express.Router();

Router.get('/',PacienteCtrl.index) //api.com/Paciente/
        .get('/ver/:value', PacienteCtrl.verPaciente)
        .post('/', PacienteCtrl.create)
        .get('/:key/:value', PacienteCtrl.find, PacienteCtrl.show) 
        .put('/:key/:value', PacienteCtrl.find,PacienteCtrl.update)
        .delete('/:key/:value', PacienteCtrl.find,PacienteCtrl.remove);

module.exports = Router; 