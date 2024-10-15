const { DataTypes } = require("sequelize");

module.exports = (connect, DataTypes) => {
    const Reservation = connect.define('Reservation', {
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATEONLY,
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
        // state: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },

    },
        {
            timestamps: false,
        }
    )


    return Reservation
}