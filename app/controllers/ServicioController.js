const Servicio = require('../models/Servicio');

function index(req, res) {
    Servicio.find({})
      .sort({ createdAt: -1 }) // Ordenar por createdAt en orden descendente (más reciente a más antiguo)
      .then(servicios => {
        if (servicios.length) return res.status(200).send({ servicios });
        return res.status(204).send({ message: 'NO CONTENT' });
      })
      .catch(error => res.status(500).send({ error }));
  }
  
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.servicios) return res.status(404).send({message: 'not found'});
    let servicios = req.body.servicios;
    return res.status(200).send({ servicios});
}
async function UltimoCarnetPaciente(req, res) {
    try {
      const lastRecord = await Servicio.findOne()
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
  
  
  
function verServicio(req,res){
    Servicio.findOne({id:req.body.id}) 
    .then(servicio =>{
        if(servicio) return res.status(200).send({servicio});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req, res) {
  const newServicio = new Servicio(req.body);
  newServicio.createdAt = new Date(); // Agregar la propiedad createdAt con la fecha actual

  newServicio.save()
    .then(servicio => res.status(201).send({ servicio }))
    .catch(error => res.status(500).send({ error }));
}


function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.servicios) return res.status(404).send({message: 'not funsito'});
    let servicio = req.body.servicios[0];
    servicio = Object.assign(servicio, req.body);
    servicio.save().then(servicio =res.status(200).send({message:'UPDATED', servicio})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.servicios) return res.status(404).send({message: 'no funcio'});
    req.body.servicios[0].remove().then(servicio => res.status(200).send({message:'eliminao',servicio})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Servicio.find(query).then(servicios =>{
        if(!servicios.length) return next();
        req.body.servicios = servicios;
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
    verServicio,
    UltimoCarnetPaciente
}