const { DataTypes } = require("sequelize");
const sequelize = require('.');

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  phone: DataTypes.STRING,
  apiKey: DataTypes.STRING,
  password: DataTypes.STRING,
  is_admin: DataTypes.BOOLEAN
},
  {
    timestamps: true,
    paranoid: true
  }
)

module.exports = User;






