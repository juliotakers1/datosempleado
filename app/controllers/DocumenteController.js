const Documente = require('../models/Documente');

function index(req,res){
    Documente.find({}) 
    .then(documentes =>{
        if(documentes.length) return res.status(200).send({documentes});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.documentes) return res.status(404).send({message: 'not found'});
    let documentes = req.body.documentes;
    return res.status(200).send({ documentes});
}
function verDocumente(req,res){
    Documente.findOne({id:req.body.id}) 
    .then(documente =>{
        if(documente) return res.status(200).send({documente});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req,res){
    console.log(req.body);
    new Documente(req.body).save().then(documente => res.status(201).send({documente})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.documentes) return res.status(404).send({message: 'not funsito'});
    let documente = req.body.documentes[0];
    documente = Object.assign(documente, req.body);
    documente.save().then(documente =res.status(200).send({message:'UPDATED', documente})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.documentes) return res.status(404).send({message: 'no funcio'});
    req.body.documentes[0].remove().then(documente => res.status(200).send({message:'eliminao',documente})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Documente.find(query).then(documentes =>{
        if(!documentes.length) return next();
        req.body.documentes = documentes;
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
    verDocumente
}