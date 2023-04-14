module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define(
        'Produto',
        {
            id_produto: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncremente: true,
                allowNull: false
            },
            id_categoria: {
                type: DataTypes.INTEGER
            },
            nome_produto: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            descricao:{
                type: DataTypes.TEXT
            },
            preco: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            quantidade: {
                type: DataTypes.INTEGER
            },
            disponivel: {
                type: DataTypes.BOOLEAN
            },
            imagem: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            tablename: 'produtos',
            timestamps: false
        }
    )
    return Produto
}