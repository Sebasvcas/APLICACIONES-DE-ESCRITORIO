const {Schema,model} = require('mongoose');

const tareaSchema = new Schema({
    id: {type: String},
    titulo: {type:String},
    description: {type:String},
    status: {type:String,default:'new'},
    fecha: {type: String}
});

module.exports = model('tareas',tareaSchema);





