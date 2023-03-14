const express = require('express');
const router = express.Router();



router.get('', function(req, res) {
    const tareas = [
        {titulo: 'Tarea 1',status:'nueva'},
        {titulo: 'Tarea 2',status:'en progreso'},
        {titulo: 'Tarea 3',status:'en progreso'},
        {titulo: 'Tarea 4',status:'terminado'}]

    res.render('work',{tareas});
});


module.exports = router;