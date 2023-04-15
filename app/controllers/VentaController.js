const Venta = require('../models/Venta');

function index(req,res){
    Venta.find({}) 
    .then(ventas =>{
        if(ventas.length) return res.status(200).send({ventas});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
async function paginacion (req,res){
    const page = parseInt(req.query.page) || 1; // Obtener el número de página actual
  const limit = parseInt(req.query.limit) || 25; // Establecer el límite de registros por página
  const skipIndex = (page - 1) * limit; // Calcular el índice de inicio de la página actual
  
  try {
    const ventas = await Venta.find().skip(skipIndex).limit(limit); // Obtener las ventas para la página actual
    const totalVentas = await Venta.countDocuments(); // Obtener el número total de ventas
    
    res.json({
      totalPages: Math.ceil(totalVentas / limit),
      currentPage: page,
      ventas
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.ventas) return res.status(404).send({message: 'not found'});
    let ventas = req.body.ventas;
    return res.status(200).send({ ventas});
}

function create(req,res){
    console.log(req.body);
    new Venta(req.body).save().then(venta => res.status(201).send({venta})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.ventas) return res.status(404).send({message: 'not funsito'});
    let venta = req.body.ventas[0];
    venta = Object.assign(venta, req.body);
    venta.save().then(venta =res.status(200).send({message:'UPDATED', venta})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.ventas) return res.status(404).send({message: 'no funcio'});
    req.body.ventas[0].remove().then(venta => res.status(200).send({message:'eliminao',venta})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Venta.find(query).then(ventas =>{
        if(!ventas.length) return next();
        req.body.ventas = ventas;
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
    paginacion
    
}