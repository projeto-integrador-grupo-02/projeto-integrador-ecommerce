const {Pedido, sequelize} = require('../databases/models')

async function teste() {
    const pedido = await Pedido.findByPk(1, {include: 'produtos'})
    console.log(pedido.toJSON());
    sequelize.close()
}

teste()