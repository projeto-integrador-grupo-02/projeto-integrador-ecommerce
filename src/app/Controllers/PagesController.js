const path = require('path');
const produtos = require('../../../databases/products.json');


const PagesController = {
    showIndex: (req, res) => {res.render('home.ejs',{produtos})},
    showUser: (req, res) => res.render('edituser.ejs'),
    showProducts: (req, res) => res.render('products.ejs'),
    showProduto: (req, res) => {
        const id = req.params.id
        const produto  = produtos.find(p => p.id== id);
        res.render('produto.ejs',{produto})
    },
    showCarrinho: (req, res) => res.render('carrinho.ejs'),
    addCarrinho: (req, res) => {
        console.log(req.body)
        res.redirect("/carrinho")
    },

    registerUser: (req, res) => res.render('cadastro.ejs'),
    checkoutUser: (req,res) => res.render('checkout.ejs'),
    checkoutSucess: (req,res) => res.render('checkoutSucess.ejs'),
    showLogin:(req,res) => res.render('login.ejs')

}

    module.exports = PagesController