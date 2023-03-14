//Este es mi proxi de rutas
const router = require('express').Router();
const rutasTareas = require('./tareas');


router.use('/tareas', rutasTareas);    //Middleware de tareas.    //Esto solo pide autenticaciOn para esto que estamos especificando.

module.exports = router;