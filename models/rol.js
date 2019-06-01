const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rolSchema = new Schema({
    name: {
        type: String,
        required:[true,"El nombre debe ser requerido"]
    },
    description: {
        type: String,
        required:[true,"La"]
    },
    state: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Rol',rolSchema);