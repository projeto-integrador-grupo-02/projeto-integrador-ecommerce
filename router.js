const express = require('express')
//Criar roteador
const app = express.Router()
const path = require('path')

const AdminProductsController = require('./src/app/Controllers/AdminProductsController.js')
const AdminClientsController = require('./src/app/Controllers/AdminClientsController.js')
const PagesController = require('./src/app/Controllers/PagesController.js')



app.get('/', PagesController.showIndex);
app.get('/edituser', PagesController.showUser);
app.get('/products', PagesController.showProducts)
app.get('/produto', PagesController.showProduto)
app.get('/carrinho', PagesController.showCarrinho)
app.get('/cadastro', PagesController.registerUser)
app.get('/checkout', PagesController.checkoutUser)
app.post('/checkout/sucess', PagesController.checkoutSucess)

app.get('/login',PagesController.showLogin);

/* Admin */
/* app.get('/admin', AdminProductsController.showIndex) */
app.get('/admin', AdminProductsController.showHomeAdmin)
app.get('/admin/products', AdminProductsController.listProducts)
/* app.get('/admin/products/:page', AdminProductsController.pagesProducts) */
app.get('/admin/products/create', AdminProductsController.createProduct)
app.post('/admin/products/store', AdminProductsController.registerProduct)
app.get('/admin/products/:id/edit', AdminProductsController.editProduct)
app.post('/admin/products/:id/update', AdminProductsController.updateProduct)
app.get('/admin/products/:id/delete', AdminProductsController.deleteProduct)

/*Admin clients */
app.get('/admin/clients', AdminClientsController.listClients)

module.exports = app