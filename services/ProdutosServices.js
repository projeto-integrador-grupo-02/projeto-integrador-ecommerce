
const {Produto} = require('../databases/models')
const {Categoria} = require('../databases/models')
const path = require('path')
const fs = require('fs')

function showProdutos() {
    return Produto.findAll()
            .then(data => res.json(data))
}




async function listProducts(page, perPage, id) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    let produtos

    if(id) {
        produtos = await Produto.findByPk(id, {include: 'categoria'})
        produtos = [produtos]
    } else {
        produtos = await Produto.findAll()
    }

    let produtosPaginados = produtos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(produtos.length / perPage);

    return {
        produtosPaginados,
        totalPages
    }
}

async function showCategorias() {
    const categorias = await Categoria.findAll();
    return categorias;
}

async function listCategorias(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const {count, rows} = await Categoria.findAndCountAll({include: 'produto', limit: perPage, offset: startIndex })
    const categorias = rows.map(categoria => categoria.toJSON());
    const totalPages = Math.ceil(count / perPage);

    return {
        categorias,
        totalPages
    }
}


function adicionarProduto(produto) {
    produtos.push(produto)
}

function createProduct(produto) {

    if (Produto.length > 0) {
        produto.id = Produto[Produto.length - 1].id + 1
    } else {
        Produto.id = 1
    }

    Produto.push(produto)

    salvar()
}

function adicionarCategoria(categoria) {
    categorias.push(categoria)
}

async function createCategoria(categoria) {
    const categorias = await Categoria.findAll();
    
    if (categorias.length > 0) {
        categoria.id = categorias[categorias.length - 1].id + 1
    } else {
        categoria.id = 1
    }

    categorias.push(categoria)

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

async function eraseCategoria(idP) {
    const categorias = await Categoria.findAll();
    let posicao = categorias.findIndex(p => p.id_categoria == idP)
    if (posicao == -1) {
        throw new Error('Não existe esse produto')
    }
    categorias.splice(posicao, 1)
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