const {Pedido, Produto, sequelize} = require('../databases/models')

async function teste() {
    const pedido = await Pedido.findByPk(1, {include: 'produtos'})
    console.log(pedido.produtos[2].itens_pedido.quantidade);
    sequelize.close()
}

teste()