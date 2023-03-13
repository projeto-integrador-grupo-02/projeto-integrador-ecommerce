const express = require('express')
const path = require('path');
const PagesController = require('./src/app/Controllers/PagesController')
const AuthController = require('./src/app/Controllers/AuthController')
//Criar roteador
const router = express.Router()

router.get('/', PagesController.showIndex);
router.get('/edituser', PagesController.showUser);
router.get('/products', PagesController.showProducts)

router.get('/cadastro', AuthController.showRegister)
router.post('/cadastro', AuthController.registerUser)


router.get('/login',AuthController.showLogin)
router.post('/login', AuthController.login);



router.get('/checkout', PagesController.checkoutUser)
router.post('/checkout/sucess', PagesController.checkoutSucess)


module.exports = router