const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({

    
      nombre:{
        type: String,
        required: true
      },
      categoria:{
        type: String,
        required: true
      },
      miligramos:{
        type: String,
        required: true
      },
      laboratorio:{
        type: String,
        required: true
      },
      presentacion:{
        type: String,
        required: true
      },
      precio:{
        type: String,
        required: true 
      },
      stock:{
        type: Number,
        required: true 
      }

});

const Producto = mongoose.model('Producto',ProductoSchema);
 
module.exports = Producto;