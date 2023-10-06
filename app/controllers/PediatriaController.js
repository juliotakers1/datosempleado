const Pediatria = require('../models/Pediatria');

function index(req,res){
    Pediatria.find({}) 
    .then(pediatrias =>{
        if(pediatrias.length) return res.status(200).send({pediatrias});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
async function UltimoCarnetPaciente(req, res) {
    try {
      const lastRecord = await Pediatria.findOne()
        .sort({ carnetPaciente: -1 }) // Ordenar por carnetPaciente en orden descendente
        .exec();
  
      if (lastRecord) {
        res.send(lastRecord); // Devuelve el registro completo
      } else {
        res.status(404).send('No se encontraron registros');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor');
    }
  }
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.pediatrias) return res.status(404).send({message: 'not found'});
    let pediatrias = req.body.pediatrias;
    return res.status(200).send({ pediatrias});
}
function verPediatria(req,res){
    Pediatria.findOne({id:req.body.id}) 
    .then(pediatria =>{
        if(pediatria) return res.status(200).send({pediatria});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req,res){
    console.log(req.body);
    new Pediatria(req.body).save().then(pediatria => res.status(201).send({pediatria})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.pediatrias) return res.status(404).send({message: 'not funsito'});
    let pediatria = req.body.pediatrias[0];
    pediatria = Object.assign(pediatria, req.body);
    pediatria.save().then(pediatria =res.status(200).send({message:'UPDATED', pediatria})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.pediatrias) return res.status(404).send({message: 'no funcio'});
    req.body.pediatrias[0].remove().then(pediatria => res.status(200).send({message:'eliminao',pediatria})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Pediatria.find(query).then(pediatrias =>{
        if(!pediatrias.length) return next();
        req.body.pediatrias = pediatrias;
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
    verPediatria,
    UltimoCarnetPaciente
}