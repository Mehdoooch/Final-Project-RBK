const { DataTypes } = require("sequelize");

module.exports = (connect, DataTypes) => {
    const User = connect.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
        {
            timestamps: false,
        }
    )
    return User
}