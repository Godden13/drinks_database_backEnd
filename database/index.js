const { Sequelize } = require("sequelize");
const { config } = require("dotenv");

config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  undefined,
  {
  host: process.env.DB_HOST,
  dialect: 'mysql',
}) 

module.exports = sequelize;