const Gasto = require('../models/Gasto');

function index(req, res) {
    Gasto.find({})
      .sort({ createdAt: -1 }) // Ordenar por createdAt en orden descendente (más reciente a más antiguo)
      .then(gastos => {
        if (gastos.length) return res.status(200).send({ gastos });
        return res.status(204).send({ message: 'NO CONTENT' });
      })
      .catch(error => res.status(500).send({ error }));
  }
  
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.gastos) return res.status(404).send({message: 'not found'});
    let gastos = req.body.gastos;
    return res.status(200).send({ gastos});
}
async function UltimoCarnetPaciente(req, res) {
    try {
      const lastRecord = await Gasto.findOne()
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
  
  
  
function verGasto(req,res){
    Gasto.findOne({id:req.body.id}) 
    .then(gasto =>{
        if(gasto) return res.status(200).send({gasto});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req, res) {
  const newGasto = new Gasto(req.body);
  newGasto.createdAt = new Date(); // Agregar la propiedad createdAt con la fecha actual

  newGasto.save()
    .then(gasto => res.status(201).send({ gasto }))
    .catch(error => res.status(500).send({ error }));
}


function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.gastos) return res.status(404).send({message: 'not funsito'});
    let gasto = req.body.gastos[0];
    gasto = Object.assign(gasto, req.body);
    gasto.save().then(gasto =res.status(200).send({message:'UPDATED', gasto})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.gastos) return res.status(404).send({message: 'no funcio'});
    req.body.gastos[0].remove().then(gasto => res.status(200).send({message:'eliminao',gasto})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Gasto.find(query).then(gastos =>{
        if(!gastos.length) return next();
        req.body.gastos = gastos;
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
    verGasto,
    UltimoCarnetPaciente
}