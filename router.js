const express = require('express')


const PagesController = require('./src/app/Controllers/PagesController.js')
const AdminProductsController = require('./src/app/Controllers/AdminProductsController.js')
//Criar roteador
const router = express.Router()

router.get('/', PagesController.showIndex);
router.get('/edituser', PagesController.showUser);
router.get('/products', PagesController.showProducts)
router.get('/cadastro', PagesController.registerUser)
router.get('/checkout', PagesController.checkoutUser)
router.post('/checkout/sucess', PagesController.checkoutSucess)

router.get('/login',PagesController.showLogin);

/* Admin */
/* router.get('/admin', AdminProductsController.showIndex) */
router.get('/admin', AdminProductsController.showHomeAdmin)
router.get('/admin/products', AdminProductsController.showProducts)
router.get('/admin/products/create', AdminProductsController.createProduct)
router.post('/admin/products/store', AdminProductsController.registerProduct)
router.get('/admin/products/:id/edit', AdminProductsController.editProduct)
router.post('/admin/products/:id/update', AdminProductsController.updateProduct)
router.get('/admin/products/:id/delete', AdminProductsController.deleteProduct)



module.exports = router