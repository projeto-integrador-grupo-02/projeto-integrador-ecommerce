module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define(
        'Categoria',
        {
            id_categoria: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncremente: true,
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

    return Categoria
}