const Producto = require('../models/Producto');

function index(req,res){
    Producto.find({}) 
    .then(productos =>{
        if(productos.length) return res.status(200).send({productos});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.productos) return res.status(404).send({message: 'not found'});
    let productos = req.body.productos;
    return res.status(200).send({ productos});
}

function create(req,res){
    console.log(req.body);
    new Producto(req.body).save().then(producto => res.status(201).send({producto})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.productos) return res.status(404).send({message: 'not funsito'});
    let producto = req.body.productos[0];
    producto = Object.assign(producto, req.body);
    producto.save().then(producto =res.status(200).send({message:'UPDATED', producto})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.productos) return res.status(404).send({message: 'no funcio'});
    req.body.productos[0].remove().then(producto => res.status(200).send({message:'eliminao',producto})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Producto.find(query).then(productos =>{
        if(!productos.length) return next();
        req.body.productos = productos;
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