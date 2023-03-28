const express = require('express');

const DocumentxCtrl = require('../controllers/DocumentxController');


const Router = express.Router();

Router.get('/',   DocumentxCtrl.index)
        .post('/ver/:value', DocumentxCtrl.verDocumentx)
        .post('/',    DocumentxCtrl.create)
        .get('/:key/:value',  DocumentxCtrl.find, DocumentxCtrl.show) 
        .put('/:key/:value',   DocumentxCtrl.find,DocumentxCtrl.update)
        .delete('/:key/:value',  DocumentxCtrl.find,DocumentxCtrl.remove);

module.exports = Router; 