module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define(
        'Categoria',
        {
            id_categoria: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false               
            },
            nome_categoria: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tableName: 'categorias',
            timestamps: false
        }
    )

    Categoria.associate = (models) => {
        Categoria.belongsToMany(
            models.Produto,
            {
                as: 'produto',
                through: 'produto_categoria',
                foreignKey: 'id_categoria',
                otherKey: 'id_produto',
                timestamps: false
            }
        )
    }

    return Categoria
}