const { DataTypes } = require("sequelize");

module.exports = (connect, DataTypes) => {
    const House = connect.define('House', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region: {
            type: DataTypes.STRING,
            allowNull: false
        },
        localisation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surface: {
            type: DataTypes.STRING,
            allowNull: false
        },
        room: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },
        {
            tableName:'houses',
            timestamps: false,
        }
    );
    House.associate = (models) => {
        House.hasMany(models.ImgHouse, {
          foreignKey: 'houseId',
          as: 'images',
          onDelete: 'CASCADE',
        });
      };

    return House
}
