const mongoose = require('mongoose');
const IngresoSchema = new mongoose.Schema({

    

  nombre:{
  type: String,
  required: false 
},
  descripcion:{
    type: String,
    required: false 
  },
  servicio:{
    type: String,
    required: false 
  },
  cantidad:{
    type: Number,
    required: false 
  },
  fecha:{
    type: String,
    required: false 
  },
  


});

const Ingreso = mongoose.model('Ingreso',IngresoSchema);
 
module.exports = Ingreso;