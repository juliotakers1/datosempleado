const mongoose = require('mongoose');
const OrdenShema = new mongoose.Schema({

    
  fecha:{
    type: String,
    required: false
},
  paciente:{
  type: String,
  required: false 
},
  estado:{
    type: String,
    required: false 
  },
  laboratorios:{
    type: Array,
    required: false 
  },
  usuario:{
    type: String,
    required: false 
  } 

});

const Orden = mongoose.model('Orden',OrdenShema);
 
module.exports = Orden;