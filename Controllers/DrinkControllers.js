const Drink = require("../database/drinks");


const getDrinks = async (req, res) => {
  const drink = await Drink.findAll();
  res.send(drink);
};

const postDrinks = async (req, res) => {
  const {name, description, recipe, imageUrl} = req.body;
  const drink = await Drink.create({...req.body, categoryIds: [1]});
  res.send(drink);
};

const getOneDrink = async (req, res) => {
  const drink = await Drink.findByPk(req.params.id);
  res.send(drink);
};

const putDrink = async (req, res) => {
  const { name, description, imageUrl, recipe } = req.body;
  if (name && description && imageUrl && recipe) {
    await Drink.update(req.body, { where: { id: req.params.id } });
    const drink = await Drink.findByPk(req.params.id);
    res.send(drink);
  }
  res.send({ message: "Validation Error" })
};

const patchDrink = async (req, res) => {
  await Drink.update(req.body, { where: { id: req.params.id } });
  const drink = await Drink.findByPk(req.params.id);
  res.send(drink);
};

const deleteDrink = async (req, res) => {
  const drink = await Drink.destroy({ where: { id: req.params.id } })
  res.send("Status: Success")
};

const filterDrinks = async (req, res) => {
  const drink = Drink.findAll({where: { category.id: req.params.id}})
}

module.exports = {
  getDrinks,
  postDrinks,
  getOneDrink,
  putDrink,
  patchDrink,
  deleteDrink
}