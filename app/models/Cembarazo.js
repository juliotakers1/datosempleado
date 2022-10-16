const mongoose = require('mongoose');
const CembarazoSchema = new mongoose.Schema({

    
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
            ag:{
                type: String,
                required: false
            },
            ap:{
                type: String,
                required: false
            },
            ac:{
                type: String,
                required: false
            },
            ab:{
                type: String,
                required: false
            },
            app:{
                type: String,
                required: false
            },
            ahv:{
                type: String,
                required: false
            },
            ahm:{
                type: String,
                required: false
            },
            ahbhtc:{
                type: String,
                required: false
            },
            agruporh:{
                type: String,
                required: false
            },
            afur:{
                type: String,
                required: false
            },
            aeg:{
                type: String,
                required: false
            },
            fpp:{
                type: String,
                required: false
            },
            usg:{
                type: String,
                required: false
            },
            aeg:{
                type: String,
                required: false
            },
            afpp:{
                type: String,
                required: false
            },
            vih:{
                type: String,
                required: false
            },
            vdrl:{
                type: String,
                required: false
            },
            orina:{
                type: String,
                required: false
            },
            glucosa:{
                type: String,
                required: false
            },
            ncitas:{
                type: String,
                required: false
            },
            cprenatal:{
                type: String,
                required: false
            },
            vprenatales:{
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
                required: false
            },
            medicamentoTomado: {
                type: String,
                required: false
            },
            enfermedadesCronicas: {
                type: String,
                required: false
            },
            efisico:{
                type: String,
                required: false
            },
            hcomentarios:{
                type: String,
                required: false
            },
            auterina:{
                type: String,
                required: false
            },
            pfetal:{
                type: String,
                required: false
            },
            fcfminuto:{
                type: String,
                required: false
            },
            tactov:{
                type: String,
                required: false
            },
            diferido:{
                type: String,
                required: false
            },
            motivoConsulta:{
                type: String,
                required: false
            },
            henfermedad:{
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

const Cembarazo = mongoose.model('Cembarazo',CembarazoSchema);
 
module.exports = Cembarazo;