const mongoose = require('mongoose');
const ListaCobroSchema = new mongoose.Schema({

    

  nombre:{
    type: String,
    required: false 
  },
  descripcion:{
    type: String,
    required: false 
  },
  precio:{
    type: String,
    required: false
  },
  categoria:{
    type: String,
    required: false
  },
  usuario:{
    type: String,
    required: false 
  } 

});

const ListaCobro = mongoose.model('ListaCobro',ListaCobroSchema);
 
module.exports = ListaCobro;