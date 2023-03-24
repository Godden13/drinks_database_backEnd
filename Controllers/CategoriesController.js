const Categories = require("../database/categories");


const getCategory = async (req, res) => {
  const category = await Categories.findAll();
  res.send(category);
}

const postCategory = async (req, res) => {
  const category = await Categories.create(req.body);
  res.send(category);
}

const getOneCategory = async (req, res) => {
  const category = await Categories.findByPk(req.params.id);
  res.send(category);
}

const putCategory = async (req, res) => {
  const { name, description } = req.body;
  if (name && description) {
    await Categories.update(req.body, { where: { id: req.params.id } });
    const category = await Categories.findByPk(req.params.id);
    res.send(category);
  }
  res.send({ message: "Validation Error" })
}

const patchCategory = async (req, res) => {
  await Categories.update(req.body, { where: { id: req.params.id } });
  const category = await Categories.findByPk(req.params.id);
  res.send(category);
}

const deleteCategory = async (req, res) => {
  const category = await Categories.destroy({ where: { id: req.params.id } })
  res.send("Status: Success")
}

module.exports = {
  getCategory, 
  postCategory,
  getOneCategory,
  putCategory,
  patchCategory,
  deleteCategory
}
