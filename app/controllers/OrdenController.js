const Orden = require('../models/Orden');

function index(req, res) {
    Orden.find({})
      .sort({ createdAt: -1 }) // Ordenar por createdAt en orden descendente (más reciente a más antiguo)
      .then(Ordenes => {
        if (Ordenes.length) return res.status(200).send({ Ordenes });
        return res.status(204).send({ message: 'NO CONTENT' });
      })
      .catch(error => res.status(500).send({ error }));
  }
  
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.Ordenes) return res.status(404).send({message: 'not found'});
    let Ordenes = req.body.Ordenes;
    return res.status(200).send({ Ordenes});
}
async function UltimoCarnetPaciente(req, res) {
    try {
      const lastRecord = await Orden.findOne()
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
  
  
  
function verOrden(req,res){
    Orden.findOne({id:req.body.id}) 
    .then(orden =>{
        if(orden) return res.status(200).send({orden});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req, res) {
  const newOrden = new Orden(req.body);
  newOrden.createdAt = new Date(); // Agregar la propiedad createdAt con la fecha actual

  newOrden.save()
    .then(orden => res.status(201).send({ orden }))
    .catch(error => res.status(500).send({ error }));
}


function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.Ordenes) return res.status(404).send({message: 'not funsito'});
    let orden = req.body.Ordenes[0];
    orden = Object.assign(orden, req.body);
    orden.save().then(orden =res.status(200).send({message:'UPDATED', orden})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.Ordenes) return res.status(404).send({message: 'no funcio'});
    req.body.Ordenes[0].remove().then(orden => res.status(200).send({message:'eliminao',orden})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Orden.find(query).then(Ordenes =>{
        if(!Ordenes.length) return next();
        req.body.Ordenes = Ordenes;
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
    verOrden,
    UltimoCarnetPaciente
}