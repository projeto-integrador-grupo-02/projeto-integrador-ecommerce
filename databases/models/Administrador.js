module.exports = (sequelize, DataTypes) => {
    const Administrador = sequelize.define('Administrador', 
        {
            id_admin: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncremente: true,
                allowNull: false
            },
            nome_admin: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            sobrenome_admin: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            email_admin: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            senha_admin: {
                type: DataTypes.STRING(255),
                allowNull: false
            }

        },
        {
            tableName: 'administradores',
            timestamps: false
        }
    )
    return Administrador
}