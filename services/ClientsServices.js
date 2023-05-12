const {Cliente} = require('../databases/models')
const {Pedido} = require('../databases/models')
const path = require('path')
const fs = require('fs')


async function listarClients() {
    const clients = await Cliente.findAll()

    return clients
}

function eraseClient(idP) {
    let posicao = clients.findIndex(p => p.id == idP)

    if (posicao == -1) {
        throw new Error('Não existe esse produto')
    }
    clients.splice(posicao, 1)
    salvar()
}

function salvar() {
    const clientsData = path.resolve(__dirname + "/../databases/usuarios.json");

    fs.writeFileSync(clientsData, JSON.stringify(clients, null, 4));
}

async function listClients(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const clients = await Cliente.findAll()
    let clientsPaginados = clients.slice(startIndex, endIndex);
    const totalPages = Math.ceil(clients.length / perPage);
    return {
        clientsPaginados,
        totalPages
    }
}

function pedidosLink() {
    const pedidos = Pedido.findAll()
    return pedidos
}

async function loadClient(idP) {
    let cliente = await Cliente.findOne({where: {id_cliente: idP}})
    if (cliente == undefined) {
        throw new Error('Não existe esse cliente')
    }
    return cliente
}

function updateClient(idP, clientData) {
    let cliente = clients.find(p => p.id == idP)

    if (cliente == undefined) {
        throw new Error('Não existe esse cliente')
    }
    
    cliente.name = clientData.name
    cliente.email = clientData.email

    salvar()

}



module.exports = {
    listClients,
    pedidosLink,
    loadClient,
    updateClient,
    listarClients,
    eraseClient
}
