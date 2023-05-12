const path = require('path');


const PagesController = {
    showIndex: (req, res) => res.render('home.ejs'),
    showUser: (req, res) => res.render('edituser.ejs'),
    showProducts: (req, res) => res.render('products.ejs'),
    showProduto: (req, res) => res.render('produto.ejs'),
    showCarrinho: (req, res) => res.render('carrinho.ejs'),
    registerUser: (req, res) => res.render('cadastro.ejs'),
    checkoutUser: (req,res) => res.render('checkout.ejs'),
    checkoutSucess: (req,res) => res.render('checkoutSucess.ejs'),
    showLogin:(req,res) => res.render('login.ejs')
}

    module.exports = PagesController