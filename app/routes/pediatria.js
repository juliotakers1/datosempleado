const express = require('express');

const PediatriaCtrl = require('../controllers/PediatriaController');

const Router = express.Router();

Router.get('/',PediatriaCtrl.index) //api.com/Pediatria/
        .get('/ver/:value', PediatriaCtrl.verPediatria)
        .post('/', PediatriaCtrl.create)
        .get('/:key/:value', PediatriaCtrl.find, PediatriaCtrl.show) 
        .put('/:key/:value', PediatriaCtrl.find,PediatriaCtrl.update)
        .delete('/:key/:value', PediatriaCtrl.find,PediatriaCtrl.remove);

module.exports = Router; 