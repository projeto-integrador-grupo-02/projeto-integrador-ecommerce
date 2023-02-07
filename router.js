const express = require('express')
const path = require('path');
const PagesController = require('./src/app/Controllers/PagesController.js')
//Criar roteador
const router = express.Router()

router.get('/', PagesController.showIndex);
router.get('/edituser', PagesController.showUser);
router.get('/products', PagesController.showProducts)

module.exports = router