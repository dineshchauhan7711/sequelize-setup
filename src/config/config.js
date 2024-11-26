require('dotenv').config();

module.exports = {
     database: {
          database: process.env.DB_DATABASE || 'dashboard',
          username: process.env.DB_USERNAME || 'root',
          password: process.env.DB_PASSWORD || '',
          host: process.env.DB_HOST || 'localhost',
          dialect: process.env.DB_DIALECT || 'mysql'
     },
     port: process.env.PORT || 3000,
     project_path: process.env.APP_PROJECT_PATH || 'http://localhost:3000',
     bcrypt_salt: process.env.BCRYPT_SALT || 10,
};
