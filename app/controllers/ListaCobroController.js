const ListaCobro = require('../models/ListaCobro');

function index(req, res) {
    ListaCobro.find({})
      .sort({ createdAt: -1 }) // Ordenar por createdAt en orden descendente (más reciente a más antiguo)
      .then(listaCobros => {
        if (listaCobros.length) return res.status(200).send({ listaCobros });
        return res.status(204).send({ message: 'NO CONTENT' });
      })
      .catch(error => res.status(500).send({ error }));
  }
  
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.listaCobros) return res.status(404).send({message: 'not found'});
    let listaCobros = req.body.listaCobros;
    return res.status(200).send({ listaCobros});
}
async function UltimoCarnetPaciente(req, res) {
    try {
      const lastRecord = await ListaCobro.findOne()
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
  
  
  
function verListaCobro(req,res){
    ListaCobro.findOne({id:req.body.id}) 
    .then(listaCobro =>{
        if(listaCobro) return res.status(200).send({listaCobro});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req, res) {
  const newListaCobro = new ListaCobro(req.body);
  newListaCobro.createdAt = new Date(); // Agregar la propiedad createdAt con la fecha actual

  newListaCobro.save()
    .then(listaCobro => res.status(201).send({ listaCobro }))
    .catch(error => res.status(500).send({ error }));
}


function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.listaCobros) return res.status(404).send({message: 'not funsito'});
    let listaCobro = req.body.listaCobros[0];
    listaCobro = Object.assign(listaCobro, req.body);
    listaCobro.save().then(listaCobro =res.status(200).send({message:'UPDATED', listaCobro})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.listaCobros) return res.status(404).send({message: 'no funcio'});
    req.body.listaCobros[0].remove().then(listaCobro => res.status(200).send({message:'eliminao',listaCobro})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    ListaCobro.find(query).then(listaCobros =>{
        if(!listaCobros.length) return next();
        req.body.listaCobros = listaCobros;
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
    verListaCobro,
    UltimoCarnetPaciente
}