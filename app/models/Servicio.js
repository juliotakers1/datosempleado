const mongoose = require('mongoose');
const ServicioSchema = new mongoose.Schema({

    

  nombre:{
  type: String,
  required: false 
},
  descripcion:{
    type: String,
    required: false 
  },
  


});

const Servicio = mongoose.model('Servicio',ServicioSchema);
 
module.exports = Servicio;