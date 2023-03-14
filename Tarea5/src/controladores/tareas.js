const { response } = require('express');
const modelo = require('../modelos/tarea');

class tareaController {
   
    gettask(req, res) {
        const id = req.params.id;
        modelo.findOne({id:id})
            .then(response=>{
                if(response){
                    res.send(response);
                }else{
                    res.status(404).send('No hay tarea con ese id');
                }
    
            })
            .catch(error=>{
                res.status(400).send('Error');
            })
    }
    taskList(req, res) {
        modelo.find({})
                .then(response => {
                    res.send({tareas:response});
                })
                .catch(error => {
                    res.status(400).send('Error');
                })
    }
    updateTask(req, res) {
        
    const id= req.body.id;
    const updatesparams={};

    if(req.body.titulo!="" || undefined)
    updatesparams.titulo=req.body.titulo;
    if(req.body.tescripcion!="" || undefined)
    updatesparams.descripcion=req.body.tescripcion;
    if(req.body.ttatus!="" || undefined)
    updatesparams.status=req.body.ttatus;

        modelo.findOne({id: id})
        .then(response=>{
            if(response){
                modelo.updateOne({id: id},{$set:parametrosAActualizar})
                .then(response=>{
                    res.send({tarea:response});
                })
                .catch(error=>{
                    res.status(400).send('Error en creacion');
                })
            }else{
                res.status(404).send('No hay tarea con ese id');
            }

        })
        .catch(error=>{
            res.status(400).send('Error');
        })
    }
    createtask(req, res) {  
        const newTask = new modelo({
            id: req.body.id,
            titulo: req.body.titulo,
            status: req.body.status || 'new',
            descripcion: req.body.descripcion,
            fecha: req.query.fecha || new Date()
          });
          newTask.save()
          .then(response => {
            res.send({tarea:response});
          })
          .catch(error => {
            res.status(400).send('tarea no creada');
          });
       }

       eliminarTareaID(req, res){
        const id= req.params.id;
        modelo.deleteOne({id: id})
            .then(response=>{
                if(response.deletedCount>0){
                    res.send({tareas:response});
                }else{
                    res.status(404).send('No hay tarea con ese id');
                }
            })
            .catch(error=>{
                res.status(400).send('algo salio mal');
            })
       }


    
  }
  const tasks = new tareaController;
  module.exports = tasks;

