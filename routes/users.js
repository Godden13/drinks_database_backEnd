var express = require('express');
const Drink = require('../database/drinks');
const User = require('../database/users');
const bcrypt = require("bcrypt");
const { authMiddleware } = require('../services/auth');
const uuid = require('uuid');
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const user = await User.findAll({ include: Drink });
  res.send(user);
});

router.post("/", function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  bcrypt.hash(password, +process.env.SALT_ROUNDS, async function (err, hash) {
    if (err) {
      res.status(500).send(err)
    } else {
      const user = await User.create({
        firstName,
        lastName,
        emailAddress,
        phone,
        password: hash,
        apiKey: uuid.v4(),
        is_admin: false,
      });
      res.send(user);
    }
  })
})

router.get("/:id", async function (req, res) {
  const user = await User.findByPk(req.params.id, { include: Drink });
  res.send(user);
});

router.put("/:id", async function (req, res) {
  const { firstName, lastName, email, phone, password } = req.body;
  if (firstName && lastName && email && phone && password) {
    await User.update(req.body, { where: { id: req.params.id } });
    const user = await User.findByPk(req.params.id)
    res.send(user)
  }
  res.send({ message: "validation Error: Field Missing" })
})

router.patch("/:id", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  await User.update(req.body, { where: { id: req.params.id } })
  const user = await User.findByPk(req.params.id)
  res.send(user)
})

router.delete("/:id", async function (req, res) {
  const user = await User.destroy({
    where: {
      id: req.params.id
    },
  });
  res.send("Success");
});

module.exports = router;
