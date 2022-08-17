var express = require('express');
var router = express.Router();
/* Controladores */
const {index} = require('../controllers/indexController')

/* / */
router.get('/', index );






module.exports = router;
