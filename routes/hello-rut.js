console.log('-------------------------------------------------------------')
console.log("----------------------hello-rut.js---------------------------");
console.log('-------------------------------------------------------------')

const express = require('express')
router = express.Router()
hello_cntr = require('../controllers/hello-cntr')
getMedia_cntr = require('../controllers/getMedia-cntr')

router.get('/hello-names',  hello_cntr.hello_cntr_funct)
router.get('/media1',       getMedia_cntr.getMedia_cntr_funct)

module.exports = router