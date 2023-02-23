const clients = require('../databases/usuarios.json')
const orders = require('../databases/pedidos.json')
const products = require('../databases/products.json')
const path = require('path')
const fs = require('fs')

function listOrders(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const ordersData = fs.readFileSync(path.resolve(__dirname, "../databases/pedidos.json"));
    const orders = JSON.parse(ordersData);
    let ordersPaginados = orders.slice(startIndex, endIndex);
    const totalPages = Math.ceil(orders.length / perPage);
    return {
        ordersPaginados,
        totalPages
    }
}

function loadOrder(idP) {
    let order = orders.find(p => p.id == idP)

    if (order == undefined) {
        throw new Error('Não existe esse pedido')
    }
    return order

}

function loadIdClient(idP) {
    let idClient = orders.find(p => p.contactPerson == idP)

    return idClient
}

function loadProductClient(idP) {
    const produtosData = fs.readFileSync(path.resolve(__dirname, "../databases/products.json"));
    const produtos = JSON.parse(produtosData);

    return produtos.filter(p => idP.includes(p.id))
}

function loadItemsClient(idP) {
    const order = orders.find(o => o.id == idP)
    
    if(!order) {
        return []
    }

    const items = order.items.map(idI => products.find(prod => prod.id == idI))
    return items
}

console.log(loadItemsClient(9))
module.exports = {
    listOrders,
    loadOrder,
    loadIdClient,
    loadProductClient,
    loadItemsClient
}