const mongoose = require('mongoose');
const CobroSchema = new mongoose.Schema({

  codigopaciente:{
    type: String,
    required: false
  }, 
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

const Cobro = mongoose.model('Cobro',CobroSchema);
 
module.exports = Cobro;