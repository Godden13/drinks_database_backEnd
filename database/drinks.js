const { DataTypes } = require('sequelize');
const sequelize = require('.');

const Drink = sequelize.define("drinks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  imageUrl: DataTypes.STRING,
  recipe: DataTypes.STRING,
  user_id: DataTypes.STRING,
  category_id: DataTypes.STRING,
  ingredient_id: DataTypes.STRING,
  glass_id: DataTypes.STRING,
  is_alcoholic: DataTypes.BOOLEAN
},
{
  paranoid: true,
  timestamps: true
})

module.exports = Drink;