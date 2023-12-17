const mongoose = require('mongoose');
const AdultoSchema = new mongoose.Schema({

    
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

const Adulto = mongoose.model('Adulto',AdultoSchema);
 
module.exports = Adulto;