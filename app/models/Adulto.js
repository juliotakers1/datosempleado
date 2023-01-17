const mongoose = require('mongoose');
const AdultoSchema = new mongoose.Schema({

    
  carnetPaciente:{
    type: String,
    required: false
},
  fechaingreso:{
    type: String,
    required: false
},
  nombres:{
    type: String,
    required: false 
  },
  apellidos:{
    type: String,
    required: false 
  },
  fechaNacimiento:{
    type: String,
    required: false
  },
  lugarNacimiento:{
    type: String,
    required: false 
  },
  edad:{
    type: String,
    required: false 
  },
  dpi:{
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
  genero:{
    type: String,
    required: false 
  },
  estadoCivil:{
    type: String,
    required: false
  },
  grupoEtnico:{
    type: String,
    required: false 
  },
  escolaridad:{
    type: String,
    required: false 
  },
  alfabeta:{
    type: String,
    required: false 
  },
  tipoSangre:{
    type: String,
    required: false 
  },
  altura:{
    type: String,
    required: false 
  },
  peso:{
    type: String,
    required: false
  },
  masaMuscular:{
    type: String,
    required: false 
  }, 
  nombrePadre:{
    type: String,
    required: false
  },
  telefonoPadre:{
    type: String,
    required: false 
  },
  nombreMadre:{
    type: String,
    required: false
  },
  telefonoMadre:{
    type: String,
    required: false 
  },
  urgenciaAvisar:{
    type: String,
    required:false,
  },
  telefonoUrgencia:{
    type: String,
    required:false
  },
  usuario:{
    type: String,
    required: false 
  } 

});

const Adulto = mongoose.model('Adulto',AdultoSchema);
 
module.exports = Adulto;