const Cembarazo = require('../models/Cembarazo');

function index(req,res){
    Cembarazo.find({}) 
    .then(cembarazos =>{
        if(cembarazos.length) return res.status(200).send({cembarazos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function verCembarazo(req,res){
    Cembarazo.findOne({id:req.body.id}) 
    .then(cembarazo =>{
        if(cembarazo) return res.status(200).send({cembarazo});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.cembarazos) return res.status(404).send({message: 'not found'});
    let cembarazos = req.body.cembarazos;
    return res.status(200).send({ cembarazos});
}

function create(req,res){
    console.log(req.body);
    new Cembarazo(req.body).save().then(cembarazo => res.status(201).send({cembarazo})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cembarazos) return res.status(404).send({message: 'not funsito'});
    let cembarazo = req.body.cembarazos[0];
    cembarazo = Object.assign(cembarazo, req.body);
    cembarazo.save().then(cembarazo =res.status(200).send({message:'UPDATED', cembarazo})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cembarazos) return res.status(404).send({message: 'no funcio'});
    req.body.cembarazos[0].remove().then(cembarazo => res.status(200).send({message:'eliminao',cembarazo})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Cembarazo.find(query).then(cembarazos =>{
        if(!cembarazos.length) return next();
        req.body.cembarazos = cembarazos;
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
    verCembarazo
}