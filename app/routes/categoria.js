const express = require('express');

const CategoriaCtrl = require('../controllers/CategoriaController');
const {verificarAuth, verificarAdministrador} = require('../middlewares/autenticacion.js');

const Router = express.Router();

Router.get('/',  CategoriaCtrl.index, verificarAuth, verificarAdministrador) //api.com/Categoria/
        .post('/',  CategoriaCtrl.create, verificarAuth, verificarAdministrador)
        .get('/:key/:value',  CategoriaCtrl.find, CategoriaCtrl.show, verificarAuth, verificarAdministrador) 
        .put('/:key/:value',  CategoriaCtrl.find,CategoriaCtrl.update, verificarAuth, verificarAdministrador)
        .delete('/:key/:value',  CategoriaCtrl.find,CategoriaCtrl.remove, verificarAuth, verificarAdministrador);

module.exports = Router; 