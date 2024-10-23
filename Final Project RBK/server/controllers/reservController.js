const db = require("../orm/Models/index.js")
const { Op } = require('sequelize'); //calling the Sequelize Operators

//function for adding a new Reservation in database
const addReservation = async (req, res) => {
    const { startDate, endDate, userId, houseId } = req.body;


    if (!startDate || !endDate || !userId || !houseId) {
        console.log(startDate, endDate, userId, houseId);

        return res.status(400).json({ message: 'All fields are required.' });
    }
    if (new Date(startDate) > new Date(endDate)) {
        return res.status(400).json({ message: 'Start date must be before end date.' });
    }


    try {
        // check if the user exist
        const user = await db.User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // check if house exist
        const house = await db.House.findByPk(houseId);
        if (!house) {
            return res.status(404).json({ message: 'House not found.' });
        }

        // check the disponibility of the house
        const existingReservation = await db.Reservation.findOne({
            where: {
                houseId: houseId,
                [Op.or]: [
                    {
                        startDate: {
                            [Op.between]: [startDate, endDate]
                        }
                    },
                    {
                        endDate: {
                            [Op.between]: [startDate, endDate]
                        }
                    },
                    {
                        startDate: {
                            [Op.lte]: startDate //less than or equal to
                        },
                        endDate: {
                            [Op.gte]: endDate // great than or equal to
                        }
                    }
                ]
            }
        });
        console.log(existingReservation);

        if (existingReservation) {
            return res.status(400).json({ message: 'House is not available for the selected dates.' });
        }

        // add reservation
        const newReservation = await db.Reservation.create({ startDate, endDate, userId, houseId });

        return res.status(201).json({
            message: 'Reservation created successfully.',
            reservation: newReservation
        });

    } catch (error) {
        console.error('Error creating reservation:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};


// function for deleting reservation *******/ NE FONCTIONNE PAS :( /*******
// const deleteReservation = async (req, res) => {
//     const reservationId = req.params.id;
//     const userId = req.user.id; // from the middleware of authentification 

//     try {
//         // Find reservation
//         const reservation = await db.Reservation.findByPk(reservationId);

//         if (!reservation) {
//             return res.status(404).json({ message: 'Reservation not found.' });
//         }

//         // deleting reservation
//         await reservation.destroy();

//         return res.status(200).json({ message: 'Reservation deleted successfully.' });
//     } catch (error) {
//         console.error('Error deleting reservation:', error);
//         return res.status(500).json({ message: 'Internal server error.' });
//     }
// };


//getting all Reservations
const getAllReserv = async (req, res) => {
    try {
        const result = await db.Reservation.findAll({})
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports = { addReservation, /*deleteReservation,*/ getAllReserv };