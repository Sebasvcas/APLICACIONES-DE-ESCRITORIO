const express = require('express');
const router = express.Router();
const controller = require('../controladores').Task;

/**
 * @swagger
 * /tareas:
 *   post:
 *     summary: Creación de tarea
 *     description: Creacion de una nueva tarea con los datos que se den.
 *     parameters:
 *       - in: body
 *         name: tarea
 *         description: Objeto tarea que contiene los datos de la tarea a crear
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             titulo:
 *               type: string
 *               description: Título de la tarea
 *             status:
 *               type: string
 *               description: Estado de la tarea
 *             descripcion:
 *               type: string
 *               description: Descripción de la tarea
 *             fecha:
 *               type: string
 *               description: Fecha de creación de la tarea
 *               
 *     responses:
 *       '200':
 *         description: La tarea ha sido creada correctamente
 *       '400':
 *         description: Los datos de la tarea son inválidos
 */



router.post('',express.json(), controller.createtask);

/**
 * @swagger
 * /tareas:
 *   get:
 *     summary: Mostrar listado de tareas
 *     description: Muestra todas las tareas que se encuentren en la base de datos.
 *     responses:
 *       200:
 *         description: Tareas mostardas con éxito.
 *       400:
 *         description: Error en el servidor.
 */

router.get('', controller.taskList);


/**
 * @swagger
 * /tareas/{id}:
 *   get:
 *     summary: Mostrar tarea indiviudal por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id de tarea.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea mostrada
 *       404:
 *         description: No hay tarea con ese ID.
 *       400:
 *         description: Error en el servidor.
 */
router.get('/:id', controller.gettask);

/**
 * @swagger
 * /tareas/{id}:
 *   delete:
 *     summary: Borrar tarea por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id de tarea para borrar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada
 *       404:
 *         description: No hay tarea con ese id.
 *       400:
 *         description: Error en el servidor.
 */
router.delete('/:id', controller.eliminarTareaID );


/**
 * @swagger
 * /tareas/{id}:
 *   put:
 *     summary: Update de tarea
 *     parameters:
 *       - in: body
 *         name: tarea
 *         description: Tarea con los datos
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             titulo:
 *               type: string
 *               description: Título 
 *             status:
 *               type: string
 *               description: Estado 
 *             descripcion:
 *               type: string
 *               description: Descripción 
 *     responses:
 *       200:
 *         description: Tarea updateada
 *       404:
 *         description: No hay tarea con ese ID.
 *       400:
 *         description: Error en el servidor.
 */
router.put('/:id', express.json(),controller.updateTask );

module.exports= router;