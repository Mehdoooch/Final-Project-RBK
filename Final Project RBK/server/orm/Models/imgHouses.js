const { DataTypes } = require("sequelize");

module.exports = (connect, DataTypes) => {
    const ImgHouse = connect.define('ImgHouse', {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        houseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'houses',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
    }, {
        tableName: 'imghouses',
        timestamps: false,
    });

    ImgHouse.associate = (models) => {
        ImgHouse.belongsTo(models.House, {
            foreignKey: 'houseId',
            as: 'house',
        });
    };


return ImgHouse
}