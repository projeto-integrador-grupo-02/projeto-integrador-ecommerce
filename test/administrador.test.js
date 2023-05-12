const {Administrador, sequelize} = require('../databases/models')

async function teste() {
    const administradores = await Administrador.findAll()
    console.log(administradores.map(e => e.toJSON()))
    sequelize.close()
}

teste()