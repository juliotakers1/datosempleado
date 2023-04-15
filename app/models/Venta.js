const mongoose = require('mongoose');
const VentaSchema = new mongoose.Schema({

    
  codigousuario:{
    type: String,
    required: false
  },
  nombre:{
    type: String,
    required: false
  },
  producto:{
    type: Array,
    required: true
  },
  total:{
    type: Number,
    required: true
  },
  usuario:{
    type: String,
    required: false
  },
  fecha:{
    type: String,
    required: false
  },
  hora:{
    type: String,
    required: false
  },

});

const Venta = mongoose.model('Venta',VentaSchema);
 
module.exports = Venta;