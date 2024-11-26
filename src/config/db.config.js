const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, {
     host: config.database.host,
     dialect: config.database.dialect,
     operatorsAliases: 0,
     pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
     },
     logging: false,
});

const dbConnectTest = async () => {
     try {
          await sequelize.authenticate();
          console.log('Database Connection has been established successfully.');
     } catch (error) {
          console.error('Unable to connect to the database:', error);
     }
}
dbConnectTest()

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;