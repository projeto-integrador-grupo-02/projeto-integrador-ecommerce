const express = require('express')


const PagesController = require('./src/app/Controllers/PagesController.js')
const AdminProductsController = require('./src/app/Controllers/AdminProductsController.js')
const AdminClientsController = require('./src/app/Controllers/AdminClientsController.js')

//Criar roteador
const router = express.Router()

router.get('/', PagesController.showIndex);
router.get('/edituser', PagesController.showUser);
router.get('/products', PagesController.showProducts)
router.get('/produto', PagesController.showProduto)
router.get('/carrinho', PagesController.showCarrinho)
router.get('/cadastro', PagesController.registerUser)
router.get('/checkout', PagesController.checkoutUser)
router.post('/checkout/sucess', PagesController.checkoutSucess)

router.get('/login',PagesController.showLogin);

/* Admin */
/* router.get('/admin', AdminProductsController.showIndex) */
router.get('/admin', AdminProductsController.showHomeAdmin)
router.get('/admin/products', AdminProductsController.listProducts)
/* router.get('/admin/products/:page', AdminProductsController.pagesProducts) */
router.get('/admin/products/create', AdminProductsController.createProduct)
router.post('/admin/products/store', AdminProductsController.registerProduct)
router.get('/admin/products/:id/edit', AdminProductsController.editProduct)
router.post('/admin/products/:id/update', AdminProductsController.updateProduct)
router.get('/admin/products/:id/delete', AdminProductsController.deleteProduct)

/*Admin clients */
router.get('/admin/clients', AdminClientsController.listClients)

module.exports = router