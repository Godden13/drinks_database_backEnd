var express = require('express');
const sequelize = require('../database');
var router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../database/users');
const { authMiddleware } = require('../services/auth');
const { signToken } = require('../services/jwt');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { emailAddress: username } });
  if (!user) {
    return res.sendStatus(401);
  }

  bcrypt.compare(password, user.password, function (err, result) {
    if (err) {
      return res.sendStatus(401);
    }

    if (result) {
      const token = signToken({id: user.id, email: user.emailAddress})
      res.send({user, token});
    }else {
      return res.sendStatus(401);
    }
  });
});

router.get("/current-user", authMiddleware,  (req, res) => {
  res.send(req.user);
});

sequelize.sync()

module.exports = router;
