// const Drink = require('../database/drinks');
// const User = require('../database/users');
// const { authMiddleware } = require('../services/auth');

const Drink = require("../database/drinks");
const User = require("../database/users");
const bcrypt = require("bcrypt");
const uuid = require('uuid');



const getUsers = async (req, res) => {
  const user = await User.findAll({ include: Drink });
  res.send(user);
}

const postUser = async (req, res) => {
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
}

const getOneUser = async (req, res) => {
  const user = await User.findByPk(req.params.id, { include: Drink });
  res.send(user);
}

const putUser =  async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  if (firstName && lastName && phone) {
    await User.update(req.body, { where: { id: req.params.id } });
    const user = await User.findByPk(req.params.id)
    res.send(user)
  }
  res.send({ message: "validation Error: Field Missing" })
}

const patchUser = async (req, res) => {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  await User.update(req.body, { where: { id: req.params.id } })
  const user = await User.findByPk(req.params.id)
  res.send(user)
}

const deleteUser = async (req, res) => {
  const user = await User.destroy({
    where: {
      id: req.params.id
    },
  });
  res.send("Success");
}

module.exports = {
  getUsers,
  postUser,
  getOneUser,
  putUser,
  patchUser,
  deleteUser
}
