const clients = require('../databases/usuarios.json')
const pedidos = require('../databases/pedidos.json')
const path = require('path')
const fs = require('fs')


function listarClients() {
    const clientsData = fs.readFileSync(path.resolve(__dirname, "../databases/usuarios.json"));
    const clients = JSON.parse(clientsData);

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

function listClients(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const clientsData = fs.readFileSync(path.resolve(__dirname, "../databases/usuarios.json"));
    const clients = JSON.parse(clientsData);
    let clientsPaginados = clients.slice(startIndex, endIndex);
    const totalPages = Math.ceil(clients.length / perPage);
    return {
        clientsPaginados,
        totalPages
    }
}

function pedidosLink() {
    const pedidosData = fs.readFileSync(path.resolve(__dirname, "../databases/pedidos.json"));
    const pedidos = JSON.parse(pedidosData);
    return pedidos
}

function loadClient(idP) {
    let cliente = clients.find((p) => p.id == idP)
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
