const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_drink_db", "root", undefined, {
  host: 'localhost',
  dialect: 'mysql',
}) 

module.exports = sequelize;