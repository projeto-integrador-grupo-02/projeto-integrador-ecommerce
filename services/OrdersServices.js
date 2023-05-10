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

async function loadItemsClient(id_pedido) {
    const orders = await Pedido.findAll({ include: ['produtos'], where: { id_pedido } });
    console.log(orders[0].produtos[0]);
  
    if (!orders) {
      return [];
    }
  
    /* const orderIds = orders.map((order) => order.id_pedido);
    const items = await Produto.findAll({ where: { id_produto: orderIds } }); */
  const itens = orders[0]
    return itens
  }
  


module.exports = {
    listOrders,
    loadOrder,
    loadIdClient,
    loadProductClient,
    loadItemsClient
}