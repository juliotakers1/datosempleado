const ListaExamen = require('../models/ListaExamen');

function index(req, res) {
    ListaExamen.find({})
      .sort({ createdAt: -1 }) // Ordenar por createdAt en orden descendente (más reciente a más antiguo)
      .then(listaExamenes => {
        if (listaExamenes.length) return res.status(200).send({ listaExamenes });
        return res.status(204).send({ message: 'NO CONTENT' });
      })
      .catch(error => res.status(500).send({ error }));
  }
  
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.listaExamenes) return res.status(404).send({message: 'not found'});
    let listaExamenes = req.body.listaExamenes;
    return res.status(200).send({ listaExamenes});
}
async function UltimoCarnetPaciente(req, res) {
    try {
      const lastRecord = await ListaExamen.findOne()
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
  
  
  
function verListaExamen(req,res){
    ListaExamen.findOne({id:req.body.id}) 
    .then(listaExamen =>{
        if(listaExamen) return res.status(200).send({listaExamen});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}

function create(req, res) {
  const newListaExamen = new ListaExamen(req.body);
  newListaExamen.createdAt = new Date(); // Agregar la propiedad createdAt con la fecha actual

  newListaExamen.save()
    .then(listaExamen => res.status(201).send({ listaExamen }))
    .catch(error => res.status(500).send({ error }));
}


function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.listaExamenes) return res.status(404).send({message: 'not funsito'});
    let listaExamen = req.body.listaExamenes[0];
    listaExamen = Object.assign(listaExamen, req.body);
    listaExamen.save().then(listaExamen =res.status(200).send({message:'UPDATED', listaExamen})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.listaExamenes) return res.status(404).send({message: 'no funcio'});
    req.body.listaExamenes[0].remove().then(listaExamen => res.status(200).send({message:'eliminao',listaExamen})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    ListaExamen.find(query).then(listaExamenes =>{
        if(!listaExamenes.length) return next();
        req.body.listaExamenes = listaExamenes;
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
    verListaExamen,
    UltimoCarnetPaciente
}