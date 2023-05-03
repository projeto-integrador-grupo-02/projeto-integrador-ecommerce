const express = require('express')
//Criar roteador
const app = express.Router()
const path = require('path')

const AdminProductsController = require('./src/app/Controllers/AdminProductsController.js')
const AdminClientsController = require('./src/app/Controllers/AdminClientsController.js')
const AdminOrdersController = require('./src/app/Controllers/AdminOrdersController.js')
const PagesController = require('./src/app/Controllers/PagesController.js')



app.get('/', PagesController.showIndex);
app.get('/edituser', PagesController.showUser);
app.get('/products', PagesController.showProducts)
app.get('/produtos/:id', PagesController.showProduto)
app.get('/carrinho', PagesController.showCarrinho)
app.get('/cadastro', PagesController.registerUser)
app.get('/checkout', PagesController.checkoutUser)
app.get('/carrinho/decrementar', PagesController.decrementarCarrinho)
app.post('/carrinho/incrementar', PagesController.incrementarCarrinho)
app.post('/carrinho', PagesController.addCarrinho)
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
app.get('/admin/clients/:id/edit', AdminClientsController.editClients)
app.post('/admin/clients/:id/update', AdminClientsController.updateClients)
app.get('/admin/clients/:id/delete', AdminClientsController.deleteClients)

/*Admin orders */
app.get('/admin/orders', AdminOrdersController.listOrders)

/* Admin orders id client */
app.get('/admin/orders/:id/list', AdminOrdersController.listOrderClient)

module.exports = app