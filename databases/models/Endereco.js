module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define(
        'Endereco',
        {
            id_endereco: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            id_cliente: {
                type: DataTypes.INTEGER
            },
            cep: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            logradouro: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            numero: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            bairro: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            estado: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            cidade: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tablename: 'enderecos',
            timestamps: false
        }
    )

    return Endereco
}