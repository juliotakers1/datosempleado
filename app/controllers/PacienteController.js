const Paciente = require('../models/Paciente');

function index(req,res){
    Paciente.find({}) 
    .then(pacientes =>{
        if(pacientes.length) return res.status(200).send({pacientes});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.pacientes) return res.status(404).send({message: 'not found'});
    let pacientes = req.body.pacientes;
    return res.status(200).send({ pacientes});
}

function create(req,res){
    console.log(req.body);
    new Paciente(req.body).save().then(paciente => res.status(201).send({paciente})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.pacientes) return res.status(404).send({message: 'not funsito'});
    let paciente = req.body.pacientes[0];
    paciente = Object.assign(paciente, req.body);
    paciente.save().then(paciente =res.status(200).send({message:'UPDATED', paciente})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.pacientes) return res.status(404).send({message: 'no funcio'});
    req.body.pacientes[0].remove().then(paciente => res.status(200).send({message:'eliminao',paciente})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Paciente.find(query).then(pacientes =>{
        if(!pacientes.length) return next();
        req.body.pacientes = pacientes;
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
    find
}