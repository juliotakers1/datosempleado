const mongoose = require('mongoose');
const ConsultaSchema = new mongoose.Schema({

    
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
            motivoConsulta: {
                type: String,
                required: false
            },
            historiaEnfermedad: {
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
            enfermedadesCronicas: {
                type: String,
                required: false
            },
            medicamentoTomado: {
                type: String,
                required: false
            },
            diagnosticoMedico: {
                type: String,
                required: false
            },
            recomendaciones: {
                type: String,
                required: false
            },
            sugerencias: {
                type: String,
                required: false
            },
            usuario: {
                type: String,
                required: false
            },

});

const Consulta = mongoose.model('Consulta',ConsultaSchema);
 
module.exports = Consulta;