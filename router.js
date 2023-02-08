const express = require('express')
const path = require('path');
const PagesController = require('./src/app/Controllers/PagesController.js')
const AdminProductsController = require('./src/app/Controllers/AdminProductsController.js')
//Criar roteador
const router = express.Router()

router.get('/', PagesController.showIndex);
router.get('/edituser', PagesController.showUser);
router.get('/products', PagesController.showProducts)
router.get('/cadastro', PagesController.registerUser)

/* Admin */
router.get('/admin', AdminProductsController.showIndex)

module.exports = router