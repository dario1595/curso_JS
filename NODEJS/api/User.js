const mongoose = require('mongoose'); // Esta variable es para conectar con la libreria

const Users = mongoose.model ('User',
{
    name:{type: String, require: true, minLength: 3}, // requiere true, es por es obligatorio y minLenght es la longitud minima
    lastname:{type: String, require: true, minLength: 3},
});

module.exports = Users;