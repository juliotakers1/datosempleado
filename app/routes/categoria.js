const express = require('express');

const CategoriaCtrl = require('../controllers/CategoriaController');
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion.js');

const Router = express.Router();

Router.get('/', verificarAuth, verificarAdministrador,   CategoriaCtrl.index) //api.com/Categoria/
        .post('/', verificarAuth, verificarAdministrador,    CategoriaCtrl.create)
        .get('/:key/:value', verificarAuth, verificarAdministrador,  CategoriaCtrl.find, CategoriaCtrl.show) 
        .put('/:key/:value',  verificarAuth, verificarAdministrador,  CategoriaCtrl.find,CategoriaCtrl.update)
        .delete('/:key/:value', verificarAuth, verificarAdministrador,  CategoriaCtrl.find,CategoriaCtrl.remove);

module.exports = Router; 