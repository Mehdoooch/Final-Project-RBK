const { Sequelize, DataTypes } = require("sequelize");
const config = require('../../database/config.json')

const connect = new Sequelize(config.database, config.user, config.password, { host: config.host, dialect: 'mysql' })

const db = {};
db.Sequelize = Sequelize;
db.connect = connect;

db.House = require('./houses.js')(connect, DataTypes)
db.User = require('./users.js')(connect, DataTypes)
db.Reservation = require('./reservations.js')(connect, DataTypes)
db.ImgHouse = require('./imgHouses.js')(connect, DataTypes)

//connect.sync({ alter: true })
//connect.sync({ force: true })
connect.authenticate()
  .then(() => console.log("Sequelize database is connected successfully ;)"))
  .catch((error) => console.log(error))

//relation between table user && reservation
db.User.hasMany(db.Reservation, { foreignKey: 'user_id', as: 'Reservations' });
db.Reservation.belongsTo(db.User, { foreignKey: 'user_id', as: 'Users' })

//relation between table house && reservation
db.House.hasMany(db.Reservation, { foreignKey: 'House_id', as: 'Reservations' });
db.Reservation.belongsTo(db.House, { foreignKey: 'House_id', as: 'Houses' })

//relation between table house && imgHouse
db.House.hasMany(db.ImgHouse, { foreignKey: 'House_id', as: 'Images' });
db.ImgHouse.belongsTo(db.House, { foreignKey: 'House_id', as: 'Houses' })

// //relation manyTomany between table user && house
// db.User.belongsToMany(db.House, { through: 'favoris' }); // 'favoris' is the junction table
// //db.House.belongsToMany(db.User, { through: 'favoris' });

module.exports = db
