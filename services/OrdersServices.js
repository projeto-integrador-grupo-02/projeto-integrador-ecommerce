const {Cliente} = require('../databases/models')
const {Pedido} = require('../databases/models')
const {Produto} = require('../databases/models')
const path = require('path')
const fs = require('fs')

async function listOrders(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const orders = await Pedido.findAll()
    let ordersPaginados = orders.slice(startIndex, endIndex);
    const totalPages = Math.ceil(orders.length / perPage);
    return {
        ordersPaginados,
        totalPages
    }
}

async function loadOrder(idP) {
    let order = await Pedido.findOne({where: {id_pedido: idP}})

    if (order == undefined) {
        throw new Error('Não existe esse pedido')
    }
    return order

}

async function loadIdClient(idP) {
    let idClient = await Cliente.findOne({where: {id_cliente: idP}})

    return idClient
}

function loadProductClient(idP) {
    const produtosData = fs.readFileSync(path.resolve(__dirname, "../databases/products.json"));
    const produtos = JSON.parse(produtosData);

    return produtos.filter(p => idP.includes(p.id))
}

async function loadItemsClient(idP) {
    const order = await Pedido.findOne({where: {id_pedido: idP}})
    
    if(!order) {
        return []
    }

    const items = order.items.map(idI => products.find(prod => prod.id == idI))
    return items
}


module.exports = {
    listOrders,
    loadOrder,
    loadIdClient,
    loadProductClient,
    loadItemsClient
}