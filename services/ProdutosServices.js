let produtos = require('../databases/products.json')
const path = require('path')
const fs = require('fs')

function showProdutos() {
    return produtos
}

function adicionarProduto(produto) {
    produtos.push(produto)
}

function createProduct(produto) {
    produtos.push(produto)

    salvar()
}

function salvar(){
    const produtosData = path.resolve(__dirname + "/../databases/products.json");

    fs.writeFileSync(produtosData, JSON.stringify(produtos, null, 4));
}

const ProdutosServices = {
    adicionarProduto,
    showProdutos,
    createProduct
}
module.exports = ProdutosServices