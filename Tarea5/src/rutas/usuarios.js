const express = require('express');
const router = express.Router();
const controller = require('../controladores').User;

router.post('', controller.createuser);

router.put('/:id', controller.updateuser);

router.get('', controller.userlist);

router.get('/:id',controller.getuser );

module.exports = router;