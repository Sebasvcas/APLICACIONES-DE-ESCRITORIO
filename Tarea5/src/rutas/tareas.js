const express = require('express');
const router = express.Router();
const controller = require('../controladores').Task;

/**
 * @swagger
 * /tareas:
 *  post:
 *    desription: crear una nueva tarea
 *    parameters:
 *      - in: body
 *        name: titulo
 *        description: el titulo de la tarea
 *        schema: 
 *          type: string
 *    responses:
 *      200:
 *        description: lista de tareas del usuario
 */
router.post('', express.json(),controller.createtask);

router.put('/:id',controller.updateTask );

router.get('',controller.taskList);

router.get('/:id',controller.gettask);

module.exports = router;