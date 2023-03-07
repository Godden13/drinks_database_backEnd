const express = require("express");
const Ingredient = require("../database/ingredients");
const router = express.Router();

router.get("/", async (req, res) => {
  const ingredient = await Ingredient.findAll();
  res.send(ingredient);
});

router.post("/", async (req, res) => {
  const ingredient = await Ingredient.create(req.body);
  res.send(ingredient);
});

router.get("/:id", async (req, res) => {
  const ingredient = await Ingredient.findByPk(req.params.id);
  res.send(ingredient);
});

router.put("/:id", async (req, res) => {
  const { name, description } = req.body;
  if (name && description) {
    await Ingredient.update(req.body, { where: { id: req.params.id } });
    const ingredient = await Ingredient.findByPk(req.params.id);
    res.send(ingredient);
  }
  res.send({ message: "Validation Error" })
});

router.patch("/:id", async (req, res) => {
  await Ingredient.update(req.body, { where: { id: req.params.id } });
  const ingredient = await Ingredient.findByPk(req.params.id);
  res.send(ingredient);
});

router.delete("/:id", async (req, res) => {
  const ingredient = await Ingredient.destroy({ where: { id: req.params.id } })
  res.send("Status: Success")
});

module.exports = router;
