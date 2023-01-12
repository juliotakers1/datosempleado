const express = require('express');

const DocumentaCtrl = require('../controllers/DocumentaController');


const Router = express.Router();

Router.get('/',   DocumentaCtrl.index)
        .post('/ver/:value', DocumentaCtrl.verDocumenta)
        .post('/',    DocumentaCtrl.create)
        .get('/:key/:value',  DocumentaCtrl.find, DocumentaCtrl.show) 
        .put('/:key/:value',   DocumentaCtrl.find,DocumentaCtrl.update)
        .delete('/:key/:value',  DocumentaCtrl.find,DocumentaCtrl.remove);

module.exports = Router; 