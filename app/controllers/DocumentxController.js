const Documentx = require('../models/Documentx');

function index(req,res){
    Documentx.find({}) 
    .then(documentxs =>{
        if(documentxs.length) return res.status(200).send({documentxs});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.documentxs) return res.status(404).send({message: 'not found'});
    let documentxs = req.body.documentxs;
    return res.status(200).send({ documentxs});
}
function verDocumentx(req,res){
    Documentx.findOne({id:req.body.id}) 
    .then(documentx =>{
        if(documentx) return res.status(200).send({documentx});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req,res){
    console.log(req.body);
    new Documentx(req.body).save().then(documentx => res.status(201).send({documentx})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.documentxs) return res.status(404).send({message: 'not funsito'});
    let documentx = req.body.documentxs[0];
    documentx = Object.assign(documentx, req.body);
    documentx.save().then(documentx =res.status(200).send({message:'UPDATED', documentx})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.documentxs) return res.status(404).send({message: 'no funcio'});
    req.body.documentxs[0].remove().then(documentx => res.status(200).send({message:'eliminao',documentx})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Documentx.find(query).then(documentxs =>{
        if(!documentxs.length) return next();
        req.body.documentxs = documentxs;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find,
    verDocumentx
}