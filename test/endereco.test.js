const {Endereco, sequelize} = require('../databases/models')

async function teste() {
    const enderecos = await Endereco.findAll()
    console.log(enderecos.map(e => e.toJSON()))
    sequelize.close()
}

teste()