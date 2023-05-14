const path = require('path');
const produtos = require('../../../databases/products.json');
const session = require('express-session');
const Cliente = require('../../../databases/models/Cliente');

const { listarClients, createClient,loginClient } = require('../../../services/ClientsServices')


const PagesController = {
    showIndex: (req, res) => { res.render('home.ejs', { produtos }) },
    showUser: (req, res) => res.render('edituser.ejs'),
    showProducts: (req, res) => res.render('products.ejs'),
    showProduto: (req, res) => {
        const id = req.params.id
        const produto = produtos.find(p => p.id == id);
        res.render('produto.ejs', { produto })
    },
    showCarrinho: (req, res) => {
        let carrinho = req.session.carrinho
        if (carrinho != undefined) {

            carrinho = carrinho.map(item => {
                const produto = produtos.find(p => p.id == item.id);
                item.image = produto.image;
                item.name = produto.name;
                item.price = produto.price;
                item.description = produto.description;
                item.subtotal = Number(item.qtd) * Number(item.price);
                return item;
            })
        } else {
            carrinho = []
        }
        res.render('carrinho.ejs', { carrinho })
    },
    addCarrinho: (req, res) => {
        if (req.session.carrinho == undefined) {

            req.session.carrinho = []
        }
        let idProduto = req.body.idProduto;
        const produto = req.session.carrinho.find(item => item.id == idProduto)
        if (produto == undefined) {
            req.session.carrinho.push({ id: req.body.idProduto, qtd: 1 })
        } else {
            produto.qtd++
        }
        res.redirect("/carrinho")
    },

    incrementarCarrinho: (req, res) => {
        let carrinho = req.session.carrinho;
        let item = carrinho.find(item => item.id == req.body.idItem)
        item.qtd = item.qtd + 1
        res.redirect("/carrinho")
    },

    decrementarCarrinho: (req, res) => {
        let carrinho = req.session.carrinho;
        let item = carrinho.find(item => item.id == req.body.idItem)
        if (item.qtd == 1) {
            carrinho = carrinho.filter(item => item.id != req.body.idItem)
            req.session.carrinho = carrinho;

        } else {
            item.qtd = item.qtd - 1
        }
        res.redirect("/carrinho")
    },

    registerUser: (req, res) => res.render('cadastro.ejs'),
    createUser: async (req, res) => {

        try {

            await createClient(data = {
                nome: req.body.nome,
                email: req.body.email,
                senha_cliente: req.body.senha,
                data_nascimento: req.body.data
            })

            res.render('home.ejs')
        } catch (error) {
            console.log(error)
        }
    },
    checkoutUser: (req, res) => res.render('checkout.ejs'),
    checkoutSucess: (req, res) => res.render('checkoutSucess.ejs'),
    showLogin: (req, res) => res.render('login.ejs'),
    login: async (req, res) => {
        
        try {
           
           const user =  await loginClient(data = {
                
                email: req.body.email,
                senha_cliente: req.body.senha,
                
            })
            if(!user) res.render('login.ejs');

            req.session.user = {
                id: user._id,
                nome: user.nome,
                email: user.email,
                data_nascimento: user.data_nascimento
            };

            res.render('home.ejs')
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = PagesController