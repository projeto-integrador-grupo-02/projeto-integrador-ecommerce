const express = require('express')


const PagesController = require('./src/app/Controllers/PagesController.js')
const AdminProductsController = require('./src/app/Controllers/AdminProductsController.js')
//Criar roteador
const router = express.Router()

router.get('/', PagesController.showIndex);
router.get('/edituser', PagesController.showUser);
router.get('/products', PagesController.showProducts)
router.get('/cadastro', PagesController.registerUser)

/* Admin */
/* router.get('/admin', AdminProductsController.showIndex) */
router.get('/admin/products', AdminProductsController.showProducts)
router.get('/admin/products/create', AdminProductsController.createProduct)
router.post('/admin/products/store', AdminProductsController.registerProduct)


module.exports = router