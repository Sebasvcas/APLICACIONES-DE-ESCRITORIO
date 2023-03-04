const express = require('express');
const router = express.Router();
const controller = require('../controladores').News;


router.get('',controller.newsList);

module.exports = router;