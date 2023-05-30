const mongoose = require('mongoose');
const ExamenSchema = new mongoose.Schema({

    
  carnetPaciente:{
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
  examen:{
    type: String,
    required: false 
  },
  
  usuario:{
    type: String,
    required: false 
  } 

});

const Examen = mongoose.model('Examen',ExamenSchema);
 
module.exports = Examen;