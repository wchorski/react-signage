const express = require('express')
router = express.Router()
hello_cntr = require('../controllers/hello-cntr')
getMedia = require('../controllers/getMedia')

router.get('/', hello_cntr.hello_cntr_funct)
// router.get('/signage', hello.getMedia)

module.exports = router