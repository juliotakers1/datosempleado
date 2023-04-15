const Categoria = require('../models/Categoria');

function index(req,res){
    Categoria.find({}) 
    .then(categorias =>{
        if(categorias.length) return res.status(200).send({categorias});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));
}
function show(req,res){
    if(req.body.error) return res.status(500).send({error});

    if(!req.body.categorias) return res.status(404).send({message: 'not found'});
    let categorias = req.body.categorias;
    return res.status(200).send({ categorias});
}

function create(req,res){
    console.log(req.body);
    new Categoria(req.body).save().then(categoria => res.status(201).send({categoria})).catch(error => res.status(500).send({error}));
    
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.categorias) return res.status(404).send({message: 'not funsito'});
    let categoria = req.body.categorias[0];
    categoria = Object.assign(categoria, req.body);
    categoria.save().then(categoria =res.status(200).send({message:'UPDATED', categoria})).catch(error => res.status(500).send({error}));

}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.categorias) return res.status(404).send({message: 'no funcio'});
    req.body.categorias[0].remove().then(categoria => res.status(200).send({message:'eliminao',categoria})).catch(error => res.status(500).send(error));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Categoria.find(query).then(categorias =>{
        if(!categorias.length) return next();
        req.body.categorias = categorias;
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