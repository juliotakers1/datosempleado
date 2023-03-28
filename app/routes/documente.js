const express = require('express');

const DocumenteCtrl = require('../controllers/DocumenteController');


const Router = express.Router();

Router.get('/',   DocumenteCtrl.index)
        .post('/ver/:value', DocumenteCtrl.verDocumente)
        .post('/',    DocumenteCtrl.create)
        .get('/:key/:value',  DocumenteCtrl.find, DocumenteCtrl.show) 
        .put('/:key/:value',   DocumenteCtrl.find,DocumenteCtrl.update)
        .delete('/:key/:value',  DocumenteCtrl.find,DocumenteCtrl.remove);

module.exports = Router; 