const { DataTypes } = require("sequelize");

module.exports = (connect, DataTypes) => {
    const ImgHouse = connect.define('ImgHouse', {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
        {
            timestamps: false,
        }
    )
    return ImgHouse
}