const Glass = require("../database/glasses");

const getGlasses = async (req, res) => {
  const glass = await Glass.findAll();
  res.send(glass);
}

const postGlass = async (req, res) => {
  const glass = await Glass.create(req.body);
  res.send(glass);
}

const getOneGlass = async (req, res) => {
  const glass = await Glass.findByPk(req.params.id);
  res.send(glass);
}

const putGlass = async (req, res) => {
  const { name } = req.body;
  if (name) {
    await Glass.update(req.body, { where: { id: req.params.id } });
    const glass = await Glass.findByPk(req.params.id);
    res.send(glass);
  }
  res.send({ message: "Validation Error" })
}

const patchGlass = async (req, res) => {
  await Glass.update(req.body, { where: { id: req.params.id } });
  const glass = await Glass.findByPk(req.params.id);
  res.send(glass);
}

const deleteGlass = async (req, res) => {
  const glass = await Glass.destroy({ where: { id: req.params.id } })
  res.send("Status: Success")
}

module.exports = {
  getGlasses,
  postGlass,
  getOneGlass,
  putGlass,
  patchGlass,
  deleteGlass
}
