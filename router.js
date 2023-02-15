const express = require('express')
const path = require('path');
const PagesController = require('./src/app/Controllers/PagesController.js')
//Criar roteador
const router = express.Router()

router.get('/', PagesController.showIndex);
router.get('/edituser', PagesController.showUser);
router.get('/products', PagesController.showProducts)
router.get('/produto', PagesController.showProduto)
router.get('/cadastro', PagesController.registerUser)
router.get('/checkout', PagesController.checkoutUser)
router.post('/checkout/sucess', PagesController.checkoutSucess)

module.exports = router