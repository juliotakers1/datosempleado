const Examen = require('../models/Examen');

function index(req,res){
    Examen.find({}) 
    .then(examenes =>{
        if(examenes.length) return res.status(200).send({examenes});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.examenes) return res.status(404).send({message: 'not found'});
    let examenes = req.body.examenes;
    return res.status(200).send({ examenes});
}
function verExamen(req,res){
    Examen.findOne({id:req.body.id}) 
    .then(examen =>{
        if(examen) return res.status(200).send({examen});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req,res){
    console.log(req.body);
    new Examen(req.body).save().then(examen => res.status(201).send({examen})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.examenes) return res.status(404).send({message: 'not funsito'});
    let examen = req.body.examenes[0];
    examen = Object.assign(examen, req.body);
    examen.save().then(examen =res.status(200).send({message:'UPDATED', examen})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.examenes) return res.status(404).send({message: 'no funcio'});
    req.body.examenes[0].remove().then(examen => res.status(200).send({message:'eliminao',examen})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Examen.find(query).then(examenes =>{
        if(!examenes.length) return next();
        req.body.examenes = examenes;
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
    verExamen
}