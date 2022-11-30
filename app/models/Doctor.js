const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({

    
      nombres:{
        type: String,
        required: false
      },
      apellidos:{
        type: String,
        required: false
      },
      telefono:{
        type: String,
        required: false
      },
      direccion:{
        type: String,
        required: false
      },
      especialidad:{
        type: String,
        required: false
      },
      dpi:{
        type: String,
        required: false
      },
      colegiado:{
        type: String,
        required: false
      }

});

const Doctor = mongoose.model('Doctor',DoctorSchema);
 
module.exports = Doctor;