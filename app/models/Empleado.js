const mongoose = require('mongoose');
const EmpleadoSchema = new mongoose.Schema({

    

  nombre:{
  type: String,
  required: false 
},
  apellido:{
    type: String,
    required: false 
  },
  direccion:{
    type: String,
    required: false 
  },
  edad:{
    type: String,
    required: false 
  },
  profesion:{
    type: String,
    required: false 
  },
  estadocivil:{
    type: String,
    required: false 
  },
  


});

const Empleado = mongoose.model('Empleado',EmpleadoSchema);
 
module.exports = Empleado;