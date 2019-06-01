const mongoose = require('mongoose')
//const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let userschema = new Schema({
    name: {
        type: String,
        required:[true,"El nombre es Requerido"]
    },
    lastName : {
        type: String,
        required:[true,"El apellidos es Requerido"]
    },
    email : {
        type: String,
        required:[true,"El email es Requerido"]
    },
    password: {
        type: String,
        required:[true,"El pasword es Requerido"]
    },
    age: {
        type: String
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: [true, "El rol es Requerido"]
    },
    state: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('User', userschema);