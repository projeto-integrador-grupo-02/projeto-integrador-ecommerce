const {Cliente, sequelize} = require('../databases/models')

async function teste() {
    let clientes = await Cliente.findAll()
    console.log(clientes.map(e => e.toJSON()))
    sequelize.close()
}

teste()