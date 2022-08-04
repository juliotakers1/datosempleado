const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({

    
      nombres:{
        type: String,
        required: true
      },
      apellidos:{
        type: String,
        required: true
      },
      telefono:{
        type: Number,
        required: true
      },
      direccion:{
        type: String,
        required: true
      },
      especialidad:{
        type: String,
        required: true
      },
      dpi:{
        type: String,
        required: true
      },
      colegiado:{
        type: String,
        required: true
      }

});

const Doctor = mongoose.model('Doctor',DoctorSchema);
 
module.exports = Doctor;