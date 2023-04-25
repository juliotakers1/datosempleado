const mongoose = require('mongoose');
const VentaSchema = new mongoose.Schema({

    
  paciente:{
    type: String,
    required: false
  },
  fecha:{
    type: String,
    required: false
  },
  datoscobro:{
    type: Array,
    required: true
  },
  

});

const Venta = mongoose.model('Venta',VentaSchema);
 
module.exports = Venta;