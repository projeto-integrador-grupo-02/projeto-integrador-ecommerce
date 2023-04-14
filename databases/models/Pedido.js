module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido',
        {
            id_pedido: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncremente: true,
                allowNull: false
            },
            id_cliente: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            data_pedido: {
                type: DataTypes.DATE,
                allowNull: false
            },
            status_pedido: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            total_pedido: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            }

        },
        {
            tableName: 'pedidos',
            timestamps: false
        }
    )
    Pedido.associate = (models) => {
        Pedido.belongsToMany(
            models.Produto,
            {
                timestamps: false,
                as: 'produtos',
                through: 'itens_pedido',
                foreignKey: 'id_pedido',
                otherKey: 'id_produto'
            }
        )
    }
    return Pedido
}