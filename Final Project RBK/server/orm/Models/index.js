const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const connect = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { host: process.env.DB_HOST, dialect: 'mysql' })

const db = {};
db.Sequelize = Sequelize;
db.connect = connect;



db.House = require('./houses.js')(connect, DataTypes)
db.User = require('./users.js')(connect, DataTypes)
db.Reservation = require('./reservations.js')(connect, DataTypes)
db.ImgHouse = require('./imgHouses.js')(connect, DataTypes)

// Setup associations
Object.keys(db).forEach(modelName => {

  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//connect.sync({ alter: true })
// connect.sync({ force: true })


connect.authenticate()

  .then(() => console.log("Sequelize database is connected successfully ;)"))
  .catch((error) => console.log(error))

//relation between table user && reservation
db.User.hasMany(db.Reservation, { foreignKey: 'userId', as: 'Reservations' });
db.Reservation.belongsTo(db.User, { foreignKey: 'userId', as: 'Users' })
//relation between table house && reservation
db.House.hasMany(db.Reservation, { foreignKey: 'houseId', as: 'Reservations' });
db.Reservation.belongsTo(db.House, { foreignKey: 'houseId', as: 'Houses' })

module.exports = db

