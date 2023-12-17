const mongoose = require('mongoose');
const ListaExamenSchema = new mongoose.Schema({

    
  nombre:{
    type: String,
    required: false
},
  precio:{
  type: String,
  required: false 
},
  peso:{
    type: String,
    required: false 
  },
  usuario:{
    type: String,
    required: false 
  } 

});

const ListaExamen = mongoose.model('ListaExamen',ListaExamenSchema);
 
module.exports = ListaExamen;