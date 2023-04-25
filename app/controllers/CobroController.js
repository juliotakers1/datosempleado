const Cobro = require('../models/Cobro');

function index(req,res){
    Cobro.find({}) 
    .then(cobros =>{
        if(cobros.length) return res.status(200).send({cobros});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.cobros) return res.status(404).send({message: 'not found'});
    let cobros = req.body.cobros;
    return res.status(200).send({ cobros});
}
function verCobro(req,res){
    Cobro.findOne({id:req.body.id}) 
    .then(cobro =>{
        if(cobro) return res.status(200).send({cobro});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req,res){
    console.log(req.body);
    new Cobro(req.body).save().then(cobro => res.status(201).send({cobro})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cobros) return res.status(404).send({message: 'not funsito'});
    let cobro = req.body.cobros[0];
    cobro = Object.assign(cobro, req.body);
    cobro.save().then(cobro =res.status(200).send({message:'UPDATED', cobro})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cobros) return res.status(404).send({message: 'no funcio'});
    req.body.cobros[0].remove().then(cobro => res.status(200).send({message:'eliminao',cobro})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Cobro.find(query).then(cobros =>{
        if(!cobros.length) return next();
        req.body.cobros = cobros;
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
    verCobro
}