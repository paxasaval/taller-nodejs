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
    userName: {
        type: String,
        required: [true, "El nombre de usuario es requerido"]
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

userschema.methods.toJSON = function() {
    let user = this
    let user_object = user.toObject()
    delete user_object.password
    return user_object
}


module.exports = mongoose.model('User', userschema);