const clients = require('../databases/usuarios.json')
const orders = require('../databases/pedidos.json')
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

module.exports = {
    listOrders
}