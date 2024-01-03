const mongoose = require('mongoose');
const GastoSchema = new mongoose.Schema({

    

  nombre:{
  type: String,
  required: false 
},
  descripcion:{
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

const Gasto = mongoose.model('Gasto',GastoSchema);
 
module.exports = Gasto;