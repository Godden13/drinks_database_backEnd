const authAdmin = async (req, res, next) => {
  if(user.is_admin) {
    const user = await User.findByPk(data.id);
    next()
  }else {
    res.sendStatus(401);
  }
}