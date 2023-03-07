const { DataTypes } = require('sequelize');
const sequelize = require('.');

const Ingredient = sequelize.define('ingredients', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
},
  {
    timestamps: true,
    paranoid: true,
  });

module.exports = Ingredient;