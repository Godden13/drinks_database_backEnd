const jwt = require("jsonwebtoken");

function signToken(data) {
  return jwt.sign(
    {
      data,
    },
    process.env.JWT_PRIVATE_KEY,
  )
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_PRIVATE_KEY);
}

module.exports = { signToken, verifyToken };