const User = require("../database/users");

const authenticateKey = async function (req, res, next){
  const API_KEY = req.header('x-api-key');
  const user = await User.findOne({ where: { apiKey: API_KEY } });
  if(user) {
    next()
  } else{ 
    res.sendStatus(401)
  }
};
module.exports = authenticateKey;