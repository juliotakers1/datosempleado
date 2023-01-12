const mongoose = require('mongoose');
const DocumentaSchema = new mongoose.Schema({

    
      
  fecha:{
    type: String,
    required: false
  },
  paciente:{
    type: String,
    required: false
  },
  codigo:{
    type: String,
    required: false
  },
  medicamento:{
    type: Array,
    required: false
  },

});

const Documenta = mongoose.model('Documenta',DocumentaSchema);
 
module.exports = Documenta;