const clients = require('../databases/usuarios.json')
const path = require('path')
const fs = require('fs')

function listClients(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const clientsData = fs.readFileSync(path.resolve(__dirname, "../databases/usuarios.json"));
    const clients = JSON.parse(clientsData);
    let clientsPaginados = clients.slice(startIndex, endIndex);
    const totalPages = Math.ceil(clients.length / perPage);
    console.log(clients);
    return {
        clientsPaginados,
        totalPages
    }
}

function search() {
    const clientsData = fs.readFileSync(path.resolve(__dirname, "../databases/usuarios.json"));
    const clients = JSON.parse(clientsData);

    return clients
}





module.exports = {
    listClients,
    search
}