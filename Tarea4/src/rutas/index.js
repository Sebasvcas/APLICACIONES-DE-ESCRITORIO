const router = require('express').Router();
const rutasNews = require('./news');


router.use('/news', rutasNews);    
module.exports = router;