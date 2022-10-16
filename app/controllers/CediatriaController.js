const Cediatria = require('../models/Cediatria');

function index(req,res){
    Cediatria.find({}) 
    .then(cediatrias =>{
        if(cediatrias.length) return res.status(200).send({cediatrias});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function verCediatria(req,res){
    Cediatria.findOne({id:req.body.id}) 
    .then(cediatria =>{
        if(cediatria) return res.status(200).send({cediatria});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.cediatrias) return res.status(404).send({message: 'not found'});
    let cediatrias = req.body.cediatrias;
    return res.status(200).send({ cediatrias});
}

function create(req,res){
    console.log(req.body);
    new Cediatria(req.body).save().then(cediatria => res.status(201).send({cediatria})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cediatrias) return res.status(404).send({message: 'not funsito'});
    let cediatria = req.body.cediatrias[0];
    cediatria = Object.assign(cediatria, req.body);
    cediatria.save().then(cediatria =res.status(200).send({message:'UPDATED', cediatria})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cediatrias) return res.status(404).send({message: 'no funcio'});
    req.body.cediatrias[0].remove().then(cediatria => res.status(200).send({message:'eliminao',cediatria})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Cediatria.find(query).then(cediatrias =>{
        if(!cediatrias.length) return next();
        req.body.cediatrias = cediatrias;
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
    verCediatria
}