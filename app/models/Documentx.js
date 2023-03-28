const mongoose = require('mongoose');
const DocumentxSchema = new mongoose.Schema({

    
      
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

const Documentx = mongoose.model('Documentx',DocumentxSchema);
 
module.exports = Documentx;