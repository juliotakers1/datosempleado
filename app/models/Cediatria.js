const mongoose = require('mongoose');
const CediatriaSchema = new mongoose.Schema({

    
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
            pt:{
                type: String, 
                require: false
            },
            te:{
                type: String, 
                require: false
            },
            pe:{
                type: String, 
                require: false
            },
            cc:{
                type: String, 
                require: false
            },
            dxnutricional:{
                type: String, 
                require: false
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
            alergias: {
                type: String,
                required: false
            },
            amedicamento: {
                type: String,
                required: false
            },
            enfermedadesCronicas: {
                type: String,
                required: false
            },
            examenFisico:{
                type: String,
                required: false
            },
            hcomentario:{
                type: String,
                required: false
            },
            motivoConsulta:{
                type: String,
                required: false
            },
            hActual:{
                type: String,
                required: false
            },
            diagnosticoMedico: {
                type: String,
                required: false
            },
            ptratamiento: {
                type: String,
                required: false
            },
            elab: {
                type: String,
                required: false
            },
            usuario: {
                type: String,
                required: false
            },

});

const Cediatria = mongoose.model('Cediatria',CediatriaSchema);
 
module.exports = Cediatria;