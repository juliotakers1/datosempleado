const mongoose = require('mongoose');
const CadultoSchema = new mongoose.Schema({

    
            doctor: {
            type: String,
            required: false
                },
                codigo:{
                    type: String,
                required: false
                },
            paciente: {
                type: String,
                required: false
            },
            fechaConsulta: {
                type: String,
                required: false
            },
            talla: {
                type: String,
                required: false
            },
            peso: {
                type: String,
                required: false
            },
            masaMuscular: {
                type: String,
                required: false
            },
            fc: {
                type: String,
                required: false
            },
            fr: {
                type: String,
                required: false
            },
            t: {
                type: String,
                required: false
            },
            pa: {
                type: String,
                required: false
            },
            tabaco: {
                type: String,
                required: false
            },
            alcohol: {
                type: String,
                required: false
            },
            drogas: {
                type: String,
                required: false
            },
            antecedentesAlimentacion: {
                type: String,
                required: false
            },
            antecedentesMedicos: {
                type: String,
                required: false
            },
            antecedentesQuirurgicos: {
                type: String,
                required: false
            },
            antecedentesFamiliares: {
                type: String,
                required: false
            },
            antecedentesSociales: {
                type: String,
                required: false
            },
            alergias:{
                type: String,
                require: false
            },
            medicamentoTomado: {
                type: String,
                required: false
            },
            enfermedadesCronicas: {
                type: String,
                required: false
            },
            examenFisico:{
                type: String, 
                require: false
            },
            hcomentarios:{
                type: String, 
                require: false
            },
            motivoConsulta:{
                type: String, 
                require: false
            },
            historiaActual:{
                type: String, 
                require: false
            },
            diagnostico:{
                type: String, 
                require: false
            },
            tratamiento:{
                type: String, 
                require: false
            },
            examenLab:{
                type: String, 
                require: false
            },
            usuario: {
                type: String,
                required: false
            },

});

const Cadulto = mongoose.model('Cadulto',CadultoSchema);
 
module.exports = Cadulto;