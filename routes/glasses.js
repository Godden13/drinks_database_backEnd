const express = require("express");
const Glass = require("../database/glasses");
const router = express.Router();

router.get("/", async (req, res) => {
  const glass = await Glass.findAll();
  res.send(glass);
});

router.post("/", async (req, res) => {
  const glass = await Glass.create(req.body);
  res.send(glass);
});

router.get("/:id", async (req, res) => {
  const glass = await Glass.findByPk(req.params.id);
  res.send(glass);
});

router.put("/:id", async (req, res) => {
  const { name } = req.body;
  if (name) {
    await Glass.update(req.body, { where: { id: req.params.id } });
    const glass = await Glass.findByPk(req.params.id);
    res.send(glass);
  }
  res.send({ message: "Validation Error" })
});

router.patch("/:id", async (req, res) => {
  await Glass.update(req.body, { where: { id: req.params.id } });
  const glass = await Glass.findByPk(req.params.id);
  res.send(glass);
});
router.delete("/:id", async (req, res) => {
  const glass = await Glass.destroy({ where: { id: req.params.id } })
  res.send("Status: Success")
});

module.exports = router;
