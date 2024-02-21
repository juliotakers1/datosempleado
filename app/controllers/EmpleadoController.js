const Empleado = require('../models/Empleado');

function index(req, res) {
    Empleado.find({})
      .sort({ createdAt: -1 }) // Ordenar por createdAt en orden descendente (más reciente a más antiguo)
      .then(empleados => {
        if (empleados.length) return res.status(200).send({ empleados });
        return res.status(204).send({ message: 'NO CONTENT' });
      })
      .catch(error => res.status(500).send({ error }));
  }
  
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.empleados) return res.status(404).send({message: 'not found'});
    let empleados = req.body.empleados;
    return res.status(200).send({ empleados});
}

function create(req, res) {
  const newEmpleado = new Empleado(req.body);
  newEmpleado.createdAt = new Date(); // Agregar la propiedad createdAt con la fecha actual

  newEmpleado.save()
    .then(empleado => res.status(201).send({ empleado }))
    .catch(error => res.status(500).send({ error }));
}


function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.empleados) return res.status(404).send({message: 'not funsito'});
    let empleado = req.body.empleados[0];
    empleado = Object.assign(empleado, req.body);
    empleado.save().then(empleado =res.status(200).send({message:'UPDATED', empleado})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.empleados) return res.status(404).send({message: 'no funcio'});
    req.body.empleados[0].remove().then(empleado => res.status(200).send({message:'eliminao',empleado})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Empleado.find(query).then(empleados =>{
        if(!empleados.length) return next();
        req.body.empleados = empleados;
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
    find
}