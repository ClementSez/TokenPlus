const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    libelle: {
        type: String,
        required: true
    },
    code_acs: {
        type: String,
        required: true
    }
});

// on créer le model, on lui donne un nom et le schéma
module.exports = mongoose.model('servicedouane', serviceSchema);