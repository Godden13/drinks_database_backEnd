const User = require('../database/users');
const { verifyToken } = require('./jwt');

const authMiddleware = async (req, res, next) => {
  const authorisation = req.get('Authorization');
  // const token = authorisation?.split(" ").pop();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJlbWFpbCI6ImNocmlzc2dvZGRlbkBnbWFpbC5jb20ifSwiaWF0IjoxNjc5NDc5Mzk2LCJleHAiOjE2OTc2MjMzOTZ9.kRQix-5d1KFf3vu-7PU2P1xo9Tro6OZt8l7h6wyHlV0"

  console.log(token)
  if (token) {
    try {
      const { data } = verifyToken(token);
      const user = await User.findByPk(data.id);
      if (!user) return res.sendStatus(401);
      req.user = user;
      next();
    } catch (e) {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
};

module.exports = { authMiddleware }