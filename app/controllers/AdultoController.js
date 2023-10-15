const Adulto = require('../models/Adulto');

function index(req, res) {
    Adulto.find({})
      .sort({ createdAt: -1 }) // Ordenar por createdAt en orden descendente (más reciente a más antiguo)
      .then(adultos => {
        if (adultos.length) return res.status(200).send({ adultos });
        return res.status(204).send({ message: 'NO CONTENT' });
      })
      .catch(error => res.status(500).send({ error }));
  }
  
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.adultos) return res.status(404).send({message: 'not found'});
    let adultos = req.body.adultos;
    return res.status(200).send({ adultos});
}
async function UltimoCarnetPaciente(req, res) {
    try {
      const lastRecord = await Adulto.findOne()
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
  
  
  
function verAdulto(req,res){
    Adulto.findOne({id:req.body.id}) 
    .then(adulto =>{
        if(adulto) return res.status(200).send({adulto});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req,res){
    console.log(req.body);
    new Adulto(req.body).save().then(adulto => res.status(201).send({adulto})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.adultos) return res.status(404).send({message: 'not funsito'});
    let adulto = req.body.adultos[0];
    adulto = Object.assign(adulto, req.body);
    adulto.save().then(adulto =res.status(200).send({message:'UPDATED', adulto})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.adultos) return res.status(404).send({message: 'no funcio'});
    req.body.adultos[0].remove().then(adulto => res.status(200).send({message:'eliminao',adulto})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Adulto.find(query).then(adultos =>{
        if(!adultos.length) return next();
        req.body.adultos = adultos;
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
    verAdulto,
    UltimoCarnetPaciente
}