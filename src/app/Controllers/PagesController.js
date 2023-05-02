const path = require('path');
const produtos = require('../../../databases/products.json');
const session = require('express-session');


const PagesController = {
    showIndex: (req, res) => {res.render('home.ejs',{produtos})},
    showUser: (req, res) => res.render('edituser.ejs'),
    showProducts: (req, res) => res.render('products.ejs'),
    showProduto: (req, res) => {
        const id = req.params.id
        const produto  = produtos.find(p => p.id== id);
        res.render('produto.ejs',{produto})
    },
    showCarrinho: (req, res) => {
        let carrinho = req.session.carrinho
        if (carrinho != undefined){

            carrinho = carrinho.map(item => {
                const produto = produtos.find(p => p.id == item.id);
                    item.image = produto.image;
                    item.name = produto.name;
                    item.price = produto.price;
                    item.description = produto.description;
                return item;
             })
        } 
        res.render('carrinho.ejs', {carrinho})
    },
    addCarrinho: (req, res) => {
       if (req.session.carrinho == undefined){
        req.session.carrinho = []
       }
        req.session.carrinho.push({id: req.body.idProduto, qtd: 1})
        res.redirect("/carrinho")
    },

    registerUser: (req, res) => res.render('cadastro.ejs'),
    checkoutUser: (req,res) => res.render('checkout.ejs'),
    checkoutSucess: (req,res) => res.render('checkoutSucess.ejs'),
    showLogin:(req,res) => res.render('login.ejs')

}

    module.exports = PagesController