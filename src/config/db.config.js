const Sequelize = require('sequelize');
const config = require('./config');

/***
 * Database Connection
 */
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

/***
 * Database Connection Test
 */
(async () => {
     try {
          await sequelize.authenticate();
          console.log('Database Connection has been established successfully.');
     } catch (error) {
          console.error('Unable to connect to the database:', error);
     }
})();


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/***
 * ===============  Models  ===============
 */
db.users = require("../models/user")(sequelize, Sequelize);







/***
 * =============== Association/Relationship ==============
 */







/***
 * =============== Database Sync ===============
 */
(async function (db) {
     try {
          await db.sequelize.sync({ alter: true });
     } catch (error) {
          console.log('Error when database sync ===:>> ', error);
     };
})(db);


module.exports = db;