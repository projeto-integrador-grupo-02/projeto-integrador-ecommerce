const multer = require('multer');
const express = require('express')
//Criar roteador
const app = express.Router()
const path = require('path')

const multerMid = multer({dest:'public/img'});

const AdminProductsController = require('./src/app/Controllers/AdminProductsController.js')
const AdminClientsController = require('./src/app/Controllers/AdminClientsController.js')
const AdminOrdersController = require('./src/app/Controllers/AdminOrdersController.js')
const PagesController = require('./src/app/Controllers/PagesController.js')
const AdminPagesController = require('./src/app/Controllers/AdminPagesController')



app.get('/', PagesController.showIndex);
app.get('/edituser', PagesController.showUser);
app.get('/products', PagesController.showProducts)
app.get('/produto', PagesController.showProduto)
app.get('/carrinho', PagesController.showCarrinho)
app.get('/cadastro', PagesController.registerUser)
app.get('/checkout', PagesController.checkoutUser)
app.post('/checkout/sucess', PagesController.checkoutSucess)

app.get('/login',PagesController.showLogin);

/* Admin Login */
app.get('/admin/login', AdminPagesController.showLogin)
app.get('/admin/register', AdminPagesController.showRegister)
app.get('/admin/admin-user', AdminPagesController.showControl)
app.get('/admin/admin-user/:id/edit', AdminPagesController.controlEdit)

/* Admin */

app.get('/admin', AdminProductsController.showHomeAdmin)

app.get('/admin/products', AdminProductsController.listProducts)
app.get('/admin/products/create',AdminProductsController.createProduct)
app.post('/admin/products/store',  multerMid.single('image'), AdminProductsController.registerProduct)
app.get('/admin/products/:id/edit', AdminProductsController.editProduct)
app.post('/admin/products/:id/update', multerMid.single('image'), AdminProductsController.updateProduct)
app.get('/admin/products/:id/delete', AdminProductsController.deleteProduct)

app.get('/admin/products/categorias', AdminProductsController.showCategorias)
app.get('/admin/products/categorias/:id/edit', AdminProductsController.editCategoria)
app.post('/admin/products/categorias/:id/update', AdminProductsController.updateCategoria)
app.get('/admin/products/categorias/:id/delete', AdminProductsController.deleteCategoria)

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