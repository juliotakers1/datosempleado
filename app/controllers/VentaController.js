const Venta = require('../models/Venta');

function index(req,res){
    Venta.find({}) 
    .then(ventas =>{
        if(ventas.length) return res.status(200).send({ventas});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
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
    find
}