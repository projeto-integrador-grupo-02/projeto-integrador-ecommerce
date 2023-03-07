let produtos = require('../databases/products.json')
let categorias = require('../databases/categorias.json')
const path = require('path')
const fs = require('fs')

function showProdutos() {
    return produtos
}

function showCategorias() {
    return categorias
}

function listProducts(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const produtosData = fs.readFileSync(path.resolve(__dirname, "../databases/products.json"));
    const produtos = JSON.parse(produtosData);
    let produtosPaginados = produtos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(produtos.length / perPage);

    return {
        produtosPaginados,
        totalPages
    }
}

function listCategorias(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const categoriasData = fs.readFileSync(path.resolve(__dirname, "../databases/categorias.json"));
    const categorias = JSON.parse(categoriasData);
    let categoriasPaginados = categorias.slice(startIndex, endIndex);
    const totalPages = Math.ceil(categorias.length / perPage);

    return {
        categoriasPaginados,
        totalPages
    }
}

function adicionarProduto(produto) {
    produtos.push(produto)
}

function createProduct(produto) {

    if (produtos.length > 0) {
        produto.id = produtos[produtos.length - 1].id + 1
    } else {
        produtos.id = 1
    }

    produtos.push(produto)

    salvar()
}

function adicionarCategoria(categoria) {
    categorias.push(categoria)
}

function createCategoria(categoria) {

    if (categorias.length > 0) {
        categoria.id = categorias[categorias.length - 1].id + 1
    } else {
        categorias.id = 1
    }

    categorias.push(categoria)

    salvar()
}

function loadCategoria(idP) {
    let categoria = categorias.find(p => p.id == idP)

    return categoria
}

function loadProduct(idP) {
    let produto = produtos.find(p => p.id == idP)

    if (produto == undefined) {
        throw new Error('Não existe esse produto')
    }
    return produto
}

function salvar() {
    const produtosData = path.resolve(__dirname + "/../databases/products.json");

    fs.writeFileSync(produtosData, JSON.stringify(produtos, null, 4));
}

function salvarCategoria() {
    const categoriasData = path.resolve(__dirname + "/../databases/categorias.json");

    fs.writeFileSync(categoriasData, JSON.stringify(categorias, null, 4));
}

function updateProduct(idP, productData) {
    let produto = produtos.find(p => p.id == idP)

    if (produto == undefined) {
        throw new Error('Não existe esse produto')
    }

    produto.name = productData.name
    produto.description = productData.description
    produto.categoria = productData.categoria
    produto.price = productData.price
    produto.quantity = productData.quantity
    produto.image = productData.image

    salvar()
}

function updateCategoria(idP, categoriaData) {
    let categoria = categorias.find(p => p.id == idP)

    categoria.name = categoriaData.name

    salvarCategoria()
}

function eraseProduct(idP) {
    let posicao = produtos.findIndex(p => p.id == idP)
    if (posicao == -1) {
        throw new Error('Não existe esse produto')
    }
    produtos.splice(posicao, 1)

    salvar()
}

function eraseCategoria(idP) {
    let posicao = categorias.findIndex(p => p.id == idP)
    if (posicao == -1) {
        throw new Error('Não existe esse produto')
    }
    categorias.splice(posicao, 1)

    salvarCategoria()
}

const ProdutosServices = {
    adicionarProduto,
    showProdutos,
    createProduct,
    loadProduct,
    updateProduct,
    eraseProduct,
    listProducts,
    loadCategoria,
    showCategorias,
    listCategorias,
    updateCategoria,
    adicionarCategoria,
    createCategoria,
    eraseCategoria
}
module.exports = ProdutosServices