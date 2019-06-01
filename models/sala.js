const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required:[true,"El nombre es REQUERIDO"]
    },
    description: {
        type:String,
        required:[true,"La descripcion es REQUERIDA"]
    },
    state: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Sala', userSchema);
    
