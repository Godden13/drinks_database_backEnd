const Ingredient = require("../database/ingredients");

const getIngredient = async (req, res) => {
  const ingredient = await Ingredient.findAll();
  res.send(ingredient);
}

const postIngredient = async (req, res) => {
  const ingredient = await Ingredient.create(req.body);
  res.send(ingredient);
}

const getOneIngredient = async (req, res) => {
  const ingredient = await Ingredient.findByPk(req.params.id);
  res.send(ingredient);
}

const putIngredient = async (req, res) => {
  const { name, description } = req.body;
  if (name && description) {
    await Ingredient.update(req.body, { where: { id: req.params.id } });
    const ingredient = await Ingredient.findByPk(req.params.id);
    res.send(ingredient);
  }
  res.send({ message: "Validation Error" })
}

const patchIngredient = async (req, res) => {
  await Ingredient.update(req.body, { where: { id: req.params.id } });
  const ingredient = await Ingredient.findByPk(req.params.id);
  res.send(ingredient);
}

const deleteIngredient = async (req, res) => {
  const ingredient = await Ingredient.destroy({ where: { id: req.params.id } })
  res.send("Status: Success")
}

module.exports = {
  getIngredient,
  postIngredient,
  getOneIngredient,
  putIngredient,
  patchIngredient,
  deleteIngredient
}
