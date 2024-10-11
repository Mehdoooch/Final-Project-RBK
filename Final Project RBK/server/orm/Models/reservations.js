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