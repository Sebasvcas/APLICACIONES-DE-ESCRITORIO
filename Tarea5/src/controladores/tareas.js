const { response } = require('express');
const modelo = require('../modelos/tarea');

class tareaController {
   
    gettask(req, res) {
        const id = req.params.id;
        res.send('detalles de la tarea ' + id);
    }
    taskList(req, res) {
        modelo.find({}).lean()
                .then(response => {
                    console.log('respuesta:',response);
                    res.render('tareas',{tareas:response});
                })
                .catch(error => {
                    res.status(400).send('Algo salio mal');
                });
    }
    updateTask(req, res) {
        res.send('tarea actualizada correctamente');
    }
    createtask(req, res) {    //El json es para que se imprima aquI lo que enviamos en el post en postman.
        console.log(req.body);
        res.send('tarea creada');
    }
  }
  const tasks = new tareaController;
  module.exports = tasks;

