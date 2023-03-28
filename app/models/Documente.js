const mongoose = require('mongoose');
const DocumenteSchema = new mongoose.Schema({

    
      
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

const Documente = mongoose.model('Documente',DocumenteSchema);
 
module.exports = Documente;