const Documenta = require('../models/Documenta');

function index(req,res){
    Documenta.find({}) 
    .then(documentas =>{
        if(documentas.length) return res.status(200).send({documentas});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.documentas) return res.status(404).send({message: 'not found'});
    let documentas = req.body.documentas;
    return res.status(200).send({ documentas});
}
function verDocumenta(req,res){
    Documenta.findOne({id:req.body.id}) 
    .then(documenta =>{
        if(documenta) return res.status(200).send({documenta});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req,res){
    console.log(req.body);
    new Documenta(req.body).save().then(documenta => res.status(201).send({documenta})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.documentas) return res.status(404).send({message: 'not funsito'});
    let documenta = req.body.documentas[0];
    documenta = Object.assign(documenta, req.body);
    documenta.save().then(documenta =res.status(200).send({message:'UPDATED', documenta})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.documentas) return res.status(404).send({message: 'no funcio'});
    req.body.documentas[0].remove().then(documenta => res.status(200).send({message:'eliminao',documenta})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Documenta.find(query).then(documentas =>{
        if(!documentas.length) return next();
        req.body.documentas = documentas;
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
    verDocumenta
}