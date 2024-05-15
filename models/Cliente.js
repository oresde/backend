const mongoose = require('mongoose');

// Este modelo que vamos hacer debe ser igual a la base de datos BD

const clienteSchema = mongoose.Schema({

    //objetos
    
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
},{versionkey: false });

//exportar 

module.exports = mongoose.model('Cliente', clienteSchema);