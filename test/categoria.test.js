const {Categoria, sequelize} = require('../databases/models')

async function teste() {
    const categorias = await Categoria.findAll()
    console.log(categorias.map(e => e.toJSON()))
    sequelize.close()
}

teste()