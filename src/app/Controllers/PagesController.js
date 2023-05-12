const path = require('path');
const { Produtos } = require('../../../databases/models')
const session = require('express-session');
const ProdutosServices = require('../../../services/ProdutosServices');


const PagesController = {
    showIndex: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const perPage = 5;
            const currentPage = parseInt(page);

            const { produtosPaginados, totalPages } = await ProdutosServices.listProducts(
                currentPage,
                perPage
            );

            res.render("home.ejs", {
                produtos: produtosPaginados,
                totalPages,
                currentPage,
            });
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao carregar a lista de produtos.");
        }
    },
    showUser: (req, res) => res.render('edituser.ejs'),
    showProducts: (req, res) => res.render('products.ejs'),
    showProduto: async (req, res) => {
        const id = req.params.id
        let produto = await ProdutosServices.loadProduct(id);
        res.render('produto.ejs', { produto })
    },
    showCarrinho: async (req, res) => {
        let carrinho = req.session.carrinho;
        if (carrinho != undefined && carrinho.length > 0) {
            try {
                carrinho = await Promise.all(
                    carrinho.map(async (item) => {
                        const produto = await ProdutosServices.loadProduct(item.id);
                        item.image = produto.imagem;
                        item.name = produto.nome_produto;
                        item.price = produto.preco;
                        item.description = produto.descricao;
                        item.subtotal = Number(item.qtd) * Number(item.price);
                        return item;
                    })
                );
            } catch (error) {
                console.error(error);
                carrinho = [];
            }
        } else {
            carrinho = [];
        }
        res.render('carrinho.ejs', { carrinho });
    }

    ,

    addCarrinho: async (req, res) => {
        if (req.session.carrinho == undefined) {
            req.session.carrinho = [];
        }
        let idProduto = req.body.idProduto;
        try {
            const produto = await ProdutosServices.loadProduct(idProduto);
            const itemIndex = req.session.carrinho.findIndex((item) => item.id === idProduto);
            if (itemIndex === -1) {
                req.session.carrinho.push({ id: idProduto, qtd: 1 });
            } else {
                req.session.carrinho[itemIndex].qtd++;
            }
            res.redirect('/carrinho');
        } catch (error) {
            console.error(error);
            res.redirect('/carrinho');
        }
    }
    ,

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
    checkoutUser: (req, res) => res.render('checkout.ejs'),
    checkoutSucess: (req, res) => {
        res.render('checkoutSucess.ejs')
    },
    checkoutBuy: (req, res) => {
        console.log(req.session)
    },

    showLogin: (req, res) => res.render('login.ejs')

}

module.exports = PagesController