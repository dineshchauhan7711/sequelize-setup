
const { assets: { getFileURL } } = require('../helpers');
module.exports = (sequelize, Sequelize) => {
     const User = sequelize.define('users', {
          id: {
               type: Sequelize.BIGINT.UNSIGNED,
               autoIncrement: true,
               allowNull: false,
               primaryKey: true,
          },
          first_name: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          last_name: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          email: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          password: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          profile_image: {
               type: Sequelize.STRING,
               allowNull: true,
               get() {
                    const rawValue = this.getDataValue('profile_image');
                    return rawValue ? getFileURL("profileImages", rawValue) : null;
               }
          },
          createdAt: {
               field: 'created_at',
               type: Sequelize.DATE,
               allowNull: false,
          },
          updatedAt: {
               field: 'updated_at',
               type: Sequelize.DATE,
               allowNull: false,
          },
          deletedAt: {
               field: 'deleted_at',
               type: Sequelize.DATE,
               allowNull: true,
          },
     },
          {
               tableName: 'users',
               paranoid: true
          });

     return User;
};
