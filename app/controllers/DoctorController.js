const Doctor = require('../models/Doctor');

function index(req,res){
    Doctor.find({}) 
    .then(doctores =>{
        if(doctores.length) return res.status(200).send({doctores});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function verDoctor(req,res){
    Doctor.findOne({id:req.body.id}) 
    .then(doctor =>{
        if(doctor) return res.status(200).send({doctor});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.doctores) return res.status(404).send({message: 'not found'});
    let doctores = req.body.doctores;
    return res.status(200).send({ doctores});
}

function create(req,res){
    console.log(req.body);
    new Doctor(req.body).save().then(doctor => res.status(201).send({doctor})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.doctores) return res.status(404).send({message: 'not funsito'});
    let doctor = req.body.doctores[0];
    doctor = Object.assign(doctor, req.body);
    doctor.save().then(doctor =res.status(200).send({message:'UPDATED', doctor})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.doctores) return res.status(404).send({message: 'no funcio'});
    req.body.doctores[0].remove().then(doctor => res.status(200).send({message:'eliminao',doctor})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Doctor.find(query).then(doctores =>{
        if(!doctores.length) return next();
        req.body.doctores = doctores;
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
    verDoctor
}