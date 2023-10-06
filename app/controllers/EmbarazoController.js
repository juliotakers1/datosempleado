const Embarazo = require('../models/Embarazo');

function index(req,res){
    Embarazo.find({}) 
    .then(embarazos =>{
        if(embarazos.length) return res.status(200).send({embarazos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.embarazos) return res.status(404).send({message: 'not found'});
    let embarazos = req.body.embarazos;
    return res.status(200).send({ embarazos});
}
async function UltimoCarnetPaciente(req, res) {
    try {
      const lastRecord = await Embarazo.findOne()
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
function verEmbarazo(req,res){
    Embarazo.findOne({id:req.body.id}) 
    .then(embarazo =>{
        if(embarazo) return res.status(200).send({embarazo});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req,res){
    console.log(req.body);
    new Embarazo(req.body).save().then(embarazo => res.status(201).send({embarazo})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.embarazos) return res.status(404).send({message: 'not funsito'});
    let embarazo = req.body.embarazos[0];
    embarazo = Object.assign(embarazo, req.body);
    embarazo.save().then(embarazo =res.status(200).send({message:'UPDATED', embarazo})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.embarazos) return res.status(404).send({message: 'no funcio'});
    req.body.embarazos[0].remove().then(embarazo => res.status(200).send({message:'eliminao',embarazo})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Embarazo.find(query).then(embarazos =>{
        if(!embarazos.length) return next();
        req.body.embarazos = embarazos;
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
    verEmbarazo,
    UltimoCarnetPaciente
}