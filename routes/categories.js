const express = require("express");
const Categories = require("../database/categories");
const router = express.Router();

router.get("/", async (req, res) => {
  const category = await Categories.findAll();
  res.send(category);
});

router.post("/", async (req, res) => {
  const category = await Categories.create(req.body);
  res.send(category);
});

router.get("/:id", async (req, res) => {
  const category = await Categories.findByPk(req.params.id);
  res.send(category);
});

router.put("/:id", async (req, res) => {
  const { name, description } = req.body;
  if (name && description) {
    await Categories.update(req.body, { where: { id: req.params.id } });
    const category = await Categories.findByPk(req.params.id);
    res.send(category);
  }
  res.send({ message: "Validation Error" })
});

router.patch("/:id", async (req, res) => {
  await Categories.update(req.body, { where: { id: req.params.id } });
  const category = await Categories.findByPk(req.params.id);
  res.send(category);
});
router.delete("/:id", async (req, res) => {
  const category = await Categories.destroy({ where: { id: req.params.id } })
  res.send("Status: Success")
});

module.exports = router;
