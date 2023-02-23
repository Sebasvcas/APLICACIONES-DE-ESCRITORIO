const router = require('express').Router();
const rutasHobbies = require('./hobbies');
const rutaswork = require('./work');
const rutasinfo = require('./info');
const { auth } = require('./../middlewares');

router.use('/hobbies', auth, rutasHobbies);  
router.use('/work', auth, rutaswork);  
router.use('/info', auth, rutasinfo);  



module.exports = router;