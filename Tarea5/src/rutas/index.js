//Este es mi proxi de rutas
const router = require('express').Router();
const rutasTareas = require('./tareas');
const rutasUsuarios = require('./usuarios');
const { auth } = require('./../middlewares');

//router.use('', auth); //Es lo mismo que lo de abajo :)    //Esto pedirIa autenticaciOn para todo.
router.use('/tareas', auth, rutasTareas);    //Middleware de tareas.    //Esto solo pide autenticaciOn para esto que estamos especificando.
router.use('/usuarios', auth, rutasUsuarios);

module.exports = router;