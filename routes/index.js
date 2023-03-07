var express = require('express');
const sequelize = require('../database');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

sequelize.sync()

module.exports = router;
