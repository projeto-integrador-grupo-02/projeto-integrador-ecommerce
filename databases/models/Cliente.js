module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define(
        'Cliente',
        {
            id_cliente: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            sobrenome: {
                type: DataTypes.STRING(255),
                // allowNull: false
            },
            telefone: {
                type: DataTypes.STRING(15),
                // allowNull: false
            },
            email: {
                type: DataTypes.STRING(115),
                allowNull: false
            },
            senha_cliente: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            id_endereco: {
                type: DataTypes.INTEGER
            },
            data_nascimento: {
                type: DataTypes.DATE,
                allowNull: false
            }
            
        },
        {
            tableName: 'clientes',
            timestamps: false
        }
        )

        Cliente.associate = (models) => {
            Cliente.belongsToMany(models.Pedido, {
                as: 'pedidos',
                through: 'itens_pedido',
                foreignKey: 'id_cliente',
                otherKey: 'id_pedido',
                timestamps: false
            })
        }


        return Cliente
}