const {Produto, sequelize} = require('../databases/models')

async function teste() {
    const produtos = await Produto.findAll()
    console.log(produtos.map(e => e.toJSON()))
    sequelize.close()
}

teste()