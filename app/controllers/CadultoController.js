const Cadultos = require('../models/Cadulto');

function index(req,res){
    Cadultos.find({}) 
    .then(cadultos =>{
        if(cadultos.length) return res.status(200).send({cadultos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
async function OrdenUltimoAdulto(req,res){
    try {
        const lastOrder = await Cadultos.findOne({}, {_id: 1}).sort({_id: -1}).limit(1);
        res.send({ _id: lastOrder._id });
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
}
function verCadulto(req,res){
    Cadultos.findOne({id:req.body.id}) 
    .then(cadultos =>{
        if(cadultos) return res.status(200).send({cadultos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.cadultos) return res.status(404).send({message: 'not found'});
    let cadultos = req.body.cadultos;
    return res.status(200).send({ cadultos});
}

function create(req,res){
    console.log(req.body);
    new Cadultos(req.body).save().then(cadultos => res.status(201).send({cadultos})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cadultos) return res.status(404).send({message: 'not funsito'});
    let cadultos = req.body.cadultos[0];
    cadultos = Object.assign(cadultos, req.body);
    cadultos.save().then(cadultos =res.status(200).send({message:'UPDATED', cadultos})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cadultos) return res.status(404).send({message: 'no funcio'});
    req.body.cadultos[0].remove().then(cadultos => res.status(200).send({message:'eliminao',cadultos})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Cadultos.find(query).then(cadultos =>{
        if(!cadultos.length) return next();
        req.body.cadultos = cadultos;
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
    verCadulto,
    OrdenUltimoAdulto
}